# TODO — Shopee SDK (connector + OAuth)

Urutan fase wajib diikuti (fase N butuh fase N-1 selesai). Dalam satu fase, task boleh paralel
selama tidak menyentuh file yang sama. Setiap task = 1 PR.

Status: `[ ]` belum, `[~]` in progress, `[x]` selesai & merged.

> **Contract connector SERAGAM** (dipakai identik di SDK Shopee/TTS/Lazada/Blibli — hanya detail
> internal platform yang beda). Jangan ubah bentuk/struktur contract tanpa persetujuan bersama:
> folder, interface `TokenStore`, tipe `TokenSet`, dan kelas connector harus sama persis antar repo.

---

## Kontrak seragam connector (multi-seller)

Folder yang harus ada (bentuk sama di semua repo):

```
sdk/src/connector/
├── types.ts        <- TokenSet, ConnectorConfig, token + shop identifier
├── token-store.ts  <- interface TokenStore + InMemoryTokenStore
├── connector.ts    <- class <Platform>Connector (multi-seller) + auto-refresh
└── index.ts        <- create<Platform>Connector(config) factory
```

### `types.ts`

```ts
// Token pasangan + metadata masa berlaku, per shop/seller.
interface TokenSet {
  accessToken: string
  refreshToken?: string
  /** epoch ms saat token kedaluwarsa (dari expires_in platform saat diperoleh). */
  expiresAt?: number
  /** field tambahan spesifik platform (mis. shopId, shopCipher, region). */
  [key: string]: unknown
}

interface ConnectorConfig {
  credentials: /* tipe kredensial platform (mis. ShopeeCredentials) */
  redirectUri: string
  store?: TokenStore
  /** environment/region default + pilihan tambahan sesuai platform. */
  environment?: unknown
  scope?: string
}
```

### `token-store.ts`

```ts
// Abstraksi penyimpanan token, kunci = shop/seller id.
interface TokenStore {
  get(shopId: string): Promise<TokenSet | undefined> | TokenSet | undefined
  set(shopId: string, token: TokenSet): Promise<void> | void
  delete(shopId: string): Promise<void> | void
}

class InMemoryTokenStore implements TokenStore { /* Map<shopId, TokenSet> */ }
```

### `connector.ts`

Kelas `<Platform>Connector` **multi-seller** (satu instance, banyak shop):

- `buildAuthUrl(shopId, state?): string` — URL OAuth yang harus dikunjungi seller (per shop).
- `handleCallback(shopId, code): Promise<TokenSet>` — exchange code → token, simpan ke store.
- `refresh(shopId): Promise<TokenSet>` — refresh token sebelum/ketika kedaluwarsa, update store.
- `getClient(shopId): <Platform>Client` — client untuk shop tsb yang **auto-inject token** dan
  `auto-refresh` saat `expiresAt` mendekat; kalau token belum ada → lempar error yang jelas.
- `listShopIds(): string[]` — daftar shop yang sudah punya token di store.

### `index.ts`

`create<Platform>Connector(config: ConnectorConfig): <Platform>Connector`

---

## Fase 1 — Connector core (struktur + contract)

- [x] `connector/types.ts` — `TokenSet`, `ShopeeConnectorConfig` sesuai kontrak di atas; tambah field
      spesifik Shopee (`shopId` (number), `region` di `TokenSet`).
- [x] `connector/token-store.ts` — `interface TokenStore` + `InMemoryTokenStore` (dengan `keys()`).
- [x] `connector/connector.ts` — class `ShopeeConnector` (multi-seller):
  - `buildAuthUrl(shopId, state?)` → pakai `buildAuthUrl()` yang sudah ada di `src/auth.ts`;
    `shopId` & `state` disisipkan ke query redirect.
  - `handleCallback(shopId, code)` → exchange code via spec sendiri (token/get) karena generated
    `GetAccessTokenRequest` tidak punya `shop_id`, simpan `TokenSet` (access_token, refresh_token,
    expiresAt dari `expire_in`) ke store.
  - `refresh(shopId)` → `refreshAccessToken` via spec sendiri, update store (refresh_token single-use).
  - `getClient(shopId)` (async) → return `ShopeeClient` ter-inject accessToken+shopId. Async karena
    `TokenStore` bisa async; auto-refresh saat expiry menyusul di Fase 2.
  - `listShopIds()` — union dari `keys()` store + Set internal connector.
