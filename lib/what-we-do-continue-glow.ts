import type { ServiceSlug } from "@/components/services/service-pages-data";
import type { WhatWeDoContinueGlowVariant } from "@/lib/what-we-do-continue-pill-themes";

/** Slugs rendered in the What we do section (home + mobile catalog). */
export type WhatWeDoCardSlug = Extract<
  ServiceSlug,
  | "website-development"
  | "mobile-app-development"
  | "saas-development"
  | "crm-systems"
  | "ai-product-development"
>;

/** Continue pill hover accent per What we do card (matches tile background). */
export const WHAT_WE_DO_CONTINUE_GLOW_BY_SLUG: Record<
  WhatWeDoCardSlug,
  WhatWeDoContinueGlowVariant
> = {
  "website-development": "website",
  "mobile-app-development": "mobile",
  "saas-development": "saas",
  "crm-systems": "crm",
  "ai-product-development": "ai",
};

export function whatWeDoContinueGlowForSlug(slug: WhatWeDoCardSlug): WhatWeDoContinueGlowVariant {
  return WHAT_WE_DO_CONTINUE_GLOW_BY_SLUG[slug];
}
