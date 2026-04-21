"use client";

import { Dialog } from "@base-ui/react/dialog";
import type { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { GET_QUOTE_BUDGETS, GET_QUOTE_PROJECT_TYPES } from "@/lib/get-quote-form.constants";

const FIELD_CLASS =
  "min-h-12 w-full rounded-full border border-white/10 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]";

const SELECT_CLASS =
  "min-h-12 w-full appearance-none rounded-full border border-white/10 bg-white px-5 py-3 text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#4a3aff]";

const LABEL_CLASS = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-white/70";

function RequiredMark() {
  return (
    <span className="text-red-400" aria-hidden="true">
      {" *"}
    </span>
  );
}

type GetQuoteModalFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  pending: boolean;
  errorMessage: string | null;
};

export function GetQuoteModalForm({ onSubmit, pending, errorMessage }: GetQuoteModalFormProps) {
  const t = useTranslations();

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
  const t = useTranslations();

  return (
    <>
      <div>
        <label htmlFor="quote-name" className={LABEL_CLASS}>
          {t("forms.name")}
          <RequiredMark />
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={200}
          placeholder={t("forms.yourName")}
          className={FIELD_CLASS}
        />
      </div>
      <div>
        <label htmlFor="quote-phone" className={LABEL_CLASS}>
          {t("forms.phoneNumber")}
          <RequiredMark />
        </label>
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          maxLength={40}
          placeholder="+374 44 343 000"
          className={FIELD_CLASS}
        />
      </div>
    </>
  );
}

function QuoteProjectBudgetFields() {
  const t = useTranslations();

  return (
    <>
      <div>
        <label htmlFor="quote-project-type" className={LABEL_CLASS}>
          {t("forms.projectType")}
          <RequiredMark />
        </label>
        <select
          id="quote-project-type"
          name="projectType"
          required
          defaultValue=""
          className={SELECT_CLASS}
        >
          <option value="" disabled>
            {t("forms.selectProjectType")}
          </option>
          {GET_QUOTE_PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {t(`quote.projectTypes.${opt.labelKey}`)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quote-budget" className={LABEL_CLASS}>
          {t("forms.budget")}
        </label>
        <select id="quote-budget" name="budget" required defaultValue="" className={SELECT_CLASS}>
          <option value="" disabled>
            {t("forms.selectBudgetRange")}
          </option>
          {GET_QUOTE_BUDGETS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {t(`quote.budgets.${opt.labelKey}`)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function QuoteFormActions({ pending }: { pending: boolean }) {
  const t = useTranslations();

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#4a3aff] px-6 text-sm font-semibold text-white transition hover:bg-[#3d2fe0] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? t("forms.sending") : t("forms.submit")}
      </button>
      <Dialog.Close
        type="button"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/5"
      >
        {t("forms.cancel")}
      </Dialog.Close>
    </div>
  );
}
