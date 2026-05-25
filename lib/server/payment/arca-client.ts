import "server-only";
import { ARCA_CURRENCY_AMD, ARCA_JSON_PARAMS_FORCE_3DS2 } from "@/lib/payment.constants";
import { getArcaRuntimeConfig } from "@/lib/server/payment/arca-config";
import {
  ArcaClientError,
  type ArcaOrderStatusExtendedResponse,
  type ArcaRegisterResponse,
} from "@/lib/server/payment/arca-types";

const REGISTER_PATH = "/register.do";
const STATUS_PATH = "/getOrderStatusExtended.do";

type RegisterArcaOrderInput = {
  readonly orderNumber: string;
  readonly amountMinorUnits: number;
  readonly returnUrl: string;
  readonly description: string;
  readonly language: string;
};

async function postArcaForm(path: string, params: Record<string, string>): Promise<unknown> {
  const { baseUrl, userName, password } = getArcaRuntimeConfig();
  const body = new URLSearchParams({
    userName,
    password,
    ...params,
  });

  let response: Response;
  try {
    response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
      cache: "no-store",
    });
  } catch {
    throw new ArcaClientError("NETWORK", "Failed to reach ArCa payment API.");
  }

  const text = await response.text();
  if (!text.trim()) {
    throw new ArcaClientError("PARSE", "ArCa returned an empty response.");
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new ArcaClientError("PARSE", "ArCa response was not valid JSON.");
  }
}

function assertRegisterSuccess(payload: ArcaRegisterResponse): void {
  const errorCode = payload.errorCode;
  if (errorCode !== undefined && errorCode !== 0 && errorCode !== "0") {
    const message =
      typeof payload.errorMessage === "string" && payload.errorMessage.length > 0
        ? payload.errorMessage
        : "ArCa rejected payment registration.";
    throw new ArcaClientError("REGISTER_REJECTED", message);
  }

  if (!payload.orderId || !payload.formUrl) {
    throw new ArcaClientError(
      "REGISTER_REJECTED",
      "ArCa registration response missing orderId or formUrl.",
    );
  }
}

export async function registerArcaOrder(
  input: RegisterArcaOrderInput,
): Promise<ArcaRegisterResponse> {
  const payload = (await postArcaForm(REGISTER_PATH, {
    orderNumber: input.orderNumber,
    amount: String(input.amountMinorUnits),
    currency: ARCA_CURRENCY_AMD,
    returnUrl: input.returnUrl,
    description: input.description,
    language: input.language,
    jsonParams: ARCA_JSON_PARAMS_FORCE_3DS2,
  })) as ArcaRegisterResponse;

  assertRegisterSuccess(payload);
  return payload;
}

export async function getArcaOrderStatusExtended(
  arcaOrderId: string,
): Promise<ArcaOrderStatusExtendedResponse> {
  const payload = (await postArcaForm(STATUS_PATH, {
    orderId: arcaOrderId,
  })) as ArcaOrderStatusExtendedResponse;

  const errorCode = payload.errorCode;
  if (errorCode !== undefined && errorCode !== 0 && errorCode !== "0") {
    const message =
      typeof payload.errorMessage === "string" && payload.errorMessage.length > 0
        ? payload.errorMessage
        : "ArCa order status request failed.";
    throw new ArcaClientError("STATUS_REJECTED", message);
  }

  return payload;
}
