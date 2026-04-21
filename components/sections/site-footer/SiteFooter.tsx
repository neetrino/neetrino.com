import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { cn } from "@/lib/utils";
import { companyLinks, serviceLinks } from "./footer-data";
import { FooterColumnTitle, FooterSocialRow } from "./FooterPrimitives";
import { FooterMessageForm } from "./FooterMessageForm";

export function Footer() {
  const t = useTranslations();

  return (
    <footer
      id="contact"
      className={cn(
        "dm-sans-opsz-14 border-t border-white/20 bg-[#151515] font-[family-name:var(--font-dm-sans)]",
      )}
    >
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8">
          <div>
            <FooterColumnTitle>{t("footer.menu")}</FooterColumnTitle>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(({ href, labelKey }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-lg font-normal text-white transition hover:text-gray-300"
                  >
                    {t(`nav.${labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle>{t("footer.services")}</FooterColumnTitle>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map(({ href, labelKey }) => (
                <li key={labelKey}>
                  <Link
                    href={href}
                    className="pointer-events-auto text-lg font-normal text-white transition hover:text-gray-300"
                  >
                    {t(`footer.serviceLabels.${labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle>{t("footer.contact")}</FooterColumnTitle>
            <ul className="mt-4 space-y-4 text-lg font-normal text-white">
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgVector3}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span>{t("footer.address")}</span>
              </li>
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgVector4}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <Link href="mailto:info@neetrino.com" className="transition hover:text-gray-300">
                  info@neetrino.com
                </Link>
              </li>
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgVector5}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <Link href="tel:+37444343000" className="transition hover:text-gray-300">
                  +374 44 343 000
                </Link>
              </li>
              <li className="flex gap-3">
                <Image
                  src={FIGMA_ASSETS.imgGroup2087329580}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span className="whitespace-pre-line">
                  {`${t("footer.workingHoursLabel")}\n${t("footer.workingHoursValue")}`}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <FooterColumnTitle>{t("footer.messageUs")}</FooterColumnTitle>
            <p className="mt-3 text-lg font-normal leading-relaxed text-white/80">
              {t("footer.messageDescription")}
            </p>
            <FooterMessageForm />
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <FooterSocialRow />
            </div>
            <p className="text-center text-sm text-white/70 lg:text-right">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
