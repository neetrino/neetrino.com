"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT_DETAILS } from "@/components/contact/content";
import {
  footerSendCtaIconLeftDefaultClassName,
  footerSendCtaIconLeftRuClassName,
  footerSendCtaIconLeftWideClassName,
  footerSendCtaWidthDefaultClassName,
  footerSendCtaWidthRuClassName,
  footerSendCtaWidthWideClassName,
  isFooterSendCtaWideLocale,
} from "@/lib/footer-send-cta-layout";
import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { SITE_FOOTER_DESKTOP_FOOTER_BOTTOM_TOP_PX } from "@/lib/site-footer-copyright-strip.constants";
import {
  SITE_FOOTER_DESKTOP_CANVAS_HEIGHT_PX,
  SITE_FOOTER_DESKTOP_CANVAS_INNER_MODIFIER_CLASS,
  SITE_FOOTER_DESKTOP_CANVAS_WIDTH_PX,
  SITE_FOOTER_DESKTOP_CANVAS_WRAP_MODIFIER_CLASS,
} from "@/lib/site-footer-desktop-canvas.constants";
import { SITE_FOOTER_MOBILE_539 } from "@/lib/site-footer-mobile-539-assets.constants";
import { SITE_FOOTER_SOCIAL_ROW_ICONS } from "@/lib/site-footer-social-row-icons.constants";
import { SITE_FOOTER_DESKTOP_ATMOSPHERE_IMAGE_INSET } from "@/lib/site-footer-desktop-atmosphere-166-1259.constants";
import { cn } from "@/lib/utils";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { SiteFooterDesktopGridBackdrop } from "./SiteFooterDesktopGridBackdrop";
import { SiteFooterMobile } from "./SiteFooterMobile";

/**
 * Footer v2 — Figma `10:237` (NEETRINO-WEB). Desktop `lg+`: `CanvasScaler` under 1440px (iPad Pro); wrap/inner modifiers
 * keep `166:1259`, vector grid, and Figma `mix-blend` stack intact (same as pre-scaler desktop). `next-intl` `Link`.
 */
