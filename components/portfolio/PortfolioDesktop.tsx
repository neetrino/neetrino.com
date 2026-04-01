import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { PortfolioDesktopScene } from "@/components/portfolio/PortfolioDesktopScene";

export function PortfolioDesktop() {
  return (
    <div className="hidden lg:block">
      <CanvasScaler canvasWidth={1440} canvasHeight={2662}>
        <PortfolioDesktopScene />
      </CanvasScaler>
    </div>
  );
}
