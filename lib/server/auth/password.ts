import { timingSafeEqual } from "node:crypto";

import { normalizeAdminEmail } from "@/lib/server/auth/session";

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return false;
  }

  if (normalizeAdminEmail(email) !== normalizeAdminEmail(adminEmail)) {
    return false;
  }

  return compareAdminPassword(password, adminPassword);
}

function compareAdminPassword(provided: string, expected: string): boolean {
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(providedBuffer, expectedBuffer);
}
