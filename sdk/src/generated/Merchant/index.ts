// AUTO-GENERATED from Shopee reference docs (references/api/Merchant).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface GetMerchantInfoRequest {}

export interface GetMerchantInfoResponse {
  "merchant_name"?: string,
  "is_cnsc"?: boolean,
  "request_id"?: string,
  "auth_time"?: number,
  "expire_time"?: number,
  "merchant_currency"?: string,
  "merchant_region"?: string,
  "is_upgraded_cbsc"?: boolean,
  "error"?: string,
  "message"?: string,
}
export interface GetMerchantPrepaidAccountListRequest {
  /** Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Example: 1 */
  "page_no": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. Min: 1 Max:10 Example: 10 */
  "page_size": number,
}
export interface GetMerchantPrepaidAccountListResponse {
  "error"?: string,
  "request_id"?: string,
  "response"?: {
    "list"?: Array<{
      "prepaid_account_check_man"?: string,
      "prepaid_account_courier_key"?: string,
      "prepaid_account_courier_name"?: string,
      "prepaid_account_id"?: number,
      "prepaid_account_is_default"?: boolean,
      "prepaid_account_partner_code"?: string,
      "prepaid_account_partner_id"?: string,
      "prepaid_account_partner_name"?: string,
      "prepaid_account_partner_net"?: string,
    }>,
    "more"?: boolean,
    "total"?: number,
  },
}
export interface GetMerchantWarehouseListRequest {
  "warehouse_type": number,
  "cursor"?: {
    "next_id"?: number,
    "page_size"?: number,
  },
}
export interface GetMerchantWarehouseListResponse {
  "error"?: null,
  "message"?: null,
  "request_id"?: string,
  "response"?: {
    "cursor": {
      "next_id"?: null,
      "page_size"?: number,
      "prev_id"?: null,
    },
    "total_count"?: number,
    "warehouse_list"?: Array<{
      "address": {
        "address"?: string,
        "address_name"?: string,
        "city"?: string,
        "district"?: string,
        "region"?: string,
        "state"?: string,
        "town"?: string,
        "zip_code"?: string,
      },
      "enterprise_info"?: null,
      "location_id"?: string,
      "warehouse_id"?: number,
      "warehouse_name"?: string,
      "warehouse_region"?: string,
      "warehouse_type"?: number,
    }>,
  },
}
export interface GetMerchantWarehouseLocationListRequest {}

export interface GetMerchantWarehouseLocationListResponse {
  "error"?: null,
  "message"?: null,
  "request_id"?: string,
  "response"?: Array<{
    "location_id"?: string,
    "warehouse_name"?: string,
  }>,
}
export interface GetShopListByMerchantRequest {
  /** Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Example: 1 */
  "page_no": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data.No more than 500. Example: 100 */
  "page_size": number,
}
export interface GetShopListByMerchantResponse {
  "request_id"?: string,
  "is_cnsc"?: boolean,
  "shop_list"?: Array<{
    "shop_id"?: number,
  }>,
  "more"?: boolean,
}
export interface GetWarehouseEligibleShopListRequest {
  "warehouse_id": number,
  "warehouse_type": number,
  "cursor"?: {
    "next_id"?: number,
    "page_size"?: number,
  },
}
export interface GetWarehouseEligibleShopListResponse {
  "error"?: null,
  "message"?: null,
  "request_id"?: string,
  "response"?: {
    "cursor": {
      "next_id"?: number,
      "page_size"?: number,
      "prev_id"?: null,
    },
    "shop_list"?: Array<{
      "shop_id"?: number,
      "shop_name"?: string,
    }>,
  },
}

export class ShopeeMerchantApi {
  constructor(private client: ShopeeClient) {}

  /**
   * get merchant info
   * /api/v2/merchant/get_merchant_info (GET)
   */
  async getMerchantInfo(params: GetMerchantInfoRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetMerchantInfoResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/merchant/get_merchant_info","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get merchant prepaid account list
   * /api/v2/merchant/get_merchant_prepaid_account_list (GET)
   */
  async getMerchantPrepaidAccountList(params: GetMerchantPrepaidAccountListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetMerchantPrepaidAccountListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/merchant/get_merchant_prepaid_account_list","query":["page_no","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get merchant warehouse list
   * /api/v2/merchant/get_merchant_warehouse_list (POST)
   */
  async getMerchantWarehouseList(params: GetMerchantWarehouseListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetMerchantWarehouseListResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/merchant/get_merchant_warehouse_list","query":[],"body":["warehouse_type","cursor"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get merchant warehouse location list
   * /api/v2/merchant/get_merchant_warehouse_location_list (GET)
   */
  async getMerchantWarehouseLocationList(params: GetMerchantWarehouseLocationListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetMerchantWarehouseLocationListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/merchant/get_merchant_warehouse_location_list","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shop list by merchant
   * /api/v2/merchant/get_shop_list_by_merchant (GET)
   */
  async getShopListByMerchant(params: GetShopListByMerchantRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopListByMerchantResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/merchant/get_shop_list_by_merchant","query":["page_no","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get warehouse eligible shop list
   * /api/v2/merchant/get_warehouse_eligible_shop_list (POST)
   */
  async getWarehouseEligibleShopList(params: GetWarehouseEligibleShopListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetWarehouseEligibleShopListResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/merchant/get_warehouse_eligible_shop_list","query":[],"body":["warehouse_id","warehouse_type","cursor"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
