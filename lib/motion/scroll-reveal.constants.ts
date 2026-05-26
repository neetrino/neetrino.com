/** Scroll-triggered section reveals — default (smooth, readable). */

export const SCROLL_REVEAL_DURATION_MS = 720;

/** Vertical travel on enter (px). */
export const SCROLL_REVEAL_Y_PX = 28;

/** Gap between staggered siblings (ms). */
export const SCROLL_REVEAL_STAGGER_MS = 150;

/** Desktop canvas cards — slow, premium fade-up. */
export const SCROLL_REVEAL_SLOW_DURATION_MS = 1100;

export const SCROLL_REVEAL_SLOW_Y_PX = 36;

export const SCROLL_REVEAL_SLOW_STAGGER_MS = 220;

/** Fraction of element visible before reveal (0–1). */
export const SCROLL_REVEAL_VIEWPORT_AMOUNT = 0.12;

/** Root margin — fire slightly before the block fully enters the viewport. */
export const SCROLL_REVEAL_VIEWPORT_MARGIN = "0px 0px -8% 0px";

/** Stagger delay for `PageBlockReveal` / `index` prop (ms). */
export function scrollRevealStaggerDelayMs(index: number): number {
  return index * SCROLL_REVEAL_SLOW_STAGGER_MS;
}
