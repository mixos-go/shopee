# @mixos-go/shopee-sdk

TypeScript SDK untuk **Shopee Open Platform API v2** — mencakup **444 API** dalam
**29 kategori**, di-*generate* langsung dari doc reference repo ini
(`references/api/**`).

- HMAC-SHA256 signing otomatis (Shop / Merchant / Public scope)
- Routing region + environment (Live/Sandbox) per panggilan
- Inject parameter umum (`partner_id`, `timestamp`, `access_token`, `shop_id`, `sign`)
- Typed request/response per API (nested types dari official example)
- Zero dependency runtime (hanya TypeScript/devDep)

## Instalasi

```bash
# build SDK (jalankan dari folder sdk/)
cd sdk
npm install
npm run build
```

## Quick start

```ts
import { Shopee } from './index'

const shopee = new Shopee({
  credentials: { partner_id: 2001887, partner_key: 'YOUR_PARTNER_KEY' },
  environment: 'sandbox',   // 'live' | 'sandbox'
  region: 'GLOBAL',          // 'GLOBAL' | 'CN' | 'BR'
  accessToken: 'YOUR_ACCESS_TOKEN',
  shopId: 14701711,
})

// GET (query params)
const orders = await shopee.order.getOrderList({
  time_range_field: 'create_time',
  time_from: 1607235072,
  time_to: 1608271872,
  page_size: 20,
})
console.log(orders.response?.order_list)

// POST (json body)
await shopee.order.cancelOrder({
  order_sn: '201020SQQ5K2EP',
  cancel_reason: 'OUT_OF_STOCK',
})
```

Per-call override environment/region/token:

```ts
const res = await shopee.product.getItemBaseInfo(
  { item_id_list: [12345] },
  { region: 'BR', environment: 'live' },
)
```

## Alur otorisasi (access_token)

1. Generate URL authorisasi:

```ts
import { buildAuthUrl } from './auth'

const url = buildAuthUrl(
  { partner_id: 2001887, partner_key: '...' },
  'https://yourapp.com/callback',
  { environment: 'sandbox' },
)
// format: /api/v2/shop/auth_partner?partner_id=…&timestamp=…&sign=…&redirect=…
// arahkan seller ke `url`; redirect kembali dgn ?code=...&shop_id=...
```

2. Tukar `code` jadi token (di kategori `Public`):

```ts
const tok = await shopee.publicApi.getAccessToken({
  code: 'CODE_FROM_REDIRECT',
  partner_id: 2001887,
  shop_id: 14701711,
})
// refresh:
await shopee.publicApi.refreshAccessToken({ shop_id, refresh_token })
```

3. (Opsional) verifikasi push webhook:

```ts
import { verifyPushSignature } from './auth'
const ok = verifyPushSignature(partnerKey, url, rawBody, authorizationHeader)
```

## Connector multi-seller (OAuth + auto-refresh)

Untuk aplikasi yang mengelola **banyak shop sekaligus**, pakai `ShopeeConnector`
(`src/connector/`). Satu instance, token disimpan per `shopId` di `TokenStore`:

```ts
import { createShopeeConnector, InMemoryTokenStore } from './connector'

const connector = createShopeeConnector({
  credentials: { partner_id: 2001887, partner_key: 'YOUR_PARTNER_KEY' },
  redirectUri: 'https://yourapp.com/callback',
  environment: 'sandbox',
  store: new InMemoryTokenStore(), // ganti dgn persisten store (DB) utk production
})

// 1. Arahkan seller tiap shop ke URL authorize (shop_id & state di query redirect).
const url = connector.buildAuthUrl('14701711', 'csrf-state')
//    → https://partner.shopeemobile.com/api/v2/shop/auth_partner?...
//      ...&redirect=...%3Fshop_id%3D14701711%26state%3Dcsrf-state

// 2. Di callback: tukar code menjadi token (disimpan ke store otomatis).
const token = await connector.handleCallback('14701711', 'CODE_FROM_REDIRECT')
//    token = { accessToken, refreshToken, expiresAt }  (expire_in → expiresAt)

// 3. Panggil API: access_token + shop_id di-inject otomatis.
const client = await connector.getClient('14701711')
const orderList = await client.request(
  { method: 'GET', path: '/api/v2/order/get_order_list', query: [...], body: [], scope: 'shop' },
  { time_range_field: 'create_time', time_from: 1607235072, time_to: 1608271872 },
)

// 4. Auto-refresh: sebelum tiap request, bila `expiresAt` mendekat (< refreshThresholdMs,
//    default 5 mnt) token di-refresh otomatis (single-flight, refresh_token single-use
//    selalu ditimpa dgn yang baru). Tidak perlu kelola refresh manual.
//    Jalankan manual bila perlu:
await connector.refresh('14701711')

// 5. Daftar shop yang sudah connect:
connector.listShopIds() // ['14701711', ...]
```

Detail `TokenStore`: interface `{ get/set/delete }`; implementasikan sendiri untuk
persistensi. Auto-refresh memakai `refresh_token` terbaru di store — jangan hapus
`refreshToken` dari TokenSet hasil `handleCallback`/`refresh`.

## Kategori (29) & jumlah API

| Kategori | API | Kategori | API |
| --- | --- | --- | --- |
| AMS | 36 | Merchant | 6 |
| AccountHealth | 6 | Order | 22 |
| Add-On Deal | 14 | Payment | 18 |
| Ads | 25 | Product | 58 |
| BrandPortal | 11 | Public | 6 |
| Bundle Deal | 10 | Push | 4 |
| Discount | 12 | Returns | 15 |
| FBS | 4 | SBS | 6 |
| FirstMile | 16 | Shop | 9 |
| Follow Prize | 6 | ShopCategory | 7 |
| GlobalProduct | 34 | ShopFlashSale | 11 |
| Livestream | 25 | TopPicks | 4 |
| Logistics | 46 | Video | 15 |
| Media | 6 | Voucher | 6 |
| MediaSpace | 6 | | |

Akses per kategori lewat properti client: `shopee.order`, `shopee.product`,
`shopee.logistics`, `shopee.globalProduct`, dst.

## Signing

Base string dikonkatenasi tanpa separator, sesuai dokumentasi resmi Shopee:

| Scope | Base string |
| --- | --- |
| Shop | `partner_id + path + timestamp + access_token + shop_id` |
| Merchant | `partner_id + path + timestamp + access_token + merchant_id` |
| Public | `partner_id + path + timestamp` |

`sign = hex(HMAC-SHA256(partner_key, base_string))`. Implementasi ada di
`src/client.ts` (fungsi `sign`) dan bisa diuji dengan `npm run smoke`.

## Regenerasi dari doc

Kode di `src/generated/` dihasilkan dari `references/api/**/*.md`:

```bash
npm run generate
npm run build
```

Generator (`scripts/generate.cjs`) membaca frontmatter + tabel paramenter +
contoh JSON tiap doc, lalu memetakannya ke interface & metode TS.

## Struktur

```
sdk/
├── src/
│   ├── index.ts        # entri utama: Shopee client + semua kategori
│   ├── client.ts       # signer + request HTTP + endpoint resolution
│   ├── endpoints.ts    # host per environment/region
│   ├── auth.ts         # buildAuthUrl + verifyPushSignature
│   ├── types.ts        # tipe bersama
│   └── generated/      # 29 kategori, typed client + interface (auto)
├── scripts/
│   ├── generate.cjs    # generator dari references/api
│   └── smoke.cjs       # smoke test (signing, GET, POST, region, error)
├── package.json
└── tsconfig.json
```
