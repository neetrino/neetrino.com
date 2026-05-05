/**
 * Used by `next.config.ts` only — keep this file free of `server-only` and DB imports.
 * @see https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
 */
type RemotePattern = {
  protocol: "http" | "https";
  hostname: string;
  port?: string;
  pathname?: string;
  search?: string;
};

const STATIC_PATTERNS: RemotePattern[] = [
  { protocol: "https", hostname: "cdn.neetrino.com", pathname: "/**" },
  { protocol: "https", hostname: "www.figma.com", pathname: "/api/mcp/**" },
];

function parseHttpsHostname(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }
  try {
    const url = new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`);
    if (url.protocol !== "https:") {
      return null;
    }
    return url.hostname.length > 0 ? url.hostname : null;
  } catch {
    return null;
  }
}

function extraHostsFromEnv(): RemotePattern[] {
  const raw = process.env.BLOG_IMAGE_REMOTE_HOSTNAMES?.trim();
  if (!raw) {
    return [];
  }
  const patterns: RemotePattern[] = [];
  for (const part of raw.split(",")) {
    const hostname = parseHttpsHostname(part);
    if (hostname) {
      patterns.push({ protocol: "https", hostname, pathname: "/**" });
    }
  }
  return patterns;
}

function r2HostPatternFromEnv(): RemotePattern | null {
  const raw = process.env.R2_PUBLIC_URL?.trim();
  if (!raw) {
    return null;
  }
  const hostname = parseHttpsHostname(raw);
  if (!hostname) {
    return null;
  }
  return { protocol: "https", hostname, pathname: "/**" };
}

export function getBlogImageRemotePatterns(): RemotePattern[] {
  const r2 = r2HostPatternFromEnv();
  return [...STATIC_PATTERNS, ...extraHostsFromEnv(), ...(r2 ? [r2] : [])];
}
