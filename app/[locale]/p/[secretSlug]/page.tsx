import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCheckoutForm } from "@/components/products/ProductCheckoutForm";
import { formatMoneyAMDWithCurrency } from "@/lib/format-money-amd";
import { interSans } from "@/lib/fonts";
import type { AppLocale } from "@/lib/i18n/locales";
import type { PaymentLanguageCode } from "@/lib/payment.constants";
import { PAYMENT_LANGUAGE_CODES } from "@/lib/payment.constants";
import { getProductAvailability } from "@/lib/server/products/product-availability";
import { getProductBySecretSlug } from "@/lib/server/products/product-repository";

type SecretProductPageProps = {
  params: Promise<{ locale: AppLocale; secretSlug: string }>;
};

export async function generateMetadata({ params }: SecretProductPageProps): Promise<Metadata> {
  const { secretSlug } = await params;
  const product = await getProductBySecretSlug(secretSlug);

  return {
    title: product ? product.name : "Product",
    robots: { index: false, follow: false },
  };
}

function unavailableMessage(reason: string): string {
  switch (reason) {
    case "inactive":
      return "This product is not available.";
    case "sold":
      return "This product has already been purchased and is no longer available.";
    case "one_time_purchased":
      return "This one-time product has already been sold.";
    default:
      return "This product is not available.";
  }
}

function toPaymentLanguage(locale: AppLocale): PaymentLanguageCode {
  return PAYMENT_LANGUAGE_CODES.includes(locale as PaymentLanguageCode)
    ? (locale as PaymentLanguageCode)
    : "hy";
}

export default async function SecretProductPage({ params }: SecretProductPageProps) {
  const { locale, secretSlug } = await params;
  const product = await getProductBySecretSlug(secretSlug);

  if (!product) {
    notFound();
  }

  const availability = await getProductAvailability(product);

  return (
    <div className={`min-h-[60vh] w-full bg-transparent pb-20 pt-28 ${interSans.className}`}>
      <div className="section-container mx-auto max-w-lg">
        <article className="rounded-[30px] border border-white/15 bg-gradient-to-br from-[#302f55]/65 via-[#1e1d31]/78 to-[#17171b]/92 p-8 shadow-[0_25px_80px_rgba(20,10,70,0.42)] backdrop-blur-xl md:p-10">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">{product.name}</h1>

          {product.description ? (
            <p className="mt-4 text-base leading-relaxed text-white/75">{product.description}</p>
          ) : null}

          <p className="mt-8 text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
            {formatMoneyAMDWithCurrency(product.price.toString(), product.currency)}
          </p>

          {!availability.available ? (
            <p className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
              {unavailableMessage(availability.reason)}
            </p>
          ) : (
            <ProductCheckoutForm
              secretSlug={product.secretSlug}
              language={toPaymentLanguage(locale)}
            />
          )}
        </article>
      </div>
    </div>
  );
}
