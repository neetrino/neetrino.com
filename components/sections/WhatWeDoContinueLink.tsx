import { Link } from "@/i18n/navigation";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgSafearea } from "@/components/services/services-assets";
import { whatWeDoContinueGlowForSlug, type WhatWeDoCardSlug } from "@/lib/what-we-do-continue-glow";
import {
  whatWeDoContinueArrowClassName,
  whatWeDoContinueLabelGradientLayerClassName,
  whatWeDoContinueLabelSolidLayerClassName,
  whatWeDoContinueLabelStackClassName,
  whatWeDoContinueLinkClassName,
} from "@/lib/what-we-do-continue-pill-themes";
import { cn } from "@/lib/utils";

type WhatWeDoContinueLinkProps = {
  slug: WhatWeDoCardSlug;
  href: string;
  label: string;
  className?: string;
};

/** What we do — Continue pill; hover fill matches parent card color. */
export function WhatWeDoContinueLink({ slug, href, label, className }: WhatWeDoContinueLinkProps) {
  const variant = whatWeDoContinueGlowForSlug(slug);

  return (
    <Link
      href={href}
      className={cn(whatWeDoContinueLinkClassName(variant), "max-lg:-translate-y-3", className)}
      aria-label={label}
    >
      <span className={whatWeDoContinueLabelStackClassName()}>
        <span className={whatWeDoContinueLabelSolidLayerClassName()}>{label}</span>
        <span aria-hidden className={whatWeDoContinueLabelGradientLayerClassName(variant)}>
          {label}
        </span>
      </span>
      <span className="relative size-6 shrink-0 overflow-clip lg:size-5">
        <span className="absolute inset-[8.33%]">
          <FigmaFillImage
            src={imgSafearea}
            sizes="(max-width: 1023px) 24px, 20px"
            className={whatWeDoContinueArrowClassName(variant)}
          />
        </span>
      </span>
    </Link>
  );
}
