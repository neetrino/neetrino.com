"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import { stripLocalePrefix } from "@/lib/i18n/href";
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
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
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

  const switchLocale = (nextLocale: AppLocale) => {
    const query = searchParams.toString();
    const normalizedPath = stripLocalePrefix(pathname);
    const target = query.length > 0 ? `${normalizedPath}?${query}` : normalizedPath;
    router.replace(target, { locale: nextLocale });
    router.refresh();
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative", className)} style={style}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-2 rounded-[28px] bg-white px-3 py-2 text-[#1e1e1e] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e1e1e]/40",
          compact ? "h-10 min-w-[82px] justify-center" : "h-12 min-w-[108px] justify-start",
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
          className="absolute right-0 z-[130] mt-2 min-w-[122px] rounded-2xl border border-white/15 bg-[#1b1b21] p-1.5 shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
        >
          {locales.map((nextLocale) => {
            const active = locale === nextLocale;
            return (
              <li key={nextLocale} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => switchLocale(nextLocale)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-white transition-colors hover:bg-white/10",
                    active && "bg-white/10",
                  )}
                >
                  <span>{LOCALE_SHORT_LABELS[nextLocale]}</span>
                  <span className="text-white/65">{LOCALE_LABELS[nextLocale]}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
