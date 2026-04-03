"use client";

import { DesktopSiteHeader } from "@/components/shared/DesktopSiteHeader";
import { MobileHeader } from "@/components/shared/MobileHeader";

/**
 * Single site chrome entry: mobile/tablet `MobileHeader` (below `lg`); desktop `lg+` uses the
 * Home-derived `HomeDesktopHeader` via `DesktopSiteHeader` (scaled like `CanvasScaler`).
 */
export function AppHeader() {
  return (
    <>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <DesktopSiteHeader />
    </>
  );
}
