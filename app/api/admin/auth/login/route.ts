import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  applyAdminAuthDebugHeaders,
  getRequestHost,
  isAdminAuthDebugEnabled,
} from "@/lib/server/auth/admin-auth-debug";
import { verifyAdminCredentials } from "@/lib/server/auth/password";
import {
  createAdminSessionToken,
  getAdminSessionCookieAttributes,
  getAdminSessionCookieName,
  getAdminSessionCookieOptions,
  normalizeAdminEmail,
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
      if (isAdminAuthDebugEnabled()) {
        console.log("[ADMIN DEBUG][login]", {
          phase: "validation-failed",
          method: request.method,
          credentialsValid: false,
          setCookieWillBeSet: false,
          nextPath,
          cookieName: getAdminSessionCookieName(),
        });
      }
      return redirectToLogin(request, nextPath, "invalid");
    }

    const isValid = await verifyAdminCredentials(parsed.data.email, parsed.data.password);
    if (!isValid) {
      if (isAdminAuthDebugEnabled()) {
        console.log("[ADMIN DEBUG][login]", {
          phase: "credentials-invalid",
          method: request.method,
          emailNormalized: normalizeAdminEmail(parsed.data.email),
          credentialsValid: false,
          setCookieWillBeSet: false,
          nextPath,
          cookieName: getAdminSessionCookieName(),
        });
      }
      return redirectToLogin(request, nextPath, "invalid");
    }

    const token = await createAdminSessionToken(parsed.data.email);
    const target = createRedirectUrl(request, nextPath);
    const response = NextResponse.redirect(target, { status: 303 });
    const cookieOpts = getAdminSessionCookieOptions();
    const cookieAttrs = getAdminSessionCookieAttributes();
    response.cookies.set(getAdminSessionCookieName(), token, cookieOpts);

    if (isAdminAuthDebugEnabled()) {
      console.log("[ADMIN DEBUG][login]", {
        phase: "success",
        method: request.method,
        emailNormalized: normalizeAdminEmail(parsed.data.email),
        credentialsValid: true,
        setCookieWillBeSet: true,
        redirectTarget: target.toString(),
        cookieName: getAdminSessionCookieName(),
        cookiePath: cookieAttrs.path,
        cookieDomain: cookieAttrs.domain ?? "(host-only)",
        cookieSecure: cookieAttrs.secure,
        cookieSameSite: cookieAttrs.sameSite,
        cookieMaxAgeSeconds: cookieOpts.maxAge,
      });
    }

    return applyAdminAuthDebugHeaders(response, {
      host: getRequestHost(request),
      pathname: request.nextUrl.pathname,
      authResult: "valid",
      authReason: "valid",
      redirectTo: target.toString(),
      request,
    });
  } catch (error) {
    console.error("[admin-login] Failed to process admin login.", error);
    if (isAdminAuthDebugEnabled()) {
      console.log("[ADMIN DEBUG][login]", {
        phase: "server-error",
        method: request.method,
        credentialsValid: false,
        setCookieWillBeSet: false,
        cookieName: getAdminSessionCookieName(),
      });
    }
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

/** Same-origin redirect target — uses NextRequest URL so scheme/host match the browser (avoids http/wrong-host Location vs Secure cookies on Vercel). */
function createRedirectUrl(request: NextRequest, path: string): URL {
  const url = request.nextUrl.clone();
  url.pathname = path;
  url.search = "";
  url.hash = "";
  return url;
}
