import { SCROLL_REVEAL_SLOW_STAGGER_MS } from "@/lib/motion/scroll-reveal.constants";

/** Stagger order: header → website → mobile → saas → crm → ai → explore CTA. */
export const HOME_DESKTOP_WHAT_WE_DO_REVEAL_ORDER = {
  header: 0,
  website: 1,
  mobile: 2,
  saas: 3,
  crm: 4,
  ai: 5,
  exploreCta: 6,
} as const;

export type HomeDesktopWhatWeDoRevealOrder =
  (typeof HOME_DESKTOP_WHAT_WE_DO_REVEAL_ORDER)[keyof typeof HOME_DESKTOP_WHAT_WE_DO_REVEAL_ORDER];

/** Delay before a desktop What We Do layer starts its slow reveal. */
export function homeDesktopWhatWeDoRevealDelayMs(order: HomeDesktopWhatWeDoRevealOrder): number {
  return order * SCROLL_REVEAL_SLOW_STAGGER_MS;
}
