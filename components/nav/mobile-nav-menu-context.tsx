"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type MobileNavMenuContextValue = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavMenuContext = createContext<MobileNavMenuContextValue | null>(null);

export function MobileNavMenuProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const value = useMemo(() => ({ menuOpen, setMenuOpen }), [menuOpen]);
  return <MobileNavMenuContext.Provider value={value}>{children}</MobileNavMenuContext.Provider>;
}

export function useMobileNavMenu(): MobileNavMenuContextValue {
  const ctx = useContext(MobileNavMenuContext);
  if (!ctx) {
    throw new Error("useMobileNavMenu must be used within MobileNavMenuProvider");
  }
  return ctx;
}

/** Read-only: false when no provider (FAB stays visible). */
export function useMobileNavMenuOpen(): boolean {
  return useContext(MobileNavMenuContext)?.menuOpen ?? false;
}
