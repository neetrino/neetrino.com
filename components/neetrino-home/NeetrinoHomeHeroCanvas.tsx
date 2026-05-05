"use client";

import { DesktopServicesMeshTiledColumn } from "@/components/services/DesktopServicesMeshTiledColumn";
import { HOME_DESKTOP_HERO_VECTOR_GRID_WRAP_HEIGHT_PX } from "@/lib/home-desktop-layout";
import { NeetrinoHomeSegment1 } from "./NeetrinoHomeSegment1";

/**
 * Desktop home hero (`10:421` + mesh) without below-the-fold segments — for tablet-width hybrid layout on `/`.
 */
export function NeetrinoHomeHeroCanvas() {
  return (
    <div className="relative w-full min-h-full min-w-0 bg-transparent" data-name="HOME-HERO">
      <DesktopServicesMeshTiledColumn
        wrapHeightDesignPx={HOME_DESKTOP_HERO_VECTOR_GRID_WRAP_HEIGHT_PX}
      />
      <NeetrinoHomeSegment1 showTabletHero450Hand />
    </div>
  );
}
