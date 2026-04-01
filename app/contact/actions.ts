"use server";

/**
 * Placeholder until real backend or email integration.
 * Allows the contact form to stay a Server Component (no client hydration for noop submit).
 */
export async function submitContactInquiry(_formData: FormData) {
  void _formData;
}
