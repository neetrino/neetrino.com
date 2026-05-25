import "server-only";
import { randomUUID } from "node:crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import type { PortfolioUploadMimeType } from "@/lib/constants/portfolio-upload.constants";
import { PORTFOLIO_UPLOAD_R2_PREFIX } from "@/lib/constants/portfolio-upload.constants";
import { buildPortfolioPublicUrl } from "@/lib/portfolio/build-portfolio-public-url";
import type { BlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import { createR2S3Client } from "@/lib/server/storage/create-r2-s3-client";

const MIME_TO_EXT: Record<PortfolioUploadMimeType, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "video/webm": "webm",
};

function utcDateSlug(): string {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function buildObjectKey(mime: PortfolioUploadMimeType): string {
  const ext = MIME_TO_EXT[mime];
  const id = randomUUID();
  return `${PORTFOLIO_UPLOAD_R2_PREFIX}${utcDateSlug()}-${id}.${ext}`;
}

export type UploadPortfolioMediaToR2Params = {
  readonly buffer: Buffer;
  readonly contentType: PortfolioUploadMimeType;
};

export type UploadPortfolioMediaToR2Result = {
  readonly publicUrl: string;
  readonly objectKey: string;
};

/**
 * Uploads validated image/GIF/WebM buffer to R2 under {@link PORTFOLIO_UPLOAD_R2_PREFIX}.
 */
export async function uploadPortfolioMediaToR2(
  config: BlogCoverR2Config,
  params: UploadPortfolioMediaToR2Params,
): Promise<UploadPortfolioMediaToR2Result> {
  const objectKey = buildObjectKey(params.contentType);
  const client = createR2S3Client(config);

  await client.send(
    new PutObjectCommand({
      Bucket: config.bucketName,
      Key: objectKey,
      Body: params.buffer,
      ContentType: params.contentType,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );

  return {
    objectKey,
    publicUrl: buildPortfolioPublicUrl(objectKey),
  };
}
