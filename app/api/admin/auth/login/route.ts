import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
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
  const formData = await request.formData();
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));
  const nextPath = sanitizeNextPath(parsed.success ? parsed.data.next : undefined);

  if (!parsed.success) {
    return redirectToLogin(request, nextPath);
  }

  const isValid = await verifyAdminCredentials(parsed.data.email, parsed.data.password);
  if (!isValid) {
    return redirectToLogin(request, nextPath);
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url));
  const token = await createAdminSessionToken(parsed.data.email);
  response.cookies.set(getAdminSessionCookieName(), token, getAdminSessionCookieOptions());

  return response;
}

function redirectToLogin(request: NextRequest, nextPath: string): NextResponse {
  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("error", "invalid");
  loginUrl.searchParams.set("next", nextPath);

  return NextResponse.redirect(loginUrl);
}
