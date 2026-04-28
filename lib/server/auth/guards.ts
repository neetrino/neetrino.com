import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isAdminAuthDebugEnabled } from "@/lib/server/auth/admin-auth-debug";
import {
  getAdminSessionCookieName,
  verifyAdminSessionToken,
  verifyAdminSessionTokenWithReason,
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
  const cookieStore = await cookies();
  const cookieName = getAdminSessionCookieName();
  const token = cookieStore.get(cookieName)?.value;

  if (!token) {
    if (isAdminAuthDebugEnabled()) {
      console.log("[ADMIN DEBUG][guard]", {
        route: "requireAdminSession",
        hasCookie: false,
        cookieName,
        verifyResult: "missing-cookie",
        verifyReason: "missing-cookie",
        redirectTo: "/admin/login",
      });
    }
    redirect("/admin/login");
  }

  const { session, reason } = await verifyAdminSessionTokenWithReason(token);
  if (!session) {
    if (isAdminAuthDebugEnabled()) {
      console.log("[ADMIN DEBUG][guard]", {
        route: "requireAdminSession",
        hasCookie: true,
        cookieName,
        verifyResult: reason,
        verifyReason: reason,
        redirectTo: "/admin/login",
      });
    }
    redirect("/admin/login");
  }

  if (isAdminAuthDebugEnabled()) {
    console.log("[ADMIN DEBUG][guard]", {
      route: "requireAdminSession",
      hasCookie: true,
      cookieName,
      verifyResult: "valid",
      verifyReason: reason,
      redirectTo: null,
    });
  }

  return session;
}

export async function requireAdminApiSession(): Promise<AdminSession> {
  const cookieStore = await cookies();
  const cookieName = getAdminSessionCookieName();
  const token = cookieStore.get(cookieName)?.value;

  if (!token) {
    if (isAdminAuthDebugEnabled()) {
      console.log("[ADMIN DEBUG][guard]", {
        route: "requireAdminApiSession",
        hasCookie: false,
        cookieName,
        verifyResult: "missing-cookie",
        verifyReason: "missing-cookie",
        redirectTo: null,
      });
    }
    throw new AdminUnauthorizedError();
  }

  const { session, reason } = await verifyAdminSessionTokenWithReason(token);
  if (!session) {
    if (isAdminAuthDebugEnabled()) {
      console.log("[ADMIN DEBUG][guard]", {
        route: "requireAdminApiSession",
        hasCookie: true,
        cookieName,
        verifyResult: reason,
        verifyReason: reason,
        redirectTo: null,
      });
    }
    throw new AdminUnauthorizedError();
  }

  if (isAdminAuthDebugEnabled()) {
    console.log("[ADMIN DEBUG][guard]", {
      route: "requireAdminApiSession",
      hasCookie: true,
      cookieName,
      verifyResult: "valid",
      verifyReason: reason,
      redirectTo: null,
    });
  }

  return session;
}
