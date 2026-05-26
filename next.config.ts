import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";
import { getBlogImageRemotePatterns } from "./lib/build/blog-image-remote-patterns";
import { getDevAllowedOrigins } from "./lib/build/dev-allowed-origins";

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

const nextConfig: NextConfig = {
  allowedDevOrigins: getDevAllowedOrigins(),
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
