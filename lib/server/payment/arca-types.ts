export type ArcaRegisterResponse = {
  readonly orderId?: string;
  readonly formUrl?: string;
  readonly errorCode?: string | number;
  readonly errorMessage?: string;
  readonly orderNumber?: string;
};

export type ArcaPaymentAmountInfo = {
  readonly paymentState?: string;
  readonly approvedAmount?: number;
  readonly depositedAmount?: number;
};

export type ArcaOrderStatusExtendedResponse = {
  readonly orderNumber?: string;
  readonly orderStatus?: number;
  readonly actionCode?: number;
  readonly actionCodeDescription?: string;
  readonly errorCode?: string | number;
  readonly errorMessage?: string;
  readonly paymentAmountInfo?: ArcaPaymentAmountInfo;
};

export type ArcaClientErrorCode =
  | "CONFIG"
  | "NETWORK"
  | "PARSE"
  | "REGISTER_REJECTED"
  | "STATUS_REJECTED";

export class ArcaClientError extends Error {
  readonly code: ArcaClientErrorCode;

  constructor(code: ArcaClientErrorCode, message: string) {
    super(message);
    this.name = "ArcaClientError";
    this.code = code;
  }
}
