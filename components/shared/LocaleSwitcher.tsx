"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { useLocaleSwitch } from "@/lib/hooks/useLocaleSwitch";
import { locales } from "@/i18n/routing";
import {
  LOCALE_SWITCHER_DEFAULT_DROPDOWN_PANEL_CLASS,
  LOCALE_SWITCHER_DEFAULT_OPTION_BUTTON_ACTIVE_CLASS,
  LOCALE_SWITCHER_DEFAULT_OPTION_BUTTON_CLASS,
} from "@/lib/locale-switcher-dropdown.constants";
import { LOCALE_LABELS, LOCALE_SHORT_LABELS, type AppLocale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  compact?: boolean;
  style?: CSSProperties;
};

export function LocaleSwitcher({ className, compact = false, style }: LocaleSwitcherProps) {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;
  const { switchLocale: applyLocale } = useLocaleSwitch();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const activeLabel = LOCALE_SHORT_LABELS[locale];

  const pickLocale = (nextLocale: AppLocale) => {
    applyLocale(nextLocale);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative cursor-pointer", className)} style={style}>
      <button
        type="button"
        className={cn(
          "inline-flex cursor-pointer items-center gap-2 rounded-[28px] bg-white px-3 py-2 text-[#1e1e1e] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e1e1e]/40",
          compact
            ? "h-10 min-w-[82px] justify-center"
            : "h-full min-h-0 w-full min-w-0 justify-center",
        )}
        aria-label={t("language.current", { language: LOCALE_LABELS[locale] })}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative flex size-7 items-center justify-center rounded-full bg-white">
          <Globe className="pointer-events-none size-6 text-[#473dff]" aria-hidden />
        </span>
        <span className="text-sm font-extrabold leading-none">{activeLabel}</span>
      </button>

      {open ? (
        <ul
          role="menu"
          aria-label={t("language.switcherLabel")}
          className={LOCALE_SWITCHER_DEFAULT_DROPDOWN_PANEL_CLASS}
        >
          {locales.map((nextLocale) => {
            const active = locale === nextLocale;
            return (
              <li key={nextLocale} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => pickLocale(nextLocale)}
                  className={cn(
                    LOCALE_SWITCHER_DEFAULT_OPTION_BUTTON_CLASS,
                    active && LOCALE_SWITCHER_DEFAULT_OPTION_BUTTON_ACTIVE_CLASS,
                  )}
                >
                  <span className="shrink-0">{LOCALE_SHORT_LABELS[nextLocale]}</span>
                  <span className="min-w-0 text-left text-white/65">
                    {LOCALE_LABELS[nextLocale]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
