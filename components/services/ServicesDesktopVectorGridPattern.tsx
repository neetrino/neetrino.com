import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgVector2 } from "@/components/services/services-assets";
import { SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX } from "@/lib/services-desktop-vector-grid-pattern.constants";

/**
 * Inner `/services` mesh only — `rotate-90` and Figma sizes, **no** extra uniform scale (matches `165:667`).
 */
export function ServicesDesktopVectorGridMesh() {
  return (
    <div
      className="flex w-[1722px] items-center justify-center"
      style={{ height: SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX }}
    >
      <div className="flex-none rotate-90">
        <div className="relative h-[1722px] w-[3723px]" data-name="Vector" data-node-id="165:667">
          <FigmaFillImage src={imgVector2} />
        </div>
      </div>
    </div>
  );
}

/**
 * Figma `165:667` — same `imgVector2` mesh as `/services` `ServicesDesktopBackdrop` (desktop).
 */
export function ServicesDesktopVectorGridPattern() {
  return (
    <div
      className="-translate-x-1/2 absolute left-[calc(50%-38px)] top-[-40px] w-[1722px]"
      style={{ height: SERVICES_DESKTOP_VECTOR_GRID_PATTERN_OUTER_HEIGHT_PX }}
    >
      <ServicesDesktopVectorGridMesh />
    </div>
  );
}
