"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import { CONTACT_DETAILS } from "@/components/contact/content";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { FOOTER_SOCIAL_ICON_HREFS } from "@/lib/site-footer-social-hrefs";
import {
  SITE_FOOTER_MOBILE_VECTOR_BLEND_HOST_CLASS,
  SITE_FOOTER_MOBILE_VECTOR_FRAME_CLASS,
  SITE_FOOTER_MOBILE_VECTOR_IMAGE_CLASS,
} from "@/lib/site-footer-mobile-background.constants";
import {
  SITE_FOOTER_MOBILE_ROBOT_DECORATION_CLASS,
  SITE_FOOTER_MOBILE_ROBOT_IMAGE_CLASS,
} from "@/lib/site-footer-mobile-robot.constants";
import { cn } from "@/lib/utils";

const LINK_CLASS =
  "block text-left text-sm font-normal leading-5 tracking-[-0.15px] text-white transition-opacity hover:opacity-85";
const SECTION_TITLE_CLASS = "text-lg font-bold leading-7 tracking-[-0.44px] text-white";

const SOCIAL_ICONS: ReadonlyArray<{
  href: (typeof FOOTER_SOCIAL_ICON_HREFS)[number];
  label: string;
  src: string;
  wrapperClass: string;
  innerClass?: string;
}> = [
  {
    href: FOOTER_SOCIAL_ICON_HREFS[0],
    label: "Facebook",
    src: FIGMA_ASSETS.imgSocialMediaIconSquareFacebook,
    wrapperClass: "h-[19px] w-[11px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[1],
    label: "Instagram",
    src: FIGMA_ASSETS.imgSocialMediaIconSquareInstagram,
    wrapperClass: "size-[19px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[2],
    label: "LinkedIn",
    src: FIGMA_ASSETS.imgGroup73,
    wrapperClass: "h-[18px] w-[19px]",
    innerClass: "absolute inset-[4.58%_0.79%_0.19%_4.47%]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[3],
    label: "Behance",
    src: FIGMA_ASSETS.imgGroup,
    wrapperClass: "h-[15px] w-[24px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[4],
    label: "YouTube",
    src: FIGMA_ASSETS.imgGroup74,
    wrapperClass: "h-[15px] w-[21px]",
    innerClass: "absolute inset-[2.64%_1.19%_4.05%_4.52%]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[5],
    label: "WhatsApp",
    src: FIGMA_ASSETS.imgVector3,
    wrapperClass: "size-[20px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[6],
    label: "Telegram",
    src: FIGMA_ASSETS.imgVector4,
    wrapperClass: "h-[20.472px] w-[18.796px]",
  },
];

/**
 * Mobile footer — Figma `479:1323` (stacked content), `479:1145` grid vector (`mix-blend-overlay`),
 * robot strip right (`722:742` + `mix-blend-hard-light`).
 * Rendered inside `<Footer />` under `lg:hidden`; desktop keeps pixel `SiteFooter` canvas.
 */
