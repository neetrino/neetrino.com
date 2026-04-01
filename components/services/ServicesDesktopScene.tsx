import { ServicesDesktopBackdrop } from "@/components/services/ServicesDesktopBackdrop";
import { ServicesDesktopCardsScene } from "@/components/services/ServicesDesktopCardsScene";
import { ServicesDesktopLightRays } from "@/components/services/ServicesDesktopLightRays";
import { ServicesDesktopLightRaysDecor } from "@/components/services/ServicesDesktopLightRaysDecor";
import { ServicesDesktopOrbitChrome } from "@/components/services/ServicesDesktopOrbitChrome";

export function ServicesDesktopScene() {
  return (
    <div
      className="bg-[#151515] relative h-[2174px] w-[1440px]"
      data-name="SERVICES"
      data-node-id="165:666"
    >
      <ServicesDesktopBackdrop />
      <ServicesDesktopLightRays>
        <ServicesDesktopLightRaysDecor />
        <ServicesDesktopCardsScene />
      </ServicesDesktopLightRays>
      <ServicesDesktopOrbitChrome />
    </div>
  );
}
