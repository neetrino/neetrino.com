/** Options for the Get a quote modal (aligned with site services). */
export const GET_QUOTE_PROJECT_TYPES = [
  { value: "website", label: "Website" },
  { value: "mobile-app", label: "Mobile app" },
  { value: "crm", label: "CRM / automation" },
  { value: "saas", label: "SaaS platform" },
  { value: "ai", label: "AI integration" },
  { value: "other", label: "Other" },
] as const;

export const GET_QUOTE_BUDGETS = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-150k", label: "$50,000 – $150,000" },
  { value: "150k-plus", label: "$150,000+" },
  { value: "discuss", label: "Prefer to discuss" },
] as const;
