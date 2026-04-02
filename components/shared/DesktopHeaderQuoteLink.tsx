"use client";

import {
  DESKTOP_HEADER_QUOTE_LEFT_PX,
  DESKTOP_HEADER_QUOTE_TOP_PX,
} from "@/lib/desktop-header-quote.constants";
import { GET_A_QUOTE_HREF } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

type DesktopHeaderQuoteLinkProps = {
  className?: string;
};

/**
 * Desktop header “Get a Quote” — matches original Figma block (purple pill, Inter Extra Bold).
 * Plain `<a>` keeps SSR/client DOM identical for hydration.
 */
export function DesktopHeaderQuoteLink({ className }: DesktopHeaderQuoteLinkProps) {
  return (
    <a
      href={GET_A_QUOTE_HREF}
      className={cn(
        "pointer-events-auto absolute z-[105] bg-[#473dff] h-[48px] w-[144px] rounded-[28px] no-underline transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
        className,
      )}
      style={{
        left: DESKTOP_HEADER_QUOTE_LEFT_PX,
        top: DESKTOP_HEADER_QUOTE_TOP_PX,
      }}
      data-name="Link [button]"
      data-node-id="10:451"
    >
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[25px] not-italic text-[16px] text-white top-[24px] whitespace-nowrap"
        data-node-id="10:452"
      >
        <p className="leading-[15.6px]">Get a Quote</p>
      </div>
    </a>
  );
}
