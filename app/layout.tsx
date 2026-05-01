import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { dmSans, interSans, notoSansArmenian } from "@/lib/fonts";
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

/** Tab icon: `app/icon.svg`; Apple: `app/apple-icon.png`. `next.config` rewrites `/favicon.ico` → `/icon.svg`. */
export const metadata: Metadata = {
  title: "NEETRINO — Web",
  description: "NEETRINO digital agency",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<Record<string, never>>;
}>) {
  void params;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} ${dmSans.variable} ${notoSansArmenian.variable} w-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${interSans.className} m-0 w-full p-0 bg-[#151515]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
