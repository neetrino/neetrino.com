import "server-only";
import { randomBytes } from "node:crypto";

const SECRET_SLUG_BYTE_LENGTH = 24;

/**
 * URL-safe opaque slug for hidden product links (`/p/{secretSlug}`).
 */
export function generateProductSecretSlug(): string {
  return randomBytes(SECRET_SLUG_BYTE_LENGTH).toString("base64url");
}
