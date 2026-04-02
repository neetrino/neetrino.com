import { PortfolioMobile } from "@/components/portfolio/PortfolioMobile";
import { PortfolioDesktopConditional } from "@/components/portfolio/PortfolioDesktopConditional";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioMobile />
      <PortfolioDesktopConditional />
    </>
  );
}
