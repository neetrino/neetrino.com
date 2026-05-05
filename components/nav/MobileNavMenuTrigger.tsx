"use client";

import { useTranslations } from "next-intl";
import { MOBILE_NAV_MENU_TRIGGER_BUTTON_CLASS } from "@/lib/mobile-nav-menu-trigger.constants";
import { cn } from "@/lib/utils";

type MobileNavMenuTriggerProps = {
  menuOpen: boolean;
  onClick: () => void;
};

/** Figma `479:1418` — Menu pill inside bar `479:1416`. */
export function MobileNavMenuTrigger({ menuOpen, onClick }: MobileNavMenuTriggerProps) {
  const t = useTranslations();

  return (
    <button
      type="button"
      className={cn(
        MOBILE_NAV_MENU_TRIGGER_BUTTON_CLASS,
        menuOpen
          ? "shadow-[0_0_0_2px_rgba(255,255,255,0.35)]"
          : "hover:opacity-95 active:opacity-90",
      )}
      aria-expanded={menuOpen}
      aria-controls="mobile-nav-overlay"
      aria-label={menuOpen ? t("nav.closeMenu") : t("nav.toggleMenu")}
      onClick={onClick}
    >
      {t("nav.menuButton")}
    </button>
  );
}
