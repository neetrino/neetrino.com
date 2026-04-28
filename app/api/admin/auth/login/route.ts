import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { applyAdminAuthDebugHeaders, getRequestHost } from "@/lib/server/auth/admin-auth-debug";
import { verifyAdminCredentials } from "@/lib/server/auth/password";
import {
  createAdminSessionToken,
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
} from "@/lib/server/auth/session";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
  next: z.string().optional(),
});

function sanitizeNextPath(nextPath: string | undefined): string {
  if (!nextPath || !nextPath.startsWith("/admin") || nextPath.startsWith("/admin/login")) {
    return "/admin/blog";
  }

  return nextPath;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const parsed = loginSchema.safeParse(Object.fromEntries(formData));
    const nextPath = sanitizeNextPath(parsed.success ? parsed.data.next : undefined);

    if (!parsed.success) {
      return redirectToLogin(request, nextPath, "invalid");
    }

    const isValid = await verifyAdminCredentials(parsed.data.email, parsed.data.password);
    if (!isValid) {
      return redirectToLogin(request, nextPath, "invalid");
    }

    const token = await createAdminSessionToken(parsed.data.email);
    const target = createRedirectUrl(request, nextPath);
    const response = NextResponse.redirect(target, { status: 303 });
    response.cookies.set(getAdminSessionCookieName(), token, getAdminSessionCookieOptions());

    return applyAdminAuthDebugHeaders(response, {
      host: getRequestHost(request),
      pathname: request.nextUrl.pathname,
      authResult: "valid",
      redirectTo: target.toString(),
      request,
    });
  } catch (error) {
    console.error("[admin-login] Failed to process admin login.", error);
    return redirectToLogin(request, "/admin/blog", "server");
  }
}

function redirectToLogin(
  request: NextRequest,
  nextPath: string,
  error: "invalid" | "server",
): NextResponse {
  const loginUrl = createRedirectUrl(request, "/admin/login");
  loginUrl.searchParams.set("error", error);
  loginUrl.searchParams.set("next", nextPath);

  const response = NextResponse.redirect(loginUrl, { status: 303 });
  return applyAdminAuthDebugHeaders(response, {
    host: getRequestHost(request),
    pathname: request.nextUrl.pathname,
    authResult: error === "server" ? "unknown-error" : "invalid-token",
    authReason: error,
    redirectTo: loginUrl.toString(),
    request,
  });
}

function createRedirectUrl(request: NextRequest, path: string): URL {
  const host = request.headers.get("host") ?? request.nextUrl.host;
  const protocol =
    request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");

  return new URL(path, `${protocol}://${host}`);
}
