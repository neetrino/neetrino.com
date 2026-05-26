export type HeroAtmosphereBeamSpec = Readonly<{
  leftPercent: number;
  widthPx: number;
  delayMs: number;
  peakOpacity: number;
}>;

/** Full cycle for one beam pulse (ms). Literal for CSS `animation-duration`. */
export const HERO_ATMOSPHERE_CYCLE_MS = 7200 as const;

export const HERO_BACKGROUND_ATMOSPHERE_BEAMS_DESKTOP: readonly HeroAtmosphereBeamSpec[] = [
  { leftPercent: 8, widthPx: 32, delayMs: 0, peakOpacity: 0.44 },
  { leftPercent: 14, widthPx: 48, delayMs: 1400, peakOpacity: 0.34 },
  { leftPercent: 20, widthPx: 40, delayMs: 2800, peakOpacity: 0.4 },
  { leftPercent: 26, widthPx: 56, delayMs: 4200, peakOpacity: 0.3 },
] as const;

export const HERO_BACKGROUND_ATMOSPHERE_BEAMS_MOBILE: readonly HeroAtmosphereBeamSpec[] = [
  { leftPercent: 4, widthPx: 24, delayMs: 0, peakOpacity: 0.38 },
  { leftPercent: 12, widthPx: 36, delayMs: 1800, peakOpacity: 0.32 },
  { leftPercent: 20, widthPx: 28, delayMs: 3600, peakOpacity: 0.36 },
] as const;
