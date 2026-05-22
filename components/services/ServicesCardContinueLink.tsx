import { Link } from "@/i18n/navigation";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { cn } from "@/lib/utils";
import { imgSafearea } from "./services-assets";
import {
  servicesContinueArrowClassName,
  servicesContinueLabelGradientLayerClassName,
  servicesContinueLabelSolidLayerClassName,
  servicesContinueLabelStackClassName,
  servicesContinueLinkClassName,
  type ServicesContinueGlowVariant,
} from "./services-continue-pill-themes";

export type { ServicesContinueGlowVariant };

type ServicesCardContinueLinkProps = {
  href: string;
  glowVariant: ServicesContinueGlowVariant;
  ariaLabel: string;
  label: string;
  className?: string;
};

/** Desktop service cards: Continue pill — same interaction as What we do, accent per card. */
export function ServicesCardContinueLink({
  href,
  glowVariant,
  ariaLabel,
  label,
  className,
}: ServicesCardContinueLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        servicesContinueLinkClassName(glowVariant),
        /* Mobile: lift only the pill visually; margin would tighten flex layout of the card. */
        "max-lg:-translate-y-3",
        className,
      )}
      aria-label={ariaLabel}
    >
      <span className={servicesContinueLabelStackClassName()}>
        <span className={servicesContinueLabelSolidLayerClassName()}>{label}</span>
        <span aria-hidden className={servicesContinueLabelGradientLayerClassName(glowVariant)}>
          {label}
        </span>
      </span>
      <span className="relative size-6 shrink-0 overflow-clip lg:size-5">
        <span className="absolute inset-[8.33%]">
          <FigmaFillImage
            src={imgSafearea}
            sizes="(max-width: 1023px) 24px, 20px"
            className={servicesContinueArrowClassName(glowVariant)}
          />
        </span>
      </span>
    </Link>
  );
}
