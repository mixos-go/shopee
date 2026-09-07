import * as crypto from 'crypto'
import { ShopeeCredentials, ShopeeEnvironment, ShopeeRegion } from './types'
import { resolveHost } from './endpoints'
import { SignScope } from './client'

function ts(): number {
  return Math.floor(Date.now() / 1000)
}

/**
 * Build a Shopee OAuth authorization URL for the shop-level authorization flow.
 *
 * After the seller grants access, they are redirected back with a `code` and
 * `shop_id`, which you exchange for an access_token via
 * `public.getAccessToken({ code, shop_id, partner_id })`.
 *
 * @param redirectUrl Encoded redirect URL of your app.
 * @param scope       Identity scope. Defaults to `shop` (shop-level auth).
 */
export function buildAuthUrl(
  credentials: ShopeeCredentials,
  redirectUrl: string,
  opts: {
    environment?: ShopeeEnvironment
    region?: ShopeeRegion | string
    scope?: SignScope
    merchantId?: string
    codeChallenge?: string
  } = {},
): string {
  const environment = opts.environment ?? 'live'
  const region = opts.region ?? 'GLOBAL'
  const path = opts.scope === 'merchant' ? '/api/v2/merchant/auth_partner' : '/api/v2/shop/auth_partner'
  const timestamp = ts()
  const signature = signPublic(credentials, path, timestamp)

  const q = new URLSearchParams({
    partner_id: String(credentials.partner_id),
    timestamp: String(timestamp),
    sign: signature,
    redirect: redirectUrl,
  })
  if (opts.codeChallenge) q.set('code_challenge', opts.codeChallenge)

  return `${resolveHost(environment, region)}${path}?${q.toString()}`
}

/** Public-API style signature: partner_id + path + timestamp. */
function signPublic(credentials: ShopeeCredentials, path: string, timestamp: number): string {
  const base = `${credentials.partner_id}${path}${timestamp}`
  return crypto.createHmac('sha256', credentials.partner_key).update(base).digest('hex')
}

/**
 * Verify an incoming Shopee push (callback) webhook signature.
 *
 * Shopee signs push payloads with:
 * `signature = hex(HMAC-SHA256(partner_key, url + '|' + request_body))`.
 *
 * @returns true when the computed signature matches the `Authorization` header.
 */
export function verifyPushSignature(
  partnerKey: string,
  url: string,
  requestBody: string,
  authorizationHeader: string,
): boolean {
  const base = `${url}|${requestBody}`
  const computed = crypto.createHmac('sha256', partnerKey).update(base).digest('hex')
  return safeEqual(computed, authorizationHeader.trim())
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ba.length !== bb.length) return false
  return crypto.timingSafeEqual(ba, bb)
}
