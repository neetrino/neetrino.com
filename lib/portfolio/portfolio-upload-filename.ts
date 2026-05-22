import {
  PORTFOLIO_UPLOAD_ALLOWED_EXTENSIONS,
  type PortfolioUploadExtension,
} from "@/lib/constants/portfolio-upload.constants";

export function getExtensionLower(fileName: string): string | null {
  const base = fileName.replace(/\\/g, "/").split("/").pop() ?? fileName;
  const dot = base.lastIndexOf(".");
  if (dot < 0) {
    return null;
  }
  return base.slice(dot).toLowerCase();
}

export function isAllowedPortfolioExtension(ext: string | null): ext is PortfolioUploadExtension {
  if (!ext) {
    return false;
  }
  return (PORTFOLIO_UPLOAD_ALLOWED_EXTENSIONS as readonly string[]).includes(ext);
}

export function mimeFromExtension(ext: PortfolioUploadExtension): string {
  if (ext === ".gif") {
    return "image/gif";
  }
  if (ext === ".webm") {
    return "video/webm";
  }
  if (ext === ".png") {
    return "image/png";
  }
  if (ext === ".jpg" || ext === ".jpeg") {
    return "image/jpeg";
  }
  return "image/webp";
}
