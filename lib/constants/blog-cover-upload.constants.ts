/** Max upload size for blog cover images (5 MiB). */
export const BLOG_COVER_UPLOAD_MAX_BYTES = 5 * 1024 * 1024;

/** Allowed MIME types for admin blog cover upload (no SVG). */
export const BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
] as const;

export type BlogCoverUploadMimeType = (typeof BLOG_COVER_UPLOAD_ALLOWED_MIME_TYPES)[number];

/** Form field name for multipart upload. */
export const BLOG_COVER_UPLOAD_FORM_FIELD = "file";
