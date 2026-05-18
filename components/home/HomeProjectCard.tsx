"use client";

import { PortfolioCardMedia } from "@/components/portfolio/PortfolioCardMedia";
import { generateAltFromFileName } from "@/lib/portfolio/portfolio-alt";
import type { PublicPortfolioCard } from "@/lib/portfolio/public-portfolio.dto";
import { cn } from "@/lib/utils";

type HomeProjectCardProps = {
  item: PublicPortfolioCard;
  imageSizes: string;
  frameClassName: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

export function HomeProjectCard({
  item,
  imageSizes,
  frameClassName,
  priority,
  loading,
}: HomeProjectCardProps) {
  return (
    <div className={cn("group relative overflow-hidden", frameClassName)}>
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <PortfolioCardMedia
          url={item.url}
          alt={generateAltFromFileName(item.fileName)}
          mediaType={item.mediaType}
          imageSizes={imageSizes}
          priority={priority}
          loading={loading}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/55 to-transparent"
        aria-hidden
      />
    </div>
  );
}
