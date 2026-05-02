import "server-only";

export type BlogCoverR2Config = {
  readonly accountId: string;
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly bucketName: string;
  /** HTTPS base without trailing slash (object key appended as /{key}). */
  readonly publicBaseUrl: string;
};

function trimEnv(value: string | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Normalizes R2 public base URL (supports host-only or full https URL).
 */
export function normalizeR2PublicBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new Error("R2_PUBLIC_URL is empty.");
  }

  const withProtocol = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
  const url = new URL(withProtocol);
  if (url.protocol !== "https:") {
    throw new Error("R2_PUBLIC_URL must use https.");
  }

  const path = url.pathname.replace(/\/+$/, "");
  const base = path.length > 0 ? `${url.origin}${path}` : url.origin;
  return base.replace(/\/+$/, "");
}

/**
 * Returns R2 credentials for blog cover upload, or null if any required value is missing.
 * Supports R2_ACCOUNT_ID or CF_ACCOUNT_ID (see docs/reference/platforms/03-CLOUDFLARE.md).
 */
export function getBlogCoverR2Config(): BlogCoverR2Config | null {
  const accountId = trimEnv(process.env.R2_ACCOUNT_ID) || trimEnv(process.env.CF_ACCOUNT_ID);
  const accessKeyId = trimEnv(process.env.R2_ACCESS_KEY_ID);
  const secretAccessKey = trimEnv(process.env.R2_SECRET_ACCESS_KEY);
  const bucketName = trimEnv(process.env.R2_BUCKET_NAME);
  const publicRaw = trimEnv(process.env.R2_PUBLIC_URL);

  if (!accountId || !accessKeyId || !secretAccessKey || !bucketName || !publicRaw) {
    return null;
  }

  try {
    const publicBaseUrl = normalizeR2PublicBaseUrl(publicRaw);
    return {
      accountId,
      accessKeyId,
      secretAccessKey,
      bucketName,
      publicBaseUrl,
    };
  } catch {
    return null;
  }
}
