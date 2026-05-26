"use client";

import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { MobileLocaleRowSwitcher } from "@/components/nav/MobileLocaleRowSwitcher";
import { MobileNavDrawerLinks } from "@/components/nav/MobileNavDrawerLinks";
import {
  MOBILE_NAV_DRAWER_BACKDROP_CLASS,
  MOBILE_NAV_DRAWER_CARD_CLASS,
  MOBILE_NAV_DRAWER_FOOTER_CLASS,
  MOBILE_NAV_DRAWER_OUTER_SHELL_CLASS,
  MOBILE_NAV_DRAWER_SCROLL_REGION_CLASS,
} from "@/lib/mobile-nav-drawer.constants";
import { type NavItem } from "@/lib/nav-links";
import { resolveMotionDurationMs, usePrefersReducedMotion } from "@/lib/motion/reduced-motion";
import {
  createDrawerTransition,
  DRAWER_MOTION_DURATION_MS,
  drawerBackdropVariants,
  drawerCardVariants,
  drawerOverlayVariants,
} from "@/lib/motion/variants";

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
  const prefersReducedMotion = usePrefersReducedMotion();
  const drawerDurationMs = resolveMotionDurationMs(prefersReducedMotion, DRAWER_MOTION_DURATION_MS);
  const drawerTransition = createDrawerTransition({ durationMs: drawerDurationMs });

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          key="mobile-nav-overlay"
          id="mobile-nav-overlay"
          className={MOBILE_NAV_PORTAL_ROOT_CLASS}
          aria-hidden={false}
          variants={drawerOverlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            aria-hidden="true"
            className={MOBILE_NAV_DRAWER_BACKDROP_CLASS}
            variants={drawerBackdropVariants}
            transition={drawerTransition}
            onClick={onClose}
          />
          <div className={MOBILE_NAV_DRAWER_OUTER_SHELL_CLASS}>
            <motion.div
              className={MOBILE_NAV_DRAWER_CARD_CLASS}
              role="dialog"
              aria-modal="true"
              aria-label={t("nav.mobileNavigationAria")}
              variants={drawerCardVariants}
              transition={drawerTransition}
            >
              <div className={MOBILE_NAV_DRAWER_SCROLL_REGION_CLASS}>
                <MobileNavDrawerLinks links={links} onNavigate={onClose} />
              </div>
              <div className={MOBILE_NAV_DRAWER_FOOTER_CLASS}>
                <MobileLocaleRowSwitcher className="w-full max-w-none" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
