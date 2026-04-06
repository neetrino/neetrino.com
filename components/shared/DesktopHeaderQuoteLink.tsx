"use client";

import { useQuoteModal } from "@/components/quote/quote-modal-context";
import {
  DESKTOP_HEADER_QUOTE_LEFT_PX,
  DESKTOP_HEADER_QUOTE_TOP_PX,
} from "@/lib/desktop-header-quote.constants";
import { interHeaderQuote } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type DesktopHeaderQuoteLinkProps = {
  className?: string;
};

/**
 * Desktop header “Get a Quote” — opens the quote modal (same intent as former `/contact` link).
 */
export function DesktopHeaderQuoteLink({ className }: DesktopHeaderQuoteLinkProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={openQuoteModal}
      className={cn(
        "pointer-events-auto absolute z-[105] cursor-pointer border-0 bg-[#473dff] h-[48px] w-[144px] rounded-[28px] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
        className,
      )}
      style={{
        left: DESKTOP_HEADER_QUOTE_LEFT_PX,
        top: DESKTOP_HEADER_QUOTE_TOP_PX,
      }}
      data-name="Link [button]"
      data-node-id="10:451"
    >
      <div
        className={cn(
          "-translate-y-1/2 absolute flex flex-col font-extrabold justify-center leading-[0] left-[25px] not-italic text-[16px] text-white top-[24px] whitespace-nowrap",
          interHeaderQuote.className,
        )}
        data-node-id="10:452"
      >
        <p className="leading-[15.6px]">Get a Quote</p>
      </div>
    </button>
  );
}
