import fs from "node:fs";
import { fileURLToPath } from "node:url";

const srcPath = fileURLToPath(new URL("./NeetrinoHome.full.tsx", import.meta.url));
const lines = fs.readFileSync(srcPath, "utf8").split(/\r?\n/);
const slice = (a, b) => lines.slice(a - 1, b).join("\n");

function figmaImports(body) {
  const imgs = [
    ...new Set(
      [...body.matchAll(/\b(img[A-Za-z0-9_]+)\b/g)]
        .map((m) => m[1])
        .filter((x) => x !== "img"),
    ),
  ].sort();
  if (imgs.length === 0) return "";
  return `import {\n  ${imgs.join(",\n  ")},\n} from "./figma-assets";\n`;
}

const topBody = slice(1300, 1453);
const bottomBody = slice(1454, 1627);
const preWhatBody = slice(1279, 1294);
const whatOpen = slice(1295, 1299);
const whatClose = lines[1628 - 1];
const endCapBody = slice(1629, 1644);

const topFile = `"use client";

import Image from "next/image";
${figmaImports(topBody)}
export function NeetrinoHomeWhatWeDoTop() {
  return (
    <>
${topBody}
    </>
  );
}
`;

const bottomFile = `"use client";

import Image from "next/image";
import { Group } from "./Group";
import { Group1 } from "./Group1";
${figmaImports(bottomBody)}
export function NeetrinoHomeWhatWeDoBottom() {
  return (
    <>
${bottomBody}
    </>
  );
}
`;

const belowFoldFile = `"use client";

import Image from "next/image";
import { Frame } from "./Frame";
import { NeetrinoHomeWhatWeDoBottom } from "./NeetrinoHomeWhatWeDoBottom";
import { NeetrinoHomeWhatWeDoTop } from "./NeetrinoHomeWhatWeDoTop";
${figmaImports(preWhatBody)}
export function NeetrinoHomeBelowFold() {
  return (
    <>
${preWhatBody}
${whatOpen}
        <NeetrinoHomeWhatWeDoTop />
        <NeetrinoHomeWhatWeDoBottom />
${whatClose}
    </>
  );
}
`;

const endCapFile = `"use client";

import Image from "next/image";
${figmaImports(endCapBody)}
export function NeetrinoHomeEndCap() {
  return (
    <>
${endCapBody}
    </>
  );
}
`;

fs.writeFileSync("components/neetrino-home/NeetrinoHomeWhatWeDoTop.tsx", topFile);
fs.writeFileSync("components/neetrino-home/NeetrinoHomeWhatWeDoBottom.tsx", bottomFile);
fs.writeFileSync("components/neetrino-home/NeetrinoHomeBelowFold.tsx", belowFoldFile);
fs.writeFileSync("components/neetrino-home/NeetrinoHomeEndCap.tsx", endCapFile);
console.log("Wrote BelowFold, EndCap, WhatWeDoTop, WhatWeDoBottom");
