import { COUNT_UP_DURATION_MS } from "@/lib/motion/count-up.constants";

export type HomeHeroCountUpEasing = "linear" | "easeOut";

/** Min scroll before hero stats count-up (avoids run on initial page open). */
export const HOME_HERO_COUNT_UP_SCROLL_Y_MIN_PX = 24;

/** Fraction of the numeral visible before count-up may start. */
export const HOME_HERO_COUNT_UP_IN_VIEW_AMOUNT = 0.55;

export const HOME_HERO_COUNT_UP_IN_VIEW_MARGIN = "0px 0px -12% 0px";

export type HomeHeroCountUpTiming = {
  readonly delayMs: number;
  readonly durationMs: number;
  readonly easing: HomeHeroCountUpEasing;
  readonly startAfterUserScroll: boolean;
};

/** Per-stat rhythm — larger values run longer; each has its own delay. */
const HOME_HERO_COUNT_UP_SHARED = {
  startAfterUserScroll: true,
} as const;

const HOME_HERO_COUNT_UP_BY_VALUE: Record<string, HomeHeroCountUpTiming> = {
  "8+": { delayMs: 0, durationMs: 3400, easing: "easeOut", ...HOME_HERO_COUNT_UP_SHARED },
  "97%": { delayMs: 480, durationMs: 5200, easing: "linear", ...HOME_HERO_COUNT_UP_SHARED },
  "450+": { delayMs: 960, durationMs: 7800, easing: "linear", ...HOME_HERO_COUNT_UP_SHARED },
};

/** Timing for home hero stat numerals (`8+`, `97%`, `450+`). */
export function getHomeHeroCountUpTiming(displayValue: string): HomeHeroCountUpTiming {
  return (
    HOME_HERO_COUNT_UP_BY_VALUE[displayValue] ?? {
      delayMs: 0,
      durationMs: COUNT_UP_DURATION_MS,
      easing: "easeOut",
      startAfterUserScroll: true,
    }
  );
}
