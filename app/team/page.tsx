import { Footer } from "@/components/sections/Footer";
import { interSans } from "@/lib/fonts";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

export default function TeamPage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`mx-auto max-w-3xl px-6 pt-24 pb-16 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <h1 className="text-3xl font-bold text-white md:text-4xl">Team</h1>
        <p className="mt-4 text-lg text-white/70">Content coming soon.</p>
      </main>
      <Footer />
    </div>
  );
}
