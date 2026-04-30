import type { ReactNode } from "react";
import { interSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

type BlogIndexPageFrameProps = {
  title: ReactNode;
  cards: ReactNode;
};

/** Blog index shell: dark page + main column + spacing under fixed chrome (avoids long template literals in the route file). */
export function BlogIndexPageFrame({ title, cards }: BlogIndexPageFrameProps) {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-transparent">
      <main
        className={cn(
          "mx-auto max-w-6xl px-6 pt-30 pb-16",
          `lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})]`,
          interSans.className,
        )}
      >
        <header className="mx-auto mt-9 max-w-2xl text-center">{title}</header>
        {cards}
      </main>
    </div>
  );
}
