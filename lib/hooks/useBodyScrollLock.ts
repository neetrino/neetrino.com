"use client";

import { useEffect } from "react";

/**
 * Locks document scroll while `locked` is true (e.g. mobile menu open).
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}
