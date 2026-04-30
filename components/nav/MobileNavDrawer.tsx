"use client";

import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/shared/LocaleSwitcher";
import { MobileNavDrawerLinks } from "@/components/nav/MobileNavDrawerLinks";
import {
  MOBILE_NAV_DRAWER_BACKDROP_CLASS,
  MOBILE_NAV_DRAWER_CARD_CLASS,
  MOBILE_NAV_DRAWER_FOOTER_CLASS,
  MOBILE_NAV_DRAWER_OUTER_SHELL_CLASS,
  MOBILE_NAV_DRAWER_SCROLL_REGION_CLASS,
} from "@/lib/mobile-nav-drawer.constants";
import { type NavItem } from "@/lib/nav-links";

const MOBILE_NAV_PORTAL_ROOT_CLASS = "fixed inset-0 z-[100] overscroll-none lg:hidden" as const;

type MobileNavDrawerProps = {
  links: readonly NavItem[];
  menuOpen: boolean;
  onClose: () => void;
};

/**
 * Renders into `document.body` so `position: fixed` is not trapped by the header’s
 * `backdrop-filter` stacking context (which broke overlay hit-testing and menu open).
 */
export function MobileNavDrawer({ links, menuOpen, onClose }: MobileNavDrawerProps) {
  const t = useTranslations();

  if (!menuOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div id="mobile-nav-overlay" className={MOBILE_NAV_PORTAL_ROOT_CLASS} aria-hidden={false}>
      <div aria-hidden="true" className={MOBILE_NAV_DRAWER_BACKDROP_CLASS} onClick={onClose} />
      <div className={MOBILE_NAV_DRAWER_OUTER_SHELL_CLASS}>
        <div
          className={MOBILE_NAV_DRAWER_CARD_CLASS}
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.mobileNavigationAria")}
        >
          <div className={MOBILE_NAV_DRAWER_SCROLL_REGION_CLASS}>
            <MobileNavDrawerLinks
              key={menuOpen ? "open" : "closed"}
              links={links}
              onNavigate={onClose}
            />
          </div>
          <div className={MOBILE_NAV_DRAWER_FOOTER_CLASS}>
            <LocaleSwitcher
              compact
              dropdownPresentation="mobileNav"
              className="w-full max-w-[min(100%,280px)]"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
