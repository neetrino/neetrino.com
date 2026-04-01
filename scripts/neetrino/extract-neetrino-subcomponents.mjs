import fs from "node:fs";
import { fileURLToPath } from "node:url";

const srcPath = fileURLToPath(new URL("./NeetrinoHome.full.tsx", import.meta.url));
const lines = fs.readFileSync(srcPath, "utf8").split(/\r?\n/);
const slice = (a, b) => lines.slice(a - 1, b).join("\n");

const parts = [
  {
    file: "components/neetrino-home/Group1.tsx",
    start: 123,
    end: 206,
    header: `"use client";

import Image from "next/image";
import { imgPc, imgSafearea } from "./figma-assets";

`,
    name: "Group1",
  },
  {
    file: "components/neetrino-home/Group.tsx",
    start: 207,
    end: 290,
    header: `"use client";

import Image from "next/image";
import { imgChangeColor, imgChangeColor1, imgEllipse3463, imgSafearea1 } from "./figma-assets";

`,
    name: "Group",
  },
  {
    file: "components/neetrino-home/MacBookPro.tsx",
    start: 292,
    end: 377,
    header: `"use client";

import Image from "next/image";
import { imgAnimation, imgBody, imgDelete, imgScreen } from "./figma-assets";

`,
    name: "MacBookPro",
  },
  {
    file: "components/neetrino-home/Frame.tsx",
    start: 378,
    end: 511,
    header: `"use client";

import Image from "next/image";
import { MacBookPro } from "./MacBookPro";
import {
  imgAppleIMac27201911,
  imgIPhone14Pro1,
  imgSafearea,
  imgSpaceGray1,
} from "./figma-assets";

`,
    name: "Frame",
  },
  {
    file: "components/neetrino-home/Group2.tsx",
    start: 512,
    end: 595,
    header: `"use client";

import Image from "next/image";
import { imgChangeColor, imgChangeColor1, imgEllipse3463, imgSafearea1 } from "./figma-assets";

`,
    name: "Group2",
  },
  {
    file: "components/neetrino-home/Awwwards.tsx",
    start: 597,
    end: 689,
    header: `"use client";

import Image from "next/image";
import Link from "next/link";
import { imgNeetrinoItComapny2Png1, imgVector } from "./figma-assets";

`,
    name: "Awwwards",
  },
];

for (const { file, start, end, header, name } of parts) {
  let body = slice(start, end);
  body = body.replace(new RegExp(`^function ${name}\\b`, "m"), `export function ${name}`);
  fs.writeFileSync(file, `${header}${body}\n`);
}

console.log("Wrote", parts.length, "subcomponent files");
