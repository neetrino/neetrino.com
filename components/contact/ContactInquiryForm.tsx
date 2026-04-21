import { useTranslations } from "next-intl";
import { submitContactInquiry } from "@/app/actions/contact";

export function ContactInquiryForm() {
  const t = useTranslations();

  return (
    <form action={submitContactInquiry} className="grid gap-3 md:grid-cols-2">
      <label className="sr-only" htmlFor="contact-name">
        {t("forms.name")}
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        placeholder={t("forms.yourName")}
        className="min-h-12 rounded-full border-0 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]"
      />

      <label className="sr-only" htmlFor="contact-email">
        {t("forms.email")}
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        placeholder={t("forms.yourEmail")}
        className="min-h-12 rounded-full border-0 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]"
      />

      <label className="sr-only" htmlFor="contact-message">
        {t("forms.message")}
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder={t("forms.yourMessage")}
        rows={5}
        className="min-h-[148px] resize-y rounded-3xl border-0 bg-white px-5 py-4 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff] md:col-span-2"
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#4a3aff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3d2fe0]"
        >
          {t("forms.sendInquiry")}
        </button>
      </div>
    </form>
  );
}
