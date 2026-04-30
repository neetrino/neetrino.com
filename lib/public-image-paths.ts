import { assetUrl } from "@/lib/assets";
/**
 * Marketing images served from the public CDN (`ASSETS_URL` / `lib/assets.ts`).
 */
export const PUBLIC_IMAGES = {
  whatWeDo: {
    sports00065: assetUrl("images/what-we-do/sports-00065.webp"),
    aiIntegrations276: assetUrl("images/what-we-do/ai-integrations-276.webp"),
  },
  portfolio: {
    portfolio3: assetUrl("images/portfolio/portfolio-3.webp"),
    portfolio4_1: assetUrl("images/portfolio/portfolio-4-1.webp"),
    portfolio6: assetUrl("images/portfolio/portfolio-6.webp"),
    portfolio10: assetUrl("images/portfolio/portfolio-10.webp"),
    portfolio14: assetUrl("images/portfolio/portfolio-14.webp"),
  },
} as const;
