import { FIGMA_ASSETS } from "@/lib/figma-assets";

export const neetrinoHomeProjectsMarqueeRowA = [
  { image: FIGMA_ASSETS.imgStanislavHristov3, titleKey: "home.projects.items.webDesign" },
  { image: FIGMA_ASSETS.imgUiDesign21, titleKey: "home.projects.items.uiDesign" },
  { image: FIGMA_ASSETS.img2661, titleKey: "home.projects.items.ecommerce" },
] as const;

export const neetrinoHomeProjectsMarqueeRowB = [
  { image: FIGMA_ASSETS.imgBiotechLogo1, titleKey: "home.projects.items.biotech" },
  {
    image: FIGMA_ASSETS.imgKleverKleverIoInstagramPhotosAndVideos3,
    titleKey: "home.projects.items.blockchain",
  },
] as const;

export type NeetrinoHomeProjectMarqueeItem =
  | (typeof neetrinoHomeProjectsMarqueeRowA)[number]
  | (typeof neetrinoHomeProjectsMarqueeRowB)[number];

/** How many times the base sequence is chained in one half of the track (then duplicated for -50% loop). */
export const NEETRINO_HOME_PROJECTS_MARQUEE_HALF_SEGMENT_REPEAT = 4;

/**
 * Builds a seamless strip: `[half][half]` where each half is the base row repeated
 * `NEETRINO_HOME_PROJECTS_MARQUEE_HALF_SEGMENT_REPEAT` times (pairs with CSS `translateX(±50%)`).
 */
export function neetrinoHomeProjectsMarqueeDoubledStrip(
  base: readonly NeetrinoHomeProjectMarqueeItem[],
): NeetrinoHomeProjectMarqueeItem[] {
  const half: NeetrinoHomeProjectMarqueeItem[] = [];
  for (let i = 0; i < NEETRINO_HOME_PROJECTS_MARQUEE_HALF_SEGMENT_REPEAT; i += 1) {
    half.push(...base);
  }
  return [...half, ...half];
}
