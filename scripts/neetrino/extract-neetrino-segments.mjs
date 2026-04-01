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

const segments = [
  {
    file: "components/neetrino-home/NeetrinoHomeSegment1.tsx",
    start: 698,
    end: 886,
    name: "NeetrinoHomeSegment1",
    extraImports: `import { Awwwards } from "./Awwwards";\n`,
  },
  {
    file: "components/neetrino-home/NeetrinoHomeSegment2.tsx",
    start: 887,
    end: 983,
    name: "NeetrinoHomeSegment2",
    extraImports: `import LiquidEther from "@/components/liquid-ether/LiquidEther";\nimport { Group2 } from "./Group2";\n`,
  },
  {
    file: "components/neetrino-home/NeetrinoHomeSegment3.tsx",
    start: 984,
    end: 1138,
    name: "NeetrinoHomeSegment3",
    extraImports: "",
  },
  {
    file: "components/neetrino-home/NeetrinoHomeSegment4.tsx",
    start: 1139,
    end: 1278,
    name: "NeetrinoHomeSegment4",
    extraImports: `import { CanvasFooter } from "@/components/sections/Footer";\nimport { Group } from "./Group";\n`,
  },
];

for (const { file, start, end, name, extraImports } of segments) {
  const body = slice(start, end);
  const figma = figmaImports(body);
  const header = `"use client";

import Image from "next/image";
${extraImports}${figma}`;
  const indented = body
    .split("\n")
    .map((l) => `      ${l}`)
    .join("\n");
  const out = `${header}
export function ${name}() {
  return (
    <>
${indented}
    </>
  );
}
`;
  fs.writeFileSync(file, out);
  console.log(file, "total lines", out.split("\n").length, "body", end - start + 1);
}
