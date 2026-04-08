"use client";

import { useCallback, useEffect, useRef, useState, type FocusEvent, type RefObject } from "react";
import {
  PRIMARY_NAV_DROPDOWN_CLOSE_DELAY_MS,
  PRIMARY_NAV_DROPDOWN_OPEN_DELAY_MS,
} from "@/lib/primary-nav-dropdown.constants";

type UsePrimaryNavDropdownOpenResult = {
  readonly open: boolean;
  readonly wrapperRef: RefObject<HTMLDivElement | null>;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onFocusCapture: () => void;
  readonly onBlurCapture: (event: FocusEvent<HTMLDivElement>) => void;
};

export function usePrimaryNavDropdownOpen(): UsePrimaryNavDropdownOpenResult {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current !== null) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onMouseEnter = useCallback(() => {
    clearTimers();
    openTimerRef.current = setTimeout(() => {
      setOpen(true);
    }, PRIMARY_NAV_DROPDOWN_OPEN_DELAY_MS);
  }, [clearTimers]);

  const onMouseLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      if (!wrapperRef.current?.contains(document.activeElement)) {
        setOpen(false);
      }
    }, PRIMARY_NAV_DROPDOWN_CLOSE_DELAY_MS);
  }, [clearTimers]);

  const onFocusCapture = useCallback(() => {
    clearTimers();
    setOpen(true);
  }, [clearTimers]);

  const onBlurCapture = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      const next = event.relatedTarget;
      if (next instanceof Node && wrapperRef.current?.contains(next)) {
        return;
      }
      clearTimers();
      setOpen(false);
    },
    [clearTimers],
  );

  return {
    open,
    wrapperRef,
    onMouseEnter,
    onMouseLeave,
    onFocusCapture,
    onBlurCapture,
  };
}
