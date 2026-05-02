import "server-only";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import {
  PORTFOLIO_UPLOAD_ALLOWED_EXTENSIONS,
  PORTFOLIO_UPLOAD_R2_PREFIX,
} from "@/lib/constants/portfolio-upload.constants";
import type { BlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import { createR2S3Client } from "@/lib/server/storage/create-r2-s3-client";

function hasAllowedExtension(key: string): boolean {
  const lower = key.toLowerCase();
  return (PORTFOLIO_UPLOAD_ALLOWED_EXTENSIONS as readonly string[]).some((ext) =>
    lower.endsWith(ext),
  );
}

export type ListPortfolioUploadsFromR2Result = {
  readonly keys: string[];
  readonly isTruncated: boolean;
  readonly nextContinuationToken: string | undefined;
};

/**
 * Lists object keys under `portfolio/upload/` only (single prefix, paginated).
 */
export async function listPortfolioUploadsFromR2(
  config: BlogCoverR2Config,
  continuationToken?: string,
): Promise<ListPortfolioUploadsFromR2Result> {
  const client = createR2S3Client(config);
  const out = await client.send(
    new ListObjectsV2Command({
      Bucket: config.bucketName,
      Prefix: PORTFOLIO_UPLOAD_R2_PREFIX,
      ContinuationToken: continuationToken,
      MaxKeys: 1000,
    }),
  );

  const keys: string[] = [];
  for (const obj of out.Contents ?? []) {
    const key = obj.Key;
    if (!key || key.endsWith("/")) {
      continue;
    }
    if (!hasAllowedExtension(key)) {
      continue;
    }
    keys.push(key);
  }

  return {
    keys,
    isTruncated: Boolean(out.IsTruncated),
    nextContinuationToken: out.NextContinuationToken,
  };
}
