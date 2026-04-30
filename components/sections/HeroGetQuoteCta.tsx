"use client";

import { useTranslations } from "next-intl";
import { useQuoteModal } from "@/components/quote/quote-modal-context";
import { GET_QUOTE_FIGMA_241_836_PRIMARY_PILL_CLASSNAME } from "@/lib/get-quote-figma-pill.constants";
import { cn } from "@/lib/utils";

const HERO_GET_QUOTE_LAYOUT_CLASS =
  "absolute left-1/2 top-[693px] z-[25] w-[min(393px,calc(100%-48px))] -translate-x-1/2 shadow-lg shadow-black/25";

export function HeroGetQuoteCta() {
  const t = useTranslations();
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={openQuoteModal}
      className={cn(HERO_GET_QUOTE_LAYOUT_CLASS, GET_QUOTE_FIGMA_241_836_PRIMARY_PILL_CLASSNAME)}
    >
      {t("cta.getQuote")}
    </button>
  );
}
