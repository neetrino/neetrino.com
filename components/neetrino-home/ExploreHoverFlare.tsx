import Image from "next/image";
import { EXPLORE_HOVER_FLARE_SRC } from "@/components/neetrino-home/explore-hover-flare.constants";
import { cn } from "@/lib/utils";

type ExploreHoverFlareProps = {
  /** Position/size relative to the `relative` peer parent (e.g. Figma inset). */
  positionClassName: string;
  /** Optional overrides (e.g. longer fade, brighter flare on hover). */
  className?: string;
};

/**
 * Horizontal lens flare behind the Explore control; visible on `group-hover` / `group-focus-within` of the wrapper.
 */
export function ExploreHoverFlare({ positionClassName, className }: ExploreHoverFlareProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 mix-blend-screen",
        positionClassName,
        className,
      )}
    >
      <div className="relative h-full w-full min-h-[1px] min-w-[1px]">
        <Image
          alt=""
          src={EXPLORE_HOVER_FLARE_SRC}
          fill
          className="object-contain object-center"
          sizes="800px"
        />
      </div>
    </div>
  );
}
