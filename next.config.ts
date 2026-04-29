import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

function parseAdminServerActionAllowedOrigins(): string[] | undefined {
  const raw = process.env.ADMIN_SERVER_ACTION_ALLOWED_ORIGINS?.trim();
  if (!raw) {
    return undefined;
  }

  const list = raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  return list.length > 0 ? list : undefined;
}

const adminServerActionAllowedOrigins = parseAdminServerActionAllowedOrigins();

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.15.237", "192.168.18.52"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 70, 75],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  ...(adminServerActionAllowedOrigins
    ? {
        experimental: {
          serverActions: {
            allowedOrigins: adminServerActionAllowedOrigins,
          },
        },
      }
    : {}),
};

export default withNextIntl(nextConfig);
