// AUTO-GENERATED from Shopee reference docs (references/api/Ads).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface CheckCreateGmsProductCampaignEligibilityRequest {}

export interface CheckCreateGmsProductCampaignEligibilityResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "is_eligible"?: boolean,
    "reason"?: string,
  },
}
export interface CreateAutoProductAdsRequest {
  "reference_id": string,
  "budget": number,
  "start_date": string,
  "end_date"?: string,
}
export interface CreateAutoProductAdsResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "campaign_id"?: number,
  }>,
}
export interface CreateGmsProductCampaignRequest {
  "start_date": string,
  "end_date"?: string,
  "daily_budget": number,
}
export interface CreateGmsProductCampaignResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "campaign_id"?: number,
  },
}
export interface CreateManualProductAdsRequest {
  "reference_id": string,
  "budget": number,
  "start_date": string,
  "end_date"?: string,
  "bidding_method": string,
  "item_id": number,
  "roas_target"?: number,
  "selected_keywords"?: Array<{
    "keyword"?: string,
    "match_type"?: string,
    "bid_price_per_click"?: number,
  }>,
  "discovery_ads_locations"?: Array<{
    "location"?: string,
    "bid_price"?: number,
  }>,
  "enhanced_cpc"?: boolean,
  "smart_creative_setting"?: string,
}
export interface CreateManualProductAdsResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "campaign_id"?: number,
  }>,
}
export interface EditAutoProductAdsRequest {
  "reference_id": string,
  "campaign_id": number,
  "edit_action": string,
  "budget"?: number,
  "start_date"?: string,
  "end_date"?: string,
}
export interface EditAutoProductAdsResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "campaign_id"?: number,
  }>,
}
export interface EditGmsItemProductCampaignRequest {
  "campaign_id"?: number,
  "edit_action": string,
  "item_id_list": Array<number>,
}
export interface EditGmsItemProductCampaignResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "campaign_id"?: number,
  },
}
export interface EditGmsProductCampaignRequest {
  "campaign_id"?: number,
  "edit_action": string,
  "daily_budget"?: number,
  "start_date"?: string,
  "end_date"?: string,
}
export interface EditGmsProductCampaignResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "campaign_id"?: number,
  },
}
export interface EditManualProductAdKeywordsRequest {
  "reference_id": string,
  "campaign_id": number,
  "selected_keywords": Array<{
    "edit_action"?: string,
    "keyword"?: string,
    "match_type"?: string,
    "bid_price_per_click"?: number,
  }>,
}
export interface EditManualProductAdKeywordsResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "campaign_id"?: number,
    "failed_edits"?: Array<{
      "keyword"?: string,
      "error"?: string,
      "message"?: string,
    }>,
  }>,
}
export interface EditManualProductAdsRequest {
  "reference_id": string,
  "campaign_id": number,
  "edit_action": string,
  "budget"?: number,
  "start_date"?: string,
  "end_date"?: string,
  "roas_target"?: number,
  "discovery_ads_locations"?: Array<{
    "location"?: string,
    "status"?: string,
    "bid_price"?: number,
  }>,
  "enhanced_cpc"?: boolean,
  "smart_creative_setting"?: string,
}
export interface EditManualProductAdsResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "campaign_id"?: number,
  }>,
}
export interface GetAdsFCilShopRateRequest {}

