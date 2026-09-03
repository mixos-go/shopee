// AUTO-GENERATED from Shopee reference docs (references/api/Add-On Deal).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddAddOnDealRequest {
  "add_on_deal_name": string,
  "start_time": string,
  "end_time": string,
  "promotion_type": string,
  "purchase_min_spend"?: string,
  "per_gift_num"?: string,
  "promotion_purchase_limit"?: string,
}
export interface AddAddOnDealResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface AddAddOnDealMainItemRequest {
  "add_on_deal_id": number,
  "main_item_list": Array<{
    "status"?: number,
    "item_id"?: number,
  }>,
}
export interface AddAddOnDealMainItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "main_item_list"?: Array<{
      "item_id"?: number,
      "status"?: number,
    }>,
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface AddAddOnDealSubItemRequest {
  "sub_item_list": Array<{
    "status"?: number,
    "model_id"?: number,
    "item_id"?: number,
    "sub_item_input_price"?: number,
    "sub_item_limit"?: number,
  }>,
  "add_on_deal_id": number,
}
export interface AddAddOnDealSubItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
    "sub_item_list"?: Array<{
      "item_id"?: number,
      "model_id"?: number,
      "fail_message"?: string,
      "fail_error"?: string,
    }>,
  },
  "error"?: string,
}
export interface DeleteAddOnDealRequest {
  "add_on_deal_id": number,
}
export interface DeleteAddOnDealResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface DeleteAddOnDealMainItemRequest {
  "main_item_list": Array<number>,
  "add_on_deal_id": number,
}
export interface DeleteAddOnDealMainItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "main_item_list"?: Array<{
      "item_id"?: number,
    }>,
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface DeleteAddOnDealSubItemRequest {
  "sub_item_list": Array<{
    "model_id"?: number,
    "item_id"?: number,
  }>,
  "add_on_deal_id": number,
}
export interface DeleteAddOnDealSubItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
    "sub_item_list"?: Array<{
      "item_id"?: number,
      "model_id"?: number,
      "fail_message"?: string,
      "fail_error"?: string,
    }>,
  },
  "error"?: string,
}
export interface EndAddOnDealRequest {
  "add_on_deal_id": number,
}
export interface EndAddOnDealResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface GetAddOnDealRequest {
  /** Shopee's unique identifier for an add on deal activity. Example: 12069 */
  "add_on_deal_id": number,
}
export interface GetAddOnDealResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "start_time"?: number,
    "purchase_min_spend"?: number,
    "source"?: number,
    "add_on_deal_id"?: number,
    "promotion_purchase_limit"?: number,
    "end_time"?: number,
    "add_on_deal_name"?: string,
    "per_gift_num"?: number,
    "promotion_type"?: number,
    "sub_item_priority"?: unknown[],
  },
  "error"?: string,
}
export interface GetAddOnDealListRequest {
  /** The Status of add on deal，default status is all Example: all */
  "promotion_status": string,
  /** The default page number is 1 Example: 1 */
  "page_no"?: number,
  /** The default page size is 100 Example: 100 */
  "page_size"?: number,
}
export interface GetAddOnDealListResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_list"?: Array<{
      "start_time"?: number,
      "purchase_min_spend"?: string,
      "promotion_type"?: number,
      "source"?: number,
      "add_on_deal_id"?: number,
      "end_time"?: number,
      "add_on_deal_name"?: string,
      "per_gift_num"?: number,
      "promotion_purchase_limit"?: number,
      "sub_item_priority"?: unknown[],
    }>,
    "more"?: boolean,
  },
  "error"?: string,
}
export interface GetAddOnDealMainItemRequest {
  /** Shopee's unique identifier for add on deal activity. Example: 12069 */
  "add_on_deal_id": number,
}
export interface GetAddOnDealMainItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "main_item_list"?: Array<{
      "status"?: number,
      "item_id"?: number,
    }>,
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface GetAddOnDealSubItemRequest {
  /** Shopee's unique identifier for add on deal activity. Example: 12069 */
  "add_on_deal_id": number,
}
export interface GetAddOnDealSubItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
    "sub_item_list"?: Array<{
      "status"?: number,
      "item_id"?: number,
      "sub_item_limit"?: number,
      "price": {
        "promo_input_price"?: number,
        "promo_price"?: number,
      },
    }>,
  },
  "error"?: string,
}
export interface UpdateAddOnDealRequest {
  "add_on_deal_id": number,
  "add_on_deal_name"?: string,
  "sub_item_priority"?: unknown[],
  "sub_item_limit"?: number,
}
export interface UpdateAddOnDealResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "start_time"?: number,
    "purchase_min_spend"?: number,
    "source"?: number,
    "add_on_deal_id"?: number,
    "promotion_purchase_limit"?: number,
    "end_time"?: number,
    "add_on_deal_name"?: string,
    "per_gift_num"?: number,
    "promotion_type"?: number,
    "sub_item_priority"?: Array<number>,
  },
  "error"?: string,
}
export interface UpdateAddOnDealMainItemRequest {
  "add_on_deal_id": number,
  "main_item_list": Array<{
    "status"?: number,
    "item_id"?: number,
  }>,
}
export interface UpdateAddOnDealMainItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "main_item_list"?: Array<{
      "item_id"?: number,
      "status"?: number,
    }>,
    "add_on_deal_id"?: number,
  },
  "error"?: string,
}
export interface UpdateAddOnDealSubItemRequest {
  "add_on_deal_id": number,
  "sub_item_list": Array<{
    "status"?: number,
    "item_id"?: number,
    "sub_item_input_price"?: number,
    "sub_item_limit"?: number,
  }>,
}
export interface UpdateAddOnDealSubItemResponse {
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "add_on_deal_id"?: number,
    "sub_item_list"?: Array<{
      "status"?: number,
      "item_id"?: number,
      "sub_item_limit"?: number,
      "sub_item_input_price"?: number,
    }>,
  },
  "error"?: string,
}

