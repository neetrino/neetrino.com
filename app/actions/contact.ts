"use server";

import { GET_QUOTE_BUDGETS, GET_QUOTE_PROJECT_TYPES } from "@/lib/get-quote-form.constants";

export async function submitContactInquiry(_formData: FormData) {
  void _formData;
}

const ALLOWED_PROJECT = new Set<string>(GET_QUOTE_PROJECT_TYPES.map((x) => x.value));
const ALLOWED_BUDGET = new Set<string>(GET_QUOTE_BUDGETS.map((x) => x.value));

export type QuoteValidationErrorKey =
  | "nameRequired"
  | "nameTooLong"
  | "phoneInvalid"
  | "phoneTooLong"
  | "projectTypeRequired"
  | "budgetRequired";

export type SubmitGetQuoteResult = { ok: true } | { ok: false; errorKey: QuoteValidationErrorKey };

export async function submitGetQuoteRequest(formData: FormData): Promise<SubmitGetQuoteResult> {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const projectType = formData.get("projectType");
  const budget = formData.get("budget");

  if (typeof name !== "string" || name.trim().length < 1) {
    return { ok: false, errorKey: "nameRequired" };
  }
  if (name.trim().length > 200) {
    return { ok: false, errorKey: "nameTooLong" };
  }

  if (typeof phone !== "string" || phone.trim().length < 5) {
    return { ok: false, errorKey: "phoneInvalid" };
  }
  if (phone.length > 40) {
    return { ok: false, errorKey: "phoneTooLong" };
  }

  if (typeof projectType !== "string" || !ALLOWED_PROJECT.has(projectType)) {
    return { ok: false, errorKey: "projectTypeRequired" };
  }

  if (typeof budget !== "string" || !ALLOWED_BUDGET.has(budget)) {
    return { ok: false, errorKey: "budgetRequired" };
  }

  return { ok: true };
}
