// AUTO-GENERATED from Shopee reference docs (references/api/Media).
// Do not edit by hand; run `npm run generate` in sdk/.

import { ShopeeClient } from '../../client'
import { ApiResponse, ShopeeRequestOptions } from '../../types'

export interface CancelVideoUploadRequest {
  "video_upload_id": string,
}
export interface CancelVideoUploadResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
}
export interface CompleteVideoUploadRequest {
  "video_upload_id": string,
}
export interface CompleteVideoUploadResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
}
export interface GetVideoUploadResultRequest {
  /** The unique ID of the upload task, returned by v2.media.init_video_upload. Example: sg-11110201-6kh48-mepm7a0ttcw3c3 */
  "video_upload_id": string,
}
export interface GetVideoUploadResultResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "status"?: string,
    "reason"?: string,
    "update_time"?: number,
    "video_info": {
      "video_url"?: string,
      "video_thumbnail_url"?: string,
      "thumbnail_width"?: number,
      "thumbnail_height"?: number,
      "duration"?: number,
      "resolution"?: string,
    },
  },
}
export interface InitVideoUploadRequest {
  "business": number,
  "scene": number,
  "file_name": string,
  "file_size": number,
  "duration": number,
}
export interface InitVideoUploadResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
  "response"?: {
    "video_upload_id"?: string,
    "part_size"?: number,
  },
}
export interface UploadImageRequest {
  "business": number,
  "scene": number,
  "images": string,
}
export interface UploadImageResponse {
  "error"?: string,
  "message"?: string,
  "request_id"?: string,
  "response"?: {
    "image_list"?: Array<{
      "image_id"?: string,
      "image_url"?: string,
    }>,
  },
  "warning"?: string,
}
export interface UploadVideoPartRequest {
  "video_upload_id": string,
  "part_seq": number,
  "part_md5": string,
  "part_content": string,
}
export interface UploadVideoPartResponse {
  "error"?: string,
  "message"?: string,
  "warning"?: string,
  "request_id"?: string,
}

export class ShopeeMediaApi {
  constructor(private client: ShopeeClient) {}

  /**
   * cancel video upload
   * /api/v2/media/cancel_video_upload (POST)
   */
  async cancelVideoUpload(params: CancelVideoUploadRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CancelVideoUploadResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media/cancel_video_upload","query":[],"body":["video_upload_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * complete video upload
   * /api/v2/media/complete_video_upload (POST)
   */
  async completeVideoUpload(params: CompleteVideoUploadRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<CompleteVideoUploadResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media/complete_video_upload","query":[],"body":["video_upload_id"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * get video upload result
   * /api/v2/media/get_video_upload_result (GET)
   */
  async getVideoUploadResult(params: GetVideoUploadResultRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<GetVideoUploadResultResponse>> {
    return this.client.request({"method":"GET","path":"/api/v2/media/get_video_upload_result","query":["video_upload_id"],"body":[],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * init video upload
   * /api/v2/media/init_video_upload (POST)
   */
  async initVideoUpload(params: InitVideoUploadRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<InitVideoUploadResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media/init_video_upload","query":[],"body":["business","scene","file_name","file_size","duration"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upload image
   * /api/v2/media/upload_image (POST)
   */
  async uploadImage(params: UploadImageRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UploadImageResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media/upload_image","query":[],"body":["business","scene","images"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upload video part
   * /api/v2/media/upload_video_part (POST)
   */
  async uploadVideoPart(params: UploadVideoPartRequest, opts?: ShopeeRequestOptions): Promise<ApiResponse<UploadVideoPartResponse>> {
    return this.client.request({"method":"POST","path":"/api/v2/media/upload_video_part","query":[],"body":["video_upload_id","part_seq","part_md5","part_content"],"scope":"shop"}, params as unknown as Record<string, unknown>, opts)
  }
}
