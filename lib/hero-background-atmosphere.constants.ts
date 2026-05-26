export type HeroTechStreamSpec = Readonly<{
  leftPercent: number;
  widthPx: number;
  packetCount: number;
  delayMs: number;
  peakOpacity: number;
}>;

export type HeroTechTokenSpec = Readonly<{
  label: string;
  leftPercent: number;
  topPercent: number;
  delayMs: number;
  fontSizePx: number;
}>;

export type HeroTechNodeSpec = Readonly<{
  leftPercent: number;
  topPercent: number;
  delayMs: number;
}>;

/** Stream pulse cycle (ms). */
export const HERO_ATMOSPHERE_CYCLE_MS = 2800 as const;

/** Scan line sweep (ms). */
export const HERO_TECH_SCAN_CYCLE_MS = 4200 as const;

/** Data packet fall (ms). */
export const HERO_TECH_PACKET_CYCLE_MS = 2200 as const;

/** Code token drift (ms). */
export const HERO_TECH_TOKEN_CYCLE_MS = 3600 as const;

export const HERO_TECH_STREAMS_DESKTOP: readonly HeroTechStreamSpec[] = [
  { leftPercent: 4, widthPx: 4, packetCount: 3, delayMs: 0, peakOpacity: 0.92 },
  { leftPercent: 9, widthPx: 6, packetCount: 4, delayMs: 320, peakOpacity: 0.78 },
  { leftPercent: 15, widthPx: 5, packetCount: 3, delayMs: 680, peakOpacity: 0.88 },
  { leftPercent: 21, widthPx: 7, packetCount: 4, delayMs: 140, peakOpacity: 0.72 },
  { leftPercent: 28, widthPx: 4, packetCount: 3, delayMs: 920, peakOpacity: 0.85 },
  { leftPercent: 34, widthPx: 5, packetCount: 2, delayMs: 540, peakOpacity: 0.68 },
] as const;

export const HERO_TECH_STREAMS_MOBILE: readonly HeroTechStreamSpec[] = [
  { leftPercent: 3, widthPx: 3, packetCount: 3, delayMs: 0, peakOpacity: 0.86 },
  { leftPercent: 10, widthPx: 5, packetCount: 3, delayMs: 400, peakOpacity: 0.76 },
  { leftPercent: 18, widthPx: 4, packetCount: 2, delayMs: 800, peakOpacity: 0.82 },
  { leftPercent: 26, widthPx: 5, packetCount: 3, delayMs: 200, peakOpacity: 0.7 },
] as const;

export const HERO_TECH_CODE_TOKENS_DESKTOP: readonly HeroTechTokenSpec[] = [
  { label: "AI", leftPercent: 6, topPercent: 14, delayMs: 0, fontSizePx: 22 },
  { label: "{dev}", leftPercent: 24, topPercent: 22, delayMs: 500, fontSizePx: 15 },
  { label: "0101", leftPercent: 12, topPercent: 38, delayMs: 900, fontSizePx: 14 },
  { label: "bot", leftPercent: 28, topPercent: 48, delayMs: 300, fontSizePx: 16 },
  { label: "</>", leftPercent: 8, topPercent: 58, delayMs: 1200, fontSizePx: 18 },
  { label: "fn()", leftPercent: 22, topPercent: 68, delayMs: 700, fontSizePx: 14 },
  { label: "λ", leftPercent: 16, topPercent: 78, delayMs: 1500, fontSizePx: 20 },
  { label: "RPA", leftPercent: 30, topPercent: 86, delayMs: 400, fontSizePx: 13 },
] as const;

export const HERO_TECH_CODE_TOKENS_MOBILE: readonly HeroTechTokenSpec[] = [
  { label: "AI", leftPercent: 5, topPercent: 16, delayMs: 0, fontSizePx: 18 },
  { label: "{ }", leftPercent: 20, topPercent: 30, delayMs: 400, fontSizePx: 14 },
  { label: "0101", leftPercent: 10, topPercent: 48, delayMs: 800, fontSizePx: 12 },
  { label: "</>", leftPercent: 24, topPercent: 62, delayMs: 200, fontSizePx: 15 },
  { label: "bot", leftPercent: 8, topPercent: 76, delayMs: 1100, fontSizePx: 13 },
] as const;

export const HERO_TECH_NODES_DESKTOP: readonly HeroTechNodeSpec[] = [
  { leftPercent: 7, topPercent: 26, delayMs: 0 },
  { leftPercent: 18, topPercent: 52, delayMs: 600 },
  { leftPercent: 30, topPercent: 34, delayMs: 1200 },
  { leftPercent: 13, topPercent: 70, delayMs: 900 },
] as const;

export const HERO_TECH_NODES_MOBILE: readonly HeroTechNodeSpec[] = [
  { leftPercent: 8, topPercent: 28, delayMs: 0 },
  { leftPercent: 22, topPercent: 55, delayMs: 700 },
] as const;

export const HERO_TECH_GRID_LINES_DESKTOP = [12, 24, 36, 48, 60, 72, 84] as const;
export const HERO_TECH_GRID_LINES_MOBILE = [18, 36, 54, 72] as const;
