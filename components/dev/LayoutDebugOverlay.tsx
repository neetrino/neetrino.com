"use client";

import { startTransition, useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "neetrino-debug-layout";
const HTML_CLASS = "debug-layout";

const IS_DEV = process.env.NODE_ENV === "development";

/**
 * Temporary dev helper: outlines every box; gaps between outlines ≈ margins.
 * Remove when finished debugging layout.
 */
export function LayoutDebugOverlay() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!IS_DEV) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("debug") === "layout";
    const fromStorage = window.localStorage.getItem(STORAGE_KEY) === "1";
    startTransition(() => {
      setEnabled(fromQuery || fromStorage);
    });
  }, []);

  useEffect(() => {
    if (!IS_DEV) {
      return;
    }
    document.documentElement.classList.toggle(HTML_CLASS, enabled);
    if (enabled) {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [enabled]);

  const toggle = useCallback(() => {
    setEnabled((value) => !value);
  }, []);

  if (!IS_DEV) {
    return null;
  }

  return (
    <button
      type="button"
      className="pointer-events-auto fixed bottom-4 left-4 z-[99999] rounded border border-white/30 bg-black/85 px-2 py-1 font-mono text-[11px] text-white/90 shadow-lg backdrop-blur-sm"
      onClick={toggle}
      aria-pressed={enabled}
      title="Toggle layout outlines (?debug=layout)"
    >
      layout {enabled ? "on" : "off"}
    </button>
  );
}
