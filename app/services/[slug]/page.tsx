import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { SERVICES_CATALOG, getServiceBySlug } from "@/components/services/service-pages-data";
import { interSans } from "@/lib/fonts";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
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

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  return (
    <div
      className={`min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] ${interSans.className}`}
    >
      <main
        className={`section-container pt-24 pb-16 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})]`}
      >
        <nav className="text-sm text-white/70" aria-label="Breadcrumb">
          <Link href="/services" className="text-white/90 underline-offset-4 hover:underline">
            Services
          </Link>
          <span className="mx-2 text-white/40" aria-hidden>
            /
          </span>
          <span className="text-white/70">{service.title}</span>
        </nav>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-white/80">
          Services
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-white/85 md:text-lg">
          {service.intro}
        </p>

        <div className="mt-12 max-w-3xl space-y-12">
          {service.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-xl font-bold text-white md:text-2xl">{section.heading}</h2>
              <div className="space-y-4 text-sm font-light leading-relaxed text-white/80 md:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-4 max-w-3xl text-sm text-white/70">{service.description}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#252525]"
          >
            Start a project
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-white/45"
          >
            All services
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
