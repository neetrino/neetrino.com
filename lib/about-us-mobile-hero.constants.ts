/**
 * Mobile About hero — Figma NEETRINO-WEB `479:1237`–`479:1251` (inside frame `479:1144`).
 * Robot: `lib/about-us-mobile-hero-robot.constants.ts` + `AboutUsMobileHeroRobot`.
 */

/**
 * Headline + intro + stats sit above the absolute robot (`z-[10]` on robot shell).
 */
export const ABOUT_US_MOBILE_HERO_COPY_STACK_CLASS = "relative z-[100] min-w-0 w-full" as const;

/**
 * Hero intro (`storyShortMobile` + `storySpecialization`, mobile About only): 13 / 21.125 / -0.15px;
 * `rgba(255,255,255,0.9)`. Whitespace: `whitespace-pre` for `en` (exact line breaks), `whitespace-pre-line`
 * for other locales. Width follows the hero column (`max-w-[min(100%,22rem)]` on the parent).
 * Inter: `interSans.className` on copy stack (`en`/`ru`) in `AboutUsMobileHero`.
 */
export const ABOUT_US_MOBILE_HERO_STORY_INTRO_PARAGRAPH_BASE_CLASS =
  "w-full max-w-none text-[13px] font-normal leading-[21.125px] tracking-[-0.15px] text-[rgba(255,255,255,0.9)]" as const;

/**
 * Right padding on headline column so copy clears the robot (`479:1237`).
 */
export const ABOUT_US_MOBILE_HERO_HEADLINE_PR_FOR_ROBOT_CLASS =
  "pr-[min(50vw,12.5rem)] sm:pr-[min(58vw,18rem)]" as const;

/** Figma headline `tracking-[1.2691px]` on ~46px lines. */
export const ABOUT_US_MOBILE_HERO_HEADLINE_LETTER_SPACING_PX = 1.27;

/** Gap between stacked headline lines (`479:1237` ~7.993px). */
export const ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX = 8;

/** Blur strip behind stat value (Figma `479:1248`–`479:1250`). */
export const ABOUT_US_MOBILE_HERO_STAT_GLOW_BLUR_PX = 8;
export const ABOUT_US_MOBILE_HERO_STAT_GLOW_OPACITY = 0.3;

/**
 * Shared glass tile on mobile About (intro, bottom stats) — matches mission tube `ring-white/[0.06]`.
 */
export const ABOUT_US_MOBILE_ABOUT_GLASS_TILE_CLASS =
  "rounded-2xl bg-[rgba(255,255,255,0.04)] ring-1 ring-white/[0.06] backdrop-blur-sm" as const;

/**
 * Figma `479:1246` — single frosted panel behind hero stats (`Rectangle 17399`); SVG in `public/`.
 */
export const ABOUT_US_MOBILE_HERO_STATS_PANEL_BG_SRC =
  "/images/about-us/mobile-hero-stats-panel-bg.svg" as const;

/**
 * Escape `.section-container` horizontal padding (`1rem` / `1.5rem` @ `sm`) so the stats panel can
 * bleed past the content box like the hero robot (`AboutUsMobile`, &lt; `lg` only).
 */
export const ABOUT_US_MOBILE_HERO_STATS_BREAKOUT_CLASS =
  "-mx-4 w-[calc(100%+2rem)] overflow-x-visible sm:-mx-6 sm:w-[calc(100%+3rem)]" as const;

/**
 * Panel width + rightward nudge; overflow is visible on ancestors so the SVG can extend past edges.
 */
export const ABOUT_US_MOBILE_HERO_STATS_PANEL_SHELF_CLASS =
  "relative w-[min(150vw,40rem)] max-w-none translate-x-3 overflow-visible sm:translate-x-20" as const;

/** Shift stat values, labels, and glows left relative to the panel shape. */
export const ABOUT_US_MOBILE_HERO_STATS_FOREGROUND_SHIFT_CLASS =
  "-translate-x-4 sm:-translate-x-5" as const;
