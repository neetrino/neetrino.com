/** Max upload size for portfolio card images/GIFs (10 MiB). */
export const PORTFOLIO_UPLOAD_MAX_BYTES = 10 * 1024 * 1024;

/** Form field name for multipart upload. */
export const PORTFOLIO_UPLOAD_FORM_FIELD = "file" as const;

/** Retries DB create after P2002 (slot/key race) or orphan R2 cleanup; each attempt uses a new object key. */
export const PORTFOLIO_UPLOAD_DB_ATTEMPTS_MAX = 5;

export const PORTFOLIO_UPLOAD_ALLOWED_EXTENSIONS = [
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
] as const;

export type PortfolioUploadExtension = (typeof PORTFOLIO_UPLOAD_ALLOWED_EXTENSIONS)[number];

export const PORTFOLIO_UPLOAD_ALLOWED_MIME_TYPES = [
  "image/webp",
  "image/png",
  "image/jpeg",
  "image/gif",
] as const;

export type PortfolioUploadMimeType = (typeof PORTFOLIO_UPLOAD_ALLOWED_MIME_TYPES)[number];

/**
 * R2 object key prefix for admin-uploaded portfolio cards (singular `upload`).
 * Object keys look like: `portfolio/upload/2026-05-02-<uuid>.webp` (date in filename, no nested folders).
 */
export const PORTFOLIO_UPLOAD_R2_PREFIX = "portfolio/upload/" as const;

/**
 * Legacy admin prefix from an earlier iteration. Existing DB rows may still reference this.
 * Do not delete R2 objects under this prefix from portfolio delete — migrate/copy separately.
 */
export const PORTFOLIO_UPLOAD_R2_PREFIX_LEGACY = "portfolio/uploads/" as const;

/** Reserved prefix for decorative portfolio raster/SVG on R2 (not `PortfolioItem`). */
export const PORTFOLIO_DECOR_R2_PREFIX = "portfolio/decor/" as const;
