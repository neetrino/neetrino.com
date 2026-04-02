import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { MOBILE_PORTFOLIO_ITEMS } from "@/components/portfolio/portfolio-data";

export function PortfolioMobile() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] lg:hidden">
      <main className="section-container pt-24 pb-14">
        <section className="py-10">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/80">Portfolio</p>
          <h1 className="mt-3 font-['Megatrox',sans-serif] text-4xl leading-tight text-white">
            PORTFOLIO
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
            A curated selection of digital products and interfaces delivered for growing businesses
            across different industries.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {MOBILE_PORTFOLIO_ITEMS.map((item, index) => (
            <article
              key={item.title}
              className="min-w-0 overflow-hidden rounded-[24px] border border-white/12 bg-[#1a1a1a]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  decoding="async"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[#252525]"
                >
                  View case
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
