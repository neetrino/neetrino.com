import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
import {
  SiFlutter,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

type TechIconItem = {
  label: string;
  Icon: IconType;
};

const techIconItems: readonly TechIconItem[] = [
  { label: "WordPress", Icon: SiWordpress },
  { label: "Shopify", Icon: SiShopify },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "NestJS", Icon: SiNestjs },
  { label: "Java", Icon: FaJava },
  { label: "PHP", Icon: SiPhp },
  { label: "Flutter", Icon: SiFlutter },
  { label: "React Native", Icon: SiReact },
] as const;

const marqueeRows = [{ items: techIconItems, reverse: true }] as const;

type ServicesTechMarqueeProps = {
  className?: string;
  compact?: boolean;
};

function ServicesTechLogo({
  label,
  Icon,
  compact = false,
}: {
  label: string;
  Icon: IconType;
  compact?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center text-white/80",
        compact ? "size-[34px] md:size-[40px]" : "size-[42px] md:size-[50px]",
      ].join(" ")}
      aria-label={label}
      title={label}
    >
      <Icon className="size-full" aria-hidden />
    </span>
  );
}

export function ServicesTechMarquee({ className = "", compact = false }: ServicesTechMarqueeProps) {
  return (
    <section
      aria-label="Technology stack marquee"
      className={["overflow-hidden", className].join(" ")}
      style={{
        background: "transparent",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <style>{`
        @keyframes services-tech-marquee-forward {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes services-tech-marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .services-tech-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
        }

        .services-tech-marquee-track--forward {
          animation: services-tech-marquee-forward 24s linear infinite;
        }

        .services-tech-marquee-track--reverse {
          animation: services-tech-marquee-reverse 28s linear infinite;
        }
      `}</style>
      <div className={compact ? "space-y-6 md:space-y-8" : "space-y-8 md:space-y-10"}>
        {marqueeRows.map((row, rowIndex) => {
          const duplicatedItems = [...row.items, ...row.items, ...row.items, ...row.items];

          return (
            <div key={rowIndex} className="overflow-hidden">
              <div
                className={[
                  "services-tech-marquee-track",
                  compact ? "gap-12 md:gap-16" : "gap-16 md:gap-24",
                  row.reverse
                    ? "services-tech-marquee-track--reverse"
                    : "services-tech-marquee-track--forward",
                ].join(" ")}
              >
                {duplicatedItems.map((item, itemIndex) => (
                  <ServicesTechLogo
                    key={`${rowIndex}-${item.label}-${itemIndex}`}
                    label={item.label}
                    Icon={item.Icon}
                    compact={compact}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
