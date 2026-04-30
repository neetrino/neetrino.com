import type { AppLocale } from "@/lib/i18n/locales";
import {
  img2661,
  imgBiotechLogo1,
  imgBorbo1R1,
  imgDegustoStudioBanner1,
  imgDigitalImplantClinicBanner1,
  imgMapcoGroupBanner1,
  imgNcieNationalCenterBanner1,
  imgSmartphonePresentationMockup1,
} from "./portfolio-figma-assets";

/**
 * Mobile portfolio cards — same cases and order as `PortfolioDesktopScene` (lg+ canvas).
 */
const MOBILE_PORTFOLIO_IMAGES = [
  img2661,
  imgBiotechLogo1,
  imgSmartphonePresentationMockup1,
  imgDegustoStudioBanner1,
  imgMapcoGroupBanner1,
  imgBorbo1R1,
  imgNcieNationalCenterBanner1,
  imgDigitalImplantClinicBanner1,
] as const;

/**
 * `next/image` `sizes` for cards in the `lg:hidden` grid.
 * Keep this exact string stable — changing it can alter generated `srcSet` and cause hydration mismatches.
 */
export const MOBILE_PORTFOLIO_CARD_IMAGE_SIZES =
  "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 0vw" as const;

const MOBILE_PORTFOLIO_TITLES_BY_LOCALE: Record<AppLocale, readonly string[]> = {
  en: [
    "Landing Platform",
    "Biotech Identity",
    "ANRA",
    "DEGUSTO STUDIO",
    "MAPCO GROUP",
    "Daily Dose Aqua",
    "National Center for Innovation and Entrepreneurship",
    "Digital Implant Clinic",
  ],
  ru: [
    "Платформа лендингов",
    "Айдентика Biotech",
    "АНРА",
    "DEGUSTO STUDIO",
    "MAPCO GROUP",
    "Daily Dose Aqua",
    "Национальный центр инноваций и предпринимательства",
    "Digital Implant Clinic",
  ],
  hy: [
    "Լենդինգ հարթակ",
    "Biotech ինքնություն",
    "ANRA",
    "DEGUSTO STUDIO",
    "MAPCO GROUP",
    "Daily Dose Aqua",
    "Նորարարության և ձեռնարկատիրության ազգային կենտրոն",
    "Digital Implant Clinic",
  ],
};

export function getMobilePortfolioItems(locale: AppLocale) {
  return MOBILE_PORTFOLIO_IMAGES.map((image, index) => ({
    image,
    title: MOBILE_PORTFOLIO_TITLES_BY_LOCALE[locale][index] ?? "",
  }));
}
