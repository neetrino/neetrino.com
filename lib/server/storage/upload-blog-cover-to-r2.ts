import "server-only";
import { randomBytes } from "node:crypto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {
  BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES,
  type BlogCoverUploadMimeType,
} from "@/lib/constants/blog-cover-upload.constants";
import type { BlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";

const MIME_TO_EXT: Record<BlogCoverUploadMimeType, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

function buildS3Client(config: BlogCoverR2Config): S3Client {
  return new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });
}

function sanitizeOriginalBaseName(originalName: string): string {
  const base = originalName.replace(/\\/g, "/").split("/").pop() ?? "image";
  const withoutExt = base.replace(/\.[^.]+$/, "");
  const ascii = withoutExt
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return ascii.length > 0 ? ascii : "image";
}

function buildObjectKey(mime: BlogCoverUploadMimeType, originalName: string): string {
  const now = new Date();
  const year = String(now.getUTCFullYear());
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const unique = randomBytes(16).toString("hex");
  const ext = MIME_TO_EXT[mime];
  const safeBase = sanitizeOriginalBaseName(originalName);
  return `blog/${year}/${month}/${unique}-${safeBase}.${ext}`;
}

function buildPublicObjectUrl(config: BlogCoverR2Config, objectKey: string): string {
  return `${config.publicBaseUrl}/${objectKey}`;
}

export type UploadBlogCoverToR2Params = {
  readonly buffer: Buffer;
  readonly contentType: BlogCoverUploadMimeType;
  readonly originalFileName: string;
};

export type UploadBlogCoverToR2Result = {
  readonly publicUrl: string;
  readonly objectKey: string;
};

/**
 * Uploads a validated image buffer to R2 under blog/YYYY/MM/.
 */
export async function uploadBlogCoverToR2(
  config: BlogCoverR2Config,
  params: UploadBlogCoverToR2Params,
): Promise<UploadBlogCoverToR2Result> {
  const objectKey = buildObjectKey(params.contentType, params.originalFileName);
  const client = buildS3Client(config);

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
    publicUrl: buildPublicObjectUrl(config, objectKey),
  };
}

export function isAllowedBlogCoverMimeType(value: string): value is BlogCoverUploadMimeType {
  return (BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES as readonly string[]).includes(value);
}
