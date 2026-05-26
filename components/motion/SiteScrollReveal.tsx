"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import {
  SCROLL_REVEAL_SLOW_DURATION_MS,
  SCROLL_REVEAL_SLOW_STAGGER_MS,
  SCROLL_REVEAL_SLOW_Y_PX,
  SCROLL_REVEAL_VIEWPORT_AMOUNT,
} from "@/lib/motion/scroll-reveal.constants";
import { MOTION_EASE } from "@/lib/motion/tokens";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)" as const;

/** Defer DOM writes until after React hydration (layout effect can run before child hydrate). */
const REVEAL_SETUP_DEFER_MS = 0;

const SITE_SCROLL_REVEAL_SELECTOR = [
  "[data-scroll-reveal-block]",
  "main > section",
  "main section",
  "main article",
  "main header",
  ".section-container > section",
  ".section-container > div",
].join(", ");

const REVEALED_CLASS = "site-scroll-reveal--visible" as const;
const INIT_CLASS = "site-scroll-reveal" as const;

function easeToCss(ease: readonly [number, number, number, number]): string {
  return `cubic-bezier(${ease.join(", ")})`;
}

function pickOutermostBlocks(nodes: HTMLElement[]): HTMLElement[] {
  return nodes.filter((node) => !nodes.some((other) => other !== node && other.contains(node)));
}

function isRevealManagedBlock(el: HTMLElement): boolean {
  if (el.closest("[data-reveal-root]")) {
    return true;
  }
  if (el.querySelector("[data-reveal-root]")) {
    return true;
  }
  return false;
}

function useIsClientHydrated(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/**
 * Applies slow fade-up to flow-page blocks (`section`, `article`, `[data-scroll-reveal-block]`).
 * Skips Motion-managed trees (`[data-reveal-root]` / `PageBlockReveal`).
 */
export function SiteScrollReveal() {
  const pathname = usePathname();
  const isClientHydrated = useIsClientHydrated();

  useEffect(() => {
    if (!isClientHydrated) {
      return;
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    if (mediaQuery.matches) {
      return;
    }

    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let targets: HTMLElement[] = [];

    const timeoutId = window.setTimeout(() => {
      if (cancelled) {
        return;
      }

      const durationSec = SCROLL_REVEAL_SLOW_DURATION_MS / 1000;
      const ease = easeToCss(MOTION_EASE.smooth);
      const transition = `opacity ${durationSec}s ${ease}, transform ${durationSec}s ${ease}`;

      const candidates = Array.from(
        document.querySelectorAll<HTMLElement>(SITE_SCROLL_REVEAL_SELECTOR),
      ).filter((el) => !isRevealManagedBlock(el));

      targets = pickOutermostBlocks(candidates);

      for (const [index, el] of targets.entries()) {
        el.classList.add(INIT_CLASS);
        el.style.setProperty(
          "--site-reveal-delay",
          `${(index % 8) * SCROLL_REVEAL_SLOW_STAGGER_MS}ms`,
        );
        el.style.setProperty("--site-reveal-transition", transition);
        el.style.setProperty("--site-reveal-y", `${SCROLL_REVEAL_SLOW_Y_PX}px`);
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            entry.target.classList.add(REVEALED_CLASS);
            observer?.unobserve(entry.target);
          }
        },
        { threshold: SCROLL_REVEAL_VIEWPORT_AMOUNT, rootMargin: "0px 0px -6% 0px" },
      );

      for (const el of targets) {
        observer.observe(el);
      }
    }, REVEAL_SETUP_DEFER_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      observer?.disconnect();
      for (const el of targets) {
        el.classList.remove(INIT_CLASS, REVEALED_CLASS);
        el.style.removeProperty("--site-reveal-delay");
        el.style.removeProperty("--site-reveal-transition");
        el.style.removeProperty("--site-reveal-y");
      }
    };
  }, [isClientHydrated, pathname]);

  return null;
}
