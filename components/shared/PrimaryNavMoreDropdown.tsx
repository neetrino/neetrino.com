"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { usePrimaryNavDropdownOpen } from "@/lib/hooks/usePrimaryNavDropdownOpen";
import { isNavHrefActive } from "@/lib/nav-href-active";
import {
  PRIMARY_NAV_DROPDOWN_TRANSITION_MS,
  PRIMARY_NAV_MORE_DROPDOWN_MIN_WIDTH_PX,
} from "@/lib/primary-nav-dropdown.constants";
import {
  PRIMARY_NAV_LINK_DESKTOP_CLASS,
  PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS,
  PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS,
  type NavSubLink,
} from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type PrimaryNavMoreDropdownProps = {
  items: readonly NavSubLink[];
  variant: "pill" | "bar";
};

const triggerBase =
  "flex shrink-0 flex-row items-center gap-0.5 border-0 bg-transparent p-0 font-semibold text-white cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60";

const panelBase =
  "w-fit rounded-[28px] border border-white/10 bg-[rgba(40,43,103,0.92)] py-2 shadow-[0_16px_40px_rgba(8,10,28,0.38)]";

/**
 * “More” disclosure — timed hover + focus; panel matches desktop header pill tokens.
 */
export function PrimaryNavMoreDropdown({ items, variant }: PrimaryNavMoreDropdownProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const { open, wrapperRef, onMouseEnter, onMouseLeave, onFocusCapture, onBlurCapture } =
    usePrimaryNavDropdownOpen();

  const childActive = items.some((sub) => isNavHrefActive(pathname, sub.href));

  const triggerClass =
    variant === "pill"
      ? cn(
          triggerBase,
          "relative pb-0.5 leading-[0] not-italic text-[16px] text-white",
          PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS,
          childActive && PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS,
        )
      : cn(
          triggerBase,
          PRIMARY_NAV_LINK_DESKTOP_CLASS,
          "relative pb-0.5",
          PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS,
          childActive && PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS,
        );

  const itemTypography =
    variant === "pill"
      ? "text-[16px] leading-[15.6px] font-semibold"
      : "text-sm font-semibold lg:text-base";

  return (
    <div
      ref={wrapperRef}
      className="relative flex shrink-0 items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onFocusCapture}
      onBlurCapture={onBlurCapture}
    >
      <button
        type="button"
        className={triggerClass}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("nav.more")}
      >
        <span className={variant === "pill" ? "leading-[15.6px]" : undefined}>{t("nav.more")}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-white/90 transition-transform duration-150 ease-out",
            open && "rotate-180",
            variant === "pill" && "relative top-[1px]",
          )}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full z-[120] -translate-x-1/2 pt-2",
          !open && "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <ul
          role="menu"
          aria-label={t("nav.more")}
          className={cn(
            panelBase,
            "px-1",
            "ease-out transition-[opacity,transform]",
            open ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0",
          )}
          style={{
            transitionDuration: `${PRIMARY_NAV_DROPDOWN_TRANSITION_MS}ms`,
            minWidth: `${PRIMARY_NAV_MORE_DROPDOWN_MIN_WIDTH_PX}px`,
          }}
        >
          {items.map((sub) => {
            const active = isNavHrefActive(pathname, sub.href);
            return (
              <li key={sub.href} role="none">
                <Link
                  role="menuitem"
                  href={sub.href}
                  className={cn(
                    itemTypography,
                    "block w-full rounded-[22px] px-3 py-2.5 text-center text-white/90 transition-colors duration-150 ease-out",
                    "hover:bg-[#473dff]/10 hover:text-white",
                    "focus-visible:bg-[#473dff]/10 focus-visible:text-white focus-visible:outline-none",
                    active && "text-white",
                  )}
                >
                  {t(`nav.${sub.labelKey}`)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
