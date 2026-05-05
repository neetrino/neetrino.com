"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { stripLocalePrefix } from "@/lib/i18n/href";
import type { AppLocale } from "@/lib/i18n/locales";

/**
 * Applies a new app locale (same URL rules as `LocaleSwitcher`).
 */
export function useLocaleSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const switchLocale = useCallback(
    (nextLocale: AppLocale) => {
      const query = searchParams.toString();
      const normalizedPath = stripLocalePrefix(pathname);
      const target = query.length > 0 ? `${normalizedPath}?${query}` : normalizedPath;
      router.replace(target, { locale: nextLocale });
      router.refresh();
    },
    [pathname, router, searchParams],
  );

  return { switchLocale };
}
