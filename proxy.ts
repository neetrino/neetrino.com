import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { applyAdminAuthDebugHeaders, getRequestHost } from "@/lib/server/auth/admin-auth-debug";
import {
  getAdminSessionCookieName,
  verifyAdminSessionTokenWithReason,
} from "@/lib/server/auth/session";

const intlMiddleware = createMiddleware(routing);

const PUBLIC_ADMIN_PATHS = new Set([
  "/admin/login",
  "/api/admin/auth/login",
  "/api/admin/auth/debug",
]);

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/admin" || pathname.startsWith("/admin/") || isAdminApiPath(pathname)) {
    return handleAdminRequest(request);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/api/admin",
    "/api/admin/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

async function handleAdminRequest(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname;
  const host = getRequestHost(request);

  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    const authResult = pathname === "/admin/login" ? "login-route" : "allowed-api-login";
    const res = NextResponse.next();
    return applyAdminAuthDebugHeaders(res, {
      host,
      pathname,
      authResult,
      authReason: authResult,
      redirectTo: null,
      request,
    });
  }

  const cookieName = getAdminSessionCookieName();
  const token = request.cookies.get(cookieName)?.value;

  if (!token) {
    if (isAdminApiPath(pathname)) {
      const res = NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      return applyAdminAuthDebugHeaders(res, {
        host,
        pathname,
        authResult: "missing-cookie",
        authReason: "missing-cookie",
        redirectTo: null,
        request,
      });
    }

    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    const res = NextResponse.redirect(loginUrl);
    return applyAdminAuthDebugHeaders(res, {
      host,
      pathname,
      authResult: "missing-cookie",
      authReason: "missing-cookie",
      redirectTo: loginUrl.toString(),
      request,
    });
  }

  const { session, reason } = await verifyAdminSessionTokenWithReason(token);
  if (session) {
    const res = NextResponse.next();
    return applyAdminAuthDebugHeaders(res, {
      host,
      pathname,
      authResult: "valid",
      authReason: reason,
      redirectTo: null,
      request,
    });
  }

  if (isAdminApiPath(pathname)) {
    const res = NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return applyAdminAuthDebugHeaders(res, {
      host,
      pathname,
      authResult: reason,
      authReason: reason,
      redirectTo: null,
      request,
    });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  const res = NextResponse.redirect(loginUrl);
  return applyAdminAuthDebugHeaders(res, {
    host,
    pathname,
    authResult: reason,
    authReason: reason,
    redirectTo: loginUrl.toString(),
    request,
  });
}

function isAdminApiPath(pathname: string): boolean {
  return pathname === "/api/admin" || pathname.startsWith("/api/admin/");
}
