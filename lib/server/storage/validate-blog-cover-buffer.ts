import "server-only";
import type { BlogCoverUploadMimeType } from "@/lib/constants/blog-cover-upload.constants";

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/**
 * Verifies that the buffer matches the declared image type (reduces Content-Type spoofing).
 */
export function bufferMatchesBlogCoverMime(buffer: Buffer, mime: BlogCoverUploadMimeType): boolean {
  if (buffer.length < 12) {
    return false;
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

  if (mime === "image/avif") {
    const slice = buffer.subarray(0, Math.min(64, buffer.length));
    return slice.includes(Buffer.from("ftyp"));
  }

  return false;
}
