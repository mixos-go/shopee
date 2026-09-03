/**
 * Contoh penggunaan dasar SDK.
 *
 * Jalankan dengan:
 *   npm run build   # di folder sdk/
 *   node -e "require('./examples/basic.js')"  (setelah compile)
 *
 * Contoh ini TIDAK memanggil API sungguhan tanpa credentials valid.
 */
import { Shopee, buildAuthUrl } from '../src'

const partnerId = 2001887
const partnerKey = 'PASTE_YOUR_PARTNER_KEY'

const shopee = new Shopee({
  credentials: { partner_id: partnerId, partner_key: partnerKey },
  environment: 'sandbox',
  region: 'GLOBAL',
  accessToken: 'PASTE_ACCESS_TOKEN',
  shopId: 14701711,
})

async function main() {
  // 1. List shops milik partner (Public API, tanpa access_token)
  const shops = await shopee.publicApi.getShopsByPartner({
    page_size: 10,
    offset: 0,
    // untuk API public, client tidak menambahkan shop_id di base string negate
  })
  console.log('shops:', shops.response)

  // 2. Detail order (GET, query params)
  const detail = await shopee.order.getOrderList({
    time_range_field: 'create_time',
    time_from: Math.floor(Date.now() / 1000) - 3600,
    time_to: Math.floor(Date.now() / 1000),
    page_size: 10,
  })
  console.log('order count:', detail.response?.order_list?.length ?? 0)

  // 3. Buat URL authorisasi Shopee OAuth
  const authUrl = buildAuthUrl(
    { partner_id: partnerId, partner_key: partnerKey },
    'https://your-callback.example/callback',
    { environment: 'sandbox' },
  )
  console.log('auth url:', authUrl)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
