import "server-only";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { PORTFOLIO_UPLOAD_R2_PREFIX } from "@/lib/constants/portfolio-upload.constants";
import type { BlogCoverR2Config } from "@/lib/server/storage/blog-cover-r2-config";
import { createR2S3Client } from "@/lib/server/storage/create-r2-s3-client";

/**
 * Deletes R2 object only when key is under the current admin portfolio upload prefix.
 */
export async function deletePortfolioMediaFromR2(
  config: BlogCoverR2Config,
  objectKey: string,
): Promise<void> {
  if (!objectKey.startsWith(PORTFOLIO_UPLOAD_R2_PREFIX)) {
    return;
  }
  const client = createR2S3Client(config);
  await client.send(
    new DeleteObjectCommand({
      Bucket: config.bucketName,
      Key: objectKey,
    }),
  );
}
