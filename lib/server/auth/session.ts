import { SignJWT, jwtVerify } from "jose";

const ADMIN_SESSION_COOKIE_NAME = "neetrino_admin_session";
const DEFAULT_ADMIN_SESSION_TTL_SECONDS = 60 * 60 * 8;
const JWT_ALGORITHM = "HS256";

export type AdminSession = {
  readonly email: string;
  readonly role: "admin";
};

export type AdminSessionCookieOptions = {
  readonly httpOnly: true;
  readonly secure: boolean;
  readonly sameSite: "lax";
  readonly path: "/";
  readonly maxAge: number;
};

export function getAdminSessionCookieName(): string {
  return process.env.ADMIN_SESSION_COOKIE_NAME ?? ADMIN_SESSION_COOKIE_NAME;
}

export function getAdminSessionTtlSeconds(): number {
  const rawValue = process.env.ADMIN_SESSION_TTL_SECONDS;
  if (!rawValue) {
    return DEFAULT_ADMIN_SESSION_TTL_SECONDS;
  }

  const parsedValue = Number.parseInt(rawValue, 10);
  return Number.isFinite(parsedValue) && parsedValue > 0
    ? parsedValue
    : DEFAULT_ADMIN_SESSION_TTL_SECONDS;
}

export function getAdminSessionCookieOptions(): AdminSessionCookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: getAdminSessionTtlSeconds(),
  };
}

export async function createAdminSessionToken(email: string): Promise<string> {
  return new SignJWT({ email, role: "admin" satisfies AdminSession["role"] })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setIssuedAt()
    .setExpirationTime(`${getAdminSessionTtlSeconds()}s`)
    .sign(getAuthSecret());
}

export async function verifyAdminSessionToken(token: string): Promise<AdminSession | null> {
  try {
    const verified = await jwtVerify(token, getAuthSecret());
    const email = verified.payload.email;
    const role = verified.payload.role;

    if (typeof email === "string" && email === process.env.ADMIN_EMAIL && role === "admin") {
      return { email, role };
    }

    return null;
  } catch {
    return null;
  }
}

function getAuthSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET is required for admin sessions.");
  }

  return new TextEncoder().encode(secret);
}
