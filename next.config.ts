import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";
import { getBlogImageRemotePatterns } from "./lib/build/blog-image-remote-patterns";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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

function parseAllowedDevOrigins(): string[] {
  const defaults = ["localhost", "127.0.0.1", "192.168.15.126", "192.168.15.237", "192.168.18.52"];

  const raw = process.env.DEV_ALLOWED_ORIGINS?.trim();
  if (!raw) {
    return defaults;
  }

  const extra = raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return [...new Set([...defaults, ...extra])];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: parseAllowedDevOrigins(),
  /**
   * Browsers request `/favicon.ico` by default; App Router serves `app/icon.svg` as `/icon.svg`.
   * Rewrite so legacy `/favicon.ico` requests resolve to the same asset.
   */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.svg" }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 70, 75],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: getBlogImageRemotePatterns(),
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

export default withBundleAnalyzer(withNextIntl(nextConfig));
