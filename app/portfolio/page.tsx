import dynamic from "next/dynamic";
import { PortfolioMobile } from "@/components/portfolio/PortfolioMobile";
import { PORTFOLIO_DESKTOP_CANVAS_MIN_H_CLASS } from "@/lib/canvas-route-placeholders";

const PortfolioDesktop = dynamic(
  () =>
    import("@/components/portfolio/PortfolioDesktop").then((m) => ({
      default: m.PortfolioDesktop,
    })),
  {
    loading: () => (
      <div
        className={`pointer-events-none hidden w-full bg-[#151515] lg:block ${PORTFOLIO_DESKTOP_CANVAS_MIN_H_CLASS}`}
        aria-hidden
      />
    ),
    ssr: true,
  },
);

export default function PortfolioPage() {
  return (
    <>
      <PortfolioMobile />
      <PortfolioDesktop />
    </>
  );
}
