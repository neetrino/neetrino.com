"use client";

import Image from "next/image";
import Link from "next/link";
import { DesktopHeaderLanguageButton } from "@/components/shared/DesktopHeaderLanguageButton";
import { DesktopHeaderQuoteLink } from "@/components/shared/DesktopHeaderQuoteLink";
import { PrimaryNavMoreDropdown } from "@/components/shared/PrimaryNavMoreDropdown";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import {
  DESKTOP_HEADER_LOGO_LEFT_PX,
  DESKTOP_HEADER_NAV_LINK_GAP_PX,
  DESKTOP_HEADER_NAV_PILL_CENTER_OFFSET_PX,
  DESKTOP_HEADER_NAV_PILL_WIDTH_PX,
} from "@/lib/desktop-header-nav-pill.constants";
import { PRIMARY_NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

/**
 * Desktop nav chrome from the Home Figma canvas (`Awwwards` block) — canonical site header bar.
 */
export function HomeDesktopHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "z-[100]",
        className ??
          "relative h-[64px] w-full rounded-[72px] bg-[rgba(255,255,255,0.21)] backdrop-blur-xl backdrop-saturate-150",
      )}
      data-name="Awwwards"
      data-node-id="335:1424"
    >
      <div
        className="-translate-x-1/2 absolute z-[100] bg-[rgba(40,43,103,0.38)] h-[48px] rounded-[28px] top-[8px]"
        style={{
          left: `calc(50% - ${DESKTOP_HEADER_NAV_PILL_CENTER_OFFSET_PX}px)`,
          width: DESKTOP_HEADER_NAV_PILL_WIDTH_PX,
        }}
        data-name="Link [button]"
        data-node-id="335:1425"
      >
        <div
          className="absolute inset-x-0 top-[16px] flex items-center justify-center font-semibold leading-[0] not-italic text-[16px] text-white whitespace-nowrap"
          style={{ gap: `${DESKTOP_HEADER_NAV_LINK_GAP_PX}px` }}
          data-node-id="335:1426"
        >
          {PRIMARY_NAV_LINKS.map((item) =>
            item.kind === "link" ? (
              <Link
                key={item.href}
                className="relative flex shrink-0 flex-col justify-center"
                data-node-id="10:445"
                href={item.href}
              >
                <p className="leading-[15.6px]">{item.label}</p>
              </Link>
            ) : (
              <PrimaryNavMoreDropdown key={item.label} variant="pill" items={item.items} />
            ),
          )}
        </div>
      </div>
      <Link
        href="/"
        aria-label="Go to home page"
        className="absolute z-[106] h-[37px] top-[13px] w-[130px]"
        style={{ left: DESKTOP_HEADER_LOGO_LEFT_PX }}
        data-name="Neetrino-it-comapny-(2)png 1"
        data-node-id="10:453"
      >
        <Image
          alt=""
          width={2400}
          height={2400}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
          sizes="130px"
        />
      </Link>
      <DesktopHeaderQuoteLink />
      <DesktopHeaderLanguageButton />
    </div>
  );
}
