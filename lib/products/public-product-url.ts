const DEFAULT_APP_URL = "https://neetrino.com";

export function getPublicProductPath(secretSlug: string): string {
  return `/p/${secretSlug}`;
}

export function getPublicProductUrl(secretSlug: string, appUrl?: string): string {
  const base = (appUrl ?? process.env.APP_URL ?? DEFAULT_APP_URL).replace(/\/+$/, "");
  return `${base}${getPublicProductPath(secretSlug)}`;
}
