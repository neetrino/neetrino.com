import { cookies, headers } from "next/headers";

import { isAdminAuthDebugEnabled } from "@/lib/server/auth/admin-auth-debug";
import {
  getAdminSessionCookieName,
  verifyAdminSessionTokenWithReason,
} from "@/lib/server/auth/session";

/** Temporary diagnostics when ADMIN_AUTH_DEBUG=true — no secrets. */
export async function logAdminServerActionDebug(actionName: string): Promise<void> {
  if (!isAdminAuthDebugEnabled()) {
    return;
  }

  const h = await headers();
  const cookieStore = await cookies();
  const cookieName = getAdminSessionCookieName();
  const token = cookieStore.get(cookieName)?.value;
  const hasCookie = Boolean(token);

  let verifyResult: string;
  let verifyReason: string;
  if (!token) {
    verifyResult = "missing-cookie";
    verifyReason = "missing-cookie";
  } else {
    const v = await verifyAdminSessionTokenWithReason(token);
    verifyResult = v.session ? "valid" : v.reason;
    verifyReason = v.session ? "valid" : v.reason;
  }

  console.log(`[ADMIN DEBUG][action:${actionName}]`, {
    hasCookie,
    verifyResult,
    verifyReason,
    origin: h.get("origin") ?? "",
    host: h.get("host") ?? "",
    forwardedHost: h.get("x-forwarded-host") ?? "",
  });
}
