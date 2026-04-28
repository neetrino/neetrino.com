import bcrypt from "bcryptjs";

const ADMIN_PASSWORD_HASH_ROUNDS = 12;
const BCRYPT_HASH_PREFIXES = ["$2a$", "$2b$", "$2y$"] as const;

export async function hashAdminPassword(password: string): Promise<string> {
  return bcrypt.hash(password, ADMIN_PASSWORD_HASH_ROUNDS);
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !passwordHash || email !== adminEmail) {
    return false;
  }

  const normalizedPasswordHash = normalizePasswordHash(passwordHash);
  if (!isBcryptHash(normalizedPasswordHash)) {
    console.error("[admin-login] Invalid ADMIN_PASSWORD_HASH format.");
    return false;
  }

  try {
    return await bcrypt.compare(password, normalizedPasswordHash);
  } catch (error) {
    console.error("[admin-login] Failed to verify admin password hash.", error);
    return false;
  }
}

function normalizePasswordHash(passwordHash: string): string {
  return passwordHash.trim().replaceAll("\\$", "$");
}

function isBcryptHash(passwordHash: string): boolean {
  return BCRYPT_HASH_PREFIXES.some((prefix) => passwordHash.startsWith(prefix));
}
