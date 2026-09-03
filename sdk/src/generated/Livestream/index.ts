// AUTO-GENERATED from Shopee reference docs (references/api/Livestream).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddItemListRequest {
  "session_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "shop_id"?: number,
  }>,
}
export interface AddItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface ApplyItemSetRequest {
  "session_id": number,
  "item_set_ids": Array<number>,
}
export interface ApplyItemSetResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface BanUserCommentRequest {
  "session_id": number,
  "ban_user_id": number,
}
export interface BanUserCommentResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface CreateSessionRequest {
  "title": string,
  "description"?: string,
  "cover_image_url": string,
  "is_test"?: boolean,
}
export interface CreateSessionResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "session_id"?: number,
  },
}
export interface DeleteItemListRequest {
  "session_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "shop_id"?: number,
  }>,
}
export interface DeleteItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface DeleteShowItemRequest {
  "session_id": number,
}
export interface DeleteShowItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface EndSessionRequest {
  "session_id": number,
}
export interface EndSessionResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface GetItemCountRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
}
export interface GetItemCountResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "item_count"?: number,
    "max_item_count"?: number,
  },
}
export interface GetItemListRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Example: 10 */
  "page_size": number,
}
export interface GetItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "more"?: boolean,
    "next_offset"?: number,
    "list"?: Array<{
      "item_no"?: number,
      "item_id"?: number,
      "shop_id"?: number,
      "name"?: string,
      "image_url"?: string,
      "price_info": {
        "currency"?: string,
        "current_price"?: number,
        "original_price"?: number,
      },
      "affiliate_info": {
        "commission_rate"?: number,
        "is_campaign"?: boolean,
        "campaign_mcn_name"?: string,
        "campaign_start_time"?: number,
        "campaign_end_time"?: number,
      },
    }>,
  },
}
export interface GetItemSetItemListRequest {
  /** The identifier of the item set. Example: 1 */
  "item_set_id": number,
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Example: 10 */
  "page_size": number,
}
export interface GetItemSetItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "more"?: boolean,
    "next_offset"?: number,
    "list"?: Array<{
      "item_id"?: number,
      "shop_id"?: number,
      "name"?: string,
      "image_url"?: string,
      "price_info": {
        "currency"?: string,
        "current_price"?: number,
        "original_price"?: number,
      },
      "affiliate_info": {
        "commission_rate"?: number,
        "is_campaign"?: boolean,
        "campaign_mcn_name"?: string,
        "campaign_start_time"?: number,
        "campaign_end_time"?: number,
      },
    }>,
  },
}
export interface GetItemSetListRequest {
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Example: 10 */
  "page_size": number,
  /** Search the item set with it's name matching the keyword. Example: set */
  "keyword"?: string,
}
export interface GetItemSetListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "more"?: boolean,
    "next_offset"?: number,
    "list"?: Array<{
      "item_set_id"?: number,
      "item_set_name"?: string,
      "item_count"?: number,
    }>,
  },
}
export interface GetLatestCommentListRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset"?: number,
}
export interface GetLatestCommentListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "next_offset"?: number,
    "list"?: Array<{
      "comment_id"?: number,
      "content"?: string,
      "timestamp"?: number,
      "user_id"?: number,
      "username"?: string,
    }>,
  },
}
export interface GetLikeItemListRequest {
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Example: 10 */
  "page_size": number,
  /** Search items with name matching this keyword. */
  "keyword"?: string,
}
export interface GetLikeItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "more"?: boolean,
    "next_offset"?: number,
    "list"?: Array<{
      "item_id"?: number,
      "shop_id"?: number,
      "name"?: string,
      "image_url"?: string,
      "price_info": {
        "currency"?: string,
        "current_price"?: number,
        "original_price"?: number,
      },
      "affiliate_info": {
        "commission_rate"?: number,
        "is_campaign"?: boolean,
        "campaign_mcn_name"?: string,
        "campaign_start_time"?: number,
        "campaign_end_time"?: number,
      },
    }>,
  },
}
export interface GetRecentItemListRequest {
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Example: 10 */
  "page_size": number,
}
export interface GetRecentItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "more"?: boolean,
    "next_offset"?: number,
    "list"?: Array<{
      "item_id"?: number,
      "shop_id"?: number,
      "name"?: string,
      "image_url"?: string,
      "price_info": {
        "currency"?: string,
        "current_price"?: number,
        "original_price"?: number,
      },
      "affiliate_info": {
        "commission_rate"?: number,
        "is_campaign"?: boolean,
        "campaign_mcn_name"?: string,
        "campaign_start_time"?: number,
        "campaign_end_time"?: number,
      },
    }>,
  },
}
export interface GetSessionDetailRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
}
export interface GetSessionDetailResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "session_id"?: number,
    "title"?: string,
    "description"?: string,
    "cover_image_url"?: string,
    "status"?: number,
    "share_url"?: string,
    "is_test"?: boolean,
    "create_time"?: number,
    "update_time"?: number,
    "start_time"?: number,
    "end_time"?: number,
    "stream_url_list": {
      "push_url"?: string,
      "push_key"?: string,
      "play_url"?: string,
      "domain_id"?: number,
    },
  },
}
export interface GetSessionItemMetricRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
  /** Specifies the starting entry of data to return in the current call. Default is 0, if data is more than one page, the offset can be some entry to start next call. Example: 0 */
  "offset": number,
  /** Each result set is returned as a page of entries. Use the "page_size" filters to control the maximum number of entries to retrieve per page (i.e., per call). This integer value is used to specify the maximum number of entries to return in a single "page" of data. The limit of page_size if between 1 and 100. Example: 10 */
  "page_size": number,
}
export interface GetSessionItemMetricResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "more"?: boolean,
    "next_offset"?: number,
    "list"?: Array<{
      "item": {
        "item_id"?: number,
        "shop_id"?: number,
        "name"?: string,
        "image_url"?: string,
        "price_info": {
          "currency"?: string,
          "current_price"?: number,
          "original_price"?: number,
        },
      },
      "metric": {
        "item_clicks"?: number,
        "atc"?: number,
        "sold_items"?: number,
      },
    }>,
  },
}
export interface GetSessionMetricRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
}
export interface GetSessionMetricResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "gmv"?: number,
    "atc"?: number,
    "ctr"?: number,
    "co"?: number,
    "orders"?: number,
    "ccu"?: number,
    "engage_ccu_1m"?: number,
    "peak_ccu"?: number,
    "likes"?: number,
    "comments"?: number,
    "shares"?: number,
    "views"?: number,
    "avg_viewing_duration"?: number,
  },
}
export interface GetShowItemRequest {
  /** The identifier of livestream session. Example: 6236215 */
  "session_id": number,
}
export interface GetShowItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "has_show_item"?: boolean,
    "item": {
      "item_no"?: number,
      "item_id"?: number,
      "shop_id"?: number,
      "name"?: string,
      "image_url"?: string,
      "price_info": {
        "currency"?: string,
        "current_price"?: number,
        "original_price"?: number,
      },
    },
  },
}
export interface PostCommentRequest {
  "session_id": number,
  "content": string,
}
export interface PostCommentResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface StartSessionRequest {
  "session_id": number,
  "domain_id": number,
}
export interface StartSessionResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface UnbanUserCommentRequest {
  "session_id": number,
  "unban_user_id": number,
}
export interface UnbanUserCommentResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface UpdateItemListRequest {
  "session_id": number,
  "item_list": Array<{
    "item_id"?: number,
    "shop_id"?: number,
  }>,
}
export interface UpdateItemListResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface UpdateSessionRequest {
  "session_id": number,
  "title": string,
  "description"?: string,
  "cover_image_url": string,
  "is_test": boolean,
}
export interface UpdateSessionResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface UpdateShowItemRequest {
  "session_id": number,
  "item_id": number,
  "shop_id": number,
}
export interface UpdateShowItemResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: Record<string, unknown>,
}
export interface UploadImageRequest {
  "image": string,
}
export interface UploadImageResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "image_url"?: string,
  },
}

