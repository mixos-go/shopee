// AUTO-GENERATED from Shopee reference docs (references/api/BrandPortal).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface GetClipVideoPerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "page_size"?: number,
  "cursor"?: number,
}
export interface GetClipVideoPerformanceResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "total_views"?: number,
      "unique_viewers"?: number,
      "video_duration"?: number,
      "average_views_duration"?: number,
      "likes"?: number,
      "comments"?: number,
      "share"?: number,
      "total_unique_buyers"?: number,
      "atc_units"?: number,
      "units_sold"?: number,
      "orders"?: number,
      "sales"?: number,
      "conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "shop_id"?: number,
      "shop_name"?: string,
      "video_id"?: number,
      "video_name"?: string,
      "total_views"?: number,
      "unique_viewers"?: number,
      "video_duration"?: number,
      "average_views_duration"?: number,
      "likes"?: number,
      "comments"?: number,
      "share"?: number,
      "total_unique_buyers"?: number,
      "atc_units"?: number,
      "units_sold"?: number,
      "orders"?: number,
      "sales"?: number,
      "conversion_rate"?: number,
    }>,
    "next_cursor"?: number,
  },
}
export interface GetContentAffiliatePerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "page_size"?: number,
  "cursor"?: number,
}
export interface GetContentAffiliatePerformanceResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "views"?: number,
      "likes"?: number,
      "comments"?: number,
      "sales_placed"?: number,
      "sales_confirmed"?: number,
      "units_sold_placed"?: number,
      "units_sold_confirmed"?: number,
      "orders_placed"?: number,
      "orders_confirmed"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "shop_id"?: number,
      "shop_name"?: string,
      "content_id"?: number,
      "content_name"?: string,
      "views"?: number,
      "likes"?: number,
      "comments"?: number,
      "sales_placed"?: number,
      "sales_confirmed"?: number,
      "units_sold_placed"?: number,
      "units_sold_confirmed"?: number,
      "orders_placed"?: number,
      "orders_confirmed"?: number,
    }>,
    "next_cursor"?: number,
  },
}
export interface GetPrincipalAffiliatePerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "region_list"?: Array<{
    "region"?: string,
    "currency"?: string,
  }>,
}
export interface GetPrincipalAffiliatePerformanceResponse {
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "sales_placed"?: number,
      "sales_confirmed"?: number,
      "units_sold_placed"?: number,
      "units_sold_confirmed"?: number,
      "orders_placed"?: number,
      "orders_confirmed"?: number,
      "estimated_commission_placed"?: number,
      "estimated_commission_confirmed"?: number,
      "roi_placed"?: number,
      "roi_confirmed"?: number,
      "buyers_placed"?: number,
      "buyers_confirmed"?: number,
      "new_buyers_placed"?: number,
      "new_buyers_confirmed"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "sales_placed"?: number,
      "sales_confirmed"?: number,
      "units_sold_placed"?: number,
      "units_sold_confirmed"?: number,
      "orders_placed"?: number,
      "orders_confirmed"?: number,
      "estimated_commission_placed"?: number,
      "estimated_commission_confirmed"?: number,
      "roi_placed"?: number,
      "roi_confirmed"?: number,
      "buyers_placed"?: number,
      "buyers_confirmed"?: number,
      "new_buyers_placed"?: number,
      "new_buyers_confirmed"?: number,
    }>,
  },
  "request_id"?: string,
}
export interface GetPrincipalLivestreamPerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "region_list"?: Array<{
    "region"?: string,
    "currency"?: string,
  }>,
}
export interface GetPrincipalLivestreamPerformanceResponse {
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "orders"?: number,
      "buyers"?: number,
      "likes"?: number,
      "comments"?: number,
      "sales_gross"?: number,
      "units_sold"?: number,
      "total_views"?: number,
      "total_live_duration"?: number,
      "unique_viewers"?: number,
      "atc_units"?: number,
      "total_livestreams"?: number,
      "average_live_duration"?: number,
      "average_views_duration"?: number,
      "new_followers"?: number,
      "new_buyers"?: number,
      "existing_buyers"?: number,
      "sales_net"?: number,
      "conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "orders"?: number,
      "buyers"?: number,
      "likes"?: number,
      "comments"?: number,
      "sales_gross"?: number,
      "units_sold"?: number,
      "total_views"?: number,
      "total_live_duration"?: number,
      "unique_viewers"?: number,
      "atc_units"?: number,
      "total_livestreams"?: number,
      "average_live_duration"?: number,
      "average_views_duration"?: number,
      "new_followers"?: number,
      "new_buyers"?: number,
      "existing_buyers"?: number,
      "sales_net"?: number,
      "conversion_rate"?: number,
    }>,
  },
  "request_id"?: string,
}
export interface GetPrincipalSalesPerformanceDetailRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "region_list"?: Array<{
    "region"?: string,
    "currency"?: string,
  }>,
}
export interface GetPrincipalSalesPerformanceDetailResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "sales"?: number,
      "orders"?: number,
      "units_sold"?: number,
      "average_basket_size"?: number,
      "items_per_order"?: number,
      "average_selling_price"?: number,
      "product_clicks"?: number,
      "product_views"?: number,
      "unique_visitors"?: number,
      "item_conversion_rate"?: number,
      "order_conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "sales"?: number,
      "orders"?: number,
      "units_sold"?: number,
      "average_basket_size"?: number,
      "items_per_order"?: number,
      "average_selling_price"?: number,
      "product_clicks"?: number,
      "product_views"?: number,
      "unique_visitors"?: number,
      "item_conversion_rate"?: number,
      "order_conversion_rate"?: number,
    }>,
  },
}
export interface GetPrincipalVideoPerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "region_list"?: Array<{
    "region"?: string,
    "currency"?: string,
  }>,
}
export interface GetPrincipalVideoPerformanceResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "orders"?: number,
      "likes"?: number,
      "comments"?: number,
      "share"?: number,
      "sales"?: number,
      "units_sold"?: number,
      "effective_views"?: number,
      "unique_viewers"?: number,
      "total_video_duration"?: number,
      "atc_units"?: number,
      "average_video_duration"?: number,
      "average_views_duration"?: number,
      "total_unique_buyers"?: number,
      "conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "orders"?: number,
      "likes"?: number,
      "comments"?: number,
      "share"?: number,
      "sales"?: number,
      "units_sold"?: number,
      "effective_views"?: number,
      "unique_viewers"?: number,
      "atc_units"?: number,
      "average_video_duration"?: number,
      "average_views_duration"?: number,
      "total_unique_buyers"?: number,
      "conversion_rate"?: number,
    }>,
  },
}
export interface GetSessionLivestreamPerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "page_size"?: number,
  "cursor"?: number,
}
export interface GetSessionLivestreamPerformanceResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "likes"?: number,
      "comments"?: number,
      "buyers"?: number,
      "orders"?: number,
      "total_views"?: number,
      "unique_viewers"?: number,
      "total_live_duration"?: number,
      "average_views_duration"?: number,
      "new_followers"?: number,
      "atc_units"?: number,
      "units_sold"?: number,
      "sales_gross"?: number,
      "sales_net"?: number,
      "conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "likes"?: number,
      "comments"?: number,
      "buyers"?: number,
      "orders"?: number,
      "shop_id"?: number,
      "shop_name"?: string,
      "session_id"?: number,
      "session_name"?: string,
      "total_views"?: number,
      "unique_viewers"?: number,
      "total_live_duration"?: number,
      "average_views_duration"?: number,
      "new_followers"?: number,
      "atc_units"?: number,
      "units_sold"?: number,
      "sales_gross"?: number,
      "sales_net"?: number,
      "conversion_rate"?: number,
    }>,
    "next_cursor"?: number,
  },
}
export interface GetShopAffiliatePerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "shop_list"?: Array<{
    "shop_id"?: number,
    "currency"?: string,
  }>,
}
export interface GetShopAffiliatePerformanceResponse {
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "sales_placed"?: number,
      "sales_confirmed"?: number,
      "units_sold_placed"?: number,
      "units_sold_confirmed"?: number,
      "orders_placed"?: number,
      "orders_confirmed"?: number,
      "estimated_commission_placed"?: number,
      "estimated_commission_confirmed"?: number,
      "roi_placed"?: number,
      "roi_confirmed"?: number,
      "buyers_placed"?: number,
      "buyers_confirmed"?: number,
      "new_buyers_placed"?: number,
      "new_buyers_confirmed"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "shop_id"?: number,
      "shop_name"?: string,
      "sales_placed"?: number,
      "sales_confirmed"?: number,
      "units_sold_placed"?: number,
      "units_sold_confirmed"?: number,
      "orders_placed"?: number,
      "orders_confirmed"?: number,
      "estimated_commission_placed"?: number,
      "estimated_commission_confirmed"?: number,
      "roi_placed"?: number,
      "roi_confirmed"?: number,
      "buyers_placed"?: number,
      "buyers_confirmed"?: number,
      "new_buyers_placed"?: number,
      "new_buyers_confirmed"?: number,
    }>,
  },
  "request_id"?: string,
}
export interface GetShopLivestreamPerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "shop_list"?: Array<{
    "shop_id"?: number,
    "currency"?: string,
  }>,
}
export interface GetShopLivestreamPerformanceResponse {
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "orders"?: number,
      "buyers"?: number,
      "likes"?: number,
      "comments"?: number,
      "sales_gross"?: number,
      "units_sold"?: number,
      "total_views"?: number,
      "total_live_duration"?: number,
      "unique_viewers"?: number,
      "atc_units"?: number,
      "total_livestreams"?: number,
      "average_live_duration"?: number,
      "average_views_duration"?: number,
      "new_followers"?: number,
      "new_buyers"?: number,
      "existing_buyers"?: number,
      "sales_net"?: number,
      "conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "orders"?: number,
      "buyers"?: number,
      "likes"?: number,
      "comments"?: number,
      "shop_id"?: number,
      "shop_name"?: string,
      "sales_gross"?: number,
      "units_sold"?: number,
      "total_views"?: number,
      "total_live_duration"?: number,
      "unique_viewers"?: number,
      "atc_units"?: number,
      "total_livestreams"?: number,
      "average_live_duration"?: number,
      "average_views_duration"?: number,
      "new_followers"?: number,
      "new_buyers"?: number,
      "existing_buyers"?: number,
      "sales_net"?: number,
      "conversion_rate"?: number,
    }>,
  },
  "request_id"?: string,
}
export interface GetShopSalesPerformanceDetailRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "shop_list"?: Array<{
    "shop_id"?: number,
    "currency"?: string,
  }>,
}
export interface GetShopSalesPerformanceDetailResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "sales"?: number,
      "orders"?: number,
      "units_sold"?: number,
      "average_basket_size"?: number,
      "items_per_order"?: number,
      "average_selling_price"?: number,
      "product_clicks"?: number,
      "product_views"?: number,
      "unique_visitors"?: number,
      "item_conversion_rate"?: number,
      "order_conversion_rate"?: number,
      "flash_sale_sales"?: number,
      "flash_sale_orders"?: number,
      "flash_sale_units_sold"?: number,
      "voucher_sales"?: number,
      "voucher_buyers"?: number,
      "voucher_usage_rate"?: number,
      "voucher_cir"?: number,
      "voucher_cost"?: number,
    }>,
    "details"?: Array<{
      "shop_id"?: number,
      "shop_name"?: string,
      "shop_region_code"?: string,
      "currency"?: string,
      "sales"?: number,
      "orders"?: number,
      "units_sold"?: number,
      "average_basket_size"?: number,
      "items_per_order"?: number,
      "average_selling_price"?: number,
      "product_clicks"?: number,
      "product_views"?: number,
      "unique_visitors"?: number,
      "item_conversion_rate"?: number,
      "order_conversion_rate"?: number,
      "atp_top_skus_l1d"?: number,
      "atp_top_skus_l30d"?: number,
      "atp_live_skus_l1d"?: number,
      "atp_live_skus_l30d"?: number,
      "flash_sale_sales"?: number,
      "flash_sale_orders"?: number,
      "flash_sale_units_sold"?: number,
      "voucher_sales"?: number,
      "voucher_buyers"?: number,
      "voucher_usage_rate"?: number,
      "voucher_cir"?: number,
      "voucher_cost"?: number,
    }>,
  },
}
export interface GetShopVideoPerformanceRequest {
  "start_date": string,
  "end_date": string,
  "timezone": string,
  "granularity": string,
  "shop_list"?: Array<{
    "shop_id"?: number,
    "currency"?: string,
  }>,
}
export interface GetShopVideoPerformanceResponse {
  "request_id"?: string,
  "error"?: string,
  "message"?: string,
  "response"?: {
    "summary"?: Array<{
      "currency"?: string,
      "orders"?: number,
      "likes"?: number,
      "comments"?: number,
      "share"?: number,
      "sales"?: number,
      "units_sold"?: number,
      "effective_views"?: number,
      "unique_viewers"?: number,
      "total_video_duration"?: number,
      "atc_units"?: number,
      "average_video_duration"?: number,
      "average_views_duration"?: number,
      "total_unique_buyers"?: number,
      "conversion_rate"?: number,
    }>,
    "details"?: Array<{
      "region"?: string,
      "currency"?: string,
      "orders"?: number,
      "likes"?: number,
      "comments"?: number,
      "share"?: number,
      "shop_id"?: number,
      "shop_name"?: string,
      "sales"?: number,
      "units_sold"?: number,
      "effective_views"?: number,
      "unique_viewers"?: number,
      "atc_units"?: number,
      "average_video_duration"?: number,
      "average_views_duration"?: number,
      "total_unique_buyers"?: number,
      "conversion_rate"?: number,
    }>,
  },
}

