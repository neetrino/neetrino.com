import { hashAdminPassword } from "../lib/server/auth/password";

async function main(): Promise<void> {
  const password = process.argv[2];
  if (!password) {
    throw new Error("Usage: pnpm tsx scripts/generate-admin-password-hash.ts <password>");
  }

  const hash = await hashAdminPassword(password);
  process.stdout.write(`${hash}\n`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
