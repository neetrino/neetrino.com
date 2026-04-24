/** Options for the Get a quote modal (aligned with site services). */
export const GET_QUOTE_PROJECT_TYPES = [
  { value: "website", labelKey: "website" },
  { value: "mobile-app", labelKey: "mobileApp" },
  { value: "crm", labelKey: "crmAutomation" },
  { value: "saas", labelKey: "saasPlatform" },
  { value: "ai", labelKey: "aiIntegration" },
  { value: "other", labelKey: "other" },
] as const;

export const GET_QUOTE_BUDGETS = [
  { value: "under-5k", labelKey: "under5k" },
  { value: "5k-15k", labelKey: "5kTo15k" },
  { value: "15k-50k", labelKey: "15kTo50k" },
  { value: "50k-150k", labelKey: "50kTo150k" },
  { value: "150k-plus", labelKey: "150kPlus" },
  { value: "discuss", labelKey: "discuss" },
] as const;
