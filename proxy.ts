import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import {
  applyAdminAuthDebugHeaders,
  getRequestHost,
  isAdminAuthDebugEnabled,
} from "@/lib/server/auth/admin-auth-debug";
import { getRequestRedirectOrigin } from "@/lib/server/auth/request-redirect-origin";
import {
  getAdminSessionCookieName,
  verifyAdminSessionTokenWithReason,
} from "@/lib/server/auth/session";

const intlMiddleware = createMiddleware(routing);

/** First visit uses `routing.defaultLocale`; returning users keep `NEXT_LOCALE` from the switcher. */
function requestWithoutAcceptLanguage(request: NextRequest): NextRequest {
  const headers = new Headers(request.headers);
  headers.delete("accept-language");
  return new NextRequest(request.url, { headers });
}

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

  return intlMiddleware(requestWithoutAcceptLanguage(request));
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/api/admin",
    "/api/admin/:path*",
    // Exclude `icon` / `apple-icon` — Next metadata routes have no “.” so `.*\\..*` would not skip them;
    // without this, next-intl proxy intercepts `/icon` and the tab icon never loads.
    "/((?!api|wc-api|_next|_vercel|icon$|icon/|apple-icon$|apple-icon/|.*\\..*).*)",
  ],
};

async function handleAdminRequest(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname;
  const host = getRequestHost(request);
  const method = request.method;
  const cookieName = getAdminSessionCookieName();
  const token = request.cookies.get(cookieName)?.value;
  const hasCookie = Boolean(token);

  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    const authResult = pathname === "/admin/login" ? "login-route" : "allowed-api-login";
    logAdminProxyDebug({
      pathname,
      method,
      host,
      hasCookie,
      cookieName,
      authResult,
      authReason: authResult,
      redirectTo: null,
      isPublicAdminPath: true,
    });
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

  if (!token) {
    if (isAdminApiPath(pathname)) {
      logAdminProxyDebug({
        pathname,
        method,
        host,
        hasCookie,
        cookieName,
        authResult: "missing-cookie",
        authReason: "missing-cookie",
        redirectTo: null,
        isPublicAdminPath: false,
      });
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

    const loginUrl = new URL("/admin/login", `${getRequestRedirectOrigin(request)}/`);
    loginUrl.searchParams.set("next", pathname);
    logAdminProxyDebug({
      pathname,
      method,
      host,
      hasCookie,
      cookieName,
      authResult: "missing-cookie",
      authReason: "missing-cookie",
      redirectTo: loginUrl.toString(),
      isPublicAdminPath: false,
    });
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
    logAdminProxyDebug({
      pathname,
      method,
      host,
      hasCookie,
      cookieName,
      authResult: "valid",
      authReason: reason,
      redirectTo: null,
      isPublicAdminPath: false,
    });
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
    logAdminProxyDebug({
      pathname,
      method,
      host,
      hasCookie,
      cookieName,
      authResult: reason,
      authReason: reason,
      redirectTo: null,
      isPublicAdminPath: false,
    });
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

  const loginUrl = new URL("/admin/login", `${getRequestRedirectOrigin(request)}/`);
  loginUrl.searchParams.set("next", pathname);
  logAdminProxyDebug({
    pathname,
    method,
    host,
    hasCookie,
    cookieName,
    authResult: reason,
    authReason: reason,
    redirectTo: loginUrl.toString(),
    isPublicAdminPath: false,
  });
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

type AdminProxyDebugPayload = {
  readonly pathname: string;
  readonly method: string;
  readonly host: string;
  readonly hasCookie: boolean;
  readonly cookieName: string;
  readonly authResult: string;
  readonly authReason: string;
  readonly redirectTo: string | null;
  readonly isPublicAdminPath: boolean;
};

function logAdminProxyDebug(payload: AdminProxyDebugPayload): void {
  if (!isAdminAuthDebugEnabled()) {
    return;
  }

  console.log("[ADMIN DEBUG][proxy]", payload);
}
