import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NeetrinoDesktopScaleReference } from "@/components/layout/NeetrinoDesktopScaleReference";
import { QuoteModalProvider } from "@/components/quote/quote-modal-context";
import { FloatingContactFab } from "@/components/shared/FloatingContactFab";
import { AppHeader } from "@/components/sections/AppHeader";
import { dmSans, interSans } from "@/lib/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "NEETRINO — Web",
  description: "NEETRINO digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} ${dmSans.variable} h-full w-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${interSans.className} m-0 min-h-full w-full overflow-x-hidden p-0 bg-[#151515]`}
        suppressHydrationWarning
      >
        <QuoteModalProvider>
          <AppHeader />
          <NeetrinoDesktopScaleReference />
          {children}
          <FloatingContactFab />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
