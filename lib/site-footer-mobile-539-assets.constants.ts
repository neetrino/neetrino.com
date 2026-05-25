import { assetUrl } from "@/lib/assets";

/**
 * Mobile footer art + icons — Figma NEETRINO-WEB `539:1824` (dev).
 * Served from CDN (`assetUrl`); local copies remain under `public/figma-assets/` until cleanup.
 */
export const SITE_FOOTER_MOBILE_539 = {
  vectorGrid: assetUrl("figma-assets/dd9ca3cf-9d5a-45a8-9e73-d22c815195a3.svg"),
  topLine: assetUrl("figma-assets/229c066b-1c19-4357-bb7b-4cf3afd69ca3.svg"),
  contactAddress: assetUrl("figma-assets/d764df54-1d5a-40b7-b4e6-aeb0a261beba.svg"),
  contactEmail: assetUrl("figma-assets/a8d32612-9b53-4fe3-af43-28225df1c3d0.svg"),
  contactPhone: assetUrl("figma-assets/1ec8417a-af18-4656-b150-b83a455f3559.svg"),
  contactHours: assetUrl("figma-assets/048e6c55-0c40-4154-9f0e-1af9f87d8f29.svg"),
  sendArrow: assetUrl("figma-assets/59771851-da11-40b4-a130-a8c388546c5e.svg"),
  socialFacebook: assetUrl("figma-assets/2d436436-91ae-4a5a-814e-daa4dae31245.svg"),
  socialInstagram: assetUrl("figma-assets/30fc0603-04fa-49f2-a8db-41df0fbe5151.svg"),
  socialLinkedIn: assetUrl("figma-assets/f4884c8e-7a2e-410a-9a27-1d95093938fc.svg"),
  socialBehance: assetUrl("figma-assets/ff6b1bb6-d898-488f-8574-a0164b351667.svg"),
  socialYouTube: assetUrl("figma-assets/58add33b-3382-447d-8aa3-42c8535df50b.svg"),
  socialWhatsApp: assetUrl("figma-assets/f5919516-0d37-4979-bdaf-6c2ad8a0158c.svg"),
  socialTelegram: assetUrl("figma-assets/c7c0da7d-1ae9-4a81-aa8b-41090cc62cb0.svg"),
} as const;
