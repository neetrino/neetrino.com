/** Mobile What we do — right column shell: vertical + right + baseline left (Continue uses this only). */
export const WHAT_WE_DO_MOBILE_CARD_COPY_COLUMN_PAD_CLASS = "pt-5 pb-2.5 pl-3 pr-2" as const;

/** Extra left inset for title/subtitle blocks only — does not affect the Continue button. */
export const WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_PL_CLASS = "pl-3" as const;

/** Slight downward nudge for the title/subtitle stack only — does not affect the Continue button. */
export const WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_MT_CLASS = "mt-1.5" as const;

/** Title — slightly larger than previous `text-lg` (18px). */
export const WHAT_WE_DO_MOBILE_CARD_TITLE_SIZE_CLASS = "text-xl leading-tight" as const;

/** Subtitle metrics — between `text-base` (16px) and `text-lg` (18px). */
export const WHAT_WE_DO_MOBILE_CARD_SUBTITLE_METRICS_CLASS =
  "text-[17px] font-extralight leading-[22px]" as const;

/** Default stack under title — top gap before subtitle lines. */
export const WHAT_WE_DO_MOBILE_CARD_SUBTITLE_BLOCK_CLASS =
  `mt-1.5 ${WHAT_WE_DO_MOBILE_CARD_SUBTITLE_METRICS_CLASS}` as const;

/** Continue CTA — nudge 5px up on mobile service tiles. */
export const WHAT_WE_DO_MOBILE_CARD_CONTINUE_BUTTON_LIFT_Y_CLASS = "-translate-y-[8px]" as const;
