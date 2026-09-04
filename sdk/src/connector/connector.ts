import { buildAuthUrl } from '../auth'
import { ShopeeClient } from '../client'
import type { GetAccessTokenResponse, RefreshAccessTokenResponse } from '../generated/Public'
import { ShopeeApiResult, ShopeeCredentials, ShopeeEnvironment, ShopeeError, ShopeeRegion } from '../types'
import { InMemoryTokenStore, TokenStore } from './token-store'
import { ShopeeConnectorConfig, ShopeeConnectorScope, TokenSet } from './types'

const TOKEN_SPEC = {
  method: 'POST' as const,
  path: '/api/v2/auth/token/get',
  query: [],
  body: ['code', 'partner_id', 'shop_id'],
  scope: 'shop' as const,
}

const REFRESH_SPEC = {
  method: 'POST' as const,
  path: '/api/v2/auth/access_token/get',
  query: [],
  body: ['refresh_token', 'partner_id', 'shop_id'],
  scope: 'shop' as const,
}

/**
 * Multi-seller OAuth connector untuk Shopee Open Platform.
 *
 * Satu instance, banyak shop: token disimpan per `shopId` di `TokenStore`.
 * Access token Shopee expire ~4 jam dan refresh token 30 hari (single-use →
 * selalu simpan refresh_token baru hasil refresh).
 */
export class ShopeeConnector {
  readonly credentials: ShopeeCredentials
  readonly redirectUri: string
  readonly environment: ShopeeEnvironment
  readonly region: ShopeeRegion | string
  readonly scope: ShopeeConnectorScope
  readonly refreshThresholdMs: number

  private readonly store: TokenStore
  private readonly fetchImpl?: typeof fetch
  private readonly shopIds = new Set<string>()
  /** Single-flight refresh per shop: beberapa request paralel tidak refresh dobel. */
  private readonly refreshing = new Map<string, Promise<TokenSet>>()

  constructor(config: ShopeeConnectorConfig) {
    this.credentials = config.credentials
    this.redirectUri = config.redirectUri
    this.environment = config.environment ?? 'live'
    this.region = config.region ?? 'GLOBAL'
    this.scope = config.scope ?? 'shop'
    this.refreshThresholdMs = config.refreshThresholdMs ?? 5 * 60_000
    this.store = config.store ?? new InMemoryTokenStore()
    this.fetchImpl = config.fetch
  }

  /**
   * URL OAuth yang harus dikunjungi seller untuk authorize shop-nya.
   * `shopId` dan `state` (opsional) disisipkan ke query redirect, sehingga
   * callback bisa tahu shop mana yang baru saja authorize (Shopee mengembalikan
   * redirect URL beserta query-nya apa adanya + code + shop_id).
   */
  buildAuthUrl(shopId: string, state?: string): string {
    const redirect = new URL(this.redirectUri)
    redirect.searchParams.set('shop_id', shopId)
    if (state !== undefined) redirect.searchParams.set('state', state)
    return buildAuthUrl(this.credentials, redirect.toString(), {
      environment: this.environment,
      region: this.region,
      scope: this.scope,
    })
  }

  /** Exchange `code` hasil callback → token, simpan ke store, return TokenSet. */
  async handleCallback(shopId: string, code: string): Promise<TokenSet> {
    const token = await this.exchangeToken(code, shopId)
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }

  /** Refresh token untuk shop tertentu, update store (pakai refresh_token baru). */
  async refresh(shopId: string): Promise<TokenSet> {
    const current = await this.store.get(shopId)
    if (current === undefined || current.refreshToken === undefined) {
      throw new ShopeeError(`Shop ${shopId} belum punya refresh_token. Panggil handleCallback(shopId, code) dulu.`)
    }
    return this.refreshToken(current.refreshToken, current, shopId)
  }

  /**
   * Client untuk satu shop dengan access token + shop_id ter-inject.
   * Sebelum tiap request, `beforeRequest` mengecek `expiresAt`: bila mendekat
   * (< `refreshThresholdMs`) token di-refresh dulu (single-flight, pakai
   * refresh_token terbaru di store) lalu token baru di-inject ke client.
   */
  async getClient(shopId: string): Promise<ShopeeClient> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new ShopeeError(`Shop ${shopId} belum connect. Panggil handleCallback(shopId, code) dulu.`)
    }
    const client = new ShopeeClient({
      credentials: this.credentials,
      environment: this.environment,
      region: this.region,
      accessToken: token.accessToken,
      shopId: Number(shopId),
      fetch: this.fetchImpl,
      beforeRequest: () =>
        this.ensureFreshToken(shopId).then((fresh) => {
          client.updateToken(fresh.accessToken)
        }),
    })
    return client
  }

  /** Daftar shop yang sudah pernah connect (punya token di store). */
  listShopIds(): string[] {
    const store = this.store as { keys?: () => readonly string[] }
    const fromStore = store.keys ? store.keys() : []
    return Array.from(new Set([...fromStore, ...this.shopIds]))
  }

  private client(): ShopeeClient {
    return new ShopeeClient({
      credentials: this.credentials,
      environment: this.environment,
      region: this.region,
      fetch: this.fetchImpl,
    })
  }

  /** Token saat ini dari store; bila tak ada → error jelas. */
  private async ensureFreshToken(shopId: string): Promise<TokenSet> {
    const token = await this.store.get(shopId)
    if (token === undefined) {
      throw new ShopeeError(`Shop ${shopId} belum connect. Panggil handleCallback(shopId, code) dulu.`)
    }
    const expired =
      token.expiresAt !== undefined && token.expiresAt - Date.now() < this.refreshThresholdMs
    if (expired) return this.ensureFresh(shopId)
    return token
  }

  /** Auto-refresh single-flight per shop agar request paralel tak refresh dobel. */
  private ensureFresh(shopId: string): Promise<TokenSet> {
    const inFlight = this.refreshing.get(shopId)
    if (inFlight !== undefined) return inFlight
    const p = this.refresh(shopId).finally(() => {
      this.refreshing.delete(shopId)
    })
    this.refreshing.set(shopId, p)
    return p
  }

  private async exchangeToken(code: string, shopId: string): Promise<TokenSet> {
    const res = (await this.client().request(TOKEN_SPEC, {
      code,
      partner_id: this.credentials.partner_id,
      shop_id: Number(shopId),
    })) as ShopeeApiResult<GetAccessTokenResponse>

    const data = res.response
    if (data === undefined || data.access_token === undefined) {
      throw new ShopeeError('Token exchange gagal: response tidak berisi access_token', { body: res })
    }
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expire_in === undefined ? undefined : Date.now() + data.expire_in * 1000,
      shopId: Number(shopId),
      region: this.region,
    }
  }

  private async refreshToken(
    refreshToken: string,
    previous: TokenSet,
    shopId: string,
  ): Promise<TokenSet> {
    const res = (await this.client().request(REFRESH_SPEC, {
      refresh_token: refreshToken,
      partner_id: this.credentials.partner_id,
      shop_id: Number(shopId),
    })) as ShopeeApiResult<RefreshAccessTokenResponse>

    const data = res.response
    if (data === undefined || data.access_token === undefined) {
      throw new ShopeeError('Refresh gagal: response tidak berisi access_token', { body: res })
    }
    const token: TokenSet = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? previous.refreshToken,
      expiresAt: data.expire_in === undefined ? undefined : Date.now() + data.expire_in * 1000,
      shopId: Number(shopId),
      region: this.region,
    }
    await this.store.set(shopId, token)
    this.shopIds.add(shopId)
    return token
  }
}