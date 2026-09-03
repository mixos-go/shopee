// AUTO-GENERATED from Shopee reference docs (references/api/Public).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface GetAccessTokenRequest {
  "code": string,
  "partner_id": number,
}
export interface GetAccessTokenResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "shop_id_list"?: Array<number>,
  "access_token"?: string,
  "refresh_token"?: string,
  "expire_in"?: number,
}
export interface GetMerchantsByPartnerRequest {
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. Example: 1 */
  "page_size"?: number,
  /** Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Example: 1 */
  "page_no"?: number,
}
export interface GetMerchantsByPartnerResponse {
  "authed_merchant_list"?: Array<{
    "region"?: string,
    "merchant_id"?: number,
    "auth_time"?: number,
    "expire_time"?: number,
  }>,
  "request_id"?: string,
  "more"?: boolean,
}
export interface GetShopeeIpRangesRequest {}

export interface GetShopeeIpRangesResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "ip_list"?: Array<string>,
}
export interface GetShopsByPartnerRequest {
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. Example: 1 */
  "page_size"?: number,
  /** Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Example: 1 */
  "page_no"?: number,
}
export interface GetShopsByPartnerResponse {
  "authed_shop_list"?: Array<{
    "shop_id"?: number,
    "region"?: string,
    "sip_affi_shops"?: Array<{
      "affi_shop_id"?: number,
      "region"?: string,
    }>,
    "auth_time"?: number,
    "expire_time"?: number,
  }>,
  "request_id"?: string,
  "more"?: boolean,
}
export interface GetTokenByResendCodeRequest {
  "resend_code": string,
}
export interface GetTokenByResendCodeResponse {
  "request_id"?: string,
  "shop_id_list"?: Array<number>,
  "refresh_token"?: string,
  "access_token"?: string,
  "expire_in"?: number,
}
export interface RefreshAccessTokenRequest {
  "refresh_token": string,
  "partner_id": number,
  "shop_id"?: number,
}
export interface RefreshAccessTokenResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "partner_id"?: number,
  "shop_id"?: number,
  "access_token"?: string,
  "refresh_token"?: string,
  "expire_in"?: number,
}

export class ShopeePublicApi {
  constructor(private client: ShopeeClient) {}

  /**
   * get access token
   * /api/v2/auth/token/get (POST)
   */
  async getAccessToken(params: GetAccessTokenRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAccessTokenResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/auth/token/get","query":[],"body":["code","partner_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get merchants by partner
   * /api/v2/public/get_merchants_by_partner (GET)
   */
  async getMerchantsByPartner(params: GetMerchantsByPartnerRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetMerchantsByPartnerResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/public/get_merchants_by_partner","query":["page_size","page_no"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shopee ip ranges
   * /api/v2/public/get_shopee_ip_ranges (GET)
   */
  async getShopeeIpRanges(params: GetShopeeIpRangesRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopeeIpRangesResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/public/get_shopee_ip_ranges","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shops by partner
   * /api/v2/public/get_shops_by_partner (GET)
   */
  async getShopsByPartner(params: GetShopsByPartnerRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopsByPartnerResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/public/get_shops_by_partner","query":["page_size","page_no"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get token by resend code
   * /api/v2/public/get_token_by_resend_code (POST)
   */
  async getTokenByResendCode(params: GetTokenByResendCodeRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetTokenByResendCodeResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/public/get_token_by_resend_code","query":[],"body":["resend_code"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * refresh access token
   * /api/v2/auth/access_token/get (POST)
   */
  async refreshAccessToken(params: RefreshAccessTokenRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<RefreshAccessTokenResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/auth/access_token/get","query":[],"body":["refresh_token","partner_id","shop_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
