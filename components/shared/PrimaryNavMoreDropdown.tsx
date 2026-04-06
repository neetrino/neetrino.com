"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { PRIMARY_NAV_LINK_DESKTOP_CLASS, type NavSubLink } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type PrimaryNavMoreDropdownProps = {
  items: readonly NavSubLink[];
  variant: "pill" | "bar";
};

const triggerBase =
  "flex shrink-0 flex-row items-center gap-0.5 border-0 bg-transparent p-0 font-semibold text-white cursor-pointer";

/**
 * “More” disclosure — hover/focus-within on desktop; matches pill or top bar nav styles.
 */
export function PrimaryNavMoreDropdown({ items, variant }: PrimaryNavMoreDropdownProps) {
  const triggerClass =
    variant === "pill"
      ? cn(triggerBase, "relative leading-[0] not-italic text-[16px]")
      : cn(triggerBase, PRIMARY_NAV_LINK_DESKTOP_CLASS);

  return (
    <div className="group relative flex shrink-0 items-center">
      <button
        type="button"
        className={triggerClass}
        aria-haspopup="menu"
        aria-expanded={false}
        aria-label="More navigation"
      >
        <span className={variant === "pill" ? "leading-[15.6px]" : undefined}>More</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 opacity-90 transition-transform group-hover:rotate-180 group-focus-within:rotate-180",
            variant === "pill" && "relative top-[1px]",
          )}
          aria-hidden
        />
      </button>
      <ul
        role="menu"
        aria-label="More links"
        className={cn(
          "invisible absolute left-1/2 top-full z-[120] mt-1 w-max -translate-x-1/2 rounded-xl border border-white/15 py-1.5 opacity-0 shadow-lg backdrop-blur-xl transition-[opacity,visibility] duration-150",
          "bg-[rgba(40,43,103,0.96)] pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto",
          "group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto",
        )}
      >
        {items.map((sub) => (
          <li key={sub.href} role="none">
            <Link
              role="menuitem"
              href={sub.href}
              className="block whitespace-nowrap px-3 py-2 text-[15px] font-semibold text-white/95 transition-colors hover:bg-white/10 hover:text-white"
            >
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
