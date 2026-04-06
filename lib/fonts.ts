import { DM_Sans, Inter } from "next/font/google";

/** Основной UI/маркетинговый шрифт — Inter (latin + cyrillic). */
export const interSans = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
});

/** DM Sans для футера и блоков с opsz (совместно с `.dm-sans-opsz-14`). */
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});
