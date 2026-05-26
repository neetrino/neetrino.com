"use client";

import { useTranslations } from "next-intl";
import { HeroReveal } from "@/components/motion/HeroReveal";
import { useQuoteModal } from "@/components/quote/quote-modal-context";
import { GET_QUOTE_FIGMA_241_836_PRIMARY_PILL_CLASSNAME } from "@/lib/get-quote-figma-pill.constants";
import { cn } from "@/lib/utils";

const HERO_GET_QUOTE_LAYOUT_CLASS =
  "absolute left-1/2 top-[693px] z-[25] w-[min(393px,calc(100%-48px))] -translate-x-1/2 shadow-lg shadow-black/25";

type HeroGetQuoteCtaProps = {
  readonly revealDelayMs?: number;
};

export function HeroGetQuoteCta({ revealDelayMs }: HeroGetQuoteCtaProps) {
  const t = useTranslations();
  const { openQuoteModal } = useQuoteModal();

  const pillClassName = cn(
    HERO_GET_QUOTE_LAYOUT_CLASS,
    GET_QUOTE_FIGMA_241_836_PRIMARY_PILL_CLASSNAME,
  );

  if (revealDelayMs === undefined) {
    return (
      <button type="button" onClick={openQuoteModal} className={pillClassName}>
        {t("cta.getQuote")}
      </button>
    );
  }

  return (
    <HeroReveal profile="homeHero" delayMs={revealDelayMs} className={pillClassName}>
      <button type="button" onClick={openQuoteModal} className="block w-full">
        {t("cta.getQuote")}
      </button>
    </HeroReveal>
  );
}
