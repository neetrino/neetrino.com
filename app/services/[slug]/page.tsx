import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { SERVICES_CATALOG, getServiceBySlug } from "@/components/services/service-pages-data";
import { interSans } from "@/lib/fonts";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_RELAXED_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES_CATALOG.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service" };
  }
  return {
    title: `${service.title} | Neetrino`,
    description: service.description,
  };
}

function serviceTitleMegatroxParts(title: string): {
  before: string;
  accent: string;
  after: string;
} {
  const parts = title.trim().split(/\s+/);
  if (parts.length >= 2) {
    return {
      before: `${parts[0]} `,
      accent: parts[1] ?? "",
      after: parts.length > 2 ? ` ${parts.slice(2).join(" ")}` : "",
    };
  }
  const mid = Math.ceil(title.length / 2);
  return {
    before: title.slice(0, mid),
    accent: "",
    after: title.slice(mid),
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const titleParts = serviceTitleMegatroxParts(service.title);

  return (
    <div
      className={`min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] ${interSans.className}`}
    >
      <main
        className={`section-container pb-20 pt-28 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_RELAXED_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})]`}
      >
        <nav
          className="flex flex-wrap items-center gap-2 text-sm text-white/65"
          aria-label="Breadcrumb"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/90 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <ArrowLeft className="size-3.5 shrink-0 opacity-70" aria-hidden strokeWidth={2} />
            Services
          </Link>
          <span className="text-white/35" aria-hidden>
            /
          </span>
          <span className="max-w-[min(100%,280px)] truncate text-white/70">{service.title}</span>
        </nav>

        <header className="mt-10 border-b border-white/[0.06] pb-12 md:mt-12 md:pb-14">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/90">Services</p>
          <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-megatrox)] text-4xl font-normal leading-[0.98] tracking-[-0.04em] text-[#fffcfc] md:text-5xl lg:text-[56px] lg:leading-[1.02]">
            {titleParts.accent ? (
              <>
                <span className="text-white">{titleParts.before}</span>
                <span className="text-[#ff7500]">{titleParts.accent}</span>
                <span className="text-white">{titleParts.after}</span>
              </>
            ) : (
              <>
                <span className="text-white">{titleParts.before}</span>
                <span className="text-[#ff7500]">{titleParts.after}</span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-white/82 md:text-lg">
            {service.intro}
          </p>
        </header>

        <div className="mt-12 space-y-5 md:mt-14 md:space-y-6">
          {service.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-[#1a1a1a] to-[#141414] p-6 shadow-[inset_0_-1px_0_0_rgba(102,148,255,0.1)] md:p-8"
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff7500]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-white/78 md:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-white/60 md:text-[15px]">{service.description}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#252525] transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden strokeWidth={2} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-[#6a92ff] bg-black px-7 py-3 text-sm font-medium text-white transition-colors hover:border-[#8aa8ff] hover:bg-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]"
          >
            All services
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
