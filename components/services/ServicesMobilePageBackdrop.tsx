import { SERVICES_MOBILE_BACKDROP_GLOW_BASE_CLASS } from "./services-mobile-page-backdrop.constants";

export function ServicesMobilePageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        aria-hidden
        className={`-translate-x-1/2 absolute left-1/2 top-[8%] h-[min(100vw,520px)] w-[min(160vw,900px)] max-w-none opacity-[0.72] ${SERVICES_MOBILE_BACKDROP_GLOW_BASE_CLASS}`}
      />
      <div
        aria-hidden
        className={`-translate-x-1/2 absolute bottom-[-15%] left-1/2 h-[min(85vw,400px)] w-[min(130vw,700px)] max-w-none opacity-[0.45] ${SERVICES_MOBILE_BACKDROP_GLOW_BASE_CLASS}`}
      />
    </div>
  );
}
