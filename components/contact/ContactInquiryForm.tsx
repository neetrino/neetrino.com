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
        className="min-h-12 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-white placeholder:text-white/55 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
      />

      <label className="sr-only" htmlFor="contact-email">
        {t("forms.email")}
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        placeholder={t("forms.yourEmail")}
        className="min-h-12 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-white placeholder:text-white/55 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]"
      />

      <label className="sr-only" htmlFor="contact-message">
        {t("forms.message")}
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder={t("forms.yourMessage")}
        rows={5}
        className="min-h-[148px] resize-y rounded-3xl border border-white/15 bg-white/[0.08] px-5 py-4 text-white placeholder:text-white/55 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] md:col-span-2"
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-[#756cff] bg-[#4d43ff]/85 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a51ff]"
        >
          {t("forms.sendInquiry")}
        </button>
      </div>
    </form>
  );
}
