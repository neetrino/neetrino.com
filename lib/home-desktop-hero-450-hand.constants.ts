/**
 * Tablet hybrid home hero only (`NeetrinoHomeHeroCanvas` → `showTabletHero450Hand`). Not on full `lg+` canvas.
 * Same asset/flip as mobile `HeroStatWide` (`img28A`, `-scale-y-100 rotate-180`).
 */

/** Stats strip (`10:428`) above robot / mesh paint order on iPad mini hybrid. */
export const HOME_DESKTOP_HERO_TABLET_STATS_ROW_STACK_CLASS = "relative z-[30]" as const;

/** 450+ column + hand — no `isolate` here: it kept the purple tile compositing above the absolute hand in WebKit. */
export const HOME_DESKTOP_HERO_TABLET_BAN2_WRAP_STACK_CLASS = "relative z-[40]" as const;

/**
 * BAN2-wrap is 517px — slot wider than card overlaps left; `-right-[Npx]` nudges toward viewport right on iPad mini
 * (larger N = further right; keep within 1440 frame width). Vertical bleed: `HOME_DESKTOP_HERO_TABLET_CANVAS_DESIGN_HEIGHT_PX`.
 * `top` is % of BAN2-wrap height; `translateY` is % of slot height — less negative moves the hand lower.
 */
export const HOME_DESKTOP_HERO_450_HAND_SLOT_CLASS =
  "pointer-events-none absolute top-[50%] z-[200] h-[867px] w-[808px] max-w-none -right-[496px] [transform:translateY(-38%)_translateZ(1px)]" as const;

/** `next/image` `sizes` — match slot width (design px). */
export const HOME_DESKTOP_HERO_450_HAND_IMAGE_SIZES = "808px" as const;
