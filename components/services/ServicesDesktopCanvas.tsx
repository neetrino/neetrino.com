import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { DesktopSceneMountGate } from "@/components/layout/DesktopSceneMountGate";
import { ServicesDesktopScene } from "@/components/services/ServicesDesktopScene";
import { SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX } from "@/lib/services-desktop-canvas-height.constants";
import type { AppLocale } from "@/lib/i18n/locales";

/**
 * Desktop-only services canvas (used with dynamic import for faster route transitions).
 */
type ServicesDesktopCanvasProps = {
  locale: AppLocale;
};

export function ServicesDesktopCanvas({ locale }: ServicesDesktopCanvasProps) {
  return (
    <div className="hidden lg:block">
      <CanvasScaler canvasWidth={1440} canvasHeight={SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX}>
        <DesktopSceneMountGate
          canvasWidth={1440}
          canvasHeight={SERVICES_DESKTOP_CANVAS_TOTAL_HEIGHT_PX}
        >
          <ServicesDesktopScene locale={locale} />
        </DesktopSceneMountGate>
      </CanvasScaler>
    </div>
  );
}
