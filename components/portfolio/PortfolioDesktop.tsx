import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { DesktopSceneMountGate } from "@/components/layout/DesktopSceneMountGate";
import { PortfolioDesktopScene } from "@/components/portfolio/PortfolioDesktopScene";

export function PortfolioDesktop() {
  return (
    <div className="hidden lg:block">
      <CanvasScaler canvasWidth={1440} canvasHeight={2662}>
        <DesktopSceneMountGate canvasWidth={1440} canvasHeight={2662}>
          <PortfolioDesktopScene />
        </DesktopSceneMountGate>
      </CanvasScaler>
    </div>
  );
}
