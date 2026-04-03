/** One section on a service detail page. */
export type ServicePageSection = {
  heading: string;
  paragraphs: readonly string[];
};

/** Canonical service entry: listing copy + detail page body. */
export type ServiceCatalogEntry = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: readonly ServicePageSection[];
};

export const SERVICES_CATALOG = [
  {
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms built for growth. Secure, flexible, and ready to evolve with your product.",
    intro:
      "We build subscription-ready products with clear tenant boundaries, usage-aware infrastructure, and operational tooling your team can run day to day.",
    sections: [
      {
        heading: "Product foundations",
        paragraphs: [
          "From first paying customers to multi-tenant scale, we focus on billing readiness, role-based access, and observability so issues are visible before users report them.",
          "Architecture choices follow your roadmap: modular domains, safe deploys, and APIs that stay stable as the product grows.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          "Short feedback loops with staged rollouts, automated checks, and documentation that matches production behavior.",
          "Handover includes runbooks and clear ownership so your team can extend the platform confidently.",
        ],
      },
    ],
  },
  {
    slug: "crm-systems",
    title: "CRM Systems",
    description:
      "Powerful customer relationship management solutions to streamline your sales process and boost customer satisfaction.",
    intro:
      "We implement CRM workflows that match how your team actually sells: pipelines, tasks, integrations, and reporting without noisy manual work.",
    sections: [
      {
        heading: "Sales alignment",
        paragraphs: [
          "Lead and opportunity models tailored to your funnel, with guardrails so data stays consistent across regions and teams.",
          "Integrations with email, calendars, and billing systems to reduce copy-paste and duplicate records.",
        ],
      },
      {
        heading: "Visibility",
        paragraphs: [
          "Dashboards and exports that answer operational questions: velocity, conversion, and account health at a glance.",
          "Permissions and audit-friendly patterns when multiple departments touch the same customer data.",
        ],
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Cutting-edge web solutions built with modern technologies, optimized for performance and designed to convert visitors into customers.",
    intro:
      "Marketing and product sites that load fast, rank sensibly, and convert—built with accessible, maintainable frontends.",
    sections: [
      {
        heading: "Performance and UX",
        paragraphs: [
          "Core Web Vitals–minded implementation: sensible asset strategy, stable layout, and content that works on real devices.",
          "Design systems and components that stay consistent as marketing runs campaigns and landing variants.",
        ],
      },
      {
        heading: "Content and growth",
        paragraphs: [
          "CMS-friendly structures where editors can ship updates without engineering bottlenecks.",
          "Analytics and experiment hooks wired in early so you can iterate on messaging with evidence.",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
    intro:
      "We ship mobile experiences with offline-aware flows, push notifications where they matter, and stores-ready release discipline.",
    sections: [
      {
        heading: "Platforms",
        paragraphs: [
          "Native or cross-platform choices based on your timeline, team skills, and device capabilities you need to leverage.",
          "Shared domain logic and APIs to keep web and mobile aligned when you run both.",
        ],
      },
      {
        heading: "Quality",
        paragraphs: [
          "Automated tests around critical journeys, crash reporting, and staged rollouts to reduce risk on production devices.",
          "Accessibility and localization hooks so the app can grow into new markets without rework.",
        ],
      },
    ],
  },
  {
    slug: "ai-product-development",
    title: "AI Product Development",
    description:
      "Intelligent automation powered by machine learning and natural language processing to transform your business operations.",
    intro:
      "We embed AI where it creates measurable leverage: triage, drafting, search, and workflow automation—with human oversight and clear guardrails.",
    sections: [
      {
        heading: "Practical AI",
        paragraphs: [
          "Retrieval and tooling patterns that ground responses in your data, with evaluation sets so quality does not regress quietly.",
          "Cost-aware design: caching, batching, and model selection matched to latency and budget constraints.",
        ],
      },
      {
        heading: "Safety and operations",
        paragraphs: [
          "Logging, redaction, and access control suited to sensitive domains; fallbacks when models or vendors degrade.",
          "Operator workflows so teams can correct bad outputs and improve prompts or data over time.",
        ],
      },
    ],
  },
  {
    slug: "erp-system",
    title: "ERP System",
    description:
      "All-in-one systems for managing business operations. Control data, processes, and resources in one place.",
    intro:
      "We connect finance, inventory, HR-facing data, and operations into coherent workflows—with integrations instead of spreadsheet bridges.",
    sections: [
      {
        heading: "Operational clarity",
        paragraphs: [
          "Single sources of truth for entities that cross departments, with approvals and audit trails where regulations require them.",
          "Reporting that ties operational events to financial outcomes so leadership sees one story.",
        ],
      },
      {
        heading: "Integration",
        paragraphs: [
          "APIs and ETL paths to existing tools: banks, warehouses, payroll, and industry-specific systems.",
          "Migration plans that phase risk: parallel run, reconciliation checks, and rollback paths.",
        ],
      },
    ],
  },
] as const satisfies readonly ServiceCatalogEntry[];

export type ServiceSlug = (typeof SERVICES_CATALOG)[number]["slug"];

export function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICES_CATALOG.some((entry) => entry.slug === value);
}

export function getServiceBySlug(slug: string): (typeof SERVICES_CATALOG)[number] | undefined {
  return SERVICES_CATALOG.find((entry) => entry.slug === slug);
}

/** Stable href for a service detail route. */
export function serviceDetailHref(slug: ServiceSlug): string {
  return `/services/${slug}`;
}