export interface GetAdsFCilShopRateResponse {
  /** The rate of the shop who choose to participate in this program Example: The rate of the shop who choose to participate in this program */
  "rate"?: number,
  /** The update time in timestamp format Example: The update time in timestamp format */
  "update_at"?: number,
}
export interface GetAllCpcAdsDailyPerformanceRequest {
  /** This is the parameter to indicate the start date of the time length of performance. Example: 17-03-2021 */
  "start_date": string,
  /** This is the parameter to indicate the end date of the time length of performance Example: 18-03-2021 */
  "end_date": string,
}
export interface GetAllCpcAdsDailyPerformanceResponse {
  "request_id"?: string,
  "response"?: Array<{
    "date"?: string,
    "impression"?: number,
    "clicks"?: number,
    "ctr"?: number,
    "direct_order"?: number,
    "broad_order"?: number,
    "direct_conversions"?: number,
    "broad_conversions"?: number,
    "direct_item_sold"?: number,
    "broad_item_sold"?: number,
    "direct_gmv"?: number,
    "broad_gmv"?: number,
    "expense"?: number,
    "cost_per_conversion"?: number,
    "direct_roas"?: number,
    "broad_roas"?: number,
  }>,
}
export interface GetAllCpcAdsHourlyPerformanceRequest {
  /** This is the parameter of the single date on which requester wants to check the hourly performance. Date in DD-MM-YYYY format. Example: 17-03-2021 */
  "performance_date": string,
}
export interface GetAllCpcAdsHourlyPerformanceResponse {
  "request_id"?: string,
  "response"?: Array<{
    "hour"?: number,
    "date"?: string,
    "impression"?: number,
    "clicks"?: number,
    "ctr"?: number,
    "direct_order"?: number,
    "broad_order"?: number,
    "direct_conversions"?: number,
    "broad_conversions"?: number,
    "direct_item_sold"?: number,
    "broad_item_sold"?: number,
    "direct_gmv"?: number,
    "broad_gmv"?: number,
    "expense"?: number,
    "cost_per_conversion"?: number,
    "direct_roas"?: number,
    "broad_roas"?: number,
  }>,
}
export interface GetCreateProductAdBudgetSuggestionRequest {
  /** A random string used to prevent duplicate ads. If an ads is created successfully, subsequent request using the same reference id will fail Example: asdf-1234-qwerty */
  "reference_id": string,
  /** auto,manual - for Auto product ads or Manual Product Ads Example: auto */
  "product_selection": string,
  /** search, discovery, all Example: all */
  "campaign_placement": string,
  /** Bidding Method of product ad: auto, manual Example: manual */
  "bidding_method": string,
  /** Enhanced CPC functionality toggle. Values supported "true"/"false". Mandatory for product_selection=manual, bidding_method=manual Example: true */
  "enhanced_cpc"?: string,
  /** discovery}, bidding_method=manual Example: daily_discover,you_may_also_like */
  "discovery_ads_location_names"?: string,
  /** the ROAS target for each campaign with auto bidding. If 0, GMV Max / ROI feature is not enabled Example: 1.2 */
  "roas_target"?: number,
  /** Product ID. Mandatory for product_selection=manual Example: 112233 */
  "item_id"?: number,
}
export interface GetCreateProductAdBudgetSuggestionResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "budget": {
      "recommended_budget"?: number,
      "min_budget"?: number,
      "max_budget"?: number,
    },
  },
}
export interface GetGmsCampaignPerformanceRequest {
  "campaign_id"?: number,
  "start_date": string,
  "end_date": string,
}
export interface GetGmsCampaignPerformanceResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "campaign_id"?: number,
    "report": {
      "broad_cir"?: number,
      "broad_gmv"?: number,
      "broad_order"?: number,
      "broad_order_amount"?: number,
      "broad_roi"?: number,
      "clicks"?: number,
      "expense"?: number,
      "cpc"?: number,
      "cpdc"?: number,
      "cr"?: number,
      "direct_cr"?: number,
      "direct_cir"?: number,
      "direct_order"?: number,
      "direct_order_amount"?: number,
      "direct_roi"?: number,
      "impression"?: number,
    },
  },
}
export interface GetGmsItemPerformanceRequest {
  "campaign_id"?: number,
  "start_date": string,
  "end_date": string,
  "offset"?: number,
  "limit"?: number,
}
export interface GetGmsItemPerformanceResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "campaign_id"?: number,
    "result_list"?: Array<{
      "item_id"?: number,
      "report": {
        "broad_cir"?: number,
        "broad_gmv"?: number,
        "broad_order"?: number,
        "broad_order_amount"?: number,
        "broad_roi"?: number,
        "clicks"?: number,
        "expense"?: number,
        "cpc"?: number,
        "cpdc"?: number,
        "cr"?: number,
        "direct_cr"?: number,
        "direct_cir"?: number,
        "direct_order"?: number,
        "direct_order_amount"?: number,
        "direct_roi"?: number,
        "impression"?: number,
      },
    }>,
    "total"?: number,
    "has_next_page"?: boolean,
  },
}
export interface GetProductCampaignDailyPerformanceRequest {
  /** This is the parameter to indicate the start date of the time length of performance. Example: 17-03-2021 */
  "start_date": string,
  /** This is the parameter to indicate the end date of the time length of performance Example: 19-03-2021 */
  "end_date": string,
  /** The campaign ids (comma separated) you want to fetch the performance. (max 100) Example: 11111,22222 */
  "campaign_id_list": string,
}
export interface GetProductCampaignDailyPerformanceResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "shop_id"?: number,
    "region"?: string,
    "campaign_list"?: Array<{
      "campaign_id"?: number,
      "ad_type"?: string,
      "campaign_placement"?: string,
      "ad_name"?: string,
      "metrics_list"?: Array<{
        "date"?: string,
        "impression"?: number,
        "clicks"?: number,
        "ctr"?: number,
        "expense"?: number,
        "broad_gmv"?: number,
        "broad_order"?: number,
        "broad_order_amount"?: number,
        "broad_roi"?: number,
        "broad_cir"?: number,
        "cr"?: number,
        "cpc"?: number,
        "direct_order"?: number,
        "direct_order_amount"?: number,
        "direct_gmv"?: number,
        "direct_roi"?: number,
        "direct_cir"?: number,
        "direct_cr"?: number,
        "cpdc"?: number,
      }>,
    }>,
  }>,
}
export interface GetProductCampaignHourlyPerformanceRequest {
  /** This is the parameter to indicate the start date of the time length of performance. Example: 17-07-2024 */
  "performance_date": string,
  /** The campaign ids (comma separated) you want to fetch the performance. (max 100) Example: 11111,22222 */
  "campaign_id_list": string,
}
export interface GetProductCampaignHourlyPerformanceResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: Array<{
    "shop_id"?: number,
    "region"?: string,
    "campaign_list"?: Array<{
      "campaign_id"?: number,
      "ad_type"?: string,
      "campaign_placement"?: string,
      "ad_name"?: string,
      "metrics_list"?: Array<{
        "hour"?: number,
        "date"?: string,
        "impression"?: number,
        "clicks"?: number,
        "ctr"?: number,
        "expense"?: number,
        "broad_gmv"?: number,
        "broad_order"?: number,
        "broad_order_amount"?: number,
        "broad_roi"?: number,
        "broad_cir"?: number,
        "cr"?: number,
        "cpc"?: number,
        "direct_order"?: number,
        "direct_order_amount"?: number,
        "direct_gmv"?: number,
        "direct_roi"?: number,
        "direct_cir"?: number,
        "direct_cr"?: number,
        "cpdc"?: number,
      }>,
    }>,
  }>,
}
export interface GetProductLevelCampaignIdListRequest {
  /** Any of ["","all","auto","manual"] Example: all */
  "ad_type"?: string,
  /** offset Example: 0 */
  "offset"?: number,
  /** limit Example: 5000 */
  "limit"?: number,
}
export interface GetProductLevelCampaignIdListResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "shop_id"?: number,
    "region"?: string,
    "has_next_page"?: boolean,
    "campaign_list"?: Array<{
      "ad_type"?: string,
      "campaign_id"?: number,
    }>,
  },
}
export interface GetProductLevelCampaignSettingInfoRequest {
  /** Info type values: 1.Common Info 2.Manual Bidding Info 3.Auto Bidding Info 4.Auto Product Ads Info Example: 1,2,3,4 */
  "info_type_list": string,
  /** list of campaign ids comma separated (max 100 campaign ids) Example: 11111,22222,33333 */
  "campaign_id_list": string,
}
export interface GetProductLevelCampaignSettingInfoResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "shop_id"?: number,
    "region"?: string,
    "campaign_list"?: Array<{
      "campaign_id"?: number,
      "common_info": {
        "ad_type"?: string,
        "ad_name"?: string,
        "campaign_status"?: string,
        "bidding_method"?: string,
        "campaign_placement"?: string,
        "campaign_budget"?: number,
        "campaign_duration": {
          "start_time"?: number,
          "end_time"?: number,
        },
        "item_id_list"?: Array<number>,
      },
      "manual_bidding_info": {
        "enhanced_cpc"?: boolean,
        "selected_keywords"?: Array<{
          "keyword"?: string,
          "status"?: string,
          "match_type"?: string,
          "bid_price_per_click"?: number,
        }>,
        "discovery_ads_locations"?: Array<{
          "location"?: string,
          "status"?: string,
          "bid_price"?: number,
        }>,
      },
      "auto_bidding_info": {
        "roas_target"?: number,
      },
      "auto_product_ads_info"?: Array<{
        "product_name"?: string,
        "status"?: string,
        "item_id"?: number,
      }>,
    }>,
  },
}
export interface GetProductRecommendedRoiTargetRequest {
  /** A random string used to prevent duplicate ads. If an ads is created successfully, subsequent requests using the same reference id will fail - in this case, a new one must be generated. Use the same string for calling suggestion/recommendation API before the actual request to create an ads. Example: asdf-1234-qwerty */
  "reference_id": string,
  /** Unique identifier for a product. Example: 112233 */
  "item_id": number,
}
export interface GetProductRecommendedRoiTargetResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "exact": {
      "percentile"?: number,
      "value"?: number,
    },
    "lower_bound": {
      "percentile"?: number,
      "value"?: number,
    },
    "upper_bound": {
      "percentile"?: number,
      "value"?: number,
    },
  },
  "warning"?: string,
}
export interface GetRecommendedItemListRequest {}

