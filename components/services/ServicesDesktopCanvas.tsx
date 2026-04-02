import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { DesktopSceneMountGate } from "@/components/layout/DesktopSceneMountGate";
import { ServicesDesktopScene } from "@/components/services/ServicesDesktopScene";

/**
 * Desktop-only services canvas (used with dynamic import for faster route transitions).
 */
export function ServicesDesktopCanvas() {
  return (
    <div className="hidden lg:block">
      <CanvasScaler canvasWidth={1440} canvasHeight={2174}>
        <DesktopSceneMountGate canvasWidth={1440} canvasHeight={2174}>
          <ServicesDesktopScene />
        </DesktopSceneMountGate>
      </CanvasScaler>
    </div>
  );
}
