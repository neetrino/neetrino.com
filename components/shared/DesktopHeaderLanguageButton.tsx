"use client";

import {
  DESKTOP_HEADER_LANGUAGE_HEIGHT_PX,
  DESKTOP_HEADER_LANGUAGE_RIGHT_INSET_PX,
  DESKTOP_HEADER_LANGUAGE_TOP_PX,
  DESKTOP_HEADER_LANGUAGE_WIDTH_PX,
} from "@/lib/desktop-header-language.constants";
import { LocaleSwitcher } from "@/components/shared/LocaleSwitcher";
import { cn } from "@/lib/utils";

type DesktopHeaderLanguageButtonProps = {
  className?: string;
};

/**
 * Desktop header language indicator — Figma `Link [button]` (10:457): white pill, globe + “ENG”.
 */
export function DesktopHeaderLanguageButton({ className }: DesktopHeaderLanguageButtonProps) {
  return (
    <LocaleSwitcher
      className={cn("pointer-events-auto absolute z-[105]", className)}
      compact={false}
      // Keep exact pill geometry from the desktop Figma header.
      style={{
        right: DESKTOP_HEADER_LANGUAGE_RIGHT_INSET_PX,
        top: DESKTOP_HEADER_LANGUAGE_TOP_PX,
        width: DESKTOP_HEADER_LANGUAGE_WIDTH_PX,
        height: DESKTOP_HEADER_LANGUAGE_HEIGHT_PX,
      }}
    />
  );
}
