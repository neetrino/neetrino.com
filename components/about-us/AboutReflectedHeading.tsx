type AboutReflectedHeadingProps = {
  left: string;
  accent: string;
  right?: string;
  align?: "left" | "center";
};

export function AboutReflectedHeading({
  left,
  accent,
  right = "",
  align = "left",
}: AboutReflectedHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const blockAlign = align === "center" ? "mx-auto max-w-4xl" : "";
  return (
    <div className={`relative pb-8 ${textAlign} ${blockAlign}`}>
      <h2 className="relative z-10 font-black italic text-white text-[clamp(1.5rem,3vw,2.1875rem)] leading-tight">
        <span className="text-white">{left}</span>
        <span className="text-[#ff7401]">{accent}</span>
        <span className="text-white">{right}</span>
      </h2>
      <div
        className="pointer-events-none absolute inset-x-0 top-full z-0 mt-1 opacity-50 blur-[6px]"
        aria-hidden
      >
        <div className="-scale-y-100 font-black italic text-white text-[clamp(1.5rem,3vw,2.1875rem)] leading-tight">
          <span className="text-white">{left}</span>
          <span className="text-[#ff7401]">{accent}</span>
          <span className="text-white">{right}</span>
        </div>
      </div>
    </div>
  );
}
