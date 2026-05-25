/** ArCa ISO 4217 numeric code for Armenian dram. */
export const ARCA_CURRENCY_AMD = "051" as const;

/** ArCa `orderStatus` value meaning paid/approved. */
export const ARCA_ORDER_STATUS_PAID = 2 as const;

/** ArCa `paymentAmountInfo.paymentState` value meaning deposited. */
export const ARCA_PAYMENT_STATE_DEPOSITED = "DEPOSITED" as const;

export const PAYMENT_PROVIDER_IDBANK_ARCA = "IDBANK_ARCA" as const;

export const PAYMENT_SUCCESS_PATH = "/payment/success" as const;
export const PAYMENT_FAIL_PATH = "/payment/fail" as const;

export const IDBANK_SUCCESS_CALLBACK_PATH = "/wc-api/idbank_successful" as const;
export const IDBANK_FAIL_CALLBACK_PATH = "/wc-api/idbank_failed" as const;

/** Pending payments older than this are eligible for reconcile cron. */
export const PAYMENT_RECONCILE_PENDING_MINUTES = 15 as const;

export const ARCA_JSON_PARAMS_FORCE_3DS2 = JSON.stringify({ FORCE_3DS2: "true" });

export const ARCA_TEST_BASE_URL = "https://ipaytest.arca.am:8445/payment/rest" as const;
export const ARCA_LIVE_BASE_URL = "https://ipay.arca.am/payment/rest" as const;

export const PAYMENT_LANGUAGE_CODES = ["hy", "ru", "en"] as const;
export type PaymentLanguageCode = (typeof PAYMENT_LANGUAGE_CODES)[number];

export const DEFAULT_PAYMENT_LANGUAGE: PaymentLanguageCode = "hy";
