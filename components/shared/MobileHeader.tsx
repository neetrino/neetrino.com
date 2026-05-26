"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { NavbarMobileShell } from "@/components/nav/NavbarMobileShell";
import { useScrolledPastThreshold } from "@/lib/hooks/useScrolledPastThreshold";
import { PRIMARY_NAV_LINKS } from "@/lib/nav-links";
import {
  MOBILE_HEADER_BAR_PADDING_CLASS,
  MOBILE_HEADER_BAR_SCROLLED_ENHANCEMENT_CLASS,
  MOBILE_HEADER_BAR_SURFACE_CLASS,
  MOBILE_HEADER_LOGO_LINK_CLASS,
  MOBILE_HEADER_ROOT_TOP_PADDING_CLASS,
} from "@/lib/mobile-header-bar.constants";
import { cn } from "@/lib/utils";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

/**
 * Mobile/tablet header — Figma `479:1416`: single pill bar (tinted surface, logo, Menu) + drawer from `NavbarMobileShell`.
 */
export function MobileHeader() {
  const stickyChrome = useScrolledPastThreshold();

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", MOBILE_HEADER_ROOT_TOP_PADDING_CLASS)}>
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1120px] md:w-[calc(100%-40px)]">
        <div
          className={cn(
            "flex items-center justify-between gap-3 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
            MOBILE_HEADER_BAR_SURFACE_CLASS,
            MOBILE_HEADER_BAR_PADDING_CLASS,
            stickyChrome && MOBILE_HEADER_BAR_SCROLLED_ENHANCEMENT_CLASS,
          )}
        >
          <Link href="/" className={MOBILE_HEADER_LOGO_LINK_CLASS}>
            <Image
              alt="Neetrino"
              width={400}
              height={400}
              sizes="(max-width: 1024px) 140px, 0"
              className="h-full w-full object-contain object-left"
              src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
              loading="eager"
            />
          </Link>
          <NavbarMobileShell links={PRIMARY_NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
