"use client";

import { usePathname } from "next/navigation";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { HomeDesktopHeader } from "@/components/sections/HomeDesktopHeader";

const PATH_ABOUT_OR_CONTACT = ["/about-us", "/contact"] as const;
const PATH_SERVICES_OR_PORTFOLIO = ["/services", "/portfolio"] as const;

function matchesPath(pathname: string, candidates: readonly string[]): boolean {
  return (candidates as readonly string[]).includes(pathname);
}

/**
 * Single entry point for site chrome headers. Viewports below `lg` use one shared `MobileHeader`
 * (same as former Home `Navbar`). Desktop (lg+): Home uses canvas header; about/contact use
 * `HomeDesktopHeader`; services/portfolio have no desktop chrome here.
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

  if (matchesPath(pathname, PATH_ABOUT_OR_CONTACT)) {
    return (
      <>
        {mobileHeader}
        <HomeDesktopHeader />
      </>
    );
  }

  if (matchesPath(pathname, PATH_SERVICES_OR_PORTFOLIO)) {
    return mobileHeader;
  }

  return null;
}
