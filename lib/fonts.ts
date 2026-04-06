import { DM_Sans, Inter, Roboto } from "next/font/google";

/** Inter Extra Bold только для подписи «Get a Quote» в десктопном хедере (как в Figma). */
export const interHeaderQuote = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "800",
  display: "swap",
});

/** Основной UI/маркетинговый шрифт — Roboto (latin + cyrillic). */
export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

/** DM Sans для футера и блоков с opsz (совместно с `.dm-sans-opsz-14`). */
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});
