import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PaymentResultCard } from "@/components/payment/PaymentResultCard";
import { interSans } from "@/lib/fonts";
import type { AppLocale } from "@/lib/i18n/locales";
import { getLocaleAlternates } from "@/lib/metadata";
import { getPublicOrderSummary } from "@/lib/server/payment/get-public-order-summary";

type PaymentSuccessPageProps = {
  params: Promise<{ locale: AppLocale }>;
  searchParams: Promise<{ order?: string }>;
};

export async function generateMetadata({ params }: PaymentSuccessPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("paymentPage.successMetaTitle"),
    description: t("paymentPage.successMetaDescription"),
    alternates: getLocaleAlternates(locale, "/payment/success"),
  };
}

export default async function PaymentSuccessPage({
  params,
  searchParams,
}: PaymentSuccessPageProps) {
  await params;
  const { order: orderId } = await searchParams;
  const t = await getTranslations();
  const order = await getPublicOrderSummary(orderId);

  return (
    <div className={`min-h-[60vh] w-full bg-transparent pb-20 pt-28 ${interSans.className}`}>
      <div className="section-container">
        <PaymentResultCard
          variant="success"
          title={t("paymentPage.successTitle")}
          message={t("paymentPage.successMessage")}
          orderLabel={t("paymentPage.orderNumberLabel")}
          homeLabel={t("paymentPage.home")}
          contactLabel={t("paymentPage.contact")}
          order={order}
        />
      </div>
    </div>
  );
}
