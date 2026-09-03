// AUTO-GENERATED from Shopee reference docs (references/api/MediaSpace).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface CancelVideoUploadRequest {
  "video_upload_id": string,
}
export interface CancelVideoUploadResponse {
  "message"?: string,
  "error"?: string,
  "warning"?: string,
  "request_id"?: string,
}
export interface CompleteVideoUploadRequest {
  "video_upload_id": string,
  "part_seq_list": Array<number>,
  "report_data"?: {
    "upload_cost"?: number,
  },
}
export interface CompleteVideoUploadResponse {
  "message"?: string,
  "error"?: string,
  "warning"?: string,
  "request_id"?: string,
}
export interface GetVideoUploadResultRequest {
  /** Example: sg_90ce045e-fd92-4f0b-97a4-eda40546cd9f_000000 */
  "video_upload_id": string,
}
export interface GetVideoUploadResultResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "status"?: string,
    "message"?: string,
    "video_info": {
      "video_url_list"?: Array<{
        "video_url_region"?: string,
        "video_url"?: string,
      }>,
      "thumbnail_url_list"?: Array<{
        "image_url_region"?: string,
        "image_url"?: string,
      }>,
      "duration"?: number,
    },
  },
}
export interface InitVideoUploadRequest {
  "file_size": number,
  "file_md5": string,
}
export interface InitVideoUploadResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "video_upload_id"?: string,
  },
}
export interface UploadImageRequest {
  "scene"?: string,
  "ratio"?: string,
  "image": string,
}
export interface UploadImageResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "image_info": {
      "image_id"?: string,
      "image_url_list"?: Array<{
        "image_url_region"?: string,
        "image_url"?: string,
      }>,
    },
    "image_info_list"?: Array<{
      "id"?: number,
      "error"?: string,
      "message"?: string,
      "image_info": {
        "image_id"?: string,
        "image_url_list"?: Array<{
          "image_url_region"?: string,
          "image_url"?: string,
        }>,
      },
    }>,
  },
}
export interface UploadVideoPartRequest {
  "video_upload_id": string,
  "part_seq": number,
  "content_md5": string,
  "part_content": string,
}
export interface UploadVideoPartResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
}

export class ShopeeMediaSpaceApi {
  constructor(private client: ShopeeClient) {}

  /**
   * cancel video upload
   * /api/v2/media_space/cancel_video_upload (POST)
   */
  async cancelVideoUpload(params: CancelVideoUploadRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CancelVideoUploadResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media_space/cancel_video_upload","query":[],"body":["video_upload_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * complete video upload
   * /api/v2/media_space/complete_video_upload (POST)
   */
  async completeVideoUpload(params: CompleteVideoUploadRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CompleteVideoUploadResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media_space/complete_video_upload","query":[],"body":["video_upload_id","part_seq_list","report_data"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get video upload result
   * /api/v2/media_space/get_video_upload_result (GET)
   */
  async getVideoUploadResult(params: GetVideoUploadResultRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetVideoUploadResultResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/media_space/get_video_upload_result","query":["video_upload_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * init video upload
   * /api/v2/media_space/init_video_upload (POST)
   */
  async initVideoUpload(params: InitVideoUploadRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<InitVideoUploadResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media_space/init_video_upload","query":[],"body":["file_size","file_md5"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upload image
   * /api/v2/media_space/upload_image (POST)
   */
  async uploadImage(params: UploadImageRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UploadImageResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media_space/upload_image","query":[],"body":["scene","ratio","image"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upload video part
   * /api/v2/media_space/upload_video_part (POST)
   */
  async uploadVideoPart(params: UploadVideoPartRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UploadVideoPartResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media_space/upload_video_part","query":[],"body":["video_upload_id","part_seq","content_md5","part_content"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