export function Footer() {
  const t = useTranslations();
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
        {/* Figma `373:974` — desktop hairline sits on the last row of page grid (lg); mobile uses `border-t`. */}
        <div
          className="site-footer-desktop-top-rule relative z-[11] shrink-0"
          aria-hidden
          data-node-id="373:974"
        />
        <div className="relative z-[2] lg:hidden">
          <SiteFooterMobile />
        </div>
        <SiteFooterDesktopGridBackdrop />
        {/* Figma `166:1259` — atmosphere above grid (`z-[1]`), under footer copy (`z-[2]`). */}
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
        <div
          className="relative z-[2] isolate mx-auto hidden w-full min-w-0 max-w-[1440px] lg:block"
          data-node-id="10:237"
          data-name="Footer v2"
        >
          <CanvasScaler
            canvasWidth={SITE_FOOTER_DESKTOP_CANVAS_WIDTH_PX}
            canvasHeight={SITE_FOOTER_DESKTOP_CANVAS_HEIGHT_PX}
            wrapClassName={SITE_FOOTER_DESKTOP_CANVAS_WRAP_MODIFIER_CLASS}
            innerClassName={SITE_FOOTER_DESKTOP_CANVAS_INNER_MODIFIER_CLASS}
          >
            <div className="relative isolate h-[590px] min-h-[590px] w-full overflow-hidden">
              {/* Background / glow art — below copy (paint order + z-0). */}
              <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <div
                  className="absolute h-[563px] left-[638px] opacity-70 top-[27px] w-[633px]"
                  data-node-id="10:224"
                  data-name="101"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      alt=""
                      width={2400}
                      height={2400}
                      unoptimized
                      className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                      src={FIGMA_ASSETS.img10}
                    />
                  </div>
                </div>
                <div
                  className="absolute h-[563px] left-[640px] mix-blend-lighten opacity-70 top-[26px] w-[633px]"
                  data-node-id="10:223"
                  data-name="10"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      alt=""
                      width={2400}
                      height={2400}
                      unoptimized
                      className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                      src={FIGMA_ASSETS.img10}
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute z-10 h-0 left-[99px] w-[1241px]"
                style={{ top: `${SITE_FOOTER_DESKTOP_FOOTER_BOTTOM_TOP_PX}px` }}
                data-node-id="10:238"
                data-name="Footer Bottom"
              >
                <div className="absolute inset-[0_0_-1px_0]">
                  <Image
                    alt=""
                    width={2400}
                    height={2400}
                    unoptimized
                    className="block max-w-none size-full"
                    src={FIGMA_ASSETS.imgFooterBottom}
                  />
                </div>
              </div>
              <div
                className="absolute contents left-[99px] top-[116px]"
                data-node-id="10:241"
                data-name="Footer Middle"
              >
                <div
                  className="absolute z-10 content-stretch flex gap-[94px] items-start left-[99px] top-[116px] w-[660.376px]"
                  data-node-id="10:242"
                >
                  <div
                    className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[114.275px]"
                    data-node-id="10:243"
                    data-name="Footer Column"
                  >
                    <p
                      className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
                      data-node-id="10:244"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {t("footer.company")}
                    </p>
                    <div
                      className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
                      data-node-id="10:245"
                      data-name="Footer Links"
                    >
                      <Link
                        href="/about-us"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:246"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:247"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:249"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("nav.about")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/team"
                        className="content-stretch flex gap-[6px] items-center relative shrink-0"
                        data-node-id="10:251"
                        data-name="Master Link"
                      >
                        <p
                          className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                          data-node-id="10:253"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                        >
                          {t("nav.team")}
                        </p>
                      </Link>
                      <Link
                        href="/contact"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:255"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:256"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:258"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.contactUs")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/portfolio"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:260"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:261"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:263"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("nav.portfolio")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/services"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:265"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:266"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:268"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("nav.services")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/blog"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:270"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:271"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:273"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("nav.blog")}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[130.078px]"
                    data-node-id="10:275"
                    data-name="Footer Column"
                  >
                    <p
                      className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
                      data-node-id="10:276"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {t("footer.services")}
                    </p>
                    <div
                      className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
                      data-node-id="10:277"
                      data-name="Footer Links"
                    >
                      <Link
                        href="/services/website-development"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:278"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:279"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:281"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.serviceLabels.website")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/services/mobile-app-development"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:283"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:284"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:286"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.serviceLabels.mobileApp")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/services/crm-systems"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:288"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:289"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:291"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.serviceLabels.crmSystems")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/services/saas-development"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:293"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:294"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:296"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.serviceLabels.saasPlatforms")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/services/ai-product-development"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:298"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:299"
                          data-name="Master Link"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:301"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.serviceLabels.aiIntegration")}
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/services"
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:303"
                      >
                        <p
                          className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                        >
                          {t("footer.serviceLabels.all")}
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[244px]"
                    data-node-id="10:304"
                    data-name="Footer Column"
                  >
                    <p
                      className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
                      data-node-id="10:305"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {t("footer.contact")}
                    </p>
                    <div
                      className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
                      data-node-id="10:306"
                      data-name="Footer Links"
                    >
                      <div
                        className="content-stretch flex items-start relative shrink-0"
                        data-node-id="10:307"
                        data-name="Link"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0"
                          data-node-id="10:308"
                          data-name="Master Link"
                        >
                          <div
                            className="relative h-[18px] w-[14px] shrink-0"
                            data-node-id="10:310"
                            data-name="Vector"
                          >
                            <Image
                              alt=""
                              fill
                              unoptimized
                              className="object-contain"
                              src={SITE_FOOTER_MOBILE_539.contactAddress}
                              sizes="14px"
                            />
                          </div>
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                            data-node-id="10:311"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.address")}
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[9px] items-center relative shrink-0"
                        data-node-id="10:313"
                      >
                        <div
                          className="relative h-[15px] w-[20px] shrink-0"
                          data-node-id="10:314"
                          data-name="Vector"
                        >
                          <Image
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
                            src={SITE_FOOTER_MOBILE_539.contactEmail}
                            sizes="20px"
                          />
                        </div>
                        <a
                          className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap"
                          href={`mailto:${CONTACT_DETAILS.email}`}
                          data-node-id="10:315"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p
                            className="cursor-pointer font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] text-[18px]"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            info@neetrino.com
                          </p>
                        </a>
                      </div>
                      <div
                        className="content-stretch flex gap-[9px] items-center relative shrink-0"
                        data-node-id="10:316"
                      >
                        <div
                          className="relative size-[18px] shrink-0"
                          data-node-id="10:317"
                          data-name="Vector"
                        >
                          <Image
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
                            src={SITE_FOOTER_MOBILE_539.contactPhone}
                            sizes="18px"
                          />
                        </div>
                        <a
                          className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap"
                          href={CONTACT_DETAILS.phoneTelHref}
                          data-node-id="10:318"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p
                            className="cursor-pointer leading-[18px] text-[16px]"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            +374 44 343 000
                          </p>
                        </a>
                      </div>
                      <div
                        className="content-stretch flex gap-[9px] items-start relative shrink-0"
                        data-node-id="10:319"
                      >
                        <div
                          className="relative h-[21px] w-[21.5px] shrink-0"
                          data-node-id="10:320"
                        >
                          <Image
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
                            src={SITE_FOOTER_MOBILE_539.contactHours}
                            sizes="22px"
                          />
                        </div>
                        <p
                          className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white whitespace-pre"
                          data-node-id="10:323"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                        >
                          {`${t("footer.workingHoursLabel")}\u00a0`}
                          <br aria-hidden="true" />
                          {t("footer.workingHoursValue")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute z-10 content-stretch flex flex-col items-start left-[912.88px] top-[116.02px] w-[426.122px]"
                  data-node-id="10:324"
                  data-name="Footer Column"
                >
                  <div
                    className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[436px]"
                    data-node-id="10:325"
                    data-name="24px"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0"
                      data-node-id="10:326"
                    >
                      <p
                        className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#eee3e3] text-[20px] whitespace-nowrap"
                        data-node-id="10:327"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        {t("footer.messageUs")}
                      </p>
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#dcd5d5] text-[18px] w-[358.364px]"
                        data-node-id="10:328"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        {t("footer.messageDescription")}
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-[426px]"
                      data-node-id="10:329"
                      data-name="16px"
                    >
                      <div
                        className="h-[68px] relative shrink-0 w-full"
                        data-node-id="10:330"
                        data-name="Input Text"
                      >
                        <div
                          className="absolute bg-white border border-[#d9dbe9] border-solid inset-0 rounded-[108px] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]"
                          data-node-id="10:332"
                          data-name="Input"
                        />
                        <div
                          className="absolute content-stretch flex gap-[8px] items-center left-[23px] top-[25px]"
                          data-node-id="10:339"
                          data-name="Input Left"
                        >
                          <p
                            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#dcd5d5] text-[16px] whitespace-nowrap"
                            data-node-id="10:341"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {t("footer.placeholder")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className={cn(
                        "relative block h-[56px] shrink-0 cursor-pointer rounded-[35px]",
                        footerSendWidthClassName,
                      )}
                      data-node-id="10:342"
                      data-name="Send Button"
                    >
                      <div
                        className="absolute bg-[#4a3aff] inset-0 rounded-[35px]"
                        data-node-id="I10:342;2:6"
                      />
                      <div
                        className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[28.57%_50.83%_28.57%_15%] justify-center leading-[0] not-italic text-[16px] text-left text-white whitespace-nowrap"
                        data-node-id="I10:342;2:7"
                      >
                        <p className="leading-[24px]">{t("footer.send")}</p>
                      </div>
                      <div
                        className={cn(
                          "absolute top-[7px] size-[42px]",
                          footerSendIconLeftClassName,
                        )}
                        data-node-id="I10:342;2:8"
                      >
                        <Image
                          alt=""
                          fill
                          unoptimized
                          className="object-contain"
                          src={SITE_FOOTER_MOBILE_539.sendArrow}
                          sizes="42px"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="absolute z-10 content-stretch flex gap-[22px] items-center justify-center left-[1075px] top-[527px]"
                data-node-id="10:343"
                data-name="Social Media Container"
              >
                {SITE_FOOTER_SOCIAL_ROW_ICONS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="relative block shrink-0 text-white transition-opacity hover:opacity-80"
                  >
                    <span className={cn("relative block", item.wrapperClass)}>
                      {item.innerClass ? (
                        <span
                          className={cn(
                            "pointer-events-none relative block size-full",
                            item.innerClass,
                          )}
                        >
                          <Image
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
                            src={item.src}
                            sizes="32px"
                          />
                        </span>
                      ) : (
                        <span className="pointer-events-none relative block size-full">
                          <Image
                            alt=""
                            fill
                            unoptimized
                            className="object-contain"
                            src={item.src}
                            sizes="32px"
                          />
                        </span>
                      )}
                    </span>
                  </a>
                ))}
              </div>
              <p
                className="absolute z-10 font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] left-[110px] text-[#dcd5d5] text-[18px] top-[536.01px] whitespace-nowrap"
                data-node-id="10:366"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {t("footer.copyright")}
              </p>
            </div>
          </CanvasScaler>
        </div>
      </div>
    </footer>
  );
}
