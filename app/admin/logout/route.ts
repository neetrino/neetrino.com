import { NextRequest, NextResponse } from "next/server";
import {
  getAdminSessionCookieAttributes,
  getAdminSessionCookieName,
} from "@/lib/server/auth/session";

export function POST(request: NextRequest): NextResponse {
  const response = NextResponse.redirect(new URL("/admin/login", request.url));

  response.cookies.delete({
    name: getAdminSessionCookieName(),
    ...getAdminSessionCookieAttributes(),
  });

  return response;
}

export function GET(request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL("/admin/blog", request.url));
}
