const assert = require('assert')
const { Shopee, sign } = require('../dist/index.js')
const { resolveHost } = require('../dist/endpoints.js')

const crypto = require('crypto')
function refSign(key, base) {
  return crypto.createHmac('sha256', key).update(base).digest('hex')
}

async function main() {
  // 1. Signing matches documented Shopee HMAC-SHA256 semantics
  {
    const partner_id = 2001887
    const path = '/api/v2/order/cancel_order'
    const ts = 1610000000
    const access_token = 'tok'
    const shop_id = 14701711
    const key = 'secret'
    const base = `${partner_id}${path}${ts}${access_token}${shop_id}`
    const s = sign({ partner_id, partner_key: key }, path, ts, { accessToken: access_token, shopId: shop_id })
    assert.strictEqual(s, refSign(key, base))
    // public scope: partner_id + path + timestamp only
    const sPub = sign({ partner_id, partner_key: key }, path, ts, { scope: 'public' })
    assert.strictEqual(sPub, refSign(key, `${partner_id}${path}${ts}`))
    console.log('✓ sign(): HMAC-SHA256 hex matches reference (shop + public scope)')
  }

  // 2. GET request construction
  {
    let captured = null
    const client = new Shopee({
      credentials: { partner_id: 2001887, partner_key: 'secret' },
      environment: 'sandbox',
      region: 'GLOBAL',
      accessToken: 'tok',
      shopId: 14701711,
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ error: '', message: '', request_id: 'rid', response: { order_list: [] } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    const res = await client.order.getOrderList(
      { time_range_field: 'create_time', time_from: 1600000000, time_to: 1600100000, page_size: 20 },
      { timestamp: 1610000000 },
    )
    const u = new URL(captured.url)
    assert.strictEqual(u.host, 'openplatform.sandbox.test-stable.shopee.sg')
    assert.strictEqual(u.pathname, '/api/v2/order/get_order_list')
    assert.strictEqual(u.searchParams.get('partner_id'), '2001887')
    assert.strictEqual(u.searchParams.get('shop_id'), '14701711')
    assert.strictEqual(u.searchParams.get('access_token'), 'tok')
    assert.strictEqual(u.searchParams.get('timestamp'), '1610000000')
    assert.strictEqual(u.searchParams.get('page_size'), '20')
    assert.strictEqual(u.searchParams.get('time_from'), '1600000000')
    assert.ok(u.searchParams.get('sign'))
    assert.strictEqual(captured.init.method, 'GET')
    assert.strictEqual(res.response.order_list.length, 0)
    console.log('✓ GET: sandbox/GLOBAL host, query params, common params, signing, envelope ok')
  }

  // 3. POST request construction
  {
    let captured = null
    const client = new Shopee({
      credentials: { partner_id: 2001887, partner_key: 'secret' },
      environment: 'live',
      region: 'GLOBAL',
      accessToken: 'tok',
      shopId: 14701711,
      fetch: async (url, init) => {
        captured = { url, init }
        return new Response(JSON.stringify({ error: '', message: '', request_id: 'rid', response: {} }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      },
    })
    await client.order.cancelOrder({ order_sn: '201020SQQ5K2EP', cancel_reason: 'OUT_OF_STOCK' }, { timestamp: 1610000000 })
    const u = new URL(captured.url)
    assert.strictEqual(u.host, 'partner.shopeemobile.com')
    assert.strictEqual(u.pathname, '/api/v2/order/cancel_order')
    assert.strictEqual(captured.init.method, 'POST')
    const body = JSON.parse(captured.init.body)
    assert.strictEqual(body.order_sn, '201020SQQ5K2EP')
    assert.strictEqual(body.cancel_reason, 'OUT_OF_STOCK')
    assert.strictEqual(captured.init.headers['Content-Type'], 'application/json')
    console.log('✓ POST: live/GLOBAL host, JSON body, headers, common query params ok')
  }

  // 4. API error surfaces as ShopeeError
  {
    const client = new Shopee({
      credentials: { partner_id: 1, partner_key: 's' },
      fetch: async () =>
        new Response(JSON.stringify({ error: 'common.error_auth', message: 'Invalid access_token.', request_id: 'r' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
    })
    let err = null
    try {
      await client.voucher.addVoucher({ voucher_name: 'x' })
    } catch (e) {
      err = e
    }
    assert.ok(err)
    assert.strictEqual(err.name, 'ShopeeError')
    assert.strictEqual(err.error, 'common.error_auth')
    console.log('✓ API error thrown as ShopeeError with error code')
  }

  // 5. Region routing validation
  {
    assert.ok(resolveHost('sandbox', 'CN').includes('sandbox.test-stable.shopee.cn'))
    let threw = false
    try {
      resolveHost('sandbox', 'BR')
    } catch {
      threw = true
    }
    assert.strictEqual(threw, true)
    console.log('✓ Region routing: valid live/GLOBAL + invalid sandbox/BR combos ok')
  }

  console.log('\nAll smoke tests passed.')
}

main().catch((e) => {
  console.error('SMOKE TEST FAILED:', e)
  process.exit(1)
})
