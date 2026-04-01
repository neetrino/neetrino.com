import { PortfolioDesktop } from "@/components/portfolio/PortfolioDesktop";
import { PortfolioMobile } from "@/components/portfolio/PortfolioMobile";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioMobile />
      <PortfolioDesktop />
    </>
  );
}
