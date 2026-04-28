import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionCookieName } from "@/lib/server/auth/session";

export function GET(request: NextRequest): NextResponse {
  const response = NextResponse.redirect(new URL("/admin/login", request.url));
  response.cookies.delete(getAdminSessionCookieName());

  return response;
}
