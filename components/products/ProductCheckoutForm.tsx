"use client";

import { useState } from "react";

type ProductCheckoutFormProps = {
  readonly secretSlug: string;
};

export function ProductCheckoutForm({ secretSlug }: ProductCheckoutFormProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`/api/products/${encodeURIComponent(secretSlug)}/start-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: formData.get("customerName"),
          customerEmail: formData.get("customerEmail"),
          customerPhone: formData.get("customerPhone"),
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
        orderNumber?: string;
      };

      if (!res.ok || !data.success) {
        setError(data.error ?? "Could not start order.");
        return;
      }

      setMessage(
        data.message ?? `Order ${data.orderNumber ?? ""} created. Payment will be connected soon.`,
      );
      form.reset();
    } catch {
      setError("Could not start order. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={(e) => void handleSubmit(e)} className="mt-8 space-y-4">
      <label className="block text-sm font-medium text-white/90">
        Name
        <input
          name="customerName"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-white outline-none focus:border-[#6a92ff]"
        />
      </label>
      <label className="block text-sm font-medium text-white/90">
        Email
        <input
          name="customerEmail"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-white outline-none focus:border-[#6a92ff]"
        />
      </label>
      <label className="block text-sm font-medium text-white/90">
        Phone
        <input
          name="customerPhone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-white outline-none focus:border-[#6a92ff]"
        />
      </label>

      {error ? (
        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </p>
      ) : null}
      {message ? (
        <p className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#473dff] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-50"
      >
        {loading ? "Processing…" : "Pay"}
      </button>
    </form>
  );
}
