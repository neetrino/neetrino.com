import { ServicesDesktopVectorGridMesh } from "@/components/services/ServicesDesktopVectorGridPattern";
import { SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX } from "@/lib/services-desktop-vector-grid-pattern.constants";

export type DesktopServicesMeshTiledColumnProps = {
  /** Total design-px height of the tiled column (includes top bleed if caller passes it). */
  wrapHeightDesignPx: number;
};

/**
 * Figma `165:667`-style `imgVector2` mesh: same cell size as `/services`, stacked to `wrapHeightDesignPx`.
 */
export function DesktopServicesMeshTiledColumn({
  wrapHeightDesignPx,
}: DesktopServicesMeshTiledColumnProps) {
  const tileCount = Math.max(
    1,
    Math.ceil(wrapHeightDesignPx / SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX),
  );

  return (
    <div
      className="-translate-x-1/2 pointer-events-none absolute left-[calc(50%-38px)] top-[-40px] z-0 w-[1722px] overflow-hidden mix-blend-overlay"
      style={{ height: wrapHeightDesignPx }}
      aria-hidden
      data-name="Services-style mesh column"
    >
      {Array.from({ length: tileCount }, (_, sliceIndex) => (
        <div
          key={sliceIndex}
          className="absolute inset-x-0 flex justify-center overflow-hidden"
          style={{
            top: sliceIndex * SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX,
            height: SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX,
          }}
        >
          <ServicesDesktopVectorGridMesh />
        </div>
      ))}
    </div>
  );
}
