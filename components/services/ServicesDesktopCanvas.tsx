import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { DesktopSceneMountGate } from "@/components/layout/DesktopSceneMountGate";
import { ServicesDesktopScene } from "@/components/services/ServicesDesktopScene";
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
      <CanvasScaler canvasWidth={1440} canvasHeight={1584}>
        <DesktopSceneMountGate canvasWidth={1440} canvasHeight={1584}>
          <ServicesDesktopScene locale={locale} />
        </DesktopSceneMountGate>
      </CanvasScaler>
    </div>
  );
}