export function SiteFooterMobile() {
  const t = useTranslations();

  return (
    <div className="relative isolate min-h-[280px] overflow-hidden bg-[#121212] font-[family-name:var(--font-dm-sans)] lg:hidden">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 size-full [container-type:size]",
          SITE_FOOTER_MOBILE_VECTOR_BLEND_HOST_CLASS,
        )}
        aria-hidden
      >
        <div className={SITE_FOOTER_MOBILE_VECTOR_FRAME_CLASS}>
          <Image
            alt=""
            src={FIGMA_ASSETS.imgMobileFooterBackground479_1145}
            fill
            className={SITE_FOOTER_MOBILE_VECTOR_IMAGE_CLASS}
            sizes="100vw"
            priority={false}
          />
        </div>
      </div>
      <div className={SITE_FOOTER_MOBILE_ROBOT_DECORATION_CLASS} aria-hidden>
        <div className="relative h-full min-h-[380px] w-full mix-blend-hard-light">
          <Image
            alt=""
            src={FIGMA_ASSETS.imgMobileFooterRobotProfile}
            fill
            sizes="(max-width: 1024px) 82vw, 0"
            className={cn("pointer-events-none", SITE_FOOTER_MOBILE_ROBOT_IMAGE_CLASS)}
            priority={false}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[min(100%,22.75rem)] px-4 pb-10 pt-10 sm:px-5">
        <nav className="flex flex-col gap-8" aria-label={t("footer.company")}>
          <section>
            <h2 className={SECTION_TITLE_CLASS}>{t("footer.company")}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/about-us" className={LINK_CLASS}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/team" className={LINK_CLASS}>
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={LINK_CLASS}>
                  {t("footer.contactUs")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={LINK_CLASS}>
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/services" className={LINK_CLASS}>
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className={LINK_CLASS}>
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className={SECTION_TITLE_CLASS}>{t("footer.services")}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href={serviceDetailHref("website-development")} className={LINK_CLASS}>
                  {t("footer.serviceLabels.website")}
                </Link>
              </li>
              <li>
                <Link href={serviceDetailHref("mobile-app-development")} className={LINK_CLASS}>
                  {t("footer.serviceLabels.mobileApp")}
                </Link>
              </li>
              <li>
                <Link href={serviceDetailHref("crm-systems")} className={LINK_CLASS}>
                  {t("footer.serviceLabels.crmSystems")}
                </Link>
              </li>
              <li>
                <Link href={serviceDetailHref("saas-development")} className={LINK_CLASS}>
                  {t("footer.serviceLabels.saasPlatforms")}
                </Link>
              </li>
              <li>
                <Link href={serviceDetailHref("ai-product-development")} className={LINK_CLASS}>
                  {t("footer.serviceLabels.aiIntegration")}
                </Link>
              </li>
              <li>
                <Link href="/services" className={LINK_CLASS}>
                  {t("footer.serviceLabels.all")}
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className={SECTION_TITLE_CLASS}>{t("footer.contact")}</h2>
            <ul className="mt-4 flex max-w-[min(100%,22rem)] flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="relative mt-0.5 h-[18px] w-[14px] shrink-0">
                  <Image
                    alt=""
                    src={FIGMA_ASSETS.imgVector}
                    fill
                    className="object-contain"
                    sizes="14px"
                  />
                </span>
                <span className={LINK_CLASS}>{t("footer.address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="relative h-[15px] w-5 shrink-0">
                  <Image
                    alt=""
                    src={FIGMA_ASSETS.imgVector1}
                    fill
                    className="object-contain"
                    sizes="20px"
                  />
                </span>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="text-sm font-normal leading-5 tracking-[-0.15px] text-white underline-offset-2 hover:underline"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="relative size-[18px] shrink-0">
                  <Image
                    alt=""
                    src={FIGMA_ASSETS.imgVector2}
                    fill
                    className="object-contain"
                    sizes="18px"
                  />
                </span>
                <a
                  href={CONTACT_DETAILS.phoneTelHref}
                  className="text-sm font-normal leading-5 tracking-[-0.15px] text-white underline-offset-2 hover:underline"
                >
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="relative mt-0.5 h-[21px] w-[21.5px] shrink-0">
                  <Image
                    alt=""
                    src={FIGMA_ASSETS.imgGroup2087329580}
                    fill
                    className="object-contain"
                    sizes="22px"
                  />
                </span>
                <span className="text-sm font-normal leading-5 tracking-[-0.15px] text-white">
                  {t("footer.workingHoursLabel")}
                  <br />
                  {t("footer.workingHoursValue")}
                </span>
              </li>
            </ul>
          </section>

          <section className="w-full max-w-[22.75rem]">
            <h2 className={cn(SECTION_TITLE_CLASS, "text-[#eee3e3]")}>{t("footer.messageUs")}</h2>
            <p className="mt-2.5 text-sm font-normal leading-5 tracking-[-0.15px] text-[#dcd5d5]">
              {t("footer.messageDescription")}
            </p>
            <Link
              href="/contact"
              className="mt-6 flex h-14 w-full items-center rounded-[999px] bg-white px-4 text-left text-sm text-[rgba(74,85,101,0.5)] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] transition-opacity hover:opacity-95"
            >
              {t("footer.placeholder")}
            </Link>
            <Link
              href="/contact"
              className="relative mt-4 flex h-14 w-full items-center justify-center overflow-hidden rounded-[35px] bg-[#4a3aff] text-base font-normal text-white transition-opacity hover:opacity-95"
            >
              <span>{t("footer.send")}</span>
              <span className="pointer-events-none absolute right-2 top-1/2 size-[42px] shrink-0 -translate-y-1/2">
                <Image
                  alt=""
                  src={FIGMA_ASSETS.imgGroup221}
                  fill
                  className="object-contain"
                  sizes="42px"
                />
              </span>
            </Link>
          </section>
        </nav>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_ICONS.map((item) => (
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
                    className={cn("pointer-events-none relative block size-full", item.innerClass)}
                  >
                    <Image alt="" src={item.src} fill className="object-contain" sizes="32px" />
                  </span>
                ) : (
                  <span className="pointer-events-none relative block size-full">
                    <Image alt="" src={item.src} fill className="object-contain" sizes="32px" />
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-center text-xs font-normal leading-4 text-[#dcd5d5]">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </div>
  );
}
