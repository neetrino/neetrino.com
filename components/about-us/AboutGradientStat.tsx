import type { ReactNode } from "react";

const TONE_TEXT: Record<"purple" | "orange" | "green" | "white" | "cyan", string> = {
  purple: "bg-[linear-gradient(90deg,#473dff_0%,#6b5fff_100%)]",
  orange: "bg-[linear-gradient(90deg,#ff7500_0%,#ff9500_100%)]",
  green: "bg-[linear-gradient(90deg,#73ff00_0%,#46ffe4_100%)]",
  white: "bg-[linear-gradient(180deg,#ffffff_0%,#ffd0a9_100%)]",
  cyan: "bg-[linear-gradient(265deg,#acf0ff_22%,#00c6f3_85%)]",
};

const TONE_GLOW: Record<keyof typeof TONE_TEXT, string> = {
  purple: "bg-gradient-to-r from-[#473dff] to-[#6b5fff]",
  orange: "bg-gradient-to-r from-[#ff7500] to-[#ff9500]",
  green: "bg-gradient-to-r from-[#73ff00] to-[#46ffe4]",
  white: "bg-gradient-to-b from-white to-[#ffd0a9]",
  cyan: "bg-gradient-to-br from-[#acf0ff] to-[#00c6f3]",
};

type AboutGradientStatProps = {
  value: ReactNode;
  label: string;
  tone: keyof typeof TONE_TEXT;
};

export function AboutGradientStat({ value, label, tone }: AboutGradientStatProps) {
  const textGrad = TONE_TEXT[tone];
  const glow = TONE_GLOW[tone];
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative inline-block">
        <p
          className={`bg-clip-text font-black leading-none text-transparent ${textGrad} text-[clamp(2.25rem,5vw,3.5rem)]`}
        >
          {value}
        </p>
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-14 w-32 -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-30 ${glow}`}
          aria-hidden
        />
      </div>
      <p className="text-sm font-light text-[#99a1af]">{label}</p>
    </div>
  );
}
