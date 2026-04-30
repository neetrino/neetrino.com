/** Row of three locale pills — same visual language as `LocaleSwitcher` (white pill, purple globe, dark label). */
export const MOBILE_LOCALE_ROW_GROUP_CLASS =
  "flex w-full flex-row gap-2 min-[380px]:gap-3" as const;

export const MOBILE_LOCALE_ROW_BUTTON_BASE_CLASS =
  "inline-flex h-10 min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-[28px] bg-white px-2 text-[#1e1e1e] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e1e1e]/40 active:opacity-90 sm:gap-2 sm:px-3" as const;

/** Selected locale — inset ring in brand purple (pill stays white like the old control). */
export const MOBILE_LOCALE_ROW_BUTTON_ACTIVE_CLASS = "ring-2 ring-inset ring-[#473dff]" as const;

export const MOBILE_LOCALE_ROW_CODE_CLASS =
  "text-xs font-extrabold leading-none tracking-tight sm:text-sm" as const;
