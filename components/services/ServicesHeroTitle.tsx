import { cn } from "@/lib/utils";

type ServicesHeroTitleProps = {
  as?: "h1" | "p";
  before: string;
  accent: string;
  after: string;
  className: string;
  /** First and third segments (e.g. `text-white` or `text-[#fffcfc]`). */
  neutralClassName: string;
  "data-node-id"?: string;
};

/**
 * Localized “SERVICES”-style hero wordmark: neutral / brand orange / neutral.
 */
export function ServicesHeroTitle({
  as: Tag = "h1",
  before,
  accent,
  after,
  className,
  neutralClassName,
  "data-node-id": dataNodeId,
}: ServicesHeroTitleProps) {
  return (
    <Tag className={className} data-node-id={dataNodeId}>
      <span className={cn(neutralClassName)}>{before}</span>
      <span className="text-[#ff7500]">{accent}</span>
      <span className={cn(neutralClassName)}>{after}</span>
    </Tag>
  );
}
