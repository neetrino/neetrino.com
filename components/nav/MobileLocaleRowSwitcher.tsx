"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/i18n/routing";
import { useLocaleSwitch } from "@/lib/hooks/useLocaleSwitch";
import {
  MOBILE_LOCALE_ROW_BUTTON_ACTIVE_CLASS,
  MOBILE_LOCALE_ROW_BUTTON_BASE_CLASS,
  MOBILE_LOCALE_ROW_CODE_CLASS,
  MOBILE_LOCALE_ROW_GROUP_CLASS,
} from "@/lib/mobile-locale-row.constants";
import { LOCALE_LABELS, LOCALE_SHORT_LABELS, type AppLocale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

type MobileLocaleRowSwitcherProps = {
  className?: string;
};

/**
 * Three side-by-side locale toggles — same styling as the classic `LocaleSwitcher` trigger (white pill + globe + code).
 */
export function MobileLocaleRowSwitcher({ className }: MobileLocaleRowSwitcherProps) {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;
  const { switchLocale } = useLocaleSwitch();

  return (
    <div
      role="radiogroup"
      aria-label={t("language.switcherLabel")}
      className={cn(MOBILE_LOCALE_ROW_GROUP_CLASS, className)}
    >
      {locales.map((loc) => {
        const active = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={LOCALE_LABELS[loc]}
            onClick={() => switchLocale(loc)}
            className={cn(
              MOBILE_LOCALE_ROW_BUTTON_BASE_CLASS,
              active && MOBILE_LOCALE_ROW_BUTTON_ACTIVE_CLASS,
            )}
          >
            <span className="relative flex size-7 shrink-0 items-center justify-center rounded-full bg-white">
              <Globe className="pointer-events-none size-6 text-[#473dff]" aria-hidden />
            </span>
            <span className={MOBILE_LOCALE_ROW_CODE_CLASS}>{LOCALE_SHORT_LABELS[loc]}</span>
          </button>
        );
      })}
    </div>
  );
}
