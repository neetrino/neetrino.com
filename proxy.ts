import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { getAdminSessionCookieName, verifyAdminSessionToken } from "@/lib/server/auth/session";

const intlMiddleware = createMiddleware(routing);

const PUBLIC_ADMIN_PATHS = new Set(["/admin/login", "/api/admin/auth/login"]);

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
  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(getAdminSessionCookieName())?.value;
  const session = token ? await verifyAdminSessionToken(token) : null;
  if (session) {
    return NextResponse.next();
  }

  if (isAdminApiPath(pathname)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);

  return NextResponse.redirect(loginUrl);
}

function isAdminApiPath(pathname: string): boolean {
  return pathname === "/api/admin" || pathname.startsWith("/api/admin/");
}
