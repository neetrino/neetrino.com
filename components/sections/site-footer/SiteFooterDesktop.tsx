import { CanvasScaler } from "@/components/layout/CanvasScaler";
import {
  SITE_FOOTER_DESKTOP_CANVAS_HEIGHT_PX,
  SITE_FOOTER_DESKTOP_CANVAS_INNER_MODIFIER_CLASS,
  SITE_FOOTER_DESKTOP_CANVAS_WIDTH_PX,
  SITE_FOOTER_DESKTOP_CANVAS_WRAP_MODIFIER_CLASS,
} from "@/lib/site-footer-desktop-canvas.constants";
import { SiteFooterDesktopCanvas } from "./SiteFooterDesktopCanvas";
import type { SiteFooterDesktopSendCtaLayout } from "./site-footer-desktop-send-cta-layout";

type SiteFooterDesktopProps = SiteFooterDesktopSendCtaLayout;

/** Desktop footer block inside `CanvasScaler` (`lg+`). */
export function SiteFooterDesktop({
  footerSendWidthClassName,
  footerSendIconLeftClassName,
}: SiteFooterDesktopProps) {
  return (
    <div
      className="relative z-[2] isolate mx-auto hidden w-full min-w-0 max-w-[1440px] lg:block"
      data-node-id="10:237"
      data-name="Footer v2"
    >
      <CanvasScaler
        canvasWidth={SITE_FOOTER_DESKTOP_CANVAS_WIDTH_PX}
        canvasHeight={SITE_FOOTER_DESKTOP_CANVAS_HEIGHT_PX}
        wrapClassName={SITE_FOOTER_DESKTOP_CANVAS_WRAP_MODIFIER_CLASS}
        innerClassName={SITE_FOOTER_DESKTOP_CANVAS_INNER_MODIFIER_CLASS}
      >
        <SiteFooterDesktopCanvas
          footerSendWidthClassName={footerSendWidthClassName}
          footerSendIconLeftClassName={footerSendIconLeftClassName}
        />
      </CanvasScaler>
    </div>
  );
}
