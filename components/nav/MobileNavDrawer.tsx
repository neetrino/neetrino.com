"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/shared/LocaleSwitcher";
import { MobileNavDrawerLinks } from "@/components/nav/MobileNavDrawerLinks";
import { type NavItem } from "@/lib/nav-links";

type MobileNavDrawerProps = {
  links: readonly NavItem[];
  menuOpen: boolean;
  onClose: () => void;
};

export function MobileNavDrawer({ links, menuOpen, onClose }: MobileNavDrawerProps) {
  const t = useTranslations();

  return (
    <div
      id="mobile-nav-overlay"
      className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? "block" : "hidden"}`}
      aria-hidden={!menuOpen}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className="relative z-10 flex min-h-full flex-col bg-[#0f0f14]/95 backdrop-blur-xl px-6 pb-10 pt-24"
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.mobileNavigationAria")}
      >
        <MobileNavDrawerLinks
          key={menuOpen ? "open" : "closed"}
          links={links}
          onNavigate={onClose}
        />
        <div className="mt-10 flex justify-center border-t border-white/10 pt-8">
          <LocaleSwitcher compact className="w-full max-w-[min(100%,280px)]" />
        </div>
      </div>
    </div>
  );
}
