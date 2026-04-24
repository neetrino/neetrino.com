import { PUBLIC_IMAGES } from "@/lib/public-image-paths";
import type { AppLocale } from "@/lib/i18n/locales";
import { imgBiotechLogo1, imgPortfolio161, img2661 } from "./portfolio-figma-assets";

export { imgPortfolio161, img2661, imgBiotechLogo1 };

const { portfolio3, portfolio4_1, portfolio6, portfolio10, portfolio14 } = PUBLIC_IMAGES.portfolio;

export const PORTFOLIO_CASE_IMAGES = [
  imgPortfolio161,
  portfolio3,
  portfolio4_1,
  portfolio6,
  portfolio10,
  portfolio14,
] as const;

/** Mobile portfolio grid: initial slice + scroll “load more” step (see `PortfolioMobile`). */
export const MOBILE_PORTFOLIO_INITIAL_VISIBLE = 6;
export const MOBILE_PORTFOLIO_LOAD_MORE_STEP = 2;

/**
 * `next/image` `sizes` for cards in the `lg:hidden` grid.
 * Keep this exact string stable — changing it can alter generated `srcSet` and cause hydration mismatches.
 */
export const MOBILE_PORTFOLIO_CARD_IMAGE_SIZES =
  "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 0vw" as const;

const MOBILE_PORTFOLIO_ITEMS_BASE = [
  { title: "Landing Platform", image: img2661 },
  { title: "Biotech Identity", image: imgBiotechLogo1 },
  { title: "Portfolio Showcase", image: imgPortfolio161 },
  { title: "Product Campaign", image: portfolio3 },
  { title: "Brand Story", image: portfolio4_1 },
  { title: "Creative Launch", image: portfolio6 },
  { title: "Visual System", image: portfolio10 },
  { title: "Launch Experience", image: portfolio14 },
] as const;

const MOBILE_PORTFOLIO_TITLES_BY_LOCALE: Record<AppLocale, readonly string[]> = {
  en: MOBILE_PORTFOLIO_ITEMS_BASE.map((item) => item.title),
  ru: [
    "Платформа лендингов",
    "Айдентика Biotech",
    "Портфолио-витрина",
    "Продуктовая кампания",
    "История бренда",
    "Креативный запуск",
    "Визуальная система",
    "Запуск продукта",
  ],
  hy: [
    "Լենդինգ հարթակ",
    "Biotech ինքնություն",
    "Պորտֆոլիո վիտրինա",
    "Պրոդուկտային արշավ",
    "Բրենդի պատմություն",
    "Կրեատիվ թողարկում",
    "Վիզուալ համակարգ",
    "Թողարկման փորձ",
  ],
};

export function getMobilePortfolioItems(locale: AppLocale) {
  return MOBILE_PORTFOLIO_ITEMS_BASE.map((item, index) => ({
    ...item,
    title: MOBILE_PORTFOLIO_TITLES_BY_LOCALE[locale][index] ?? item.title,
  }));
}

export const desktopPortfolioRows = [
  PORTFOLIO_CASE_IMAGES.slice(0, 3),
  PORTFOLIO_CASE_IMAGES.slice(3),
] as const;
