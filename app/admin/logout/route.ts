import { NextRequest, NextResponse } from "next/server";
import { getRequestRedirectOrigin } from "@/lib/server/auth/request-redirect-origin";
import {
  getAdminSessionCookieAttributes,
  getAdminSessionCookieName,
} from "@/lib/server/auth/session";

export function POST(request: NextRequest): NextResponse {
  const response = NextResponse.redirect(
    new URL("/admin/login", `${getRequestRedirectOrigin(request)}/`),
  );

  response.cookies.delete({
    name: getAdminSessionCookieName(),
    ...getAdminSessionCookieAttributes(),
  });

  return response;
}

export function GET(request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL("/admin/blog", `${getRequestRedirectOrigin(request)}/`));
}
