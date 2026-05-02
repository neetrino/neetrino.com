export type PortfolioCardMediaType = "image" | "gif";

/**
 * Detects stored media type from file name extension (admin does not choose manually).
 */
export function getMediaTypeFromFileName(fileName: string): PortfolioCardMediaType {
  const lower = fileName.toLowerCase();
  if (lower.endsWith(".gif")) {
    return "gif";
  }
  return "image";
}
