"use client";

import { usePathname } from "next/navigation";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { HomeDesktopHeader } from "@/components/sections/HomeDesktopHeader";

/** Routes without a full-page canvas header — use global `HomeDesktopHeader` on lg+. */
const PATH_DESKTOP_CHROME = ["/about-us", "/contact"] as const;

function matchesPath(pathname: string, candidates: readonly string[]): boolean {
  return (candidates as readonly string[]).includes(pathname);
}

/**
 * Single entry point for site chrome headers. Viewports below `lg` use one shared `MobileHeader`
 * (same as former Home `Navbar`). Desktop (lg+): Home uses canvas `Awwwards`; `/services` and
 * `/portfolio` rely on in-canvas headers only; `/about-us` and `/contact` use `HomeDesktopHeader`.
 */
export function AppHeader() {
  const pathname = usePathname();

  const mobileHeader = (
    <div className="lg:hidden">
      <MobileHeader />
    </div>
  );

  if (pathname === "/") {
    return mobileHeader;
  }

  return (
    <>
      {mobileHeader}
      {matchesPath(pathname, PATH_DESKTOP_CHROME) ? <HomeDesktopHeader /> : null}
    </>
  );
}
