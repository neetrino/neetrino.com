"use client";

import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import {
  DESKTOP_HEADER_LANGUAGE_GLOBE_PX,
  DESKTOP_HEADER_LANGUAGE_HEIGHT_PX,
  DESKTOP_HEADER_LANGUAGE_ICON_OFFSET_LEFT_PX,
  DESKTOP_HEADER_LANGUAGE_ICON_OFFSET_TOP_PX,
  DESKTOP_HEADER_LANGUAGE_ICON_PX,
  DESKTOP_HEADER_LANGUAGE_LABEL_LEFT_PX,
  DESKTOP_HEADER_LANGUAGE_LEFT_PX,
  DESKTOP_HEADER_LANGUAGE_TOP_PX,
  DESKTOP_HEADER_LANGUAGE_WIDTH_PX,
} from "@/lib/desktop-header-language.constants";
import { cn } from "@/lib/utils";

type DesktopHeaderLanguageButtonProps = {
  className?: string;
};

/**
 * Desktop header language indicator — Figma `Link [button]` (10:457): white pill, globe + “ENG”.
 */
export function DesktopHeaderLanguageButton({ className }: DesktopHeaderLanguageButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "pointer-events-auto absolute z-[105] cursor-default border-0 bg-white rounded-[28px] transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e1e1e]/40",
        className,
      )}
      style={{
        left: DESKTOP_HEADER_LANGUAGE_LEFT_PX,
        top: DESKTOP_HEADER_LANGUAGE_TOP_PX,
        width: DESKTOP_HEADER_LANGUAGE_WIDTH_PX,
        height: DESKTOP_HEADER_LANGUAGE_HEIGHT_PX,
      }}
      data-name="Link [button]"
      data-node-id="10:457"
      aria-label="Site language: English"
    >
      <span
        className="absolute flex items-center justify-center"
        style={{
          left: DESKTOP_HEADER_LANGUAGE_ICON_OFFSET_LEFT_PX,
          top: DESKTOP_HEADER_LANGUAGE_ICON_OFFSET_TOP_PX,
          width: DESKTOP_HEADER_LANGUAGE_ICON_PX,
          height: DESKTOP_HEADER_LANGUAGE_ICON_PX,
        }}
        data-node-id="10:458"
      >
        <Image
          alt=""
          width={DESKTOP_HEADER_LANGUAGE_ICON_PX}
          height={DESKTOP_HEADER_LANGUAGE_ICON_PX}
          className="pointer-events-none absolute inset-0 block size-full max-w-none"
          src={FIGMA_ASSETS.imgGroup70643}
        />
        <span
          className="relative z-[1] flex items-center justify-center"
          data-name="Vector"
          data-node-id="10:460"
        >
          <Image
            alt=""
            width={DESKTOP_HEADER_LANGUAGE_GLOBE_PX}
            height={DESKTOP_HEADER_LANGUAGE_GLOBE_PX}
            className="pointer-events-none block max-w-none object-contain"
            src={FIGMA_ASSETS.imgHeaderLanguageGlobeWhite}
          />
        </span>
      </span>
      <span
        className="-translate-y-1/2 absolute top-1/2 flex flex-col justify-center font-extrabold leading-[0] not-italic text-[#1e1e1e] text-[16px] whitespace-nowrap"
        style={{ left: DESKTOP_HEADER_LANGUAGE_LABEL_LEFT_PX }}
        data-node-id="10:461"
      >
        <span className="leading-[15.6px]">ENG</span>
      </span>
    </button>
  );
}
