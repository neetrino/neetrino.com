import os from "node:os";

const STATIC_DEV_ORIGINS = ["localhost", "127.0.0.1"] as const;

function isPublicIpv4(family: string | number, internal: boolean | undefined): boolean {
  return (family === "IPv4" || family === 4) && internal !== true;
}

/** Non-loopback IPv4 addresses on this machine (Wi‑Fi / Ethernet). */
export function collectLocalNetworkIpv4Origins(): string[] {
  const ips = new Set<string>();

  for (const interfaces of Object.values(os.networkInterfaces())) {
    if (interfaces == null) {
      continue;
    }
    for (const iface of interfaces) {
      if (isPublicIpv4(iface.family, iface.internal)) {
        ips.add(iface.address);
      }
    }
  }

  return [...ips];
}

function parseDevAllowedOriginsFromEnv(): string[] {
  const raw = process.env.DEV_ALLOWED_ORIGINS?.trim();
  if (!raw) {
    return [];
  }

  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

/**
 * Next.js dev guard: allow localhost plus every current LAN IPv4 on this machine.
 * Optional `DEV_ALLOWED_ORIGINS` adds extras (e.g. a teammate's machine on the same subnet).
 */
export function getDevAllowedOrigins(): string[] {
  return [
    ...new Set([
      ...STATIC_DEV_ORIGINS,
      ...collectLocalNetworkIpv4Origins(),
      ...parseDevAllowedOriginsFromEnv(),
    ]),
  ];
}
