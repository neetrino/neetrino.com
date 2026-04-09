"use client";

import { useQuoteModal } from "@/components/quote/quote-modal-context";

const BASE =
  "absolute left-1/2 z-[25] flex h-14 w-[min(393px,calc(100%-48px))] -translate-x-1/2 items-center justify-center rounded-[28px] text-base font-extrabold transition-opacity hover:opacity-95";

const GLASS =
  "pointer-events-none absolute inset-0 rounded-[28px] backdrop-blur-3xl backdrop-saturate-150";

export function HeroGetQuoteCta() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={openQuoteModal}
      className={`${BASE} top-[693px] isolate text-white shadow-lg shadow-black/25`}
    >
      <span className={`${GLASS} border border-white/30 bg-[#473dff]/20`} aria-hidden />
      <span className="relative z-10">Get a Quote</span>
    </button>
  );
}
