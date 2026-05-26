import { SiteFooterDesktopArt } from "./SiteFooterDesktopArt";
import { SiteFooterDesktopCompanyColumn } from "./SiteFooterDesktopCompanyColumn";
import { SiteFooterDesktopContactColumn } from "./SiteFooterDesktopContactColumn";
import { SiteFooterDesktopMessageCta } from "./SiteFooterDesktopMessageCta";
import { SiteFooterDesktopServicesColumn } from "./SiteFooterDesktopServicesColumn";
import { SiteFooterDesktopSocialCopyright } from "./SiteFooterDesktopSocialCopyright";
import type { SiteFooterDesktopSendCtaLayout } from "./site-footer-desktop-send-cta-layout";

type SiteFooterDesktopCanvasProps = SiteFooterDesktopSendCtaLayout;

/** Inner 590px desktop footer canvas (Figma `10:237` copy layer). */
export function SiteFooterDesktopCanvas({
  footerSendWidthClassName,
  footerSendIconLeftClassName,
}: SiteFooterDesktopCanvasProps) {
  return (
    <div className="relative isolate h-[590px] min-h-[590px] w-full overflow-hidden">
      <SiteFooterDesktopArt />
      <div
        className="absolute contents left-[99px] top-[116px]"
        data-node-id="10:241"
        data-name="Footer Middle"
      >
        <div
          className="absolute z-10 content-stretch flex gap-[94px] items-start left-[99px] top-[116px] w-[660.376px]"
          data-node-id="10:242"
        >
          <SiteFooterDesktopCompanyColumn />
          <SiteFooterDesktopServicesColumn />
          <SiteFooterDesktopContactColumn />
        </div>
        <SiteFooterDesktopMessageCta
          footerSendWidthClassName={footerSendWidthClassName}
          footerSendIconLeftClassName={footerSendIconLeftClassName}
        />
      </div>
      <SiteFooterDesktopSocialCopyright />
    </div>
  );
}
