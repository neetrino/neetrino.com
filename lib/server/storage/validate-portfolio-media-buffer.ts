import "server-only";
import type { PortfolioUploadMimeType } from "@/lib/constants/portfolio-upload.constants";

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function isGif(buffer: Buffer): boolean {
  if (buffer.length < 6) {
    return false;
  }
  const sig = buffer.subarray(0, 6).toString("ascii");
  return sig === "GIF87a" || sig === "GIF89a";
}

/**
 * Verifies buffer matches declared portfolio MIME (reduces Content-Type spoofing).
 */
export function bufferMatchesPortfolioMediaMime(
  buffer: Buffer,
  mime: PortfolioUploadMimeType,
): boolean {
  if (buffer.length < 12) {
    return false;
  }

  if (mime === "image/gif") {
    return isGif(buffer);
  }

  if (mime === "image/jpeg") {
    return buffer[0] === 0xff && buffer[1] === 0xd8;
  }

  if (mime === "image/png") {
    return buffer.subarray(0, 8).equals(PNG_SIG);
  }

  if (mime === "image/webp") {
    return (
      buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
      buffer.subarray(8, 12).toString("ascii") === "WEBP"
    );
  }

  return false;
}

export function isAllowedPortfolioUploadMimeType(value: string): value is PortfolioUploadMimeType {
  return (
    value === "image/webp" ||
    value === "image/png" ||
    value === "image/jpeg" ||
    value === "image/gif"
  );
}
