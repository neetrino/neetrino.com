import dynamic from "next/dynamic";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { MOBILE_SERVICE_ITEMS } from "@/components/services/services-assets";
import { SERVICES_DESKTOP_CANVAS_MIN_H_CLASS } from "@/lib/canvas-route-placeholders";

const ServicesDesktopCanvas = dynamic(
  () =>
    import("@/components/services/ServicesDesktopCanvas").then((m) => ({
      default: m.ServicesDesktopCanvas,
    })),
  {
    loading: () => (
      <div
        className={`pointer-events-none hidden w-full bg-[#151515] lg:block ${SERVICES_DESKTOP_CANVAS_MIN_H_CLASS}`}
        aria-hidden
      />
    ),
    ssr: true,
  },
);

export default function Services() {
  return (
    <>
      <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] lg:hidden">
        <main className="section-container pt-24 pb-14">
          <section className="py-10">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/80">
              Services
            </p>
            <h1 className="mt-3 font-['Megatrox',sans-serif] text-4xl leading-tight text-white">
              SERVICES
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
              Explore our core service directions optimized for fast delivery, clear business value,
              and long-term scalability.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {MOBILE_SERVICE_ITEMS.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded-[28px] border border-white/12 bg-gradient-to-b from-[#100b16] to-[#0f0220] p-5 sm:p-6"
              >
                <h2 className="text-xl font-black leading-tight text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#d1d5dc]">{item.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#252525]"
                >
                  Continue
                </Link>
              </article>
            ))}
          </section>
        </main>
        <Footer />
      </div>

      <ServicesDesktopCanvas />
    </>
  );
}
