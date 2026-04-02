import fs from "node:fs";

/**
 * @deprecated Легаси-генератор под старый монолитный `page.tsx`.
 * Текущая вёрстка Services живёт в `components/services/`. Запуск перезапишет `app/services/*` по устаревшей схеме.
 */

function sliceLines(path, start, end) {
  const lines = fs.readFileSync(path, "utf8").split(/\r?\n/);
  return lines.slice(start - 1, end).join("\n");
}

/** Services */
const servicesPath = "app/services/page.tsx";
fs.writeFileSync(
  "app/services/services-assets.ts",
  sliceLines(servicesPath, 6, 34) + "\n",
);
fs.writeFileSync(
  "app/services/services-constants.ts",
  `export ${sliceLines(servicesPath, 36, 67)}\n`,
);
fs.writeFileSync(
  "app/services/ServicesAwwwards.tsx",
  `"use client";

import Link from "next/link";
import { imgNeetrinoItComapny2Png1, imgVector } from "./services-assets";

${sliceLines(servicesPath, 69, 151)}
`,
);
fs.writeFileSync(
  "app/services/ServicesCards.tsx",
  `"use client";

import {
  imgEllipse2,
  imgEllipse3,
  imgEllipse4,
  imgEllipse5,
  imgGroup,
  imgSafearea,
  imgShieldDone,
} from "./services-assets";

${sliceLines(servicesPath, 152, 512)}
`,
);
fs.writeFileSync(
  "app/services/ServicesMobile.tsx",
  `"use client";

import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { MOBILE_SERVICE_ITEMS } from "./services-constants";

export function ServicesMobile() {
${sliceLines(servicesPath, 517, 552)
  .split("\n")
  .map((l) => (l ? "  " + l : l))
  .join("\n")}
}
`,
);
fs.writeFileSync(
  "app/services/ServicesDesktopUpper.tsx",
  `"use client";

import { CanvasScaler } from "@/components/layout/CanvasScaler";
import {
  img10,
  imgBuilding,
  imgComponent21,
  imgEllipse1,
  imgEllipse27,
  imgEllipse28,
  imgEllipse6,
  imgEllipse7,
  imgLayers,
  imgLine734,
  imgLine735,
  imgPngwing6,
  imgRectangle17414,
  imgRectangle17416,
  imgRectangle240649642,
  imgRectangle240650146,
  imgStar22,
  imgVector2,
  imgVector27397,
  imgVector27398,
} from "./services-assets";
import { Awwwards } from "./ServicesAwwwards";
import { Card, Card1, Card2, Card3 } from "./ServicesCards";

export function ServicesDesktopUpper() {
  return (
${sliceLines(servicesPath, 555, 760)
  .split("\n")
  .map((l) => (l ? "    " + l : l))
  .join("\n")}
  );
}
`,
);
fs.writeFileSync(
  "app/services/ServicesDesktopLower.tsx",
  `"use client";

import { CanvasFooter } from "@/components/sections/Footer";
import {
  img10,
  imgComponent21,
  imgEllipse1,
  imgPngwing6,
} from "./services-assets";
import { Awwwards } from "./ServicesAwwwards";
import { Card, Card1, Card2, Card3 } from "./ServicesCards";

export function ServicesDesktopLower() {
  return (
${sliceLines(servicesPath, 761, 965)
  .split("\n")
  .map((l) => (l ? "    " + l : l))
  .join("\n")}
  );
}
`,
);

fs.writeFileSync(
  "app/services/page.tsx",
  `import { ServicesDesktopLower } from "./ServicesDesktopLower";
import { ServicesDesktopUpper } from "./ServicesDesktopUpper";
import { ServicesMobile } from "./ServicesMobile";

export default function Services() {
  return (
    <>
      <ServicesMobile />
      <div className="hidden lg:block">
        <ServicesDesktopUpper />
        <ServicesDesktopLower />
      </div>
    </>
  );
}
`,
);

console.log("Services split done");
