import { SignJWT, jwtVerify } from "jose";

const ADMIN_SESSION_COOKIE_NAME = "neetrino_admin_session";
const DEFAULT_ADMIN_SESSION_TTL_SECONDS = 60 * 60 * 8;
const JWT_ALGORITHM = "HS256";

export type AdminSession = {
  readonly email: string;
  readonly role: "admin";
};

export type AdminSessionCookieAttributes = {
  readonly httpOnly: true;
  readonly secure: boolean;
  readonly sameSite: "lax";
  readonly path: "/";
  readonly domain?: string;
};

export type AdminSessionCookieOptions = AdminSessionCookieAttributes & {
  readonly maxAge: number;
};

/** Normalizes admin email for comparison and JWT payload (case/spacing). */
export function normalizeAdminEmail(email: string): string {
  return email.trim().toLowerCase();
}

function getConfiguredAdminEmailNormalized(): string | null {
  const raw = process.env.ADMIN_EMAIL;
  if (!raw) {
    return null;
  }

  return normalizeAdminEmail(raw);
}

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

export function getAdminSessionCookieAttributes(): AdminSessionCookieAttributes {
  const domain = process.env.ADMIN_SESSION_COOKIE_DOMAIN?.trim();
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(domain ? { domain } : {}),
  };
}

export function getAdminSessionCookieOptions(): AdminSessionCookieOptions {
  return {
    ...getAdminSessionCookieAttributes(),
    maxAge: getAdminSessionTtlSeconds(),
  };
}

export async function createAdminSessionToken(email: string): Promise<string> {
  const normalizedEmail = normalizeAdminEmail(email);
  return new SignJWT({ email: normalizedEmail, role: "admin" satisfies AdminSession["role"] })
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
    const configured = getConfiguredAdminEmailNormalized();

    if (
      configured &&
      typeof email === "string" &&
      normalizeAdminEmail(email) === configured &&
      role === "admin"
    ) {
      return { email: normalizeAdminEmail(email), role };
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
  if (secret.length < 32) {
    throw new Error("AUTH_SECRET must be at least 32 characters for admin sessions.");
  }

  return new TextEncoder().encode(secret);
}