export interface GetRecommendedItemListResponse {
  "request_id"?: string,
  "response"?: Array<{
    "item_id"?: number,
    "item_status_list"?: Array<string>,
    "sku_tag_list"?: Array<string>,
    "ongoing_ad_type_list"?: Array<string>,
  }>,
}
export interface GetRecommendedKeywordListRequest {
  /** Shopee's unique identifier for an item. Example: 1111 */
  "item_id": number,
  /** The keyword seller typed in the manually add keyword window. Example: keyword */
  "input_keyword"?: string,
}
export interface GetRecommendedKeywordListResponse {
  "request_id"?: string,
  "response"?: {
    "item_id"?: number,
    "input_keyword"?: string,
    "suggested_keywords"?: Array<{
      "keyword"?: string,
      "quality_score"?: number,
      "search_volume"?: number,
      "suggested_bid"?: number,
    }>,
  },
}
export interface GetShopToggleInfoRequest {}

export interface GetShopToggleInfoResponse {
  "request_id"?: string,
  "response"?: {
    "data_timestamp"?: number,
    "auto_top_up"?: boolean,
    "campaign_surge"?: boolean,
  },
}
export interface GetTotalBalanceRequest {}

export interface GetTotalBalanceResponse {
  "request_id"?: string,
  "error"?: string,
  "response"?: {
    "data_timestamp"?: number,
    "total_balance"?: number,
  },
}
export interface ListGmsUserDeletedItemRequest {
  "offset"?: number,
  "limit"?: number,
}
export interface ListGmsUserDeletedItemResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "campaign_id"?: number,
    "item_id_list"?: Array<number>,
    "total"?: number,
  },
}

