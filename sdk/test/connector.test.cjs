'use strict'
const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const { createShopeeConnector, InMemoryTokenStore } = require('../dist/index')
const { ShopeeError } = require('../dist/types')
const { sign } = require('../dist/client')

const baseSpec = { method: 'GET', path: '/api/v2/product/get_item', query: [], body: [], scope: 'shop' }
const credentials = { partner_id: 123456, partner_key: 'secret' }
const redirectUri = 'https://app.example/cb'

function makeFetch(log) {
  return async (url, init) => {
    log.urls.push(String(url))
    const body = init && init.body ? JSON.parse(init.body) : {}
    if (String(url).includes('/auth/token/get')) {
      const tok = body.code === 'cB' ? 'atB' : 'atA'
      // Bentuk asli Shopee: FLAT (token di top-level, tanpa wrapper `response`).
      return { ok: true, status: 200, text: async () => JSON.stringify({ access_token: tok, refresh_token: 'rt-' + tok, expire_in: 14400, shop_id_list: [body.code === 'cB' ? 1002 : 1001], request_id: 'r', error: '', message: '' }) }
    }
    if (String(url).includes('/access_token/get')) {
      return { ok: true, status: 200, text: async () => JSON.stringify({ access_token: 'at2', refresh_token: 'rt2', expire_in: 14400, request_id: 'r', error: '', message: '' }) }
    }
    return { ok: true, status: 200, text: async () => JSON.stringify({ response: { ok: true }, error: null, request_id: 'r' }) }
  }
}

const around = (ms, win = 5000) => Math.abs(Date.now() - ms) < win

describe('sign (smoke, tidak regresi)', () => {
  it('deterministic & berbentuk sha256 hex; scope shop memasukkan access_token+shop_id', () => {
    const a = sign(credentials, '/api/v2/test', 123, { accessToken: 'at', shopId: 9 })
    const b = sign(credentials, '/api/v2/test', 123, { accessToken: 'at', shopId: 9 })
    assert.equal(a, b)
    assert.match(a, /^[0-9a-f]{64}$/)
    const noTok = sign(credentials, '/api/v2/test', 123)
    const withTok = sign(credentials, '/api/v2/test', 123, { accessToken: 'at', shopId: 9 })
    assert.notEqual(noTok, withTok)
  })
})

describe('InMemoryTokenStore', () => {
  it('get/set/delete/keys', () => {
    const s = new InMemoryTokenStore()
    assert.equal(s.get('s'), undefined)
    s.set('s', { accessToken: 'a' })
    assert.equal(s.get('s').accessToken, 'a')
    s.delete('s')
    assert.equal(s.get('s'), undefined)
    assert.deepEqual(s.keys(), [])
  })
})

describe('ShopeeConnector', () => {
  it('buildAuthUrl: partner_id/timestamp/sign + shop_id & state di query redirect', async () => {
    const log = { urls: [] }
    const c = createShopeeConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    const url = c.buildAuthUrl('1001', 'st1')
    assert.ok(url.includes('partner.shopeemobile.com/api/v2/shop/auth_partner'), url)
    assert.ok(url.includes('partner_id=123456'), url)
    assert.ok(url.includes('timestamp='), url)
    assert.ok(url.includes('sign='), url)
    assert.ok(url.includes('redirect='), url)
    assert.ok(url.includes('shop_id%3D1001'), url)
    assert.ok(url.includes('state%3Dst1'), url)
  })

  it('handleCallback: exchange code, simpan TokenSet, expiresAt = now + expire_in', async () => {
    const log = { urls: [] }
    const c = createShopeeConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    const token = await c.handleCallback('1001', 'cA')
    assert.equal(token.accessToken, 'atA')
    assert.equal(token.refreshToken, 'rt-atA')
    const expect = Date.now() + 14400 * 1000
    assert.ok(Math.abs((token.expiresAt || 0) - expect) < 10000, `expiresAt ${token.expiresAt} ≈ ${expect}`)
  })

  it('refresh: refresh_token baru dipakai, store ter-update (single-use)', async () => {
    const log = { urls: [] }
    const c = createShopeeConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    await c.handleCallback('1001', 'cA')
    const fresh = await c.refresh('1001')
    assert.equal(fresh.accessToken, 'at2')
    assert.equal(fresh.refreshToken, 'rt2')
    const again = await c.refresh('1001')
    assert.equal(again.accessToken, 'at2') // pakai refresh_token di store (rt2)
  })

  it('auto-refresh single-flight: 3 request paralel saat expiry mendekat → 1 refresh', async () => {
    const log = { urls: [] }
    const store = new InMemoryTokenStore()
    const c = createShopeeConnector({ credentials, redirectUri, store, fetch: makeFetch(log) })
    // Token hampir kedaluwarsa → beforeRequest memicu refresh.
    await c.handleCallback('1001', 'cA')
    store.set('1001', { accessToken: 'atA', refreshToken: 'rt-atA', expiresAt: Date.now() + 60000, shopId: 1001, region: 'GLOBAL' })
    log.urls.length = 0
    const client = await c.getClient('1001')
    const results = await Promise.all([
      client.request(baseSpec, {}),
      client.request(baseSpec, {}),
      client.request(baseSpec, {}),
    ])
    const refreshes = log.urls.filter((u) => u.includes('/access_token/get')).length
    const items = log.urls.filter((u) => u.includes('/get_item')).length
    assert.equal(refreshes, 1)
    assert.equal(items, 3)
    assert.equal(results.length, 3)
  })

  it('getClient untuk shop belum connect → error jelas', async () => {
    const c = createShopeeConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [] }) })
    await assert.rejects(() => c.getClient('9999'), (e) => e instanceof ShopeeError && /belum connect/.test(e.message))
  })

  it('refresh tanpa token → error jelas', async () => {
    const c = createShopeeConnector({ credentials, redirectUri, fetch: makeFetch({ urls: [] }) })
    await assert.rejects(() => c.refresh('9999'), (e) => e instanceof ShopeeError && /refresh_token/.test(e.message))
  })

  it('multi-seller isolation: 2 shop token tidak tercampur', async () => {
    const log = { urls: [] }
    const c = createShopeeConnector({ credentials, redirectUri, fetch: makeFetch(log) })
    await c.handleCallback('1001', 'cA')
    await c.handleCallback('1002', 'cB')
    log.urls.length = 0
    const c1 = await c.getClient('1001')
    const c2 = await c.getClient('1002')
    await c1.request(baseSpec, {})
    await c2.request(baseSpec, {})
    assert.ok(log.urls[0].includes('access_token=atA'), log.urls[0])
    assert.ok(log.urls[1].includes('access_token=atB'), log.urls[1])
    assert.deepEqual(c.listShopIds().sort(), ['1001', '1002'])
  })
})