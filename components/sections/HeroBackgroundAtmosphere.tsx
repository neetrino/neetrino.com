"use client";

import {
  HERO_ATMOSPHERE_CYCLE_MS,
  HERO_TECH_CODE_TOKENS_DESKTOP,
  HERO_TECH_CODE_TOKENS_MOBILE,
  HERO_TECH_GRID_LINES_DESKTOP,
  HERO_TECH_GRID_LINES_MOBILE,
  HERO_TECH_NODES_DESKTOP,
  HERO_TECH_NODES_MOBILE,
  HERO_TECH_PACKET_CYCLE_MS,
  HERO_TECH_SCAN_CYCLE_MS,
  HERO_TECH_STREAMS_DESKTOP,
  HERO_TECH_STREAMS_MOBILE,
  HERO_TECH_TOKEN_CYCLE_MS,
} from "@/lib/hero-background-atmosphere.constants";
import { cn } from "@/lib/utils";

type HeroBackgroundAtmosphereProps = {
  readonly className?: string;
  readonly variant?: "desktop" | "mobile";
};

/**
 * Hero IT atmosphere — data streams, code tokens, scan line, circuit nodes.
 * CSS `transform` + `opacity` only (no video/GIF decode).
 */
export function HeroBackgroundAtmosphere({
  className,
  variant = "desktop",
}: HeroBackgroundAtmosphereProps) {
  const isMobile = variant === "mobile";
  const streams = isMobile ? HERO_TECH_STREAMS_MOBILE : HERO_TECH_STREAMS_DESKTOP;
  const tokens = isMobile ? HERO_TECH_CODE_TOKENS_MOBILE : HERO_TECH_CODE_TOKENS_DESKTOP;
  const nodes = isMobile ? HERO_TECH_NODES_MOBILE : HERO_TECH_NODES_DESKTOP;
  const gridLines = isMobile ? HERO_TECH_GRID_LINES_MOBILE : HERO_TECH_GRID_LINES_DESKTOP;

  return (
    <div
      className={cn("hero-tech-atmosphere pointer-events-none absolute overflow-hidden", className)}
      style={{
        ["--hero-atmosphere-cycle-ms" as string]: `${HERO_ATMOSPHERE_CYCLE_MS}ms`,
        ["--hero-tech-scan-cycle-ms" as string]: `${HERO_TECH_SCAN_CYCLE_MS}ms`,
        ["--hero-tech-packet-cycle-ms" as string]: `${HERO_TECH_PACKET_CYCLE_MS}ms`,
        ["--hero-tech-token-cycle-ms" as string]: `${HERO_TECH_TOKEN_CYCLE_MS}ms`,
      }}
      aria-hidden
    >
      <div className="hero-tech-atmosphere-zone">
        {gridLines.map((topPercent) => (
          <span
            key={`grid-${topPercent}`}
            className="hero-tech-grid-line"
            style={{ top: `${topPercent}%` }}
          />
        ))}

        {streams.map((stream) => (
          <div
            key={`stream-${stream.leftPercent}`}
            className="hero-tech-stream-column"
            style={{
              left: `${stream.leftPercent}%`,
              width: stream.widthPx,
              animationDelay: `${stream.delayMs}ms`,
              ["--hero-stream-opacity" as string]: stream.peakOpacity,
            }}
          >
            {Array.from({ length: stream.packetCount }, (_, packetIndex) => (
              <span
                key={`packet-${packetIndex}`}
                className="hero-tech-packet"
                style={{
                  animationDelay: `${stream.delayMs + packetIndex * 520}ms`,
                }}
              />
            ))}
          </div>
        ))}

        {tokens.map((token) => (
          <span
            key={`${token.label}-${token.leftPercent}`}
            className="hero-tech-code-token"
            style={{
              left: `${token.leftPercent}%`,
              top: `${token.topPercent}%`,
              fontSize: token.fontSizePx,
              animationDelay: `${token.delayMs}ms`,
            }}
          >
            {token.label}
          </span>
        ))}

        {nodes.map((node) => (
          <span
            key={`node-${node.leftPercent}-${node.topPercent}`}
            className="hero-tech-circuit-node"
            style={{
              left: `${node.leftPercent}%`,
              top: `${node.topPercent}%`,
              animationDelay: `${node.delayMs}ms`,
            }}
          />
        ))}

        <span className="hero-tech-scanline" />
      </div>
    </div>
  );
}
