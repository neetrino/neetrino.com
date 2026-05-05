import { DesktopServicesMeshTiledColumn } from "@/components/services/DesktopServicesMeshTiledColumn";
import { HOME_DESKTOP_VECTOR_GRID_WRAP_HEIGHT_PX } from "@/lib/home-desktop-layout";

/** Desktop home — `/services`-style mesh for the scaled canvas height. */
export function NeetrinoHomeDesktopVectorGrid() {
  return (
    <DesktopServicesMeshTiledColumn wrapHeightDesignPx={HOME_DESKTOP_VECTOR_GRID_WRAP_HEIGHT_PX} />
  );
}
