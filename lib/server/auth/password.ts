import bcrypt from "bcryptjs";

const ADMIN_PASSWORD_HASH_ROUNDS = 12;

export async function hashAdminPassword(password: string): Promise<string> {
  return bcrypt.hash(password, ADMIN_PASSWORD_HASH_ROUNDS);
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !passwordHash || email !== adminEmail) {
    return false;
  }

  return bcrypt.compare(password, passwordHash);
}
