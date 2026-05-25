import "server-only";
import {
  ARCA_LIVE_BASE_URL,
  ARCA_TEST_BASE_URL,
  IDBANK_FAIL_CALLBACK_PATH,
  IDBANK_SUCCESS_CALLBACK_PATH,
} from "@/lib/payment.constants";

export type ArcaRuntimeConfig = {
  readonly baseUrl: string;
  readonly userName: string;
  readonly password: string;
  readonly bank: string;
  readonly appUrl: string;
  readonly isTestMode: boolean;
};

function readRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizeAppUrl(raw: string): string {
  return raw.replace(/\/+$/, "");
}

/**
 * Loads ArCa / IDBank credentials and endpoints from server env only.
 */
export function getArcaRuntimeConfig(): ArcaRuntimeConfig {
  const isTestMode = process.env.ARCA_TEST_MODE === "true";
  const userName = isTestMode
    ? readRequiredEnv("ARCA_USERNAME")
    : readRequiredEnv("ARCA_LIVE_USERNAME");
  const password = isTestMode
    ? readRequiredEnv("ARCA_PASSWORD")
    : readRequiredEnv("ARCA_LIVE_PASSWORD");

  const bank = process.env.ARCA_BANK?.trim() || "idbank";
  const appUrl = normalizeAppUrl(readRequiredEnv("APP_URL"));
  const baseUrl = isTestMode ? ARCA_TEST_BASE_URL : ARCA_LIVE_BASE_URL;

  return {
    baseUrl,
    userName,
    password,
    bank,
    appUrl,
    isTestMode,
  };
}

export function buildIdbankSuccessReturnUrl(appUrl: string, localOrderId: string): string {
  const url = new URL(IDBANK_SUCCESS_CALLBACK_PATH, `${appUrl}/`);
  url.searchParams.set("order", localOrderId);
  return url.toString();
}

export function buildIdbankFailReturnUrl(appUrl: string, localOrderId: string): string {
  const url = new URL(IDBANK_FAIL_CALLBACK_PATH, `${appUrl}/`);
  url.searchParams.set("order", localOrderId);
  return url.toString();
}

export function getPaymentReconcileSecret(): string {
  return readRequiredEnv("PAYMENT_RECONCILE_SECRET");
}
