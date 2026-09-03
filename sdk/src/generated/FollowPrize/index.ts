// AUTO-GENERATED from Shopee reference docs (references/api/Follow Prize).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddFollowPrizeRequest {
  "follow_prize_name": string,
  "start_time": number,
  "end_time": number,
  "usage_quantity": number,
  "min_spend": number,
  "reward_type": number,
  "discount_amount"?: number,
}
export interface AddFollowPrizeResponse {
  "response"?: {
    "campagin_id"?: number,
  },
  "error"?: string,
  "request_id"?: string,
  "message"?: string,
}
export interface DeleteFollowPrizeRequest {
  "campagin_id"?: number,
}
export interface DeleteFollowPrizeResponse {
  "response"?: {
    "campaign_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface EndFollowPrizeRequest {
  "campaign_id": number,
}
export interface EndFollowPrizeResponse {
  "response"?: {
    "campaign_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface GetFollowPrizeDetailRequest {
  /** The unique identifier for the created follow prize. Example: 1551 */
  "campaign_id"?: number,
}
export interface GetFollowPrizeDetailResponse {
  "response"?: {
    "campaign_status"?: string,
    "campaign_id"?: number,
    "usage_quantity"?: number,
    "start_time"?: number,
    "end_time"?: number,
    "min_spend"?: number,
    "reward_type"?: number,
    "follow_prize_name"?: string,
    "percentage"?: number,
    "max_price"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface GetFollowPrizeListRequest {
  /** Specifies the page number of data to return in the current call. Default to be 1. Example: 1 */
  "page_no"?: number,
  /** Use the 'page_size' filters to control the maximum number of entries to retrieve per page (i.e., per call). Default to be 20 and allowed input is from 1- 100. Example: 100 */
  "page_size"?: number,
  /** The status filter for retrieving follow prize list. Available value: upcoming/ongoing/expired/all. Example: upcoming */
  "status": string,
}
export interface GetFollowPrizeListResponse {
  "response"?: {
    "more"?: boolean,
    "follow_prize_list"?: Array<{
      "campaign_id"?: number,
      "campaign_status"?: string,
      "follow_prize_name"?: string,
      "start_time"?: number,
      "end_time"?: number,
      "usage_quantity"?: number,
      "claimed"?: number,
    }>,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface UpdateFollowPrizeRequest {
  "follow_prize_name"?: string,
  "campaign_id": number,
  "start_time"?: number,
  "end_time"?: number,
  "usage_quantity"?: number,
  "min_spend"?: number,
}
export interface UpdateFollowPrizeResponse {
  "response"?: {
    "campaign_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}

export class ShopeeFollowPrizeApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add follow prize
   * /api/v2/follow_prize/add_follow_prize (POST)
   */
  async addFollowPrize(params: AddFollowPrizeRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddFollowPrizeResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/follow_prize/add_follow_prize","query":[],"body":["follow_prize_name","start_time","end_time","usage_quantity","min_spend","reward_type","discount_amount"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete follow prize
   * /api/v2/follow_prize/delete_follow_prize (POST)
   */
  async deleteFollowPrize(params: DeleteFollowPrizeRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteFollowPrizeResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/follow_prize/delete_follow_prize","query":[],"body":["campagin_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * end follow prize
   * /api/v2/follow_prize/end_follow_prize (POST)
   */
  async endFollowPrize(params: EndFollowPrizeRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EndFollowPrizeResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/follow_prize/end_follow_prize","query":[],"body":["campaign_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get follow prize detail
   * /api/v2/follow_prize/get_follow_prize_detail (GET)
   */
  async getFollowPrizeDetail(params: GetFollowPrizeDetailRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetFollowPrizeDetailResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/follow_prize/get_follow_prize_detail","query":["campaign_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get follow prize list
   * /api/v2/follow_prize/get_follow_prize_list (GET)
   */
  async getFollowPrizeList(params: GetFollowPrizeListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetFollowPrizeListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/follow_prize/get_follow_prize_list","query":["page_no","page_size","status"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update follow prize
   * /api/v2/follow_prize/update_follow_prize (POST)
   */
  async updateFollowPrize(params: UpdateFollowPrizeRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateFollowPrizeResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/follow_prize/update_follow_prize","query":[],"body":["follow_prize_name","campaign_id","start_time","end_time","usage_quantity","min_spend"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