export class ShopeeBrandPortalApi {
  constructor(private client: ShopeeClient) {}

  /**
   * get clip video performance
   * /api/v2/principal/get_clip_video_performance (POST)
   */
  async getClipVideoPerformance(params: GetClipVideoPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetClipVideoPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_clip_video_performance","query":[],"body":["start_date","end_date","timezone","granularity","page_size","cursor"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get content affiliate performance
   * /api/v2/principal/get_content_affiliate_performance (POST)
   */
  async getContentAffiliatePerformance(params: GetContentAffiliatePerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetContentAffiliatePerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_content_affiliate_performance","query":[],"body":["start_date","end_date","timezone","granularity","page_size","cursor"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get principal affiliate performance
   * /api/v2/principal/get_principal_affiliate_performance (POST)
   */
  async getPrincipalAffiliatePerformance(params: GetPrincipalAffiliatePerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetPrincipalAffiliatePerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_principal_affiliate_performance","query":[],"body":["start_date","end_date","timezone","granularity","region_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get principal livestream performance
   * /api/v2/principal/get_principal_livestream_performance (POST)
   */
  async getPrincipalLivestreamPerformance(params: GetPrincipalLivestreamPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetPrincipalLivestreamPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_principal_livestream_performance","query":[],"body":["start_date","end_date","timezone","granularity","region_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get principal sales performance detail
   * /api/v2/principal/get_principal_sales_performance_detail (POST)
   */
  async getPrincipalSalesPerformanceDetail(params: GetPrincipalSalesPerformanceDetailRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetPrincipalSalesPerformanceDetailResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_principal_sales_performance_detail","query":[],"body":["start_date","end_date","timezone","granularity","region_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get principal video performance
   * /api/v2/principal/get_principal_video_performance (POST)
   */
  async getPrincipalVideoPerformance(params: GetPrincipalVideoPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetPrincipalVideoPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_principal_video_performance","query":[],"body":["start_date","end_date","timezone","granularity","region_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get session livestream performance
   * /api/v2/principal/get_session_livestream_performance (POST)
   */
  async getSessionLivestreamPerformance(params: GetSessionLivestreamPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetSessionLivestreamPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_session_livestream_performance","query":[],"body":["start_date","end_date","timezone","granularity","page_size","cursor"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shop affiliate performance
   * /api/v2/principal/get_shop_affiliate_performance (POST)
   */
  async getShopAffiliatePerformance(params: GetShopAffiliatePerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopAffiliatePerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_shop_affiliate_performance","query":[],"body":["start_date","end_date","timezone","granularity","shop_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shop livestream performance
   * /api/v2/principal/get_shop_livestream_performance (POST)
   */
  async getShopLivestreamPerformance(params: GetShopLivestreamPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopLivestreamPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_shop_livestream_performance","query":[],"body":["start_date","end_date","timezone","granularity","shop_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shop sales performance detail
   * /api/v2/principal/get_shop_sales_performance_detail (POST)
   */
  async getShopSalesPerformanceDetail(params: GetShopSalesPerformanceDetailRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopSalesPerformanceDetailResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_shop_sales_performance_detail","query":[],"body":["start_date","end_date","timezone","granularity","shop_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shop video performance
   * /api/v2/principal/get_shop_video_performance (POST)
   */
  async getShopVideoPerformance(params: GetShopVideoPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopVideoPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/principal/get_shop_video_performance","query":[],"body":["start_date","end_date","timezone","granularity","shop_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