export class ShopeeAdsApi {
  constructor(private client: ShopeeClient) {}

  /**
   * check create gms product campaign eligibility
   * /api/v2/ads/check_create_gms_product_campaign_eligibility (GET)
   */
  async checkCreateGmsProductCampaignEligibility(params: CheckCreateGmsProductCampaignEligibilityRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CheckCreateGmsProductCampaignEligibilityResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/check_create_gms_product_campaign_eligibility","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * create auto product ads
   * /api/v2/ads/create_auto_product_ads (POST)
   */
  async createAutoProductAds(params: CreateAutoProductAdsRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CreateAutoProductAdsResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/create_auto_product_ads","query":[],"body":["reference_id","budget","start_date","end_date"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * create gms product campaign
   * /api/v2/ads/create_gms_product_campaign (POST)
   */
  async createGmsProductCampaign(params: CreateGmsProductCampaignRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CreateGmsProductCampaignResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/create_gms_product_campaign","query":[],"body":["start_date","end_date","daily_budget"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * create manual product ads
   * /api/v2/ads/create_manual_product_ads (POST)
   */
  async createManualProductAds(params: CreateManualProductAdsRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CreateManualProductAdsResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/create_manual_product_ads","query":[],"body":["reference_id","budget","start_date","end_date","bidding_method","item_id","roas_target","selected_keywords","discovery_ads_locations","enhanced_cpc","smart_creative_setting"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * edit auto product ads
   * /api/v2/ads/edit_auto_product_ads (POST)
   */
  async editAutoProductAds(params: EditAutoProductAdsRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EditAutoProductAdsResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/edit_auto_product_ads","query":[],"body":["reference_id","campaign_id","edit_action","budget","start_date","end_date"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * edit gms item product campaign
   * /api/v2/ads/edit_gms_item_product_campaign (POST)
   */
  async editGmsItemProductCampaign(params: EditGmsItemProductCampaignRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EditGmsItemProductCampaignResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/edit_gms_item_product_campaign","query":[],"body":["campaign_id","edit_action","item_id_list"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * edit gms product campaign
   * /api/v2/ads/edit_gms_product_campaign (POST)
   */
  async editGmsProductCampaign(params: EditGmsProductCampaignRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EditGmsProductCampaignResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/edit_gms_product_campaign","query":[],"body":["campaign_id","edit_action","daily_budget","start_date","end_date"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * edit manual product ad keywords
   * /api/v2/ads/edit_manual_product_ad_keywords (POST)
   */
  async editManualProductAdKeywords(params: EditManualProductAdKeywordsRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EditManualProductAdKeywordsResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/edit_manual_product_ad_keywords","query":[],"body":["reference_id","campaign_id","selected_keywords"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * edit manual product ads
   * /api/v2/ads/edit_manual_product_ads (POST)
   */
  async editManualProductAds(params: EditManualProductAdsRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<EditManualProductAdsResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/edit_manual_product_ads","query":[],"body":["reference_id","campaign_id","edit_action","budget","start_date","end_date","roas_target","discovery_ads_locations","enhanced_cpc","smart_creative_setting"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get ads fácil shop rate
   * /api/v2/ads/get_ads_facil_shop_rate (GET)
   */
  async getAdsFCilShopRate(params: GetAdsFCilShopRateRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAdsFCilShopRateResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_ads_facil_shop_rate","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get all cpc ads daily performance
   * /api/v2/ads/get_all_cpc_ads_daily_performance (GET)
   */
  async getAllCpcAdsDailyPerformance(params: GetAllCpcAdsDailyPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAllCpcAdsDailyPerformanceResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_all_cpc_ads_daily_performance","query":["start_date","end_date"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get all cpc ads hourly performance
   * /api/v2/ads/get_all_cpc_ads_hourly_performance (GET)
   */
  async getAllCpcAdsHourlyPerformance(params: GetAllCpcAdsHourlyPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetAllCpcAdsHourlyPerformanceResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_all_cpc_ads_hourly_performance","query":["performance_date"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get create product ad budget suggestion
   * /api/v2/ads/get_create_product_ad_budget_suggestion (GET)
   */
  async getCreateProductAdBudgetSuggestion(params: GetCreateProductAdBudgetSuggestionRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetCreateProductAdBudgetSuggestionResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_create_product_ad_budget_suggestion","query":["reference_id","product_selection","campaign_placement","bidding_method","enhanced_cpc","discovery_ads_location_names","roas_target","item_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get gms campaign performance
   * /api/v2/ads/get_gms_campaign_performance (POST)
   */
  async getGmsCampaignPerformance(params: GetGmsCampaignPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetGmsCampaignPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/get_gms_campaign_performance","query":[],"body":["campaign_id","start_date","end_date"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get gms item performance
   * /api/v2/ads/get_gms_item_performance (POST)
   */
  async getGmsItemPerformance(params: GetGmsItemPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetGmsItemPerformanceResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/get_gms_item_performance","query":[],"body":["campaign_id","start_date","end_date","offset","limit"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get product campaign daily performance
   * /api/v2/ads/get_product_campaign_daily_performance (GET)
   */
  async getProductCampaignDailyPerformance(params: GetProductCampaignDailyPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetProductCampaignDailyPerformanceResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_product_campaign_daily_performance","query":["start_date","end_date","campaign_id_list"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get product campaign hourly performance
   * /api/v2/ads/get_product_campaign_hourly_performance (GET)
   */
  async getProductCampaignHourlyPerformance(params: GetProductCampaignHourlyPerformanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetProductCampaignHourlyPerformanceResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_product_campaign_hourly_performance","query":["performance_date","campaign_id_list"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get product level campaign id list
   * /api/v2/ads/get_product_level_campaign_id_list (GET)
   */
  async getProductLevelCampaignIdList(params: GetProductLevelCampaignIdListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetProductLevelCampaignIdListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_product_level_campaign_id_list","query":["ad_type","offset","limit"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get product level campaign setting info
   * /api/v2/ads/get_product_level_campaign_setting_info (GET)
   */
  async getProductLevelCampaignSettingInfo(params: GetProductLevelCampaignSettingInfoRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetProductLevelCampaignSettingInfoResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_product_level_campaign_setting_info","query":["info_type_list","campaign_id_list"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get product recommended roi target
   * /api/v2/ads/get_product_recommended_roi_target (GET)
   */
  async getProductRecommendedRoiTarget(params: GetProductRecommendedRoiTargetRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetProductRecommendedRoiTargetResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_product_recommended_roi_target","query":["reference_id","item_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get recommended item list
   * /api/v2/ads/get_recommended_item_list (GET)
   */
  async getRecommendedItemList(params: GetRecommendedItemListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetRecommendedItemListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_recommended_item_list","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get recommended keyword list
   * /api/v2/ads/get_recommended_keyword_list (GET)
   */
  async getRecommendedKeywordList(params: GetRecommendedKeywordListRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetRecommendedKeywordListResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_recommended_keyword_list","query":["item_id","input_keyword"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get shop toggle info
   * /api/v2/ads/get_shop_toggle_info (GET)
   */
  async getShopToggleInfo(params: GetShopToggleInfoRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetShopToggleInfoResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_shop_toggle_info","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get total balance
   * /api/v2/ads/get_total_balance (GET)
   */
  async getTotalBalance(params: GetTotalBalanceRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetTotalBalanceResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/ads/get_total_balance","query":[],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * list gms user deleted item
   * /api/v2/ads/list_gms_user_deleted_item (POST)
   */
  async listGmsUserDeletedItem(params: ListGmsUserDeletedItemRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<ListGmsUserDeletedItemResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/ads/list_gms_user_deleted_item","query":[],"body":["offset","limit"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
