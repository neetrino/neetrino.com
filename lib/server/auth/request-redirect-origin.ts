import type { NextRequest } from "next/server";

function isBindAllHost(host: string): boolean {
  return host === "0.0.0.0" || host.startsWith("0.0.0.0:");
}

/**
 * Origin (`scheme://host[:port]`) for same-origin redirects.
 * With `next dev --hostname 0.0.0.0`, `request.nextUrl` / `request.url` may use
 * `http://0.0.0.0:3000`, producing unusable `Location` headers when the user
 * opened the app via `localhost` or a LAN address. Prefer the `Host` header.
 */
export function getRequestRedirectOrigin(request: NextRequest): string {
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();

  if (forwardedHost) {
    const proto = forwardedProto ?? "https";
    return `${proto}://${forwardedHost}`;
  }

  const hostHeader = request.headers.get("host")?.trim() ?? "";
  if (hostHeader && !isBindAllHost(hostHeader)) {
    const fromNext = request.nextUrl.protocol.replace(":", "");
    const proto = forwardedProto ?? (fromNext.length > 0 ? fromNext : "http");
    return `${proto}://${hostHeader}`;
  }

  const nu = request.nextUrl;
  const hostname = nu.hostname === "0.0.0.0" ? "localhost" : nu.hostname;
  const port = nu.port ? `:${nu.port}` : "";
  const fromNextFallback = nu.protocol.replace(":", "");
  const proto = fromNextFallback.length > 0 ? fromNextFallback : "http";
  return `${proto}://${hostname}${port}`;
}
