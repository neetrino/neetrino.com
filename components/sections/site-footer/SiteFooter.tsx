"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CONTACT_DETAILS, CONTACT_SOCIAL_LINKS } from "@/components/contact/content";

const FIGMA_ASSETS = {
  img101: "https://www.figma.com/api/mcp/asset/26540830-c404-450b-ae0a-f864a9101164",
  imgFooterBottom: "https://www.figma.com/api/mcp/asset/1a751c68-9306-47f6-a46d-7d04ea04b131",
  imgLine135: "https://www.figma.com/api/mcp/asset/35ab45eb-5182-4ec7-bf84-1ae97f5c8d20",
  imgVector: "https://www.figma.com/api/mcp/asset/fd0e6229-31db-42f5-9e11-a01733527caa",
  imgVector1: "https://www.figma.com/api/mcp/asset/c3fd9b1d-1c61-4a23-b92b-8f8b584cf5f0",
  imgVector2: "https://www.figma.com/api/mcp/asset/ec7ee90a-99d7-46a5-942d-d93c19c46444",
  imgGroup2087329580: "https://www.figma.com/api/mcp/asset/d815eacc-e9f9-4c51-b2b5-06b541416f73",
  imgGroup221: "https://www.figma.com/api/mcp/asset/a5859f03-1f95-41d1-95bd-3f02b7b33614",
  imgSocialMediaIconSquareFacebook:
    "https://www.figma.com/api/mcp/asset/dcb1289b-bdc9-406c-af0c-f3d951d31145",
  imgSocialMediaIconSquareInstagram:
    "https://www.figma.com/api/mcp/asset/91e49aab-256e-4c70-bc37-aa9b385913f0",
  imgGroup73: "https://www.figma.com/api/mcp/asset/6c8a1029-1e21-47a8-ae71-b0883a035e2f",
  imgGroup: "https://www.figma.com/api/mcp/asset/55a91980-34f2-4d91-99a9-249bc7f5f08c",
  imgGroup74: "https://www.figma.com/api/mcp/asset/0ee0b92d-ae16-4581-bf64-c243fca8bf18",
  imgVector3: "https://www.figma.com/api/mcp/asset/5ec474d6-f3cc-4535-a13e-f46ce87dab7f",
  imgVector4: "https://www.figma.com/api/mcp/asset/7b4ba32f-546a-4d51-bf49-e9bc47f586e9",
  imgRectangle17416: "https://www.figma.com/api/mcp/asset/dead7c9f-b70d-4133-8099-606d5c0a0372",
} as const;

const SOCIAL_ICON_HREFS = [
  CONTACT_SOCIAL_LINKS[0].href,
  CONTACT_SOCIAL_LINKS[1].href,
  CONTACT_SOCIAL_LINKS[2].href,
  "https://www.behance.net/",
  "https://www.youtube.com/",
  CONTACT_SOCIAL_LINKS[4].href,
  CONTACT_SOCIAL_LINKS[3].href,
] as const;

/**
 * Footer v2 — Figma node 10:237 (NEETRINO-WEB). Layout/classes match `get_design_context` output;
 * internal routes use `next-intl` `Link`; `mailto:` / `tel:` use app contact constants.
 */
