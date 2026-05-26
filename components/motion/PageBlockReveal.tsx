"use client";

import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { scrollRevealStaggerDelayMs } from "@/lib/motion/scroll-reveal.constants";

type PageBlockRevealProps = {
  readonly children?: ReactNode;
  readonly className?: string;
  readonly delayMs?: number;
  /** Stagger index — overrides `delayMs` when set. */
  readonly index?: number;
  readonly style?: CSSProperties;
  readonly "data-node-id"?: string;
};

/** Slow scroll reveal for a page section or canvas block. */
export function PageBlockReveal({
  children,
  className,
  delayMs = 0,
  index,
  style,
  "data-node-id": dataNodeId,
}: PageBlockRevealProps) {
  const resolvedDelayMs = index === undefined ? delayMs : scrollRevealStaggerDelayMs(index);

  return (
    <Reveal
      profile="slow"
      delayMs={resolvedDelayMs}
      className={className}
      style={style}
      data-node-id={dataNodeId}
    >
      {children}
    </Reveal>
  );
}
