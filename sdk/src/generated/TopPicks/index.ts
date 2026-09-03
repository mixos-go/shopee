// AUTO-GENERATED from Shopee reference docs (references/api/TopPicks).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddTopPicksRequest {
  "is_activated": boolean,
  "item_id_list": Array<number>,
  "name": string,
}
export interface AddTopPicksResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "collection_list"?: Array<{
      "is_activated"?: boolean,
      "item_list"?: Array<{
        "item_name"?: string,
        "item_id"?: number,
        "current_price"?: string,
        "inflated_price_of_current_price"?: string,
        "sales"?: number,
      }>,
      "top_picks_id"?: number,
      "name"?: string,
    }>,
  },
}
export interface DeleteTopPicksRequest {
  "top_picks_id": number,
}
export interface DeleteTopPicksResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "top_picks_id"?: number,
  },
}
export interface GetTopPicksListRequest {}

export interface GetTopPicksListResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "collection_list"?: Array<{
      "is_activated"?: boolean,
      "item_list"?: Array<{
        "item_name"?: string,
        "item_id"?: number,
        "current_price"?: string,
        "inflated_price_of_current_price"?: string,
        "sales"?: number,
      }>,
      "top_picks_id"?: number,
      "name"?: string,
    }>,
  },
}
export interface UpdateTopPicksRequest {
  "name"?: string,
  "top_picks_id": number,
  "item_id_list"?: Array<number>,
  "is_activated"?: boolean,
}
export interface UpdateTopPicksResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "collection_list"?: Array<{
      "is_activated"?: boolean,
      "item_list"?: Array<{
        "item_name"?: string,
        "item_id"?: number,
        "current_price"?: string,
        "inflated_price_of_current_price"?: string,
        "sales"?: number,
      }>,
      "top_picks_id"?: number,
      "name"?: string,
    }>,
  },
}

export class ShopeeTopPicksApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add top picks
   * /api/v2/top_picks/add_top_picks (POST)
   */
  async addTopPicks(params: AddTopPicksRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddTopPicksResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/top_picks/add_top_picks","query":[],"body":["is_activated","item_id_list","name"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete top picks
   * /api/v2/top_picks/delete_top_picks (POST)
   */
  async deleteTopPicks(params: DeleteTopPicksRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteTopPicksResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/top_picks/delete_top_picks","query":[],"body":["top_picks_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get top picks list
   * /api/v2/top_picks/get_top_picks_list (GET)
   */
  async getTopPicksList(params: GetTopPicksListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetTopPicksListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/top_picks/get_top_picks_list","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update top picks
   * /api/v2/top_picks/update_top_picks (POST)
   */
  async updateTopPicks(params: UpdateTopPicksRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateTopPicksResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/top_picks/update_top_picks","query":[],"body":["name","top_picks_id","item_id_list","is_activated"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