export class ShopeeLivestreamApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add item list
   * /api/v2/livestream/add_item_list (POST)
   */
  async addItemList(params: AddItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddItemListResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/add_item_list","query":[],"body":["session_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * apply item set
   * /api/v2/livestream/apply_item_set (POST)
   */
  async applyItemSet(params: ApplyItemSetRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<ApplyItemSetResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/apply_item_set","query":[],"body":["session_id","item_set_ids"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * ban user comment
   * /api/v2/livestream/ban_user_comment (POST)
   */
  async banUserComment(params: BanUserCommentRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<BanUserCommentResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/ban_user_comment","query":[],"body":["session_id","ban_user_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * create session
   * /api/v2/livestream/create_session (POST)
   */
  async createSession(params: CreateSessionRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CreateSessionResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/create_session","query":[],"body":["title","description","cover_image_url","is_test"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete item list
   * /api/v2/livestream/delete_item_list (POST)
   */
  async deleteItemList(params: DeleteItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteItemListResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/delete_item_list","query":[],"body":["session_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete show item
   * /api/v2/livestream/delete_show_item (POST)
   */
  async deleteShowItem(params: DeleteShowItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteShowItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/delete_show_item","query":[],"body":["session_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * end session
   * /api/v2/livestream/end_session (POST)
   */
  async endSession(params: EndSessionRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EndSessionResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/end_session","query":[],"body":["session_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get item count
   * /api/v2/livestream/get_item_count (GET)
   */
  async getItemCount(params: GetItemCountRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetItemCountResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_item_count","query":["session_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get item list
   * /api/v2/livestream/get_item_list (GET)
   */
  async getItemList(params: GetItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetItemListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_item_list","query":["session_id","offset","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get item set item list
   * /api/v2/livestream/get_item_set_item_list (GET)
   */
  async getItemSetItemList(params: GetItemSetItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetItemSetItemListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_item_set_item_list","query":["item_set_id","offset","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get item set list
   * /api/v2/livestream/get_item_set_list (GET)
   */
  async getItemSetList(params: GetItemSetListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetItemSetListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_item_set_list","query":["offset","page_size","keyword"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get latest comment list
   * /api/v2/livestream/get_latest_comment_list (GET)
   */
  async getLatestCommentList(params: GetLatestCommentListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetLatestCommentListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_latest_comment_list","query":["session_id","offset"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get like item list
   * /api/v2/livestream/get_like_item_list (GET)
   */
  async getLikeItemList(params: GetLikeItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetLikeItemListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_like_item_list","query":["offset","page_size","keyword"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get recent item list
   * /api/v2/livestream/get_recent_item_list (GET)
   */
  async getRecentItemList(params: GetRecentItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetRecentItemListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_recent_item_list","query":["offset","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get session detail
   * /api/v2/livestream/get_session_detail (GET)
   */
  async getSessionDetail(params: GetSessionDetailRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetSessionDetailResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_session_detail","query":["session_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get session item metric
   * /api/v2/livestream/get_session_item_metric (GET)
   */
  async getSessionItemMetric(params: GetSessionItemMetricRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetSessionItemMetricResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_session_item_metric","query":["session_id","offset","page_size"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get session metric
   * /api/v2/livestream/get_session_metric (GET)
   */
  async getSessionMetric(params: GetSessionMetricRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetSessionMetricResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_session_metric","query":["session_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get show item
   * /api/v2/livestream/get_show_item (GET)
   */
  async getShowItem(params: GetShowItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShowItemResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/livestream/get_show_item","query":["session_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * post comment
   * /api/v2/livestream/post_comment (POST)
   */
  async postComment(params: PostCommentRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<PostCommentResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/post_comment","query":[],"body":["session_id","content"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * start session
   * /api/v2/livestream/start_session (POST)
   */
  async startSession(params: StartSessionRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<StartSessionResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/start_session","query":[],"body":["session_id","domain_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * unban user comment
   * /api/v2/livestream/unban_user_comment (POST)
   */
  async unbanUserComment(params: UnbanUserCommentRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UnbanUserCommentResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/unban_user_comment","query":[],"body":["session_id","unban_user_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update item list
   * /api/v2/livestream/update_item_list (POST)
   */
  async updateItemList(params: UpdateItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateItemListResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/update_item_list","query":[],"body":["session_id","item_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update session
   * /api/v2/livestream/update_session (POST)
   */
  async updateSession(params: UpdateSessionRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateSessionResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/update_session","query":[],"body":["session_id","title","description","cover_image_url","is_test"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update show item
   * /api/v2/livestream/update_show_item (POST)
   */
  async updateShowItem(params: UpdateShowItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateShowItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/update_show_item","query":[],"body":["session_id","item_id","shop_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upload image
   * /api/v2/livestream/upload_image (POST)
   */
  async uploadImage(params: UploadImageRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UploadImageResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/livestream/upload_image","query":[],"body":["image"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
