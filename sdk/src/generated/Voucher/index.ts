// AUTO-GENERATED from Shopee reference docs (references/api/Voucher).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface AddVoucherRequest {
  "voucher_name": string,
  "voucher_code": string,
  "start_time": number,
  "end_time": number,
  "voucher_type": number,
  "reward_type": number,
  "usage_quantity": number,
  "min_basket_price": number,
  "discount_amount"?: number,
  "max_price"?: number,
  "display_channel_list"?: Array<number>,
  "display_start_time"?: number,
}
export interface AddVoucherResponse {
  "response"?: {
    "voucher_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface DeleteVoucherRequest {
  "voucher_id": number,
}
export interface DeleteVoucherResponse {
  "response"?: {
    "voucher_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface EndVoucherRequest {
  "voucher_id": number,
}
export interface EndVoucherResponse {
  "response"?: {
    "voucher_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface GetVoucherRequest {
  /** The unique identifier of a voucher used to query the voucher details. Example: 123 */
  "voucher_id": number,
}
export interface GetVoucherResponse {
  "response"?: {
    "voucher_id"?: number,
    "voucher_code"?: string,
    "voucher_name"?: string,
    "voucher_type"?: number,
    "reward_type"?: number,
    "usage_quantity"?: number,
    "current_usage"?: number,
    "start_time"?: number,
    "end_time"?: number,
    "is_admin"?: boolean,
    "voucher_purpose"?: number,
    "discount_amount"?: number,
    "cmt_voucher_status"?: number,
    "min_basket_price"?: number,
    "display_channel_list"?: unknown[],
    "display_start_time"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface GetVoucherListRequest {
  /** Specifies the page number of data to return in the current call. Default to be 1 and allowed input is from 1 - 5000. Example: 1 */
  "page_no"?: number,
  /** Use the 'page_size' filters to control the maximum number of entries to retrieve per page (i.e., per call). Default to be 20 and allowed input is from 1- 100. Example: 100 */
  "page_size"?: number,
  /** The status filter for retrieving voucher list. Available value: upcoming/ongoing/expired/all. Example: all */
  "status": string,
}
export interface GetVoucherListResponse {
  "response"?: {
    "more"?: boolean,
    "voucher_list"?: Array<{
      "voucher_id"?: number,
      "voucher_code"?: string,
      "voucher_name"?: string,
      "voucher_type"?: number,
      "reward_type"?: number,
      "usage_quantity"?: number,
      "current_usage"?: number,
      "start_time"?: number,
      "end_time"?: number,
      "is_admin"?: boolean,
      "voucher_purpose"?: number,
      "discount_amount"?: number,
      "target_voucher"?: number,
      "display_start_time"?: number,
    }>,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}
export interface UpdateVoucherRequest {
  "voucher_id": number,
  "voucher_name"?: string,
  "start_time"?: number,
  "end_time"?: number,
  "usage_quantity"?: number,
  "min_basket_price"?: number,
  "percentage"?: number,
  "max_price"?: number,
  "display_channel_list"?: Array<number>,
  "display_start_time"?: number,
}
export interface UpdateVoucherResponse {
  "response"?: {
    "voucher_id"?: number,
  },
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
}

export class ShopeeVoucherApi {
  constructor(private client: ShopeeClient) {}

  /**
   * add voucher
   * /api/v2/voucher/add_voucher (POST)
   */
  async addVoucher(params: AddVoucherRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<AddVoucherResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/voucher/add_voucher","query":[],"body":["voucher_name","voucher_code","start_time","end_time","voucher_type","reward_type","usage_quantity","min_basket_price","discount_amount","max_price","display_channel_list","display_start_time"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delete voucher
   * /api/v2/voucher/delete_voucher (POST)
   */
  async deleteVoucher(params: DeleteVoucherRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<DeleteVoucherResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/voucher/delete_voucher","query":[],"body":["voucher_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * end voucher
   * /api/v2/voucher/end_voucher (POST)
   */
  async endVoucher(params: EndVoucherRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EndVoucherResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/voucher/end_voucher","query":[],"body":["voucher_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get voucher
   * /api/v2/voucher/get_voucher (GET)
   */
  async getVoucher(params: GetVoucherRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetVoucherResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/voucher/get_voucher","query":["voucher_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get voucher list
   * /api/v2/voucher/get_voucher_list (GET)
   */
  async getVoucherList(params: GetVoucherListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetVoucherListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/voucher/get_voucher_list","query":["page_no","page_size","status"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * update voucher
   * /api/v2/voucher/update_voucher (POST)
   */
  async updateVoucher(params: UpdateVoucherRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UpdateVoucherResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/voucher/update_voucher","query":[],"body":["voucher_id","voucher_name","start_time","end_time","usage_quantity","min_basket_price","percentage","max_price","display_channel_list","display_start_time"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
