/**
 * Tablet hybrid home hero only (`NeetrinoHomeHeroCanvas` → `showTabletHero450Hand`). Not on full `lg+` canvas.
 * Same asset/flip as mobile `HeroStatWide` (`img28A`, `-scale-y-100 rotate-180`).
 */
/** Only the 450+ column: above flex sibling tiles / mesh overlap. */
export const HOME_DESKTOP_HERO_TABLET_BAN2_WRAP_STACK_CLASS = "relative z-[10]" as const;

export const HOME_DESKTOP_HERO_450_HAND_SLOT_CLASS =
  "pointer-events-none absolute top-[calc(50%+14px)] z-[20] h-[502px] w-[480px] -translate-y-1/3 -right-66" as const;

/** `next/image` `sizes` — match slot `w-[480px]`. */
export const HOME_DESKTOP_HERO_450_HAND_IMAGE_SIZES = "480px" as const;
