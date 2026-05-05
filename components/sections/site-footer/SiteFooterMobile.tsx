"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import { CONTACT_DETAILS } from "@/components/contact/content";
import { SITE_FOOTER_MOBILE_539 } from "@/lib/site-footer-mobile-539-assets.constants";
import { SITE_FOOTER_SOCIAL_ROW_ICONS } from "@/lib/site-footer-social-row-icons.constants";
import {
  SITE_FOOTER_MOBILE_BOTTOM_BLEED_CLASS,
  SITE_FOOTER_MOBILE_COMPANY_SERVICES_COLUMN_CLASS,
  SITE_FOOTER_MOBILE_COMPANY_SERVICES_ROW_CLASS,
  SITE_FOOTER_MOBILE_COPYRIGHT_CLASS,
  SITE_FOOTER_MOBILE_COPYRIGHT_RULE_CLASS,
  SITE_FOOTER_MOBILE_NAV_SHELL_CLASS,
  SITE_FOOTER_MOBILE_OUTER_STACK_CLASS,
  SITE_FOOTER_MOBILE_SERVICES_COLUMN_CLASS,
  SITE_FOOTER_MOBILE_SOCIAL_ROW_CLASS,
} from "@/lib/site-footer-mobile-tablet-layout.constants";
import { interSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteFooterMobileBackdrop539 } from "./SiteFooterMobileBackdrop539";

const LINK_CLASS =
  "block text-left text-sm font-normal leading-5 tracking-[-0.15px] text-white transition-opacity hover:opacity-85";
const SECTION_TITLE_CLASS = "text-lg font-bold leading-7 tracking-[-0.44px] text-white";

/**
 * Mobile footer — Figma `539:1824` (NEETRINO-WEB): #151515, grid + `539:1826` blue L→R atmosphere,
 * portrait art, Inter typography, CTA + social row aligned to handoff.
 */
export function SiteFooterMobile() {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "relative isolate min-h-[280px] overflow-hidden bg-[#151515] lg:hidden",
        interSans.className,
      )}
    >
      <SiteFooterMobileBackdrop539 />
      <div className={SITE_FOOTER_MOBILE_OUTER_STACK_CLASS}>
        <div className={SITE_FOOTER_MOBILE_NAV_SHELL_CLASS}>
          <nav className="flex flex-col gap-8" aria-label={t("footer.company")}>
            <div className={SITE_FOOTER_MOBILE_COMPANY_SERVICES_ROW_CLASS}>
              <section className={SITE_FOOTER_MOBILE_COMPANY_SERVICES_COLUMN_CLASS}>
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

              <section className={SITE_FOOTER_MOBILE_SERVICES_COLUMN_CLASS}>
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
            </div>

            <section>
              <h2 className={SECTION_TITLE_CLASS}>{t("footer.contact")}</h2>
              <ul className="mt-4 flex max-w-[min(100%,22rem)] flex-col gap-3">
                <li className="flex items-start gap-2">
                  <span className="relative mt-0.5 size-4 shrink-0">
                    <Image
                      alt=""
                      src={SITE_FOOTER_MOBILE_539.contactAddress}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="16px"
                    />
                  </span>
                  <span className={LINK_CLASS}>{t("footer.address")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="relative h-4 w-5 shrink-0">
                    <Image
                      alt=""
                      src={SITE_FOOTER_MOBILE_539.contactEmail}
                      fill
                      unoptimized
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
                  <span className="relative size-4 shrink-0">
                    <Image
                      alt=""
                      src={SITE_FOOTER_MOBILE_539.contactPhone}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="16px"
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
                  <span className="relative mt-0.5 size-5 shrink-0">
                    <Image
                      alt=""
                      src={SITE_FOOTER_MOBILE_539.contactHours}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="20px"
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
                className="mt-6 flex h-14 w-full items-center rounded-full bg-white px-4 text-left text-sm text-[rgba(74,85,101,0.5)] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] transition-opacity hover:opacity-95"
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
                    src={SITE_FOOTER_MOBILE_539.sendArrow}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="42px"
                  />
                </span>
              </Link>
            </section>
          </nav>
        </div>

        <div className={SITE_FOOTER_MOBILE_BOTTOM_BLEED_CLASS}>
          <div className={SITE_FOOTER_MOBILE_SOCIAL_ROW_CLASS}>
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
                        unoptimized
                        src={item.src}
                        fill
                        className="object-contain"
                        sizes="32px"
                      />
                    </span>
                  ) : (
                    <span className="pointer-events-none relative block size-full">
                      <Image
                        alt=""
                        unoptimized
                        src={item.src}
                        fill
                        className="object-contain"
                        sizes="32px"
                      />
                    </span>
                  )}
                </span>
              </a>
            ))}
          </div>

          <div className={SITE_FOOTER_MOBILE_COPYRIGHT_RULE_CLASS}>
            <p className={SITE_FOOTER_MOBILE_COPYRIGHT_CLASS}>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
