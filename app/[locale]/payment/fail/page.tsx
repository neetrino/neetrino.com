import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PaymentResultCard } from "@/components/payment/PaymentResultCard";
import { interSans } from "@/lib/fonts";
import type { AppLocale } from "@/lib/i18n/locales";
import { getLocaleAlternates } from "@/lib/metadata";
import { getPublicOrderSummary } from "@/lib/server/payment/get-public-order-summary";

type PaymentFailPageProps = {
  params: Promise<{ locale: AppLocale }>;
  searchParams: Promise<{ order?: string }>;
};

export async function generateMetadata({ params }: PaymentFailPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("paymentPage.failMetaTitle"),
    description: t("paymentPage.failMetaDescription"),
    alternates: getLocaleAlternates(locale, "/payment/fail"),
  };
}

export default async function PaymentFailPage({ params, searchParams }: PaymentFailPageProps) {
  await params;
  const { order: orderId } = await searchParams;
  const t = await getTranslations();
  const order = await getPublicOrderSummary(orderId);

  return (
    <div className={`min-h-[60vh] w-full bg-transparent pb-20 pt-28 ${interSans.className}`}>
      <div className="section-container">
        <PaymentResultCard
          variant="fail"
          title={t("paymentPage.failTitle")}
          message={t("paymentPage.failMessage")}
          orderLabel={t("paymentPage.orderNumberLabel")}
          homeLabel={t("paymentPage.home")}
          contactLabel={t("paymentPage.contact")}
          order={order}
        />
      </div>
    </div>
  );
}
