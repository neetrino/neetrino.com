import type { NextConfig } from "next";

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
    ],
  },
};

export default nextConfig;
