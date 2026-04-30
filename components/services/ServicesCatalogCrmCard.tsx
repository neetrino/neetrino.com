import { LayoutGrid } from "lucide-react";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgEllipse7 } from "./services-assets";
import { ServicesCardContinueLink } from "./ServicesCardContinueLink";

const SERVICES_CRM_CARD_DESKTOP_SHELL_CLASS =
  "content-stretch relative flex min-h-0 shrink-0 flex-col items-start gap-[30px] overflow-clip rounded-[38px] px-[40px] py-[60px] h-[463px] w-[369px]" as const;

type ServicesCatalogCrmCardProps = {
  title: string;
  description: string;
  continueLabel: string;
  continueHref: string;
  continueAriaLabel: string;
  className?: string;
};

export function ServicesCatalogCrmCard({
  title,
  description,
  continueLabel,
  continueHref,
  continueAriaLabel,
  className,
}: ServicesCatalogCrmCardProps) {
  const rootClassName = className ?? SERVICES_CRM_CARD_DESKTOP_SHELL_CLASS;

  return (
    <div className={rootClassName} data-name="Card 2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[38px] bg-gradient-to-b from-[#120a0b] to-[#1b0a03]"
      />
      <div
        className="relative flex size-[40px] shrink-0 items-center justify-center text-white"
        data-name="CRM grid"
      >
        <LayoutGrid aria-hidden className="size-[40px]" strokeWidth={1.5} />
      </div>
      <div className="relative flex min-h-0 w-full flex-1 flex-col items-start gap-[16px] not-italic">
        <p className="relative w-full shrink-0 text-[32px] font-black leading-[40px] text-white">
          {title}
        </p>
        <p className="relative w-full shrink-0 text-[16px] font-light leading-[26px] text-[#d1d5dc]">
          {description}
        </p>
      </div>
      <div className="absolute left-[-42px] top-[-59px] flex h-[99.524px] w-[97.992px] items-center justify-center">
        <div className="flex-none rotate-[51.41deg]">
          <div className="relative h-[65.42px] w-[75.124px]">
            <div className="absolute inset-[-82.24%_-71.61%]">
              <FigmaFillImage src={imgEllipse7} sizes="200px" />
            </div>
          </div>
        </div>
      </div>
      <ServicesCardContinueLink
        ariaLabel={continueAriaLabel}
        glowVariant="amber"
        href={continueHref}
        label={continueLabel}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(255,237,102,0.2),inset_0px_-30px_12px_-1px_rgba(255,233,177,0.17),inset_0px_-37px_16px_-36px_rgba(255,255,255,0.25),inset_0px_-34px_26.7px_-15px_rgba(255,240,126,0.5),inset_0px_-40px_46.8px_-30px_#e63e28]" />
    </div>
  );
}
