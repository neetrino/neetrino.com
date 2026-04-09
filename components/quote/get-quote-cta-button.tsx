"use client";

import type { ReactNode } from "react";
import { useQuoteModal } from "@/components/quote/quote-modal-context";
import { cn } from "@/lib/utils";

type GetQuoteCtaButtonProps = {
  className?: string;
  children: ReactNode;
};

export function GetQuoteCtaButton({ className, children }: GetQuoteCtaButtonProps) {
  const { openQuoteModal } = useQuoteModal();
  return (
    <button type="button" onClick={openQuoteModal} className={cn(className)}>
      {children}
    </button>
  );
}
