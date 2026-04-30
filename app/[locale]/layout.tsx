import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { NeetrinoDesktopScaleReference } from "@/components/layout/NeetrinoDesktopScaleReference";
import { QuoteModalProvider } from "@/components/quote/quote-modal-context";
import { AppHeader } from "@/components/sections/AppHeader";
import { Footer } from "@/components/sections/Footer";
import { FloatingContactFab } from "@/components/shared/FloatingContactFab";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QuoteModalProvider>
        <AppHeader />
        <NeetrinoDesktopScaleReference />
        {children}
        <Footer />
        <FloatingContactFab />
      </QuoteModalProvider>
    </NextIntlClientProvider>
  );
}
