"use client";

import { usePathname } from "next/navigation";
import { ServicesAwwwards } from "@/components/services/ServicesAwwwards";
import { MobileHeader } from "@/components/shared/MobileHeader";

/** Routes without a full-page canvas header — same desktop bar as Services (`ServicesAwwwards`). */
const PATH_DESKTOP_CHROME = ["/about-us", "/contact"] as const;

function matchesPath(pathname: string, candidates: readonly string[]): boolean {
  return (candidates as readonly string[]).includes(pathname);
}

/**
 * Single entry point for site chrome headers. Viewports below `lg` use one shared `MobileHeader`
 * (same as former Home `Navbar`). Desktop (lg+): Home uses canvas `Awwwards`; `/services` and
 * `/portfolio` rely on in-canvas headers only; `/about-us` and `/contact` use `ServicesAwwwards`
 * (same component as in the Services desktop scene).
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
      {matchesPath(pathname, PATH_DESKTOP_CHROME) ? (
        <div className="relative hidden h-[91px] lg:block">
          <ServicesAwwwards className="absolute z-[100] -translate-x-1/2 bg-[rgba(255,255,255,0.21)] h-[64px] left-1/2 rounded-[72px] top-[27px] w-[1240px]" />
        </div>
      ) : null}
    </>
  );
}
