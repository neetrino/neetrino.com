import Image from "next/image";
import { EXPLORE_HOVER_FLARE_SRC } from "@/components/neetrino-home/explore-hover-flare.constants";

type ExploreHoverFlareProps = {
  /** Position/size relative to the `relative` peer parent (e.g. Figma inset). */
  positionClassName: string;
};

/**
 * Horizontal lens flare behind the Explore control; visible when the peer `Link` is hovered.
 */
export function ExploreHoverFlare({ positionClassName }: ExploreHoverFlareProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 opacity-0 transition-opacity duration-300 ease-out peer-hover:opacity-100 peer-focus-visible:opacity-100 mix-blend-screen ${positionClassName}`}
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
