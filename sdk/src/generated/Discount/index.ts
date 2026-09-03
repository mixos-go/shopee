// AUTO-GENERATED from Shopee reference docs (references/api/Discount).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddDiscountRequest {
  "start_time": number,
  "end_time": number,
  "discount_name": string,
}
export interface AddDiscountResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_id"?: number,
  },
  "error"?: string,
}
export interface AddDiscountItemRequest {
  "discount_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "purchase_limit"?: number,
    "model_list"?: Array<{
      "model_id"?: number,
      "model_promotion_price"?: number,
    }>,
  }>,
}
export interface AddDiscountItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_id"?: number,
    "count"?: number,
    "error_list"?: unknown[],
    "warning"?: string,
  },
  "error"?: string,
}
export interface DeleteDiscountRequest {
  "discount_id": number,
}
export interface DeleteDiscountResponse {
  "message"?: string,
  "error"?: string,
  "response"?: {
    "discount_id"?: number,
    "modify_time"?: number,
  },
  "request_id"?: string,
}
export interface DeleteDiscountItemRequest {
  "discount_id": number,
  "item_id": number,
  "model_id"?: number,
}
export interface DeleteDiscountItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_id"?: number,
    "error_list"?: unknown[],
  },
  "error"?: string,
}
export interface DeleteSipDiscountRequest {
  "region": string,
}
export interface DeleteSipDiscountResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "region"?: string,
  },
}
export interface EndDiscountRequest {
  "discount_id": number,
}
export interface EndDiscountResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_id"?: number,
    "modify_time"?: number,
  },
}
export interface GetDiscountRequest {
  /** Shopee's unique identifier for a discount activity. Example: 1000029882 */
  "discount_id": number,
  /** Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Example: 1 */
  "page_no": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call), and the "page_no" to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. Example: 50 */
  "page_size": number,
}
export interface GetDiscountResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "status"?: string,
    "discount_name"?: string,
    "item_list"?: Array<{
      "item_id"?: number,
      "item_name"?: string,
      "normal_stock"?: number,
      "item_promotion_stock"?: number,
      "item_original_price"?: number,
      "item_promotion_price"?: number,
      "item_inflated_price_of_original_price"?: number,
      "item_inflated_price_of_promotion_price"?: number,
      "item_local_price"?: number,
      "item_local_promotion_price"?: number,
      "model_list"?: Array<{
        "model_id"?: number,
        "model_name"?: string,
        "model_normal_stock"?: number,
        "model_promotion_stock"?: number,
        "model_original_price"?: number,
        "model_promotion_price"?: number,
        "model_inflated_price_of_original_price"?: number,
        "model_inflated_price_of_promotion_price"?: number,
        "model_local_price"?: number,
        "model_local_promotion_price"?: number,
      }>,
      "purchase_limit"?: number,
    }>,
    "start_time"?: number,
    "discount_id"?: number,
    "end_time"?: number,
    "more"?: boolean,
  },
}
export interface GetDiscountListRequest {
  /** The status filter for retriveing discount list. Available value: upcoming/ongoing/expired/all. Example: ongoing */
  "discount_status": string,
  /** Specifies the page number of data to return in the current call. Starting from 1. if data is more than one page, the page_no can be some entry to start next call. Example: 1 */
  "page_no": number,
  /** If many items are available to retrieve, you may need to call GetDiscountsList multiple times to retrieve all the data. Each result set is returned as a page of entries. Use the Pagination filters to control the maximum number of entries (<= 100) to retrieve per page (i.e., per call), the offset number to start next call. This integer value is used to specify the maximum number of entries to return in a single "page" of data. Example: 100 */
  "page_size": number,
  /** The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the discount update time). The maximum date range that may be specified with the update_time_from and update_time_to fields is 30 days. Example: 1643860467 */
  "update_time_from"?: number,
  /** The update_time_from and update_time_to fields specify a date range for retrieving orders (based on the discount update time). The maximum date range that may be specified with the update_time_from and update_time_to fields is 30 days. Example: 1646020467 */
  "update_time_to"?: number,
}
export interface GetDiscountListResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_list"?: Array<{
      "status"?: string,
      "discount_name"?: string,
      "start_time"?: number,
      "discount_id"?: number,
      "source"?: number,
      "end_time"?: number,
    }>,
    "more"?: boolean,
  },
  "error"?: string,
}
export interface GetSipDiscountsRequest {
  /** The region of SIP affiliate shop that needs to get discount information. If do not pass, will return the discount information set for all SIP affiliate shops. Example: SG */
  "region"?: string,
}
export interface GetSipDiscountsResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_list"?: Array<{
      "create_time"?: number,
      "end_time"?: number,
      "region"?: string,
      "sip_discount_rate"?: number,
      "start_time"?: number,
      "status"?: string,
      "update_time"?: number,
    }>,
  },
}
export interface SetSipDiscountRequest {
  "region": string,
  "sip_discount_rate": number,
}
export interface SetSipDiscountResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "create_time"?: number,
    "end_time"?: number,
    "region"?: string,
    "sip_discount_rate"?: number,
    "start_time"?: number,
    "status"?: string,
    "update_time"?: number,
  },
}
export interface UpdateDiscountRequest {
  "discount_id": number,
  "start_time"?: number,
  "end_time"?: number,
  "discount_name"?: string,
}
export interface UpdateDiscountResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "discount_id"?: number,
    "modify_time"?: number,
  },
  "error"?: string,
}
export interface UpdateDiscountItemRequest {
  "discount_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "purchase_limit"?: number,
    "model_list"?: Array<{
      "model_id"?: number,
      "model_promotion_price"?: number,
    }>,
  }>,
}
export interface UpdateDiscountItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "warning"?: string,
  "response"?: {
    "discount_id"?: number,
    "count"?: number,
    "error_list"?: Array<{
      "item_id"?: number,
      "model_id"?: number,
      "fail_message"?: string,
      "fail_error"?: string,
    }>,
  },
}

