import { NextRequest, NextResponse } from "next/server";

import { isAdminAuthDebugEnabled } from "@/lib/server/auth/admin-auth-debug";
import {
  getAdminSessionCookieName,
  verifyAdminSessionTokenWithReason,
} from "@/lib/server/auth/session";

type AdminAuthDebugJson = {
  host: string;
  xForwardedHost: string;
  origin: string;
  nodeEnv: string;
  vercel: boolean;
  vercelEnv: string;
  vercelUrl: string;
  cookieName: string;
  cookieDomainConfigured: string | null;
  cookiePath: string;
  cookieSecure: boolean;
  cookieSameSite: string;
  hasCookie: boolean;
  cookieCount: number;
  cookieLength: number | null;
  verifyResult: string;
  verifyReason: string;
  adminEmailExists: boolean;
  sessionSecretExists: boolean;
  sessionSecretLength: number | null;
};

function getAuthSecretLength(): number | null {
  const s = process.env.AUTH_SECRET;
  return typeof s === "string" ? s.length : null;
}

function isAuthSecretSufficient(): boolean {
  const len = getAuthSecretLength();
  return len !== null && len >= 32;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (!isAdminAuthDebugEnabled()) {
    return new NextResponse(null, { status: 404 });
  }

  const cookieName = getAdminSessionCookieName();
  const allCookies = request.cookies.getAll();
  const token = request.cookies.get(cookieName)?.value;
  const domainRaw = process.env.ADMIN_SESSION_COOKIE_DOMAIN?.trim();

  let verifyResult: string;
  let verifyReason: string;
  if (!token) {
    verifyResult = "missing-cookie";
    verifyReason = "missing-cookie";
  } else {
    const verified = await verifyAdminSessionTokenWithReason(token);
    verifyResult = verified.session ? "valid" : verified.reason;
    verifyReason = verified.session ? "valid" : verified.reason;
  }

  const body: AdminAuthDebugJson = {
    host: request.headers.get("host") ?? "",
    xForwardedHost: request.headers.get("x-forwarded-host") ?? "",
    origin: request.headers.get("origin") ?? "",
    nodeEnv: process.env.NODE_ENV ?? "",
    vercel: process.env.VERCEL === "1",
    vercelEnv: process.env.VERCEL_ENV ?? "",
    vercelUrl: process.env.VERCEL_URL ?? "",
    cookieName,
    cookieDomainConfigured: domainRaw && domainRaw.length > 0 ? domainRaw : null,
    cookiePath: "/",
    cookieSecure: process.env.NODE_ENV === "production",
    cookieSameSite: "lax",
    hasCookie: Boolean(token),
    cookieCount: allCookies.length,
    cookieLength: token ? token.length : null,
    verifyResult,
    verifyReason,
    adminEmailExists: Boolean(process.env.ADMIN_EMAIL?.trim()),
    sessionSecretExists: isAuthSecretSufficient(),
    sessionSecretLength: getAuthSecretLength(),
  };

  return NextResponse.json(body);
}
