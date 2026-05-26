/**
 * Desktop home hero — 450+ card robot hand (`img28A`).
 * Same asset/flip as mobile `HeroStatWide` (`-scale-y-100 rotate-180`).
 */

/** BAN2 purple tile (Figma `10:439`). */
export const HOME_DESKTOP_BAN2_WIDTH_PX = 517;
export const HOME_DESKTOP_BAN2_HEIGHT_PX = 167;

/** Stats strip (`10:428`) above robot / mesh paint order on iPad mini hybrid. */
export const HOME_DESKTOP_HERO_TABLET_STATS_ROW_STACK_CLASS = "relative z-[30]" as const;

/** 450+ column + hand — wrist may bleed past tile; keep overflow visible. */
export const HOME_DESKTOP_HERO_TABLET_BAN2_WRAP_STACK_CLASS =
  "relative z-[40] overflow-visible" as const;

export const HOME_DESKTOP_FULL_HERO_450_BAN2_WRAP_STACK_CLASS =
  "relative z-[20] overflow-visible" as const;

/**
 * Anchored to BAN2 bottom-right; `translate-y` drops the sprite onto the violet tile (finger → tile center).
 */
export const HOME_DESKTOP_HERO_TABLET_450_HAND_SLOT_CLASS =
  "home-450-hand-point-live pointer-events-none absolute z-[250] -right-[98px] bottom-0 h-[700px] w-[880px] translate-y-[356px] max-w-none" as const;

export const HOME_DESKTOP_FULL_HERO_450_HAND_SLOT_CLASS =
  "home-450-hand-point-live pointer-events-none absolute z-[250] -right-[98px] bottom-0 h-[700px] w-[880px] translate-y-[356px] max-w-none" as const;

export const HOME_DESKTOP_HERO_TABLET_450_HAND_IMAGE_SIZES = "880px" as const;

export const HOME_DESKTOP_FULL_HERO_450_HAND_IMAGE_SIZES = "880px" as const;

/** `object-position` on flipped sprite — index finger toward tile center. */
export const HOME_DESKTOP_HERO_450_HAND_OBJECT_POSITION_CLASS = "object-[86%_100%]" as const;
