"use client";

import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

export function FooterMessageForm() {
  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="footer-message" className="sr-only">
        Your message
      </label>
      <input
        id="footer-message"
        type="text"
        name="message"
        placeholder="Enter your message"
        className="min-h-12 w-full flex-1 rounded-full border-0 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#4a3aff] px-6 py-3 text-white transition hover:bg-[#3d2fe0]"
      >
        <span>Send</span>
        <Image
          src={FIGMA_ASSETS.imgGroup221}
          alt=""
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
      </button>
    </form>
  );
}
