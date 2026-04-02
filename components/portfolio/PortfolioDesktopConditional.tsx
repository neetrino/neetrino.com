"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { PORTFOLIO_DESKTOP_CANVAS_MIN_H_CLASS } from "@/lib/canvas-route-placeholders";

/** Matches Tailwind `lg` — desktop portfolio canvas only mounts at this width and up. */
const PORTFOLIO_DESKTOP_MEDIA_QUERY = "(min-width: 1024px)" as const;

const PortfolioDesktop = dynamic(
  () =>
    import("@/components/portfolio/PortfolioDesktop").then((m) => ({
      default: m.PortfolioDesktop,
    })),
  {
    loading: () => (
      <div
        className={`pointer-events-none w-full bg-[#151515] ${PORTFOLIO_DESKTOP_CANVAS_MIN_H_CLASS}`}
        aria-hidden
      />
    ),
    ssr: false,
  },
);

function subscribeMediaQuery(onChange: () => void) {
  const mq = window.matchMedia(PORTFOLIO_DESKTOP_MEDIA_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMediaQueryMatches() {
  return window.matchMedia(PORTFOLIO_DESKTOP_MEDIA_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Renders the heavy desktop canvas only when the viewport matches `lg+`.
 * Mobile never downloads the desktop chunk (no ~5MB decorative assets).
 */
export function PortfolioDesktopConditional() {
  const isDesktop = useSyncExternalStore(
    subscribeMediaQuery,
    getMediaQueryMatches,
    getServerSnapshot,
  );

  if (!isDesktop) {
    return null;
  }

  return <PortfolioDesktop />;
}