export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full overflow-hidden border-t border-white/20 bg-[#151515] font-[family-name:var(--font-dm-sans)]"
    >
      <div className="relative w-full min-w-0 overflow-hidden">
        {/* Viewport-wide gradient (Figma 10:221) — full footer height so #151515 does not show as top/bottom bars. */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#151515]"
          aria-hidden
        >
          <div className="absolute inset-[-45%_-55%_-45%_-55%] min-h-[130%] min-w-[120%]">
            <Image
              alt=""
              width={2400}
              height={2400}
              unoptimized
              className="block size-full max-h-none max-w-none object-cover object-center"
              src={FIGMA_ASSETS.imgRectangle17416}
            />
          </div>
        </div>
        <div
          className="relative isolate mx-auto h-[590px] w-full max-w-[1440px] overflow-hidden"
          data-node-id="10:237"
          data-name="Footer v2"
        >
          {/* Background / glow art — below copy (paint order + z-0). */}
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <div
              className="absolute h-[563px] left-[638px] opacity-70 top-[27px] w-[633px]"
              data-node-id="10:224"
              data-name="101"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  alt=""
                  width={2400}
                  height={2400}
                  unoptimized
                  className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                  src={FIGMA_ASSETS.img101}
                />
              </div>
            </div>
            <div
              className="absolute h-[563px] left-[640px] mix-blend-lighten opacity-70 top-[26px] w-[633px]"
              data-node-id="10:223"
              data-name="10"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  alt=""
                  width={2400}
                  height={2400}
                  unoptimized
                  className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full"
                  src={FIGMA_ASSETS.img101}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute z-10 h-0 left-[99px] top-[497.76px] w-[1241px]"
            data-node-id="10:238"
            data-name="Footer Bottom"
          >
            <div className="absolute inset-[0_0_-1px_0]">
              <Image
                alt=""
                width={2400}
                height={2400}
                unoptimized
                className="block max-w-none size-full"
                src={FIGMA_ASSETS.imgFooterBottom}
              />
            </div>
          </div>
          <div className="absolute z-10 h-0 left-0 top-[1.24px] w-[1440px]" data-node-id="10:240">
            <div className="absolute inset-[-1px_0_0_0]">
              <Image
                alt=""
                width={2400}
                height={2400}
                unoptimized
                className="block max-w-none size-full"
                src={FIGMA_ASSETS.imgLine135}
              />
            </div>
          </div>
          <div
            className="absolute contents left-[99px] top-[116px]"
            data-node-id="10:241"
            data-name="Footer Middle"
          >
            <div
              className="absolute z-10 content-stretch flex gap-[94px] items-start left-[99px] top-[116px] w-[660.376px]"
              data-node-id="10:242"
            >
              <div
                className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[114.275px]"
                data-node-id="10:243"
                data-name="Footer Column"
              >
                <p
                  className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
                  data-node-id="10:244"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  Company
                </p>
                <div
                  className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
                  data-node-id="10:245"
                  data-name="Footer Links"
                >
                  <Link
                    href="/about-us"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:246"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:247"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:249"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        About
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/team"
                    className="content-stretch flex gap-[6px] items-center relative shrink-0"
                    data-node-id="10:251"
                    data-name="Master Link"
                  >
                    <p
                      className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                      data-node-id="10:253"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      Team
                    </p>
                  </Link>
                  <Link
                    href="/contact"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:255"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:256"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:258"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Contact us
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:260"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:261"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:263"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Portfolio
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/services"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:265"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:266"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:268"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Services
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/blog"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:270"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:271"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:273"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Blog
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[130.078px]"
                data-node-id="10:275"
                data-name="Footer Column"
              >
                <p
                  className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
                  data-node-id="10:276"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  Services
                </p>
                <div
                  className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
                  data-node-id="10:277"
                  data-name="Footer Links"
                >
                  <Link
                    href="/services/website-development"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:278"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:279"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:281"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Website
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/services/mobile-app-development"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:283"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:284"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:286"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Mobile App
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/services/crm-systems"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:288"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:289"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:291"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        CRM Systems
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/services/saas-development"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:293"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:294"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:296"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        SAAS Platforms
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/services/ai-product-development"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:298"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:299"
                      data-name="Master Link"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:301"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        AI integration
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/services"
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:303"
                  >
                    <p
                      className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      All
                    </p>
                  </Link>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[244px]"
                data-node-id="10:304"
                data-name="Footer Column"
              >
                <p
                  className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
                  data-node-id="10:305"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  Contact
                </p>
                <div
                  className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
                  data-node-id="10:306"
                  data-name="Footer Links"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0"
                    data-node-id="10:307"
                    data-name="Link"
                  >
                    <div
                      className="content-stretch flex gap-[6px] items-center relative shrink-0"
                      data-node-id="10:308"
                      data-name="Master Link"
                    >
                      <div
                        className="h-[18px] relative shrink-0 w-[14px]"
                        data-node-id="10:310"
                        data-name="Vector"
                      >
                        <Image
                          alt=""
                          width={32}
                          height={32}
                          unoptimized
                          className="absolute block inset-0 max-w-none size-full"
                          src={FIGMA_ASSETS.imgVector}
                        />
                      </div>
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
                        data-node-id="10:311"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        108/10 Andranik Zoravar St.
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[9px] items-center relative shrink-0"
                    data-node-id="10:313"
                  >
                    <div
                      className="h-[15px] relative shrink-0 w-[20px]"
                      data-node-id="10:314"
                      data-name="Vector"
                    >
                      <Image
                        alt=""
                        width={32}
                        height={32}
                        unoptimized
                        className="absolute block inset-0 max-w-none size-full"
                        src={FIGMA_ASSETS.imgVector1}
                      />
                    </div>
                    <a
                      className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap"
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      data-node-id="10:315"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p
                        className="cursor-pointer font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] text-[18px]"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        info@neetrino.com
                      </p>
                    </a>
                  </div>
                  <div
                    className="content-stretch flex gap-[9px] items-center relative shrink-0"
                    data-node-id="10:316"
                  >
                    <div
                      className="relative shrink-0 size-[18px]"
                      data-node-id="10:317"
                      data-name="Vector"
                    >
                      <Image
                        alt=""
                        width={32}
                        height={32}
                        unoptimized
                        className="absolute block inset-0 max-w-none size-full"
                        src={FIGMA_ASSETS.imgVector2}
                      />
                    </div>
                    <a
                      className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap"
                      href={CONTACT_DETAILS.phoneTelHref}
                      data-node-id="10:318"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p
                        className="cursor-pointer leading-[18px] text-[16px]"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        +374 44 343 000
                      </p>
                    </a>
                  </div>
                  <div
                    className="content-stretch flex gap-[9px] items-start relative shrink-0"
                    data-node-id="10:319"
                  >
                    <div className="h-[21px] relative shrink-0 w-[21.5px]" data-node-id="10:320">
                      <Image
                        alt=""
                        width={32}
                        height={32}
                        unoptimized
                        className="absolute block inset-0 max-w-none size-full"
                        src={FIGMA_ASSETS.imgGroup2087329580}
                      />
                    </div>
                    <p
                      className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white whitespace-pre"
                      data-node-id="10:323"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {`Working Hours\u00a0`}
                      <br aria-hidden="true" />
                      Mon. - Fri. 10AM - 7PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute z-10 content-stretch flex flex-col items-start left-[912.88px] top-[116.02px] w-[426.122px]"
              data-node-id="10:324"
              data-name="Footer Column"
            >
              <div
                className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[436px]"
                data-node-id="10:325"
                data-name="24px"
              >
                <div
                  className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0"
                  data-node-id="10:326"
                >
                  <p
                    className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#eee3e3] text-[20px] whitespace-nowrap"
                    data-node-id="10:327"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    Massage us
                  </p>
                  <p
                    className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#dcd5d5] text-[18px] w-[358.364px]"
                    data-node-id="10:328"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >{`Step into the digital world with just one touch—powered by Neetrino.\u00a0`}</p>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-[426px]"
                  data-node-id="10:329"
                  data-name="16px"
                >
                  <div
                    className="h-[68px] relative shrink-0 w-full"
                    data-node-id="10:330"
                    data-name="Input Text"
                  >
                    <div
                      className="absolute bg-white border border-[#d9dbe9] border-solid inset-0 rounded-[108px] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]"
                      data-node-id="10:332"
                      data-name="Input"
                    />
                    <div
                      className="absolute content-stretch flex gap-[8px] items-center left-[23px] top-[25px]"
                      data-node-id="10:339"
                      data-name="Input Left"
                    >
                      <p
                        className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#dcd5d5] text-[16px] whitespace-nowrap"
                        data-node-id="10:341"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Enter your massege
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block cursor-pointer h-[56px] relative rounded-[35px] shrink-0 w-[120px]"
                  data-node-id="10:342"
                  data-name="Send Button"
                >
                  <div
                    className="absolute bg-[#4a3aff] inset-0 rounded-[35px]"
                    data-node-id="I10:342;2:6"
                  />
                  <div
                    className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[28.57%_50.83%_28.57%_15%] justify-center leading-[0] not-italic text-[16px] text-left text-white whitespace-nowrap"
                    data-node-id="I10:342;2:7"
                  >
                    <p className="leading-[24px]">Send</p>
                  </div>
                  <div
                    className="absolute left-[71px] size-[42px] top-[7px]"
                    data-node-id="I10:342;2:8"
                  >
                    <Image
                      alt=""
                      width={84}
                      height={84}
                      unoptimized
                      className="absolute block inset-0 max-w-none size-full"
                      src={FIGMA_ASSETS.imgGroup221}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="absolute z-10 content-stretch flex gap-[22px] items-center justify-center left-[1075px] top-[527px]"
            data-node-id="10:343"
            data-name="Social Media Container"
          >
            <a
              href={SOCIAL_ICON_HREFS[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[19px] shrink-0 w-[11px]"
              aria-label="Facebook"
            >
              <span className="pointer-events-none relative block size-full">
                <Image
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="absolute block inset-0 max-w-none size-full"
                  src={FIGMA_ASSETS.imgSocialMediaIconSquareFacebook}
                />
              </span>
            </a>
            <a
              href={SOCIAL_ICON_HREFS[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block shrink-0 size-[19px]"
              aria-label="Instagram"
            >
              <span className="pointer-events-none relative block size-full">
                <Image
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="absolute block inset-0 max-w-none size-full"
                  src={FIGMA_ASSETS.imgSocialMediaIconSquareInstagram}
                />
              </span>
            </a>
            <a
              href={SOCIAL_ICON_HREFS[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[18px] shrink-0 w-[19px]"
              aria-label="LinkedIn"
            >
              <span className="pointer-events-none relative block size-full">
                <div className="absolute inset-[4.58%_0.79%_0.19%_4.47%]" data-node-id="10:355">
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="absolute block inset-0 max-w-none size-full"
                    src={FIGMA_ASSETS.imgGroup73}
                  />
                </div>
              </span>
            </a>
            <a
              href={SOCIAL_ICON_HREFS[3]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[15px] shrink-0 w-[24px]"
              aria-label="Behance"
            >
              <span className="pointer-events-none relative block size-full">
                <Image
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="absolute block inset-0 max-w-none size-full"
                  src={FIGMA_ASSETS.imgGroup}
                />
              </span>
            </a>
            <a
              href={SOCIAL_ICON_HREFS[4]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[15px] shrink-0 w-[21px]"
              aria-label="YouTube"
            >
              <span className="pointer-events-none relative block size-full">
                <div className="absolute inset-[2.64%_1.19%_4.05%_4.52%]" data-node-id="10:361">
                  <Image
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="absolute block inset-0 max-w-none size-full"
                    src={FIGMA_ASSETS.imgGroup74}
                  />
                </div>
              </span>
            </a>
            <a
              href={SOCIAL_ICON_HREFS[5]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block shrink-0 size-[20px]"
              aria-label="WhatsApp"
            >
              <span className="pointer-events-none relative block size-full">
                <Image
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="absolute block inset-0 max-w-none size-full"
                  src={FIGMA_ASSETS.imgVector3}
                />
              </span>
            </a>
            <a
              href={SOCIAL_ICON_HREFS[6]}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[20.472px] shrink-0 w-[18.796px]"
              aria-label="Telegram"
            >
              <span className="pointer-events-none relative block size-full">
                <Image
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="absolute block inset-0 max-w-none size-full"
                  src={FIGMA_ASSETS.imgVector4}
                />
              </span>
            </a>
          </div>
          <p
            className="absolute z-10 font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] left-[110px] text-[#dcd5d5] text-[18px] top-[536.01px] whitespace-nowrap"
            data-node-id="10:366"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Copyright © 2017 - 2026 Neetrino IT Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
