import { ShopeeClient } from './client'
import {
  ShopeeCredentials,
  ShopeeEnvironment,
  ShopeeError,
  ShopeeRegion,
} from './types'
import * as generated from './generated'

export * from './types'
export * from './client'
export * from './endpoints'
export * from './auth'
export * from './connector'
export { ShopeeClient } from './client'
export { generated }

// Re-export every category client class for ergonomic imports.
export {
  ShopeeAMSApi,
  ShopeeAccountHealthApi,
  ShopeeAddOnDealApi,
  ShopeeAdsApi,
  ShopeeBrandPortalApi,
  ShopeeBundleDealApi,
  ShopeeDiscountApi,
  ShopeeFBSApi,
  ShopeeFirstMileApi,
  ShopeeFollowPrizeApi,
  ShopeeGlobalProductApi,
  ShopeeLivestreamApi,
  ShopeeLogisticsApi,
  ShopeeMediaApi,
  ShopeeMediaSpaceApi,
  ShopeeMerchantApi,
  ShopeeOrderApi,
  ShopeePaymentApi,
  ShopeeProductApi,
  ShopeePublicApi,
  ShopeePushApi,
  ShopeeReturnsApi,
  ShopeeSBSApi,
  ShopeeShopApi,
  ShopeeShopCategoryApi,
  ShopeeShopFlashSaleApi,
  ShopeeTopPicksApi,
  ShopeeVideoApi,
  ShopeeVoucherApi,
} from './generated'
import {
  ShopeeAMSApi,
  ShopeeAccountHealthApi,
  ShopeeAddOnDealApi,
  ShopeeAdsApi,
  ShopeeBrandPortalApi,
  ShopeeBundleDealApi,
  ShopeeDiscountApi,
  ShopeeFBSApi,
  ShopeeFirstMileApi,
  ShopeeFollowPrizeApi,
  ShopeeGlobalProductApi,
  ShopeeLivestreamApi,
  ShopeeLogisticsApi,
  ShopeeMediaApi,
  ShopeeMediaSpaceApi,
  ShopeeMerchantApi,
  ShopeeOrderApi,
  ShopeePaymentApi,
  ShopeeProductApi,
  ShopeePublicApi,
  ShopeePushApi,
  ShopeeReturnsApi,
  ShopeeSBSApi,
  ShopeeShopApi,
  ShopeeShopCategoryApi,
  ShopeeShopFlashSaleApi,
  ShopeeTopPicksApi,
  ShopeeVideoApi,
  ShopeeVoucherApi,
} from './generated'

export interface ShopeeOptions {
  credentials: ShopeeCredentials
  /** Default environment. Defaults to `live`. */
  environment?: ShopeeEnvironment
  /** Default region. Defaults to `GLOBAL`. */
  region?: ShopeeRegion | string
  /** Default access_token for shop-scoped calls. */
  accessToken?: string
  /** Default shop_id for shop-scoped calls. */
  shopId?: number
  /** Node 18+ native fetch is used by default; override for custom transport. */
  fetch?: typeof fetch
}

/**
 * `Shopee` is the main entry point. It wires a low-level `ShopeeClient` to all
 * 29 generated category APIs under typed sub-clients.
 *
 * @example
 * import { Shopee } from './index'
 *
 * const shopee = new Shopee({
 *   credentials: { partner_id: 2001887, partner_key: '...' },
 *   environment: 'sandbox',
 *   region: 'GLOBAL',
 *   accessToken: '...',
 *   shopId: 14701711,
 * })
 *
 * const res = await shopee.order.getOrderList({
 *   time_range_field: 'create_time',
 *   time_from: 1607235072,
 *   time_to: 1608271872,
 *   page_size: 20,
 * })
 */
export class Shopee {
  /** Low-level client (signing, endpoint resolution, request). */
  readonly client: ShopeeClient
  readonly options: ShopeeOptions

  readonly ams: ShopeeAMSApi
  readonly accountHealth: ShopeeAccountHealthApi
  readonly addOnDeal: ShopeeAddOnDealApi
  readonly ads: ShopeeAdsApi
  readonly brandPortal: ShopeeBrandPortalApi
  readonly bundleDeal: ShopeeBundleDealApi
  readonly discount: ShopeeDiscountApi
  readonly fbs: ShopeeFBSApi
  readonly firstMile: ShopeeFirstMileApi
  readonly followPrize: ShopeeFollowPrizeApi
  readonly globalProduct: ShopeeGlobalProductApi
  readonly livestream: ShopeeLivestreamApi
  readonly logistics: ShopeeLogisticsApi
  readonly media: ShopeeMediaApi
  readonly mediaSpace: ShopeeMediaSpaceApi
  readonly merchant: ShopeeMerchantApi
  readonly order: ShopeeOrderApi
  readonly payment: ShopeePaymentApi
  readonly product: ShopeeProductApi
  readonly publicApi: ShopeePublicApi
  readonly push: ShopeePushApi
  readonly returns: ShopeeReturnsApi
  readonly sbs: ShopeeSBSApi
  readonly shop: ShopeeShopApi
  readonly shopCategory: ShopeeShopCategoryApi
  readonly shopFlashSale: ShopeeShopFlashSaleApi
  readonly topPicks: ShopeeTopPicksApi
  readonly video: ShopeeVideoApi
  readonly voucher: ShopeeVoucherApi

  constructor(options: ShopeeOptions) {
    this.options = options
    const client = new ShopeeClient({
      credentials: options.credentials,
      environment: options.environment,
      region: options.region,
      accessToken: options.accessToken,
      shopId: options.shopId,
      fetch: options.fetch,
    })
    this.client = client

    this.ams = new ShopeeAMSApi(client)
    this.accountHealth = new ShopeeAccountHealthApi(client)
    this.addOnDeal = new ShopeeAddOnDealApi(client)
    this.ads = new ShopeeAdsApi(client)
    this.brandPortal = new ShopeeBrandPortalApi(client)
    this.bundleDeal = new ShopeeBundleDealApi(client)
    this.discount = new ShopeeDiscountApi(client)
    this.fbs = new ShopeeFBSApi(client)
    this.firstMile = new ShopeeFirstMileApi(client)
    this.followPrize = new ShopeeFollowPrizeApi(client)
    this.globalProduct = new ShopeeGlobalProductApi(client)
    this.livestream = new ShopeeLivestreamApi(client)
    this.logistics = new ShopeeLogisticsApi(client)
    this.media = new ShopeeMediaApi(client)
    this.mediaSpace = new ShopeeMediaSpaceApi(client)
    this.merchant = new ShopeeMerchantApi(client)
    this.order = new ShopeeOrderApi(client)
    this.payment = new ShopeePaymentApi(client)
    this.product = new ShopeeProductApi(client)
    this.publicApi = new ShopeePublicApi(client)
    this.push = new ShopeePushApi(client)
    this.returns = new ShopeeReturnsApi(client)
    this.sbs = new ShopeeSBSApi(client)
    this.shop = new ShopeeShopApi(client)
    this.shopCategory = new ShopeeShopCategoryApi(client)
    this.shopFlashSale = new ShopeeShopFlashSaleApi(client)
    this.topPicks = new ShopeeTopPicksApi(client)
    this.video = new ShopeeVideoApi(client)
    this.voucher = new ShopeeVoucherApi(client)
  }
}

export { ShopeeError }
