"use server";

import { GET_QUOTE_BUDGETS, GET_QUOTE_PROJECT_TYPES } from "@/lib/get-quote-form.constants";

/**
 * Placeholder until real backend or email integration.
 * Allows the contact form to stay a Server Component (no client hydration for noop submit).
 */
export async function submitContactInquiry(_formData: FormData) {
  void _formData;
}

const ALLOWED_PROJECT = new Set<string>(GET_QUOTE_PROJECT_TYPES.map((x) => x.value));
const ALLOWED_BUDGET = new Set<string>(GET_QUOTE_BUDGETS.map((x) => x.value));

export type SubmitGetQuoteResult = { ok: true } | { ok: false; error: string };

/**
 * Validates Get a quote modal fields. Extend with email/logging when backend is ready.
 */
export async function submitGetQuoteRequest(formData: FormData): Promise<SubmitGetQuoteResult> {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const projectType = formData.get("projectType");
  const budget = formData.get("budget");

  if (typeof name !== "string" || name.trim().length < 1) {
    return { ok: false, error: "Please enter your name." };
  }
  if (name.trim().length > 200) {
    return { ok: false, error: "Name is too long." };
  }

  if (typeof phone !== "string" || phone.trim().length < 5) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (phone.length > 40) {
    return { ok: false, error: "Phone number is too long." };
  }

  if (typeof projectType !== "string" || !ALLOWED_PROJECT.has(projectType)) {
    return { ok: false, error: "Please select a project type." };
  }

  if (typeof budget !== "string" || !ALLOWED_BUDGET.has(budget)) {
    return { ok: false, error: "Please select a budget range." };
  }

  void name;
  void phone;
  void projectType;
  void budget;

  return { ok: true };
}
