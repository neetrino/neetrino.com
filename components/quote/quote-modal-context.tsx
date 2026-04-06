"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { GetQuoteModal } from "@/components/quote/get-quote-modal";

type QuoteModalContextValue = {
  openQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openQuoteModal = useCallback(() => {
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openQuoteModal }), [openQuoteModal]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <GetQuoteModal open={open} onOpenChange={setOpen} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal(): QuoteModalContextValue {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return ctx;
}
