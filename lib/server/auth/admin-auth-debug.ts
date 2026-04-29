import type { NextRequest, NextResponse } from "next/server";

import {
  getAdminSessionCookieName,
  type AdminSessionVerifyReason,
} from "@/lib/server/auth/session";

/** Gate outcomes including public routes (diagnostic headers only). */
export type AdminAuthDebugAuthResult =
  | AdminSessionVerifyReason
  | "missing-cookie"
  | "login-route"
  | "allowed-api-login";

const ADMIN_AUTH_DEBUG_ENV = "ADMIN_AUTH_DEBUG";

export function isAdminAuthDebugEnabled(): boolean {
  return process.env[ADMIN_AUTH_DEBUG_ENV] === "true";
}

export type AdminAuthDebugHeaderInput = {
  readonly host: string;
  readonly pathname: string;
  readonly authResult: AdminAuthDebugAuthResult;
  readonly authReason?: string;
  readonly redirectTo?: string | null;
  readonly request: NextRequest;
};

export function applyAdminAuthDebugHeaders(
  response: NextResponse,
  input: AdminAuthDebugHeaderInput,
): NextResponse {
  if (!isAdminAuthDebugEnabled()) {
    return response;
  }

  const cookieName = getAdminSessionCookieName();
  const domainConfigured = process.env.ADMIN_SESSION_COOKIE_DOMAIN?.trim() ?? "";
  const token = input.request.cookies.get(cookieName)?.value;
  const allCookies = input.request.cookies.getAll();

  response.headers.set("x-admin-debug-host", input.host);
  response.headers.set("x-admin-debug-pathname", input.pathname);
  response.headers.set("x-admin-debug-cookie-name", cookieName);
  response.headers.set(
    "x-admin-debug-cookie-domain-configured",
    domainConfigured.length > 0 ? domainConfigured : "(unset)",
  );
  response.headers.set("x-admin-debug-has-cookie", token ? "true" : "false");
  response.headers.set("x-admin-debug-cookie-count", String(allCookies.length));
  response.headers.set("x-admin-debug-auth-result", input.authResult);
  if (input.authReason !== undefined) {
    response.headers.set("x-admin-debug-auth-reason", input.authReason);
  }
  if (input.redirectTo !== undefined && input.redirectTo !== null) {
    response.headers.set("x-admin-debug-redirect-to", input.redirectTo);
  }

  return response;
}

export function getRequestHost(request: NextRequest): string {
  return request.headers.get("host") ?? request.nextUrl.host ?? "";
}
