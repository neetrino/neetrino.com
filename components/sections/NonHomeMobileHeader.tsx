import Image from "next/image";
import Link from "next/link";
import { NonHomeMobileShell } from "@/components/nav/NonHomeMobileShell";
import { PRIMARY_NAV_LINKS } from "@/lib/nav-links";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

export function NonHomeMobileHeader({ className = "" }: { className?: string }) {
  return (
    <NonHomeMobileShell className={className} links={PRIMARY_NAV_LINKS}>
      <Link href="/" className="relative h-8 w-[118px] shrink-0 min-[360px]:w-[132px]">
        <Image
          alt="Neetrino"
          width={400}
          height={400}
          sizes="(max-width: 359px) 118px, 132px"
          className="h-full w-full object-contain"
          src={FIGMA_ASSETS.imgNeetrinoItComapny2Png1}
          priority
        />
      </Link>
    </NonHomeMobileShell>
  );
}
