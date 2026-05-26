"use client";

import { useState } from "react";
import type { PaymentLanguageCode } from "@/lib/payment.constants";

type ProductCheckoutFormProps = {
  readonly secretSlug: string;
  readonly language?: PaymentLanguageCode;
};

export function ProductCheckoutForm({ secretSlug, language }: ProductCheckoutFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handlePay(): Promise<void> {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`/api/products/${encodeURIComponent(secretSlug)}/start-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(language ? { language } : {}),
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        redirectUrl?: string;
      };

      if (!res.ok || !data.success) {
        setError(data.error ?? "Could not start payment.");
        return;
      }

      if (data.redirectUrl) {
        window.location.assign(data.redirectUrl);
        return;
      }

      setError("Payment could not be started. Please try again.");
    } catch {
      setError("Could not start payment. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8">
      {error ? (
        <p className="mb-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </p>
      ) : null}

      <button
        type="button"
        disabled={loading}
        onClick={() => void handlePay()}
        className="w-full rounded-full bg-[#473dff] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-50"
      >
        {loading ? "Redirecting to bank…" : "Pay"}
      </button>
    </div>
  );
}
