import { isVideoAsset } from "@/lib/portfolio/is-video-asset";

export type PortfolioCardMediaType = "image" | "gif" | "video";

/**
 * Detects stored media type from file name extension (admin does not choose manually).
 */
export function getMediaTypeFromFileName(fileName: string): PortfolioCardMediaType {
  const lower = fileName.toLowerCase();
  if (lower.endsWith(".gif")) {
    return "gif";
  }
  if (isVideoAsset(lower)) {
    return "video";
  }
  return "image";
}

/**
 * Normalizes DB `mediaType` string for public/admin rendering (backward compatible).
 */
export function normalizePortfolioCardMediaType(
  stored: string,
  url: string,
): PortfolioCardMediaType {
  if (stored === "gif" || stored === "video") {
    return stored;
  }
  if (stored === "image") {
    return isVideoAsset(url) ? "video" : "image";
  }
  return isVideoAsset(url) ? "video" : getMediaTypeFromFileName(url);
}
