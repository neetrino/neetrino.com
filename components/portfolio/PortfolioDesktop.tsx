import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { DesktopSceneMountGate } from "@/components/layout/DesktopSceneMountGate";
import { PortfolioDesktopScene } from "@/components/portfolio/PortfolioDesktopScene";
import { PORTFOLIO_DESKTOP_SCENE_HEIGHT_PX } from "@/lib/portfolio-desktop-scene-dimensions.constants";

export function PortfolioDesktop() {
  return (
    <div className="hidden lg:block">
      <CanvasScaler canvasWidth={1440} canvasHeight={PORTFOLIO_DESKTOP_SCENE_HEIGHT_PX}>
        <DesktopSceneMountGate canvasWidth={1440} canvasHeight={PORTFOLIO_DESKTOP_SCENE_HEIGHT_PX}>
          <PortfolioDesktopScene />
        </DesktopSceneMountGate>
      </CanvasScaler>
    </div>
  );
}
