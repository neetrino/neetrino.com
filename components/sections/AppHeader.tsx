"use client";

import { usePathname } from "next/navigation";
import { HomeDesktopHeader } from "@/components/sections/HomeDesktopHeader";
import { Navbar } from "@/components/sections/Navbar";
import { NonHomeMobileHeader } from "@/components/sections/NonHomeMobileHeader";

const PATH_ABOUT_OR_CONTACT = ["/about-us", "/contact"] as const;
const PATH_SERVICES_OR_PORTFOLIO = ["/services", "/portfolio"] as const;

function matchesPath(pathname: string, candidates: readonly string[]): boolean {
  return (candidates as readonly string[]).includes(pathname);
}

/**
 * Single entry point for site chrome headers. Route-specific variants stay here so
 * pages do not import Navbar / HomeDesktopHeader / NonHomeMobileHeader directly.
 *
 * Home desktop (lg+): header lives inside canvas scenes, not here.
 */
export function AppHeader() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="lg:hidden">
        <Navbar />
      </div>
    );
  }

  if (matchesPath(pathname, PATH_ABOUT_OR_CONTACT)) {
    return (
      <>
        <NonHomeMobileHeader className="lg:hidden" />
        <HomeDesktopHeader />
      </>
    );
  }

  if (matchesPath(pathname, PATH_SERVICES_OR_PORTFOLIO)) {
    return (
      <div className="lg:hidden">
        <NonHomeMobileHeader />
      </div>
    );
  }

  return null;
}