- [x] `connector/index.ts` — `createShopeeConnector(config)`.
- [x] Ekspor connector dari `src/index.ts` (`export * from './connector'`).

## Fase 2 — Token injection & auto-refresh runtime

Client saat ini set token sebagai `accessToken`/`shopId` statis (readonly) di `ShopeeClientConfig`.
Perlu mekanisme agar token bisa di-inject/refresh runtime per-request:

- [x] **Keputusan injection (dipilih b)**: `ShopeeClient` (src/client.ts) ditambah optional hook
      `beforeRequest` (dipanggil di awal tiap `request`) + method `updateToken(accessToken?, shopId?)`
      (field `defaults` diubah dari `private readonly` → mutable, di-replace via spread). Tidak
      merusak API eksisting (additif), `credentials`/`environment`/`region` tetap readonly.
- [x] Implement auto-refresh: `beforeRequest` bawaan connector mengecek `expiresAt` di store; bila
      `expiresAt - now < refreshThresholdMs` (default 5 mnt) → `refresh(shopId)` dulu lalu
      `client.updateToken(fresh.accessToken)`; kalau token tak ada → throw error jelas. Terverifikasi
      manual: 3 request paralel saat expiry mendekat → refresh hanya 1x, 3 call sukses, store ter-update.
- [x] Race / single-flight: `Map<shopId, Promise<TokenSet>>` `refreshing` + `.finally()` cleanup —
      request paralel memakai promise refresh yang sama (1x HTTP).

## Fase 3 — Multi-seller switch

- [ ] Pastikan `getClient(shopId)` untuk shop berbeda menghasilkan client dgn token sendiri-sendiri
      (tidak tercampur). Test isolasi antar shop.
- [ ] `buildAuthUrl` untuk shop baru (belum ada token) vs shop yang sudah connect harus konsisten.

## Fase 4 — Testing (connector)

- [ ] Unit test `TokenStore` (in-memory get/set/delete).
- [ ] Unit test `ShopeeConnector` pakai mock (tanpa hit API asli):
  - buildAuthUrl menghasilkan URL valid + `state`.
  - handleCallback → exchange code yang benar + token tersimpan (parse `expire_in` → `expiresAt`).
  - refresh → refresh_token baru dipakai, store ter-update.
  - auto-refresh saat `expiresAt` mendekat.
  - error path: token habis / belum ada → error jelas.
- [ ] Unit test isolasi multi-seller (2 shop, token tidak saling timpa).
- [ ] Smoke test connector (opsional, pakai kredensial sandbox bila tersedia).

## Fase 5 — Docs & release

- [ ] Update `sdk/README.md`: contoh OAuth flow multi-seller (connect shop → callback → refresh → call API).
- [ ] Update `SKILL.md` atau doc referensi jika perlu.
- [ ] Bump version + publish ke GitHub Packages.

---

## Catatan platform (mulai implement dari sini)

- Kredensial: `ShopeeCredentials { partner_id: number, partner_key: string }` (`src/types.ts`).
- Signing: `src/client.ts sign()` — base string `partner_id+path+timestamp+access_token+shop_id`
  (scope shop). Token otomatis masuk ke query + base string oleh client.
- OAuth sudah ada: `buildAuthUrl` (`src/auth.ts`), `publicApi.getAccessToken` + `publicApi.refreshAccessToken`
  (`src/generated/Public`). `access_token` expire ~4 jam, `refresh_token` 30 hari & **single-use**.
- `ShopeeClient.request(spec, params, opts)` menerima `opts.access_token`/`opts.shop_id` per-call
  → jalur bagus untuk auto-inject.
- Gap yang dilengkapi connector: tidak ada `TokenStore`, tidak ada expiry tracking, tidak ada
  auto-refresh, tidak ada multi-seller, token reader-tidak-berubah. Kontrak seragam di atas
  menutup semua gap ini.
