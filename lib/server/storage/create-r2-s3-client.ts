import "server-only";
import { S3Client } from "@aws-sdk/client-s3";
import type { BlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";

/**
 * S3 API client for Cloudflare R2.
 * AWS SDK ≥3.729 defaults to CRC32 request checksums; R2 rejects those headers until fully compatible.
 * @see https://developers.cloudflare.com/r2/examples/aws/aws-sdk-js-v3/
 */
export function createR2S3Client(config: BlogCoverR2Config): S3Client {
  return new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
    requestChecksumCalculation: "WHEN_REQUIRED",
    responseChecksumValidation: "WHEN_REQUIRED",
  });
}
