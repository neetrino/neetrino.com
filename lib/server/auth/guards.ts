import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getAdminSessionCookieName,
  verifyAdminSessionToken,
  type AdminSession,
} from "@/lib/server/auth/session";

export class AdminUnauthorizedError extends Error {
  constructor() {
    super("Unauthorized admin request.");
    this.name = "AdminUnauthorizedError";
  }
}

export async function getCurrentAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminSessionCookieName())?.value;

  return token ? verifyAdminSessionToken(token) : null;
}

export async function requireAdminSession(): Promise<AdminSession> {
  const session = await getCurrentAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

export async function requireAdminApiSession(): Promise<AdminSession> {
  const session = await getCurrentAdminSession();
  if (!session) {
    throw new AdminUnauthorizedError();
  }

  return session;
}
