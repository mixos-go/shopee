import * as crypto from 'crypto'
import {
  ShopeeCredentials,
  ShopeeEnvironment,
  ShopeeError,
  ShopeeErrorResponse,
  ShopeeRequestOptions,
  ShopeeRegion,
} from './types'
import { resolveHost } from './endpoints'

export type HttpMethod = 'GET' | 'POST'

/** Which identity fields participate in the sign base string. */
export type SignScope =
  | 'shop' // partner_id + path + timestamp + access_token + shop_id
  | 'merchant' // partner_id + path + timestamp + access_token + merchant_id
  | 'public' // partner_id + path + timestamp

/** Internal normalized request description for a generated API call. */
export interface ApiCallSpec {
  method: HttpMethod
  path: string
  /** Which params are sent as query string (besides the always-present common ones). */
  query: string[]
  /** Body params (JSON). */
  body: string[]
  /** Scope determines the sign base string and required identity. */
  scope: SignScope
  /** For merchant-scope calls. */
  merchantId?: string
}

function toTimestamp(value: number | string | Date | undefined): number {
  if (value === undefined) return Math.floor(Date.now() / 1000)
  if (value instanceof Date) return Math.floor(value.getTime() / 1000)
  if (typeof value === 'string' && !/^\d+$/.test(value)) {
    const t = Date.parse(value)
    if (!Number.isNaN(t)) return Math.floor(t / 1000)
  }
  return Math.floor(Number(value))
}

/**
 * Compute the Shopee v2 HMAC-SHA256 signature.
 *
 * Base string (concatenation, in order, no separators):
 *  - shop:     partner_id + api_path + timestamp + access_token + shop_id
 *  - merchant: partner_id + api_path + timestamp + access_token + merchant_id
 *  - public:   partner_id + api_path + timestamp
 *
 * Sign  = hex(HMAC-SHA256(partner_key, base_string))
 */
export function sign(
  credentials: ShopeeCredentials,
  path: string,
  timestamp: number,
  opts: { accessToken?: string; shopId?: number; merchantId?: string; scope?: SignScope } = {},
): string {
  const scope = opts.scope ?? 'shop'
  let base = `${credentials.partner_id}${path}${timestamp}`
  if (scope === 'shop' || scope === 'merchant') {
    base += opts.accessToken ?? ''
    if (scope === 'shop') base += opts.shopId ?? ''
    else base += opts.merchantId ?? ''
  }
  return crypto.createHmac('sha256', credentials.partner_key).update(base).digest('hex')
}

export interface ShopeeClientConfig {
  credentials: ShopeeCredentials
  environment?: ShopeeEnvironment
  region?: ShopeeRegion | string
  /** Default access_token / shop_id applied to every call unless overridden. */
  accessToken?: string
  shopId?: number
  /** Custom fetch impl (defaults to globalThis.fetch). */
  fetch?: typeof fetch
  /** Response ttl in ms until throwing on non-2xx (default false). */
  throwOnHttpError?: boolean
}

/**
 * Low-level HTTP client for the Shopee Open Platform API v2.
 *
 * Handles endpoint resolution, HMAC-SHA256 signing, common-parameter
 * injection and JSON (un)wrapping. Category clients and generated per-API
 * methods are built on top of this.
 */
export class ShopeeClient {
  readonly environment: ShopeeEnvironment
  readonly region: ShopeeRegion | string
  private readonly credentials: ShopeeCredentials
  private readonly defaults: { accessToken?: string; shopId?: number }
  private readonly fetchImpl: typeof fetch
  private readonly throwOnHttpError: boolean

  constructor(cfg: ShopeeClientConfig) {
    this.credentials = cfg.credentials
    this.environment = cfg.environment ?? 'live'
    this.region = cfg.region ?? 'GLOBAL'
    this.defaults = { accessToken: cfg.accessToken, shopId: cfg.shopId }
    this.fetchImpl = cfg.fetch ?? (globalThis as any).fetch
    this.throwOnHttpError = cfg.throwOnHttpError ?? false
    if (typeof this.fetchImpl !== 'function') {
      throw new Error(
        'Fetch is not available. Use Node 18+ or supply a `fetch` implementation in the client config.',
      )
    }
  }

  private now(): number {
    return Math.floor(Date.now() / 1000)
  }

  /** Resolve the full endpoint URL (host + path) for env/region. */
  endpoint(path: string): string {
    return resolveHost(this.environment, this.region) + path
  }

  /**
   * Perform a signed request.
   *
   * @param spec        The generated API call specification.
   * @param params      Flat map of the API's own request parameters. Which keys
   *                    are treated as query vs body is governed by `spec`.
   * @param opts        Per-call overrides (region, environment, tokens, ...).
   */
  async request(
    spec: ApiCallSpec,
    params: Record<string, unknown>,
    opts: ShopeeRequestOptions = {},
  ): Promise<any> {
    const environment = opts.environment ?? this.environment
    const region = (opts.region ?? this.region).toUpperCase() as ShopeeRegion
    const host = resolveHost(environment, region)

    const accessToken = opts.access_token ?? this.defaults.accessToken
    const shopId = opts.shop_id ?? this.defaults.shopId
    const timestamp = toTimestamp(opts.timestamp) ?? this.now()

    const signature = sign(this.credentials, spec.path, timestamp, {
      accessToken,
      shopId,
      scope: spec.scope,
      merchantId: spec.merchantId,
    })

    const common: Record<string, string | number> = {
      partner_id: this.credentials.partner_id,
      timestamp,
      sign: signature,
    }
    if (accessToken !== undefined) common.access_token = accessToken
    if (spec.scope === 'shop' && shopId !== undefined) common.shop_id = shopId

    const q = new URLSearchParams()
    for (const k of Object.keys(common)) q.set(k, String(common[k]))
    for (const k of spec.query) {
      const v = params[k]
      if (v !== undefined && v !== null) q.set(k, String(v))
    }
    for (const k of Object.keys(opts.query ?? {})) {
      const v = opts.query![k]
      if (v !== undefined && v !== null) q.set(k, String(v))
    }

    const url = `${host}${spec.path}?${q.toString()}`

    const body: Record<string, unknown> = {}
    for (const k of spec.body) {
      const v = params[k]
      if (v !== undefined) body[k] = v
    }

    const init: RequestInit = {
      method: spec.method,
      headers: { 'Content-Type': 'application/json' },
      signal: opts.signal,
    }
    if (spec.method === 'POST' && Object.keys(body).length > 0) {
      init.body = JSON.stringify(body)
    }

    let res: Response
    try {
      res = await this.fetchImpl(url, init)
    } catch (e: any) {
      throw new ShopeeError(`Network error: ${e?.message ?? e}`, { body: e })
    }

    const text = await res.text()
    let json: any
    try {
      json = text ? JSON.parse(text) : null
    } catch {
      json = { error: 'invalid_json', message: text }
    }

    if (!res.ok && this.throwOnHttpError) {
      throw new ShopeeError(json?.message || `HTTP ${res.status}`, {
        error: json?.error,
        requestId: json?.request_id,
        status: res.status,
        body: json,
      })
    }

    const errBody = json as ShopeeErrorResponse | null
    if (errBody && errBody.error) {
      throw new ShopeeError(errBody.message || errBody.error, {
        error: errBody.error,
        requestId: errBody.request_id,
        status: res.status,
        body: json,
      })
    }

    return json
  }
}