export class ShopeeAddOnDealApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add add on deal
   * /api/v2/add_on_deal/add_add_on_deal (POST)
   */
  async addAddOnDeal(params: AddAddOnDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddAddOnDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/add_add_on_deal","query":[],"body":["add_on_deal_name","start_time","end_time","promotion_type","purchase_min_spend","per_gift_num","promotion_purchase_limit"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * add add on deal main item
   * /api/v2/add_on_deal/add_add_on_deal_main_item (POST)
   */
  async addAddOnDealMainItem(params: AddAddOnDealMainItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddAddOnDealMainItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/add_add_on_deal_main_item","query":[],"body":["add_on_deal_id","main_item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * add add on deal sub item
   * /api/v2/add_on_deal/add_add_on_deal_sub_item (POST)
   */
  async addAddOnDealSubItem(params: AddAddOnDealSubItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddAddOnDealSubItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/add_add_on_deal_sub_item","query":[],"body":["sub_item_list","add_on_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete add on deal
   * /api/v2/add_on_deal/delete_add_on_deal (POST)
   */
  async deleteAddOnDeal(params: DeleteAddOnDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteAddOnDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/delete_add_on_deal","query":[],"body":["add_on_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete add on deal main item
   * /api/v2/add_on_deal/delete_add_on_deal_main_item (POST)
   */
  async deleteAddOnDealMainItem(params: DeleteAddOnDealMainItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteAddOnDealMainItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/delete_add_on_deal_main_item","query":[],"body":["main_item_list","add_on_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete add on deal sub item
   * /api/v2/add_on_deal/delete_add_on_deal_sub_item (POST)
   */
  async deleteAddOnDealSubItem(params: DeleteAddOnDealSubItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteAddOnDealSubItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/delete_add_on_deal_sub_item","query":[],"body":["sub_item_list","add_on_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * end add on deal
   * /api/v2/add_on_deal/end_add_on_deal (POST)
   */
  async endAddOnDeal(params: EndAddOnDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EndAddOnDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/end_add_on_deal","query":[],"body":["add_on_deal_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get add on deal
   * /api/v2/add_on_deal/get_add_on_deal (GET)
   */
  async getAddOnDeal(params: GetAddOnDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAddOnDealResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/add_on_deal/get_add_on_deal","query":["add_on_deal_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get add on deal list
   * /api/v2/add_on_deal/get_add_on_deal_list (GET)
   */
  async getAddOnDealList(params: GetAddOnDealListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAddOnDealListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/add_on_deal/get_add_on_deal_list","query":["promotion_status","page_no","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get add on deal main item
   * /api/v2/add_on_deal/get_add_on_deal_main_item (GET)
   */
  async getAddOnDealMainItem(params: GetAddOnDealMainItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAddOnDealMainItemResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/add_on_deal/get_add_on_deal_main_item","query":["add_on_deal_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get add on deal sub item
   * /api/v2/add_on_deal/get_add_on_deal_sub_item (GET)
   */
  async getAddOnDealSubItem(params: GetAddOnDealSubItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAddOnDealSubItemResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/add_on_deal/get_add_on_deal_sub_item","query":["add_on_deal_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update add on deal
   * /api/v2/add_on_deal/update_add_on_deal (POST)
   */
  async updateAddOnDeal(params: UpdateAddOnDealRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateAddOnDealResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/update_add_on_deal","query":[],"body":["add_on_deal_id","add_on_deal_name","sub_item_priority","sub_item_limit"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update add on deal main item
   * /api/v2/add_on_deal/update_add_on_deal_main_item (POST)
   */
  async updateAddOnDealMainItem(params: UpdateAddOnDealMainItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateAddOnDealMainItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/update_add_on_deal_main_item","query":[],"body":["add_on_deal_id","main_item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update add on deal sub item
   * /api/v2/add_on_deal/update_add_on_deal_sub_item (POST)
   */
  async updateAddOnDealSubItem(params: UpdateAddOnDealSubItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateAddOnDealSubItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/add_on_deal/update_add_on_deal_sub_item","query":[],"body":["add_on_deal_id","sub_item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
