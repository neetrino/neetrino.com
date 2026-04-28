"use client";

import { useTranslations } from "next-intl";
import { useQuoteModal } from "@/components/quote/quote-modal-context";
import {
  DESKTOP_HEADER_QUOTE_LEFT_PX,
  DESKTOP_HEADER_QUOTE_TOP_PX,
} from "@/lib/desktop-header-quote.constants";
import { cn } from "@/lib/utils";

type DesktopHeaderQuoteLinkProps = {
  className?: string;
};

/**
 * Desktop header “Get a Quote” — opens the quote modal (same intent as former `/contact` link).
 */
export function DesktopHeaderQuoteLink({ className }: DesktopHeaderQuoteLinkProps) {
  const t = useTranslations();
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={openQuoteModal}
      className={cn(
        "pointer-events-auto absolute z-[105] flex h-[48px] w-[144px] cursor-pointer items-center justify-center rounded-[28px] border-0 bg-[#473dff] font-extrabold text-[16px] leading-[15.6px] text-white not-italic transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 whitespace-nowrap",
        className,
      )}
      style={{
        left: DESKTOP_HEADER_QUOTE_LEFT_PX,
        top: DESKTOP_HEADER_QUOTE_TOP_PX,
      }}
      data-name="Link [button]"
      data-node-id="10:451"
    >
      <span data-node-id="10:452">{t("cta.getQuote")}</span>
    </button>
  );
}
