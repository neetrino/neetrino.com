"use client";

import { Dialog } from "@base-ui/react/dialog";
import type { FormEvent } from "react";
import { GET_QUOTE_BUDGETS, GET_QUOTE_PROJECT_TYPES } from "@/lib/get-quote-form.constants";

const FIELD_CLASS =
  "min-h-12 w-full rounded-full border border-white/10 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]";

const SELECT_CLASS =
  "min-h-12 w-full appearance-none rounded-full border border-white/10 bg-white px-5 py-3 text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#4a3aff]";

const LABEL_CLASS = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-white/70";

type GetQuoteModalFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  pending: boolean;
  errorMessage: string | null;
};

export function GetQuoteModalForm({ onSubmit, pending, errorMessage }: GetQuoteModalFormProps) {
  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <QuoteNamePhoneFields />
      <QuoteProjectBudgetFields />
      {errorMessage ? (
        <p className="text-sm text-red-300" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <QuoteFormActions pending={pending} />
    </form>
  );
}

function QuoteNamePhoneFields() {
  return (
    <>
      <div>
        <label htmlFor="quote-name" className={LABEL_CLASS}>
          Name
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={200}
          placeholder="Your name"
          className={FIELD_CLASS}
        />
      </div>
      <div>
        <label htmlFor="quote-phone" className={LABEL_CLASS}>
          Phone number
        </label>
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          maxLength={40}
          placeholder="+1 234 567 8900"
          className={FIELD_CLASS}
        />
      </div>
    </>
  );
}

function QuoteProjectBudgetFields() {
  return (
    <>
      <div>
        <label htmlFor="quote-project-type" className={LABEL_CLASS}>
          Project type
        </label>
        <select
          id="quote-project-type"
          name="projectType"
          required
          defaultValue=""
          className={SELECT_CLASS}
        >
          <option value="" disabled>
            Select project type
          </option>
          {GET_QUOTE_PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quote-budget" className={LABEL_CLASS}>
          Budget
        </label>
        <select id="quote-budget" name="budget" required defaultValue="" className={SELECT_CLASS}>
          <option value="" disabled>
            Select budget range
          </option>
          {GET_QUOTE_BUDGETS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function QuoteFormActions({ pending }: { pending: boolean }) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#4a3aff] px-6 text-sm font-semibold text-white transition hover:bg-[#3d2fe0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
      </button>
      <Dialog.Close
        type="button"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/5"
      >
        Cancel
      </Dialog.Close>
    </div>
  );
}
