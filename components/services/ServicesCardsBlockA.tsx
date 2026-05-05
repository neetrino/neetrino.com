import type { ReactNode } from "react";
import { Brain } from "lucide-react";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { cn } from "@/lib/utils";
import { imgEllipse2, imgEllipse3, imgLayers } from "./services-assets";
import {
  ServicesCardContinueLink,
  type ServicesContinueGlowVariant,
} from "./ServicesCardContinueLink";

/** Matches `messages/hy/service-pages.json` AI title line 1 + line break + line 2. */
const HY_AI_CARD_TITLE_PREFIX = "AI ";
const HY_AI_CARD_PRODUCTS_WORD = "պրոդուկտների";

function servicesCard2TitleContent(title: string): ReactNode {
  const normalized = title.replace(/\r\n/g, "\n").trim();
  const lines = normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const line1 = lines[0];
  const line2 = lines[1];
  if (
    lines.length === 2 &&
    line1 !== undefined &&
    line2 !== undefined &&
    line1.startsWith(HY_AI_CARD_TITLE_PREFIX) &&
    line1.slice(HY_AI_CARD_TITLE_PREFIX.length) === HY_AI_CARD_PRODUCTS_WORD
  ) {
    return (
      <>
        {HY_AI_CARD_TITLE_PREFIX}
        <span className="font-black text-[27px] leading-[36px] tracking-[-0.02em] text-white">
          {HY_AI_CARD_PRODUCTS_WORD}
        </span>
        <br />
        {line2}
      </>
    );
  }
  return title;
}

type Card3Props = {
  className?: string;
  property1?: "Secure Transactions default" | "Secure Transactions hover";
  title: string;
  description: string;
  continueHref: string;
  continueAriaLabel: string;
  continueLabel: string;
  continueGlow: ServicesContinueGlowVariant;
};

export function ServicesCard3({
  className,
  property1 = "Secure Transactions default",
  title,
  description,
  continueHref,
  continueAriaLabel,
  continueLabel,
  continueGlow,
}: Card3Props) {
  return (
    <div
      className={
        className ||
        "content-stretch flex min-h-0 flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] w-[369px]"
      }
      data-node-id="165:628"
    >
      <div
        aria-hidden="true"
        className="absolute bg-gradient-to-b from-[#100b16] inset-0 pointer-events-none rounded-[38px] to-[#0f0220]"
      />
      <div className="relative shrink-0 size-[40px]" data-name="Layers" data-node-id="165:629">
        <FigmaFillImage src={imgLayers} sizes="40px" />
      </div>
      <div
        className="content-stretch flex min-h-0 flex-1 flex-col gap-[16px] items-start not-italic relative w-full"
        data-node-id="165:632"
      >
        <p
          className="relative w-full shrink-0 text-[32px] font-black leading-[40px] text-white"
          data-node-id="165:633"
        >
          {title}
        </p>
        <p
          className="relative w-full shrink-0 text-[16px] font-light leading-[26px] text-[#d1d5dc]"
          data-node-id="165:634"
        >
          {description}
        </p>
      </div>
      <div className="absolute flex h-[98.623px] items-center justify-center left-[-42px] top-[-59px] w-[95.759px]">
        <div className="flex-none rotate-[57.05deg]">
          <div className="h-[65.42px] relative w-[75.124px]" data-node-id="165:635">
            <div className="absolute inset-[-82.24%_-71.61%]">
              <FigmaFillImage src={imgEllipse2} sizes="200px" />
            </div>
          </div>
        </div>
      </div>
      <ServicesCardContinueLink
        ariaLabel={continueAriaLabel}
        glowVariant={continueGlow}
        href={continueHref}
        label={continueLabel}
      />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(255,54,242,0.2),inset_0px_-23px_12px_-1px_rgba(255,27,244,0.17),inset_0px_-47px_16px_-33px_rgba(255,255,255,0.7),inset_0px_-30px_26.7px_-27px_rgba(46,9,43,0.5),inset_0px_-40px_46.3px_-30px_#ff0890]" />
    </div>
  );
}

type Card2Props = {
  className?: string;
  property1?: "Secure Transactions default" | "Secure Transactions hover";
  title: string;
  description: string;
  continueHref: string;
  continueAriaLabel: string;
  continueLabel: string;
  continueGlow: ServicesContinueGlowVariant;
};

export function ServicesCard2({
  className,
  property1 = "Secure Transactions default",
  title,
  description,
  continueHref,
  continueAriaLabel,
  continueLabel,
  continueGlow,
}: Card2Props) {
  const titleBody = servicesCard2TitleContent(title);
  const titlePreLine = typeof titleBody === "string" && titleBody.includes("\n");

  return (
    <div
      className={
        className ||
        "content-stretch flex min-h-0 flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] w-[369px]"
      }
      data-node-id="165:609"
    >
      <div
        aria-hidden="true"
        className="absolute bg-gradient-to-b from-[#100b16] inset-0 pointer-events-none rounded-[38px] to-[#0f0220]"
      />
      <div className="flex min-h-0 flex-1 -translate-y-2 flex-col gap-[30px] items-start self-stretch">
        <div
          className="relative flex shrink-0 size-[40px] items-center justify-start text-white"
          data-name="Brain"
          data-node-id="165:610"
        >
          <Brain aria-hidden className="size-[40px]" strokeWidth={1.5} />
        </div>
        <div
          className="content-stretch flex min-h-0 flex-col gap-[10px] items-start not-italic relative w-full"
          data-node-id="165:613"
        >
          <p
            className={cn(
              "relative w-full shrink-0 text-[32px] font-black leading-[40px] text-white",
              titlePreLine && "whitespace-pre-line",
            )}
            data-node-id="165:614"
          >
            {titleBody}
          </p>
          <p
            className="relative w-full shrink-0 text-[16px] font-light leading-[26px] text-[#d1d5dc]"
            data-node-id="165:615"
          >
            {description}
          </p>
        </div>
      </div>
      <div className="absolute flex h-[98.623px] items-center justify-center left-[-42px] top-[-59px] w-[95.759px]">
        <div className="flex-none rotate-[57.05deg]">
          <div className="h-[65.42px] relative w-[75.124px]" data-node-id="165:616">
            <div className="absolute inset-[-82.24%_-71.61%]">
              <FigmaFillImage src={imgEllipse3} sizes="200px" />
            </div>
          </div>
        </div>
      </div>
      <ServicesCardContinueLink
        ariaLabel={continueAriaLabel}
        glowVariant={continueGlow}
        href={continueHref}
        label={continueLabel}
      />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(54,255,208,0.2),inset_0px_-23px_12px_-1px_rgba(27,255,65,0.17),inset_0px_-47px_16px_-33px_rgba(255,255,255,0.7),inset_0px_-30px_26.7px_-27px_rgba(9,46,21,0.5),inset_0px_-40px_46.3px_-30px_#00dc28]" />
    </div>
  );
}
