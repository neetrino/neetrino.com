"use client";

import { useLocale } from "next-intl";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import {
  footerSendCtaIconLeftDefaultClassName,
  footerSendCtaIconLeftRuClassName,
  footerSendCtaIconLeftWideClassName,
  footerSendCtaWidthDefaultClassName,
  footerSendCtaWidthRuClassName,
  footerSendCtaWidthWideClassName,
  isFooterSendCtaWideLocale,
} from "@/lib/footer-send-cta-layout";
import { SITE_FOOTER_DESKTOP_ATMOSPHERE_IMAGE_INSET } from "@/lib/site-footer-desktop-atmosphere-166-1259.constants";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { SiteFooterDesktop } from "./SiteFooterDesktop";
import { SiteFooterDesktopGridBackdrop } from "./SiteFooterDesktopGridBackdrop";
import { SiteFooterMobile } from "./SiteFooterMobile";

/**
 * Footer v2 — Figma `10:237` (NEETRINO-WEB). Desktop `lg+`: `CanvasScaler` under 1440px (iPad Pro); wrap/inner modifiers
 * keep `166:1259`, vector grid, and Figma `mix-blend` stack intact (same as pre-scaler desktop). `next-intl` `Link`.
 */
export function Footer() {
  const locale = useLocale();
  const isFooterSendWide = isFooterSendCtaWideLocale(locale);
  const footerSendWidthClassName =
    locale === "ru"
      ? footerSendCtaWidthRuClassName
      : isFooterSendWide
        ? footerSendCtaWidthWideClassName
        : footerSendCtaWidthDefaultClassName;
  const footerSendIconLeftClassName =
    locale === "ru"
      ? footerSendCtaIconLeftRuClassName
      : isFooterSendWide
        ? footerSendCtaIconLeftWideClassName
        : footerSendCtaIconLeftDefaultClassName;

  return (
    <footer
      id="contact"
      className="w-full overflow-hidden border-t border-[rgba(255,255,255,0.3)] bg-[#151515] font-[family-name:var(--font-dm-sans)] lg:-mt-px lg:border-t-0"
    >
      <div className="relative w-full min-w-0 overflow-hidden">
        <div
          className="site-footer-desktop-top-rule relative z-[11] shrink-0"
          aria-hidden
          data-node-id="373:974"
        />
        <div className="relative z-[2] lg:hidden">
          <SiteFooterMobile />
        </div>
        <SiteFooterDesktopGridBackdrop />
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block"
          aria-hidden
        >
          <div className="relative size-full min-h-full min-w-full" data-node-id="166:1259">
            <div
              className="site-footer-desktop-atmosphere-fig absolute"
              style={{ inset: SITE_FOOTER_DESKTOP_ATMOSPHERE_IMAGE_INSET }}
            >
              <FigmaFillImage
                src={FIGMA_ASSETS.imgRectangle17417}
                className="max-w-none object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="site-footer-desktop-atmosphere-bluewash" aria-hidden />
          </div>
        </div>
        <SiteFooterDesktop
          footerSendWidthClassName={footerSendWidthClassName}
          footerSendIconLeftClassName={footerSendIconLeftClassName}
        />
      </div>
    </footer>
  );
}
