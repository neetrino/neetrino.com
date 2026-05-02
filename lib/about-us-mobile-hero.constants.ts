/**
 * Mobile About hero — Figma NEETRINO-WEB `479:1237`–`479:1251` (inside frame `479:1144`).
 * Robot: `lib/about-us-mobile-hero-robot.constants.ts` + `AboutUsMobileHeroRobot`.
 */

/**
 * Headline + intro + stats sit above the absolute robot (`z-[10]` on robot shell).
 */
export const ABOUT_US_MOBILE_HERO_COPY_STACK_CLASS = "relative z-[50] min-w-0 w-full" as const;

/**
 * Hero intro (`storyShortMobile` + `storySpecialization`, mobile About only): Figma 198px max width; 14 / 22.75 / -0.15px;
 * `rgba(255,255,255,0.9)`; `whitespace-pre-line` for `\n` in messages. Inter: `interSans.className` on copy stack (`en`/`ru`) in `AboutUsMobileHero`.
 */
export const ABOUT_US_MOBILE_HERO_STORY_INTRO_PARAGRAPH_CLASS =
  "max-w-[min(100%,198px)] text-[14px] font-normal leading-[22.75px] tracking-[-0.15px] text-[rgba(255,255,255,0.9)] whitespace-pre-line" as const;

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
 * Shared glass tile on mobile About (hero stats, intro) — matches mission tube `ring-white/[0.06]`.
 */
export const ABOUT_US_MOBILE_ABOUT_GLASS_TILE_CLASS =
  "rounded-2xl bg-[rgba(255,255,255,0.04)] ring-1 ring-white/[0.06] backdrop-blur-sm" as const;
