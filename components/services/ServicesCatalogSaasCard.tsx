import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import { imgEllipse6, imgShieldDone } from "./services-assets";
import { ServicesCardContinueLink } from "./ServicesCardContinueLink";

const SERVICES_SAAS_CARD_DESKTOP_SHELL_CLASS =
  "content-stretch relative flex min-h-0 shrink-0 flex-col items-start gap-[30px] overflow-clip rounded-[38px] px-[40px] py-[60px] h-[463px] w-[369px]" as const;

type ServicesCatalogSaasCardProps = {
  title: string;
  description: string;
  continueLabel: string;
  continueHref: string;
  continueAriaLabel: string;
  className?: string;
};

export function ServicesCatalogSaasCard({
  title,
  description,
  continueLabel,
  continueHref,
  continueAriaLabel,
  className,
}: ServicesCatalogSaasCardProps) {
  const rootClassName = className ?? SERVICES_SAAS_CARD_DESKTOP_SHELL_CLASS;

  return (
    <div className={rootClassName} data-name="Card 4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[38px] bg-gradient-to-b from-[#0d0c12] to-[#0d111d]"
      />
      <div className="relative size-[40px] shrink-0" data-name="Shield done">
        <FigmaFillImage src={imgShieldDone} sizes="40px" />
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
              <FigmaFillImage src={imgEllipse6} sizes="200px" />
            </div>
          </div>
        </div>
      </div>
      <ServicesCardContinueLink
        ariaLabel={continueAriaLabel}
        glowVariant="cyan"
        href={continueHref}
        label={continueLabel}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(102,148,255,0.2),inset_0px_-30px_12px_-1px_rgba(35,101,255,0.15),inset_0px_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0px_-34px_26.7px_-10px_rgba(102,148,255,0.5),inset_0px_-30px_46.8px_-33px_#144ccd]" />
    </div>
  );
}