export class ShopeeDiscountApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add discount
   * /api/v2/discount/add_discount (POST)
   */
  async addDiscount(params: AddDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddDiscountResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/add_discount","query":[],"body":["start_time","end_time","discount_name"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * add discount item
   * /api/v2/discount/add_discount_item (POST)
   */
  async addDiscountItem(params: AddDiscountItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddDiscountItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/add_discount_item","query":[],"body":["discount_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete discount
   * /api/v2/discount/delete_discount (POST)
   */
  async deleteDiscount(params: DeleteDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteDiscountResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/delete_discount","query":[],"body":["discount_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete discount item
   * /api/v2/discount/delete_discount_item (POST)
   */
  async deleteDiscountItem(params: DeleteDiscountItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteDiscountItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/delete_discount_item","query":[],"body":["discount_id","item_id","model_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete sip discount
   * /api/v2/discount/delete_sip_discount (POST)
   */
  async deleteSipDiscount(params: DeleteSipDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteSipDiscountResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/delete_sip_discount","query":[],"body":["region"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * end discount
   * /api/v2/discount/end_discount (POST)
   */
  async endDiscount(params: EndDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EndDiscountResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/end_discount","query":[],"body":["discount_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get discount
   * /api/v2/discount/get_discount (GET)
   */
  async getDiscount(params: GetDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetDiscountResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/discount/get_discount","query":["discount_id","page_no","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get discount list
   * /api/v2/discount/get_discount_list (GET)
   */
  async getDiscountList(params: GetDiscountListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetDiscountListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/discount/get_discount_list","query":["discount_status","page_no","page_size","update_time_from","update_time_to"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get sip discounts
   * /api/v2/discount/get_sip_discounts (GET)
   */
  async getSipDiscounts(params: GetSipDiscountsRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetSipDiscountsResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/discount/get_sip_discounts","query":["region"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * set sip discount
   * /api/v2/discount/set_sip_discount (POST)
   */
  async setSipDiscount(params: SetSipDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<SetSipDiscountResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/set_sip_discount","query":[],"body":["region","sip_discount_rate"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update discount
   * /api/v2/discount/update_discount (POST)
   */
  async updateDiscount(params: UpdateDiscountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateDiscountResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/update_discount","query":[],"body":["discount_id","start_time","end_time","discount_name"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update discount item
   * /api/v2/discount/update_discount_item (POST)
   */
  async updateDiscountItem(params: UpdateDiscountItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateDiscountItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/discount/update_discount_item","query":[],"body":["discount_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
