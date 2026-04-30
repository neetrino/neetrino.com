/** Desktop / default — dark compact panel. */
export const LOCALE_SWITCHER_DEFAULT_DROPDOWN_PANEL_CLASS =
  "absolute right-0 z-[130] mt-2 min-w-[122px] rounded-2xl border border-white/15 bg-[#1b1b21] p-1.5 shadow-[0_16px_30px_rgba(0,0,0,0.35)]" as const;

export const LOCALE_SWITCHER_DEFAULT_OPTION_BUTTON_CLASS =
  "flex w-full min-w-0 cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm text-white transition-colors hover:bg-white/10" as const;

export const LOCALE_SWITCHER_DEFAULT_OPTION_BUTTON_ACTIVE_CLASS = "bg-white/10" as const;

/** Mobile nav drawer — frosted rounded panel + `#473dff` pills (match `MobileNavMenuTrigger`). */
export const LOCALE_SWITCHER_MOBILE_NAV_DROPDOWN_PANEL_CLASS =
  "absolute left-0 right-0 z-[130] mt-3 flex w-full flex-col gap-2 rounded-[28px] border border-white/12 bg-[rgba(24,26,48,0.42)] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl backdrop-saturate-150" as const;

export const LOCALE_SWITCHER_MOBILE_NAV_OPTION_BUTTON_CLASS =
  "flex w-full min-w-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#473dff] px-4 py-3 text-sm font-extrabold text-white transition-opacity hover:opacity-92 active:opacity-85" as const;

export const LOCALE_SWITCHER_MOBILE_NAV_OPTION_BUTTON_ACTIVE_CLASS =
  "ring-2 ring-white/45" as const;
