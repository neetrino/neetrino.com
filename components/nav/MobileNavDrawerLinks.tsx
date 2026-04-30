"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { isNavHrefActive } from "@/lib/nav-href-active";
import {
  PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS,
  PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS,
  type NavItem,
} from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type MobileNavDrawerLinksProps = {
  links: readonly NavItem[];
  onNavigate: () => void;
};

export function MobileNavDrawerLinks({ links, onNavigate }: MobileNavDrawerLinksProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [openGroupLabel, setOpenGroupLabel] = useState<string | null>(null);

  const toggleGroup = (label: string) => {
    setOpenGroupLabel((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="flex flex-1 flex-col gap-2">
      {links.map((item) =>
        item.kind === "link" ? (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative pt-3 pb-1 text-xl font-semibold text-white transition-opacity hover:opacity-70 active:opacity-50",
              PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS,
              isNavHrefActive(pathname, item.href) && PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS,
            )}
            onClick={onNavigate}
          >
            {t(`nav.${item.labelKey}`)}
          </Link>
        ) : (
          <div key={item.labelKey} className="flex flex-col">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-xl font-semibold text-white transition-opacity hover:opacity-80"
              aria-expanded={openGroupLabel === item.labelKey}
              onClick={() => toggleGroup(item.labelKey)}
            >
              {t(`nav.${item.labelKey}`)}
              <ChevronDown
                className={cn(
                  "size-6 shrink-0 transition-transform",
                  openGroupLabel === item.labelKey && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {openGroupLabel === item.labelKey ? (
              <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-white/20 pl-4">
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className={cn(
                      "relative pt-2 pb-1 text-lg font-medium text-white/90 transition-opacity hover:opacity-80",
                      PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS,
                      isNavHrefActive(pathname, sub.href) &&
                        PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS,
                      isNavHrefActive(pathname, sub.href) && "text-white",
                    )}
                    onClick={onNavigate}
                  >
                    {t(`nav.${sub.labelKey}`)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ),
      )}
    </nav>
  );
}
