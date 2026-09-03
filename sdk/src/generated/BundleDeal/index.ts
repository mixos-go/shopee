// AUTO-GENERATED from Shopee reference docs (references/api/Bundle Deal).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddBundleDealRequest {
  "rule_type": number,
  "discount_value": number,
  "fix_price": number,
  "discount_percentage": number,
  "min_amount": number,
  "start_time": number,
  "end_time": number,
  "name": string,
  "purchase_limit": number,
  "additional_tiers"?: Array<{
    "min_amount"?: number,
    "fix_price"?: number,
    "discount_value"?: number,
    "discount_percentage"?: number,
  }>,
}
export interface AddBundleDealResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "bundle_deal_id"?: number,
  },
}
export interface AddBundleDealItemRequest {
  "bundle_deal_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "status"?: number,
  }>,
}
export interface AddBundleDealItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "failed_list"?: Array<{
      "item_id"?: number,
      "fail_error"?: string,
      "fail_message"?: string,
    }>,
    "success_list"?: Array<number>,
  },
}
export interface DeleteBundleDealRequest {
  "bundle_deal_id": number,
}
export interface DeleteBundleDealResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "bundle_deal_id"?: number,
  },
}
export interface DeleteBundleDealItemRequest {
  "bundle_deal_id": number,
  "item_list": Array<{
    "item_id"?: number,
  }>,
}
export interface DeleteBundleDealItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "failed_list"?: Array<{
      "item_id"?: number,
      "fail_error"?: string,
      "fail_message"?: string,
    }>,
    "success_list"?: Array<number>,
  },
}
export interface EndBundleDealRequest {
  "bundle_deal_id": number,
}
export interface EndBundleDealResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "bundle_deal_id"?: number,
  },
}
export interface GetBundleDealRequest {
  /** Shopee's unique identifier for a bundle deal activity. Example: 113891 */
  "bundle_deal_id": number,
}
export interface GetBundleDealResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "bundle_deal_id"?: number,
    "name"?: string,
    "start_time"?: number,
    "end_time"?: number,
    "bundle_deal_rule": {
      "rule_type"?: number,
      "discount_value"?: number,
      "fix_price"?: number,
      "discount_percentage"?: number,
      "min_amount"?: number,
      "additional_tiers": {
        "min_amount"?: number,
        "fix_price"?: number,
        "discount_value"?: number,
        "discount_percentage"?: number,
      },
    },
    "purchase_limit"?: number,
  },
}
export interface GetBundleDealItemRequest {
  /** Shopee's unique identifier for a bundle deal activity. Example: 113891 */
  "bundle_deal_id": number,
}
export interface GetBundleDealItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: null,
}
export interface GetBundleDealListRequest {
  /** Data paging, representing the data size of each page, the maximum is 1000, the default is 20 Example: 100 */
  "page_size"?: number,
  /** The Status of bundle deal，all=1；upcoming=2；ongoing=3，expired=4 , the default is 1 Example: 2 */
  "time_status"?: number,
  /** Data paging, represents the page number, starting from 1, the default is 1 Example: 1 */
  "page_no"?: number,
}
export interface GetBundleDealListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "bundle_deal_list"?: Array<{
      "bundle_deal_id"?: number,
      "name"?: string,
      "start_time"?: number,
      "end_time"?: number,
      "bundle_deal_rule": {
        "rule_type"?: number,
        "discount_value"?: number,
        "fix_price"?: number,
        "discount_percentage"?: number,
        "min_amount"?: number,
        "additional_tiers"?: Array<{
          "min_amount"?: number,
          "fix_price"?: number,
          "discount_value"?: number,
          "discount_percentage"?: number,
        }>,
      },
      "purchase_limit"?: number,
    }>,
    "more"?: boolean,
  },
}
export interface UpdateBundleDealRequest {
  "bundle_deal_id": number,
  "rule_type"?: number,
  "discount_value"?: number,
  "fix_price"?: number,
  "discount_percentage"?: number,
  "min_amount": number,
  "start_time"?: number,
  "end_time"?: number,
  "name"?: string,
  "purchase_limit"?: number,
}
export interface UpdateBundleDealResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "bundle_deal_id"?: number,
    "name"?: string,
    "start_time"?: number,
    "end_time"?: number,
    "bundle_deal_rule": {
      "rule_type"?: number,
      "discount_value"?: number,
      "fix_price"?: number,
      "discount_percentage"?: number,
      "min_amount"?: number,
    },
    "purchase_limit"?: number,
  },
}
export interface UpdateBundleDealItemRequest {
  "bundle_deal_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "status"?: number,
  }>,
}
export interface UpdateBundleDealItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "failed_list"?: Array<{
      "item_id"?: number,
      "fail_error"?: string,
      "fail_message"?: string,
    }>,
    "success_list"?: Array<number>,
  },
}

export class ShopeeBundleDealApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add bundle deal
   * /api/v2/bundle_deal/add_bundle_deal (POST)
   */
  async addBundleDeal(params: AddBundleDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddBundleDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/add_bundle_deal","query":[],"body":["rule_type","discount_value","fix_price","discount_percentage","min_amount","start_time","end_time","name","purchase_limit","additional_tiers"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * add bundle deal item
   * /api/v2/bundle_deal/add_bundle_deal_item (POST)
   */
  async addBundleDealItem(params: AddBundleDealItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddBundleDealItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/add_bundle_deal_item","query":[],"body":["bundle_deal_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete bundle deal
   * /api/v2/bundle_deal/delete_bundle_deal (POST)
   */
  async deleteBundleDeal(params: DeleteBundleDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteBundleDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/delete_bundle_deal","query":[],"body":["bundle_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete bundle deal item
   * /api/v2/bundle_deal/delete_bundle_deal_item (POST)
   */
  async deleteBundleDealItem(params: DeleteBundleDealItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteBundleDealItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/delete_bundle_deal_item","query":[],"body":["bundle_deal_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * end bundle deal
   * /api/v2/bundle_deal/end_bundle_deal (POST)
   */
  async endBundleDeal(params: EndBundleDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EndBundleDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/end_bundle_deal","query":[],"body":["bundle_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get bundle deal
   * /api/v2/bundle_deal/get_bundle_deal (GET)
   */
  async getBundleDeal(params: GetBundleDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetBundleDealResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/bundle_deal/get_bundle_deal","query":["bundle_deal_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get bundle deal item
   * /api/v2/bundle_deal/get_bundle_deal_item (GET)
   */
  async getBundleDealItem(params: GetBundleDealItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetBundleDealItemResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/bundle_deal/get_bundle_deal_item","query":["bundle_deal_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get bundle deal list
   * /api/v2/bundle_deal/get_bundle_deal_list (GET)
   */
  async getBundleDealList(params: GetBundleDealListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetBundleDealListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/bundle_deal/get_bundle_deal_list","query":["page_size","time_status","page_no"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update bundle deal
   * /api/v2/bundle_deal/update_bundle_deal (POST)
   */
  async updateBundleDeal(params: UpdateBundleDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateBundleDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/update_bundle_deal","query":[],"body":["bundle_deal_id","rule_type","discount_value","fix_price","discount_percentage","min_amount","start_time","end_time","name","purchase_limit"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update bundle deal item
   * /api/v2/bundle_deal/update_bundle_deal_item (POST)
   */
  async updateBundleDealItem(params: UpdateBundleDealItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateBundleDealItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/bundle_deal/update_bundle_deal_item","query":[],"body":["bundle_deal_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
