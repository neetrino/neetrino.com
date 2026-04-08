import Link from "next/link";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgSafearea } from "./services-assets";

const BASE_CLASS =
  "bg-white content-stretch flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative z-10 rounded-[40px] shrink-0 pointer-events-auto no-underline";

export type ServicesContinueGlowVariant = "cyan" | "green" | "pink";

const GLOW_TOP: Record<ServicesContinueGlowVariant, string> = {
  cyan: "absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]",
  green:
    "absolute bg-[#46ff62] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]",
  pink: "absolute bg-[#ff28d0] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]",
};

const GLOW_BOTTOM: Record<ServicesContinueGlowVariant, string> = {
  cyan: "absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]",
  green:
    "absolute bg-[#46ff62] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]",
  pink: "absolute bg-[#ff28d0] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]",
};

type ServicesCardContinueLinkProps = {
  href: string;
  glowVariant: ServicesContinueGlowVariant;
  ariaLabel: string;
};

/** Figma-style “Continue” pill as an internal link (desktop service cards). */
export function ServicesCardContinueLink({
  href,
  glowVariant,
  ariaLabel,
}: ServicesCardContinueLinkProps) {
  return (
    <Link href={href} className={BASE_CLASS} aria-label={ariaLabel}>
      <span className={GLOW_TOP[glowVariant]} aria-hidden />
      <span className="font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap">
        Continue
      </span>
      <span className={GLOW_BOTTOM[glowVariant]} aria-hidden />
      <span className="overflow-clip relative shrink-0 size-[20px]">
        <span className="absolute inset-[8.33%]">
          <FigmaFillImage src={imgSafearea} sizes="20px" />
        </span>
      </span>
    </Link>
  );
}
