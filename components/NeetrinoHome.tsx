'use client';

import Image from 'next/image';
import Link from 'next/link';

const FIGMA_ASSETS = {
  imgPc: 'https://www.figma.com/api/mcp/asset/a959cebf-9659-4aad-8436-2b08cce48288',
  imgSafearea: 'https://www.figma.com/api/mcp/asset/e0371b9e-b246-4314-ac88-c931348cd579',
  imgChangeColor1: 'https://www.figma.com/api/mcp/asset/72bb6cdd-a23b-4da2-a6c7-c52a0f213bd7',
  imgChangeColor: 'https://www.figma.com/api/mcp/asset/9e1c0d17-b59d-488d-990d-f3527e276dff',
  imgSafearea1: 'https://www.figma.com/api/mcp/asset/6361c98e-56a0-43a5-8c3a-738971ece332',
  imgEllipse3463: 'https://www.figma.com/api/mcp/asset/5b0a9809-f25e-4420-94b4-8d52f4280c02',
  imgAnimation: 'https://www.figma.com/api/mcp/asset/27d34bf0-3315-40f4-8784-68e1ce8ec6c6',
  imgDelete: 'https://www.figma.com/api/mcp/asset/11bc4a77-b8a7-49f4-879d-74437e4b3b3c',
  imgBody: 'https://www.figma.com/api/mcp/asset/f3708293-7162-4f76-89a5-d63b4b281c22',
  imgScreen: 'https://www.figma.com/api/mcp/asset/5f09e772-df2a-43a5-a1aa-d10d6652a528',
  imgSpaceGray1: 'https://www.figma.com/api/mcp/asset/0017581d-e29f-4a05-81ad-ccead1a448bb',
  imgAppleIMac27201911: 'https://www.figma.com/api/mcp/asset/f6addbeb-6ecb-4dbf-9fa6-3ea06ded67f1',
  imgIPhone14Pro1: 'https://www.figma.com/api/mcp/asset/b7910c93-a07c-4c27-a9b4-aff78b870df9',
  imgNeetrinoItComapny2Png1: 'https://www.figma.com/api/mcp/asset/d2649d9c-c094-42a6-bf40-bcf6f824a51d',
  imgGroup70642: 'https://www.figma.com/api/mcp/asset/4a556455-c353-4d65-bd75-d9036716686c',
  imgVector: 'https://www.figma.com/api/mcp/asset/e0ed9f9f-1d4d-4625-b46f-b974ad46ae6a',
  imgGroup70643: 'https://www.figma.com/api/mcp/asset/0865d53f-6e78-4bdf-97cd-a71b18f431cc',
  imgVector1: 'https://www.figma.com/api/mcp/asset/f4f7d792-bfb2-4323-bbcc-29d4c1829179',
  imgPhilippHubertDVVjhUcdb30Unsplash1: 'https://www.figma.com/api/mcp/asset/62b9fa74-22e0-4457-865e-43c6218500b5',
  imgEricaAnderson1: 'https://www.figma.com/api/mcp/asset/64738b5b-84dc-4cc4-a77f-049e3df52d77',
  img30: 'https://www.figma.com/api/mcp/asset/4e1596f7-d4cd-49d3-bb93-922d629919db',
  img1: 'https://www.figma.com/api/mcp/asset/e13d4cdd-fff7-4529-b579-81b60d56576b',
  imgStanislavHristov3: 'https://www.figma.com/api/mcp/asset/7b7b391f-6dd1-4383-bb7b-84682d2ef6ef',
  imgUiDesign21: 'https://www.figma.com/api/mcp/asset/b281255c-1686-47f8-b45d-f6d1a7738309',
  img2661: 'https://www.figma.com/api/mcp/asset/71e356ef-206c-46d7-8d9e-f2dc83b5109c',
  img10: 'https://www.figma.com/api/mcp/asset/875f15fe-ca06-476f-8777-0bc66f370884',
  imgBiotechLogo1: 'https://www.figma.com/api/mcp/asset/985fcf17-bf5b-4d96-bed7-0196094e086d',
  imgKleverKleverIoInstagramPhotosAndVideos3: 'https://www.figma.com/api/mcp/asset/a8fa8533-aca9-4bd4-b860-799a1de049bf',
  imgSports00065: 'https://www.figma.com/api/mcp/asset/947e5fe9-4733-42c1-8a2e-c38828426bc5',
  imgCloudInfrastructure: 'https://www.figma.com/api/mcp/asset/5bf855cf-5501-4e0b-8460-38f836f731e1',
  imgPc1: 'https://www.figma.com/api/mcp/asset/95e2ad4d-d270-4e1e-9654-be3e4b1ad25a',
  img2761: 'https://www.figma.com/api/mcp/asset/d3d4f3fe-88af-450a-9f34-b0eafda48c0b',
  img28A: 'https://www.figma.com/api/mcp/asset/49fa0ab1-c840-4886-a3d7-979b0620f127',
  imgVector2: 'https://www.figma.com/api/mcp/asset/cbf9401e-6dd0-4522-a66a-96afa82c23cf',
  imgRectangle17399: 'https://www.figma.com/api/mcp/asset/d7cd6cb1-90c9-4884-98a1-1b4fff1226ae',
  imgRectangle17417: 'https://www.figma.com/api/mcp/asset/351393fa-9dd7-4bcd-97d0-63208297798b',
  imgRectangle17416: 'https://www.figma.com/api/mcp/asset/190e87f9-253f-45ef-b537-b617cdb36f88',
  imgRectangle17411: 'https://www.figma.com/api/mcp/asset/be3c813c-b40b-4ffb-b30b-ba87ba8e9eb7',
  imgRectangle17414: 'https://www.figma.com/api/mcp/asset/c3dabce6-6b46-49e6-adc2-8289099cafa5',
  imgRectangle17415: 'https://www.figma.com/api/mcp/asset/94c3751d-ed21-4c26-814d-342edf633d4a',
  imgFooterBottom: 'https://www.figma.com/api/mcp/asset/5a02698a-fedb-40f9-87c2-379e36289ead',
  imgLine135: 'https://www.figma.com/api/mcp/asset/fbaf876e-186b-489f-bc80-5f5f10e909d7',
  imgVector3: 'https://www.figma.com/api/mcp/asset/dbdae798-b584-4ba1-b33a-6a99ac73e39d',
  imgVector4: 'https://www.figma.com/api/mcp/asset/e2130ed6-5178-4d66-8dbb-a33d69b7e6fb',
  imgVector5: 'https://www.figma.com/api/mcp/asset/f3f97003-45fb-4000-8286-40676ecab22c',
  imgGroup2087329580: 'https://www.figma.com/api/mcp/asset/6fe7c352-a4ff-43a1-8b71-c6df9a65ed42',
  imgGroup221: 'https://www.figma.com/api/mcp/asset/8550ef13-7d9d-49cf-808b-6a54c1c86d4b',
  imgSocialMediaIconSquareFacebook: 'https://www.figma.com/api/mcp/asset/7c18663d-e3b0-4248-b6dd-2767f1b4cc1e',
  imgSocialMediaIconSquareInstagram: 'https://www.figma.com/api/mcp/asset/fb3b1d84-4578-4d94-a397-b95e521b0d03',
  imgGroup73: 'https://www.figma.com/api/mcp/asset/0a953fcf-23ff-41a8-9b71-ceb94a55a60b',
  imgGroup: 'https://www.figma.com/api/mcp/asset/42f7147c-49cd-48df-802e-eccab10bbfcb',
  imgGroup74: 'https://www.figma.com/api/mcp/asset/d0dda587-901d-4b2d-9d2d-d8a729eb7cc1',
  imgVector6: 'https://www.figma.com/api/mcp/asset/a245a9a7-1793-4675-a677-20ddc0f05fb9',
  imgVector7: 'https://www.figma.com/api/mcp/asset/b5409301-8917-4d7d-8b7d-1c9ec802c8ca',
  imgVector8: 'https://www.figma.com/api/mcp/asset/37f3f341-82a7-4deb-a010-f87849996833',
  imgLayer1: 'https://www.figma.com/api/mcp/asset/17d1ed99-ce9c-42e5-a0cd-8b9085cf75f7',
  imgLayer2: 'https://www.figma.com/api/mcp/asset/5097fa55-1491-46a4-8773-03af93de3ba9',
  imgLayer3: 'https://www.figma.com/api/mcp/asset/bad0fdda-bd5f-48fd-8bfc-679c0573bf4e',
  imgLayer4: 'https://www.figma.com/api/mcp/asset/d0ab1781-2d66-4bee-9294-e98ad1c62d82',
  imgVector9: 'https://www.figma.com/api/mcp/asset/55d71867-53c2-4381-8909-2135199b20c7',
  imgLayer5: 'https://www.figma.com/api/mcp/asset/e7dfad2d-9713-42e8-a94f-58efe590c07c',
  imgLayer6: 'https://www.figma.com/api/mcp/asset/bac8f51c-6725-40af-9a0a-29b39a19aa24',
  imgEllipse3459: 'https://www.figma.com/api/mcp/asset/b4f67cf5-2bee-4b09-bc67-35a2f498d5ac',
} as const;

const imgPc = FIGMA_ASSETS.imgPc;
const imgSafearea = FIGMA_ASSETS.imgSafearea;
const imgChangeColor1 = FIGMA_ASSETS.imgChangeColor1;
const imgChangeColor = FIGMA_ASSETS.imgChangeColor;
const imgSafearea1 = FIGMA_ASSETS.imgSafearea1;
const imgEllipse3463 = FIGMA_ASSETS.imgEllipse3463;
const imgAnimation = FIGMA_ASSETS.imgAnimation;
const imgDelete = FIGMA_ASSETS.imgDelete;
const imgBody = FIGMA_ASSETS.imgBody;
const imgScreen = FIGMA_ASSETS.imgScreen;
const imgSpaceGray1 = FIGMA_ASSETS.imgSpaceGray1;
const imgAppleIMac27201911 = FIGMA_ASSETS.imgAppleIMac27201911;
const imgIPhone14Pro1 = FIGMA_ASSETS.imgIPhone14Pro1;
const imgNeetrinoItComapny2Png1 = FIGMA_ASSETS.imgNeetrinoItComapny2Png1;
const imgVector = FIGMA_ASSETS.imgVector;
const imgPhilippHubertDVVjhUcdb30Unsplash1 = FIGMA_ASSETS.imgPhilippHubertDVVjhUcdb30Unsplash1;
const imgEricaAnderson1 = FIGMA_ASSETS.imgEricaAnderson1;
const img30 = FIGMA_ASSETS.img30;
const img1 = FIGMA_ASSETS.img1;
const imgStanislavHristov3 = FIGMA_ASSETS.imgStanislavHristov3;
const imgUiDesign21 = FIGMA_ASSETS.imgUiDesign21;
const img2661 = FIGMA_ASSETS.img2661;
const img10 = FIGMA_ASSETS.img10;
const imgBiotechLogo1 = FIGMA_ASSETS.imgBiotechLogo1;
const imgKleverKleverIoInstagramPhotosAndVideos3 = FIGMA_ASSETS.imgKleverKleverIoInstagramPhotosAndVideos3;
const imgSports00065 = FIGMA_ASSETS.imgSports00065;
const imgCloudInfrastructure = FIGMA_ASSETS.imgCloudInfrastructure;
const imgPc1 = FIGMA_ASSETS.imgPc1;
const img2761 = FIGMA_ASSETS.img2761;
const img28A = FIGMA_ASSETS.img28A;
const imgVector2 = FIGMA_ASSETS.imgVector2;
const imgRectangle17399 = FIGMA_ASSETS.imgRectangle17399;
const imgRectangle17417 = FIGMA_ASSETS.imgRectangle17417;
const imgRectangle17416 = FIGMA_ASSETS.imgRectangle17416;
const imgRectangle17411 = FIGMA_ASSETS.imgRectangle17411;
const imgRectangle17414 = FIGMA_ASSETS.imgRectangle17414;
const imgRectangle17415 = FIGMA_ASSETS.imgRectangle17415;
const imgFooterBottom = FIGMA_ASSETS.imgFooterBottom;
const imgLine135 = FIGMA_ASSETS.imgLine135;
const imgVector3 = FIGMA_ASSETS.imgVector3;
const imgVector4 = FIGMA_ASSETS.imgVector4;
const imgVector5 = FIGMA_ASSETS.imgVector5;
const imgGroup2087329580 = FIGMA_ASSETS.imgGroup2087329580;
const imgGroup221 = FIGMA_ASSETS.imgGroup221;
const imgSocialMediaIconSquareFacebook = FIGMA_ASSETS.imgSocialMediaIconSquareFacebook;
const imgSocialMediaIconSquareInstagram = FIGMA_ASSETS.imgSocialMediaIconSquareInstagram;
const imgGroup73 = FIGMA_ASSETS.imgGroup73;
const imgGroup = FIGMA_ASSETS.imgGroup;
const imgGroup74 = FIGMA_ASSETS.imgGroup74;
const imgVector6 = FIGMA_ASSETS.imgVector6;
const imgVector7 = FIGMA_ASSETS.imgVector7;
const imgVector8 = FIGMA_ASSETS.imgVector8;
const imgLayer1 = FIGMA_ASSETS.imgLayer1;
const imgLayer2 = FIGMA_ASSETS.imgLayer2;
const imgLayer3 = FIGMA_ASSETS.imgLayer3;
const imgLayer4 = FIGMA_ASSETS.imgLayer4;
const imgVector9 = FIGMA_ASSETS.imgVector9;
const imgLayer5 = FIGMA_ASSETS.imgLayer5;
const imgLayer6 = FIGMA_ASSETS.imgLayer6;
const imgEllipse3459 = FIGMA_ASSETS.imgEllipse3459;

type Group1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Group1({ className, property1 = "Default" }: Group1Props) {
  return (
    <div className={className || "h-[553px] relative w-[258px]"} data-node-id="1:707">
      <div className="absolute contents inset-0" data-node-id="1:708">
        <div className="absolute bg-[#e8e8f4] inset-0 rounded-[19px]" data-node-id="1:709" />
        <div className="absolute inset-[31.1%_4.65%_30.92%_4.65%]" data-name="PC" data-node-id="1:710">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[177.11%] left-[-29%] max-w-none top-[-38.55%] w-[158%]" src={imgPc} />
          </div>
        </div>
        <div className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight inset-[78.84%_11.24%_16.64%_11.24%] justify-center leading-[0] not-italic text-[#1f2123] text-[20px] text-right whitespace-nowrap" data-node-id="1:711">
          <p className="leading-[25px]">Custom Development</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[9.58%_30.62%_84.09%_30.62%] justify-center leading-[0] not-italic text-[22px] text-black whitespace-nowrap" data-node-id="1:712">
          <p className="leading-[35px]">WEBSITE</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[4px] inset-[86.62%_20.54%_3.25%_20.93%] items-center overflow-clip px-[24px] py-[16px] rounded-[40px]" data-name="Button 12" data-node-id="1:713">
        <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I1:713;13:52" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="I1:713;13:33">
          Continue
        </p>
        <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I1:713;13:44" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I1:713;13:34">
          <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I1:713;13:34;21:1594">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
          </div>
        </div>
      </div>
    </div>
  );
}
type GroupProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Group({ className, property1 = "Default" }: GroupProps) {
  return (
    <div className={className || "h-[276px] relative w-[642px]"} data-node-id="1:140">
      <div className="absolute inset-[-105.8%_-69%] opacity-0" data-name="光斑 flare" data-node-id="1:141">
        <div className="absolute contents inset-0" data-name="glow" data-node-id="1:143">
          <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="改变颜色 change color" data-node-id="1:145" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1528 860\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.1295e-15 -43 76.4 2.3112e-13 764 430)\\'><stop stop-color=\\'rgba(211,255,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(164,235,248,1)\\' offset=\\'0.026042\\'/><stop stop-color=\\'rgba(116,214,249,1)\\' offset=\\'0.052083\\'/><stop stop-color=\\'rgba(68,194,249,1)\\' offset=\\'0.078125\\'/><stop stop-color=\\'rgba(45,184,249,1)\\' offset=\\'0.091146\\'/><stop stop-color=\\'rgba(21,173,250,1)\\' offset=\\'0.10417\\'/><stop stop-color=\\'rgba(11,138,227,1)\\' offset=\\'0.29688\\'/><stop stop-color=\\'rgba(1,102,204,1)\\' offset=\\'0.48958\\'/><stop stop-color=\\'rgba(1,81,165,1)\\' offset=\\'0.61719\\'/><stop stop-color=\\'rgba(1,60,125,1)\\' offset=\\'0.74479\\'/><stop stop-color=\\'rgba(2,38,86,1)\\' offset=\\'0.8724\\'/><stop stop-color=\\'rgba(2,17,47,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgChangeColor}'), url('${imgChangeColor1}')` }} />
        </div>
      </div>
      <div className="absolute border border-[#6a92ff] border-solid inset-[39.86%_39.72%_39.86%_39.41%] overflow-clip rounded-[40px]" data-name="Button 2" data-node-id="1:146">
        <div className="absolute bg-black inset-[-1px] opacity-0 rounded-[40px]" data-name="shadow" data-node-id="1:147" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[56px] left-1/2 rounded-[40px] top-1/2 w-[134px]" data-name="background" data-node-id="1:148" />
        <p className="absolute font-[family-name:var(--font-dm-sans)] font-medium leading-[24px] left-[23px] text-[18px] text-white top-[15px] whitespace-nowrap" data-node-id="1:149" style={{ fontVariationSettings: "'opsz' 14" }}>
          Explore
        </p>
        <div className="absolute left-[89px] overflow-clip size-[20px] top-[17px]" data-name="Right" data-node-id="1:150">
          <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I1:150;21:1594">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea1} />
          </div>
        </div>
        <div className="absolute h-[31px] left-[22px] top-[39px] w-[88px]" data-node-id="1:151">
          <div className="absolute inset-[-45.16%_-15.91%]">
            <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgEllipse3463} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MacBookPro({ className }: { className?: string }) {
  return (
    <div className={className || "h-[330px] relative w-[546px]"} data-name="MacBook Pro 14" data-node-id="76:534">
      <div className="absolute contents inset-0" data-name="MacBook contents" data-node-id="76:535">
        <div className="absolute contents inset-[93.26%_0_0_0]" data-name="Body" data-node-id="76:536">
          <div className="absolute inset-[93.26%_0_0_0] overflow-clip" data-name="Body" data-node-id="76:537">
            <div className="absolute inset-[-44.96%_-0.6%_-1.53%_-1.05%]">
              <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgBody} />
            </div>
          </div>
        </div>
        <div className="absolute inset-[0_8.84%_6.74%_8.88%]" data-name="Screen" data-node-id="76:565">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgScreen} />
        </div>
      </div>
      <div className="absolute contents left-[55.95px] top-[17px]" data-name="🟢 Design" data-node-id="48:498">
        <div className="absolute contents left-[55.95px] top-[17px]" data-name="Design" data-node-id="48:500">
          <div className="absolute h-[277.881px] left-[55.95px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[435.864px_276px] overflow-clip top-[17px] w-[435.864px]" data-name="Animation" data-node-id="48:501" style={{ maskImage: `url('${imgAnimation}')` }}>
            <div className="absolute bg-white inset-[0.25%_0_-603.98%_0] overflow-clip" data-node-id="I48:501;1107:319">
              <div className="absolute inset-[0_-0.08%_0_0]" data-name="DELETE" data-node-id="I48:501;1107:319;1107:304">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type FrameProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4";
};

function Frame({ className, property1 = "Default" }: FrameProps) {
  return (
    <div className={className || "h-[905px] relative w-[1609px]"} data-node-id="90:380">
      <div className="-translate-x-1/2 absolute flex h-[239px] items-center justify-center left-[calc(50%+2.5px)] top-[64px] w-[332px]">
        <div className="flex-none rotate-90">
          <div className="h-[332px] relative w-[239px]" data-name="Space Gray 1" data-node-id="83:184">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSpaceGray1} />
          </div>
        </div>
      </div>
      <div className="absolute h-[270px] left-[1098px] top-[269px] w-[326px]" data-name="Apple iMac 27_ (2019) (1) 1" data-node-id="83:181">
        <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppleIMac27201911} />
      </div>
      <div className="absolute h-[252px] left-[279px] top-[285px] w-[124px]" data-name="iPhone 14 Pro 1" data-node-id="83:182">
        <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone14Pro1} />
      </div>
      <MacBookPro className="-translate-x-1/2 absolute h-[330px] left-[calc(50%+0.5px)] top-[392px] w-[546px]" />
      <button className="absolute bg-white content-stretch cursor-pointer flex gap-[4px] items-center left-[821px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[811px]" data-name="Button 14" data-node-id="90:366">
        <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:366;13:52" />
        <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:366;13:44" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I90:366;13:34">
          <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I90:366;13:34;21:1594">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
          </div>
        </div>
      </button>
      <div className="absolute flex items-center justify-center left-[725px] top-[811px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <button className="bg-white content-stretch cursor-pointer flex gap-[4px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[40px]" data-name="Button 15" data-node-id="90:373">
            <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:373;13:52" />
            <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:373;13:44" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I90:373;13:34">
              <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I90:373;13:34;21:1594">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
type Group2Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Group2({ className, property1 = "Default" }: Group2Props) {
  return (
    <div className={className || "h-[276px] relative w-[642px]"} data-node-id="19:364">
      <div className="absolute inset-[-105.8%_-69%] opacity-0" data-name="光斑 flare" data-node-id="19:365">
        <div className="absolute contents inset-0" data-name="glow" data-node-id="19:367">
          <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px]" data-name="改变颜色 change color" data-node-id="19:369" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1528 860\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.1295e-15 -43 76.4 2.3112e-13 764 430)\\'><stop stop-color=\\'rgba(211,255,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(164,235,248,1)\\' offset=\\'0.026042\\'/><stop stop-color=\\'rgba(116,214,249,1)\\' offset=\\'0.052083\\'/><stop stop-color=\\'rgba(68,194,249,1)\\' offset=\\'0.078125\\'/><stop stop-color=\\'rgba(45,184,249,1)\\' offset=\\'0.091146\\'/><stop stop-color=\\'rgba(21,173,250,1)\\' offset=\\'0.10417\\'/><stop stop-color=\\'rgba(11,138,227,1)\\' offset=\\'0.29688\\'/><stop stop-color=\\'rgba(1,102,204,1)\\' offset=\\'0.48958\\'/><stop stop-color=\\'rgba(1,81,165,1)\\' offset=\\'0.61719\\'/><stop stop-color=\\'rgba(1,60,125,1)\\' offset=\\'0.74479\\'/><stop stop-color=\\'rgba(2,38,86,1)\\' offset=\\'0.8724\\'/><stop stop-color=\\'rgba(2,17,47,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgChangeColor}'), url('${imgChangeColor1}')` }} />
        </div>
      </div>
      <div className="absolute border border-[#6a92ff] border-solid inset-[39.86%_39.72%_39.86%_39.41%] overflow-clip rounded-[40px]" data-name="Button 2" data-node-id="19:370">
        <div className="absolute bg-black inset-[-1px] opacity-0 rounded-[40px]" data-name="shadow" data-node-id="19:371" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[56px] left-1/2 rounded-[40px] top-1/2 w-[134px]" data-name="background" data-node-id="19:372" />
        <p className="absolute font-[family-name:var(--font-dm-sans)] font-medium leading-[24px] left-[23px] text-[18px] text-white top-[15px] whitespace-nowrap" data-node-id="19:373" style={{ fontVariationSettings: "'opsz' 14" }}>
          Explore
        </p>
        <div className="absolute left-[89px] overflow-clip size-[20px] top-[17px]" data-name="Right" data-node-id="19:374">
          <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I19:374;21:1594">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea1} />
          </div>
        </div>
        <div className="absolute h-[31px] left-[22px] top-[39px] w-[88px]" data-node-id="19:375">
          <div className="absolute inset-[-45.16%_-15.91%]">
            <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgEllipse3463} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Awwwards({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.21)] h-[64px] relative rounded-[72px] w-[1240px]"} data-name="Awwwards" data-node-id="10:442">
      <div className="-translate-x-1/2 absolute bg-[rgba(40,43,103,0.38)] h-[48px] left-[calc(50%-70px)] rounded-[28px] top-[8px] w-[798px]" data-name="Link [button]" data-node-id="10:443">
        <div className="-translate-x-1/2 absolute content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[41px] items-center leading-[0] left-1/2 not-italic text-[16px] text-white top-[16px] whitespace-nowrap" data-node-id="10:444">
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="10:445">
            <p className="leading-[15.6px]">Home</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="10:446">
            <p className="leading-[15.6px]">Services</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="10:447">
            <p className="leading-[15.6px]">Portfolio</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="10:448">
            <p className="leading-[15.6px]">Story</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="10:449">
            <p className="leading-[15.6px]">Blog</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="10:450">
            <p className="leading-[15.6px]">Contact</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#473dff] h-[48px] left-[986px] rounded-[28px] top-[8px] w-[144px]" data-name="Link [button]" data-node-id="10:451">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[25px] not-italic text-[16px] text-white top-[24px] whitespace-nowrap" data-node-id="10:452">
          <p className="leading-[15.6px]">Get a Quote</p>
        </div>
      </div>
      <div className="absolute h-[37px] left-[20px] top-[13px] w-[130px]" data-name="Neetrino-it-comapny-(2)png 1" data-node-id="10:453">
        <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeetrinoItComapny2Png1} />
      </div>
      <div className="absolute bg-white left-[1141px] rounded-full size-[48px] top-[8px]" data-node-id="10:454">
        <div className="absolute left-[11px] size-[25px] top-[11px]" data-name="Vector" data-node-id="10:456">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

export function NeetrinoHome() {
  return (
    <div className="relative w-full min-h-full min-w-0 bg-[#151515]" data-name="HOME" data-node-id="10:219">
      <div className="-translate-x-1/2 absolute flex h-[4462px] items-center justify-center left-1/2 mix-blend-overlay top-[633px] w-[1722px]">
        <div className="flex-none rotate-90">
          <div className="h-[1722px] relative w-[4462px]" data-name="Vector" data-node-id="10:225">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector2} />
          </div>
        </div>
      </div>
      <div className="absolute h-[1149px] left-0 top-0 w-[1440px]" data-node-id="10:421">
        <div className="absolute flex h-[844px] items-center justify-center left-0 top-0 w-[1440px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[844px] relative w-[1440px]" data-name="philipp-hubert-dVVjhUcdb30-unsplash 1" data-node-id="10:422">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[130.92%] left-[-15.08%] max-w-none top-0 w-[115.09%]" src={imgPhilippHubertDVVjhUcdb30Unsplash1} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(50%-256px)] mix-blend-lighten size-[824px] top-[83px]">
          <div className="flex-none rotate-90">
            <div className="relative size-[824px]" data-name="Erica Anderson 1" data-node-id="10:232">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover opacity-60 pointer-events-none size-full" src={imgEricaAnderson1} />
            </div>
          </div>
        </div>
        <div
          className="absolute left-[8.4%] top-[18.9%] h-[15.7%] w-auto max-w-[min(82.4%,calc(100%-10%))]"
          data-node-id="10:424"
        >
          <img
            src="/NEETRINO.svg"
            alt="NEETRINO"
            className="block h-full w-auto"
          />
        </div>
        <div className="-translate-x-1/2 absolute h-[975px] left-[calc(50%+0.5px)] top-[45px] w-[629px]" data-name="30" data-node-id="10:425">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[166.65%] left-[-22.58%] max-w-none top-[-44.39%] w-[145.15%]" src={img30} loading="eager" priority />
          </div>
        </div>
        <Awwwards className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.21)] h-[64px] left-1/2 rounded-[72px] top-[27px] w-[1240px]" />
        <div
          className="absolute left-0 top-[692px] w-[1440px] h-[457px] backdrop-blur-[14px] pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
          }}
        />
        <div className="-translate-x-1/2 absolute flex h-[457px] items-center justify-center left-1/2 top-[692px] w-[1440px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[457px] relative w-[1440px]" data-node-id="10:426">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgRectangle17399} />
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[3.5%] not-italic text-[24px] text-white top-[68%] w-[35.8%]" data-node-id="10:427">
          <p>
            <span className="leading-[35px]">{`We build `}</span>
            <span className="font-['Inter:Black',sans-serif] font-black leading-[35px] not-italic">high-performance websites</span>
            <span className="leading-[35px]">{` and digital solutions that help businesses grow, scale, and stand out online.`}</span>
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[17.2%] items-center leading-[0] left-[3.5%] top-[76.3%]" data-node-id="10:428">
          <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-node-id="10:429">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="BAN" data-node-id="10:430">
              <div className="bg-[#ff7500] col-1 h-[167px] ml-0 mt-0 rounded-[39px] row-1 w-[216px]" data-node-id="10:431" />
              <div className="col-1 flex flex-col font-['Inter:Black',sans-serif] font-black h-[41px] justify-center ml-[18px] mt-[36px] not-italic relative row-1 text-[56px] text-white w-[78px]" data-node-id="10:432">
                <p className="leading-[36px]">8+</p>
              </div>
              <div className="col-1 flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[25px] ml-[18px] mt-[86px] not-italic relative row-1 text-[#fffcfc] text-[20px] whitespace-nowrap" data-node-id="10:433">
                <p className="mb-0">Years of</p>
                <p>{`experience `}</p>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="BAN1" data-node-id="10:434">
              <div className="bg-white col-1 h-[167px] ml-0 mt-0 rounded-[39px] row-1 w-[216px]" data-node-id="10:435" />
              <div className="col-1 flex flex-col font-['Inter:Black',sans-serif] font-black h-[43px] justify-center ml-[26px] mt-[36px] not-italic relative row-1 text-[#0d266c] text-[56px] w-[122px]" data-node-id="10:436">
                <p className="leading-[36px]">97%</p>
              </div>
              <div className="col-1 flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center ml-[26px] mt-[99px] not-italic relative row-1 text-[#0d266c] text-[20px] text-right whitespace-nowrap" data-node-id="10:437">
                <p className="leading-[25px]">Satisfied clients</p>
              </div>
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="BAN2" data-node-id="10:438">
            <div className="bg-[#473dff] col-1 h-[167px] ml-0 mt-0 rounded-[39px] row-1 w-[517px]" data-node-id="10:439" />
            <div className="col-1 flex flex-col font-['Inter:Black',sans-serif] font-black justify-center ml-[44px] mt-[33px] not-italic relative row-1 text-[#fffcfc] text-[56px] whitespace-nowrap" data-node-id="10:440">
              <p className="leading-[36px]">450+</p>
            </div>
            <div className="col-1 flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center ml-[44px] mt-[87px] not-italic relative row-1 text-[#fffcfc] text-[20px] text-right whitespace-nowrap" data-node-id="10:441">
              <p className="leading-[25px]">Creations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[1306px] items-center justify-center left-[calc(50%+11px)] mix-blend-screen top-[3245px] w-[664px]">
        <div className="flex-none rotate-90">
          <div className="h-[664px] relative w-[1306px]" data-node-id="10:220">
            <div className="absolute inset-[-28.36%_-17.23%_-28.95%_-17.23%]">
              <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgRectangle17417} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[571px] left-[calc(50%-0.5px)] top-[3279px] w-[1439px]" data-name="WHO WE ARE" data-node-id="10:510">
        <div className="absolute content-stretch flex flex-col gap-[27px] items-start leading-[0] left-[64px] text-white top-[147px] w-[563px]" data-node-id="10:511">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 whitespace-nowrap" data-node-id="10:512">
            <div className="col-1 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center ml-[3px] mt-0 not-italic relative row-1 text-[16px]" data-node-id="10:513">
              <p className="leading-[35px]">BUILD WITH PURPOSE</p>
            </div>
            <div className="col-1 flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center ml-0 mt-[35px] relative row-1 text-[35px]" data-node-id="10:514">
              <p>
                <span className="leading-[35px]">{`WHO `}</span>
                <span className="leading-[35px] text-[#ff7500]">WE</span>
                <span className="leading-[35px]">{` ARE`}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light justify-center min-w-full not-italic relative shrink-0 text-[16px] w-[min-content]" data-node-id="10:515">
            <p className="mb-0">
              <span className="leading-[24px]">{`Over the past 8 years, `}</span>
              <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">Neetrino IT</span>
              <span className="leading-[24px]">{` has developed more than `}</span>
              <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic">400 online resources</span>
              <span className="leading-[24px]">, ranging from simple websites to large-scale internet portals and e-commerce platforms</span>
            </p>
            <p>
              <span className="leading-[24px]">We specialize in website development, AI and bot solutions, CRM system integration, mobile app development, as well as SEO and SMM optimization—</span>
              <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] not-italic">delivering a comprehensive digital presence for your business.</span>
            </p>
          </div>
        </div>
        <Group2 className="absolute h-[276px] left-[-179px] top-[358px] w-[642px]" />
        <div className="absolute h-[641px] left-[721px] mix-blend-exclusion top-[-34px] w-[685px]" data-name="* 1" data-node-id="10:516">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[103.85%] left-0 max-w-none top-0 w-full" src={img1} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[-102px] top-[2334px]" data-node-id="55:378">
        <div className="absolute h-[378px] left-[-102px] rounded-[43px] top-[2334px] w-[505px]" data-name="Stanislav Hristov 3" data-node-id="55:379">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43px] size-full" src={imgStanislavHristov3} />
        </div>
        <div className="absolute h-[378px] left-[411px] rounded-[45px] top-[2334px] w-[505px]" data-name="UI Design-2 1" data-node-id="55:380">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[45px]">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[104.76%] left-[-4.55%] max-w-none top-[-4.76%] w-[104.55%]" src={imgUiDesign21} />
          </div>
        </div>
      </div>
      <div className="absolute h-[383px] left-[933px] rounded-[35px] top-[2328px] w-[592px]" data-name="-266 1" data-node-id="55:382">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[35px]">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[154.19%] left-0 max-w-none top-[-40.85%] w-full" src={img2661} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] h-[2934px] left-1/2 top-[1463px] w-[88px]" data-node-id="55:391" />
      <div className="absolute flex h-[536px] items-center justify-center left-[-1150px] mix-blend-color top-[4372px] w-[604px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#473dff] h-[536px] w-[604px]" data-name="color" data-node-id="43:448" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[487px] left-[calc(50%+1.5px)] top-[4027px] w-[1437px]" data-node-id="10:221">
        <div className="absolute inset-[-41.48%_-15.66%_-41.98%_-15.66%]">
          <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgRectangle17416} />
        </div>
      </div>
      <div className="absolute contents left-[606px] top-[4086px]" data-node-id="10:222">
        <div className="absolute h-[563px] left-[606px] mix-blend-lighten opacity-70 top-[4089px] w-[633px]" data-name="10" data-node-id="10:223">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full" src={img10} />
          </div>
        </div>
        <div className="absolute h-[563px] left-[606px] opacity-70 top-[4086px] w-[633px]" data-name="101" data-node-id="10:224">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[200.1%] left-0 max-w-none top-[-68.6%] w-full" src={img10} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[236px] left-[calc(50%+1.5px)] top-[1277px] w-[1437px]" data-node-id="10:229">
        <div className="absolute inset-[-90.97%_-15.66%_-91.4%_-15.66%]">
          <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgRectangle17411} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[405px] left-[calc(50%+0.5px)] top-[2098px] w-[1437px]" data-node-id="10:230">
        <div className="absolute inset-[-50.95%_-15.66%_-51.42%_-15.66%]">
          <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgRectangle17414} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[664px] left-[calc(50%+0.5px)] top-[2712px] w-[1437px]" data-node-id="10:231">
        <div className="absolute inset-[-28.94%_-15.66%_-29.47%_-15.66%]">
          <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgRectangle17415} />
        </div>
      </div>
      <div className="absolute contents left-0 top-[4062px]" data-name="Footer v2" data-node-id="10:236">
        <div className="absolute h-[590px] left-0 overflow-clip top-[4062px] w-[1440px]" data-name="Footer v2" data-node-id="10:237">
          <div className="absolute h-0 left-[99px] top-[497.76px] w-[1241px]" data-name="Footer Bottom" data-node-id="10:238">
            <div className="absolute inset-[0_0_-1px_0]">
              <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgFooterBottom} />
            </div>
          </div>
          <div className="absolute h-0 left-0 top-[1.24px] w-[1440px]" data-node-id="10:240">
            <div className="absolute inset-[-1px_0_0_0]">
              <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgLine135} />
            </div>
          </div>
          <div className="absolute contents left-[99px] top-[116px]" data-name="Footer Middle" data-node-id="10:241">
            <div className="absolute content-stretch flex gap-[94px] items-start left-[99px] top-[116px] w-[660.376px]" data-node-id="10:242">
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[114.275px]" data-name="Footer Column" data-node-id="10:243">
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="10:244" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Company
                </p>
                <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links" data-node-id="10:245">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:246">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:247">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:249" style={{ fontVariationSettings: "'opsz' 14" }}>
                        About
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:251">
                    <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:253" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Team
                    </p>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:255">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:256">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:258" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Contact us
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:260">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:261">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:263" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Portfolio
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:265">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:266">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:268" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Services
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:270">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:271">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:273" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Blog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[130.078px]" data-name="Footer Column" data-node-id="10:275">
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="10:276" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Services
                </p>
                <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links" data-node-id="10:277">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:278">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:279">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:281" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Website
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:283">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:284">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:286" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Mobile App
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:288">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:289">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:291" style={{ fontVariationSettings: "'opsz' 14" }}>
                        CRM Systems
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:293">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:294">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:296" style={{ fontVariationSettings: "'opsz' 14" }}>
                        SAAS Platforms
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:298">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:299">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:301" style={{ fontVariationSettings: "'opsz' 14" }}>
                        AI integration
                      </p>
                    </div>
                  </div>
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:303" style={{ fontVariationSettings: "'opsz' 14" }}>
                    All
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[244px]" data-name="Footer Column" data-node-id="10:304">
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="10:305" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Contact
                </p>
                <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links" data-node-id="10:306">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Link" data-node-id="10:307">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link" data-node-id="10:308">
                      <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Vector" data-node-id="10:310">
                        <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector3} />
                      </div>
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="10:311" style={{ fontVariationSettings: "'opsz' 14" }}>
                        108/10 Andranik Zoravar St.
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-node-id="10:313">
                    <div className="h-[15px] relative shrink-0 w-[20px]" data-name="Vector" data-node-id="10:314">
                      <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector4} />
                    </div>
                    <Link className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap" href="tel:%20+374%2044%20343%20000" data-node-id="10:315" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="cursor-pointer font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        info@neetrino.com
                      </p>
                    </Link>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-node-id="10:316">
                    <div className="relative shrink-0 size-[18px]" data-name="Vector" data-node-id="10:317">
                      <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector5} />
                    </div>
                    <Link className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap" href="tel:%20+374%2044%20343%20000" data-node-id="10:318" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="cursor-pointer leading-[18px] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        +374 44 343 000
                      </p>
                    </Link>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="10:319">
                    <div className="h-[21px] relative shrink-0 w-[21.5px]" data-node-id="10:320">
                      <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgGroup2087329580} />
                    </div>
                    <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white whitespace-pre" data-node-id="10:323" style={{ fontVariationSettings: "'opsz' 14" }}>
                      {`Working Hours `}
                      <br aria-hidden="true" />
                      Mon. - Fri. 10AM - 7PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[912.88px] top-[116.02px] w-[426.122px]" data-name="Footer Column" data-node-id="10:324">
              <div className="content-stretch flex max-w-full flex-col gap-[24px] items-start relative shrink-0 sm:w-[436px]" data-name="24px" data-node-id="10:325">
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-node-id="10:326">
                  <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#eee3e3] text-[20px] whitespace-nowrap" data-node-id="10:327" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Massage us
                  </p>
                  <p className="max-w-full break-words font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] text-[#dcd5d5] text-[18px] sm:w-[358.364px]" data-node-id="10:328" style={{ fontVariationSettings: "'opsz' 14" }}>{`Step into the digital world with just one touch—powered by Neetrino. `}</p>
                </div>
                <div className="content-stretch flex w-full max-w-[426px] flex-col items-start relative shrink-0" data-name="16px" data-node-id="10:329">
                  <div className="h-[68px] relative shrink-0 w-full" data-name="Input Text" data-node-id="10:330">
                    <div className="absolute bg-white border border-[#d9dbe9] border-solid inset-0 rounded-[108px] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]" data-name="Input" data-node-id="10:332" />
                    <div className="absolute content-stretch flex gap-[8px] items-center left-[23px] top-[25px]" data-name="Input Left" data-node-id="10:339">
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#dcd5d5] text-[16px] whitespace-nowrap" data-node-id="10:341" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Enter your massege
                      </p>
                    </div>
                  </div>
                </div>
                <button className="block cursor-pointer h-[56px] relative rounded-[35px] shrink-0 w-[120px]" data-name="Send Button" data-node-id="10:342">
                  <div className="absolute bg-[#4a3aff] inset-0 rounded-[35px]" data-node-id="I10:342;2:6" />
                  <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[28.57%_50.83%_28.57%_15%] justify-center leading-[0] not-italic text-[16px] text-left text-white whitespace-nowrap" data-node-id="I10:342;2:7">
                    <p className="leading-[24px]">Send</p>
                  </div>
                  <div className="absolute left-[71px] size-[42px] top-[7px]" data-node-id="I10:342;2:8">
                    <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgGroup221} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[22px] items-center justify-center left-[1075px] top-[527px]" data-name="Social Media Container" data-node-id="10:343">
            <div className="h-[19px] relative shrink-0 w-[11px]" data-name="Social Media Icon Square/Facebook" data-node-id="10:344">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSocialMediaIconSquareFacebook} />
            </div>
            <div className="relative shrink-0 size-[19px]" data-name="Social Media Icon Square/Instagram" data-node-id="10:347">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSocialMediaIconSquareInstagram} />
            </div>
            <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Social Media Icon Square/LinkedIn" data-node-id="10:354">
              <div className="absolute inset-[4.58%_0.79%_0.19%_4.47%]" data-node-id="10:355">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgGroup73} />
              </div>
            </div>
            <div className="h-[15px] relative shrink-0 w-[24px]" data-name="Group" data-node-id="10:358">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgGroup} />
            </div>
            <div className="h-[15px] relative shrink-0 w-[21px]" data-name="Social Media Icon Square/YouTube" data-node-id="10:360">
              <div className="absolute inset-[2.64%_1.19%_4.05%_4.52%]" data-node-id="10:361">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgGroup74} />
              </div>
            </div>
            <div className="relative shrink-0 size-[20px]" data-name="Vector" data-node-id="10:364">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector6} />
            </div>
            <div className="h-[20.472px] relative shrink-0 w-[18.796px]" data-name="Vector" data-node-id="10:365">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgVector7} />
            </div>
          </div>
          <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] left-[110px] text-[#dcd5d5] text-[18px] top-[536.01px] whitespace-nowrap" data-node-id="10:366" style={{ fontVariationSettings: "'opsz' 14" }}>
            Copyright © 2017 - 2026 Neetrino IT Company. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="absolute h-[1173px] left-px top-[2106px] w-[1440px]" data-name="PROJECTS" data-node-id="10:489">
        <div className="absolute contents leading-[0] left-[51px] text-white top-[51px] whitespace-nowrap" data-node-id="10:506">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[57px] not-italic text-[16px] top-[68.5px]" data-node-id="10:507">
            <p className="leading-[35px]">PORTFOLIO</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center left-[51px] text-[35px] top-[103.5px]" data-node-id="10:508">
            <p>
              <span className="leading-[35px]">OUR</span>
              <span className="leading-[35px] text-[#ff7500]">{` PROJECTS`}</span>
            </p>
          </div>
        </div>
        <Group className="-translate-x-1/2 absolute h-[276px] left-1/2 top-[987px] w-[642px]" />
      </div>
      <div className="absolute h-[378px] left-[1540px] rounded-[31px] top-[2334px] w-[587px]" data-name="biotech _ logo 1" data-node-id="55:381">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]" src={imgBiotechLogo1} />
        </div>
      </div>
      <div className="absolute h-[378px] left-[1978px] rounded-[31px] top-[2763px] w-[587px]" data-name="biotech _ logo 2" data-node-id="55:395">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[120.37%] left-[-1.69%] max-w-none top-[-13.55%] w-[103.37%]" src={imgBiotechLogo1} />
        </div>
      </div>
      <div className="absolute h-[378px] left-[-490px] rounded-[32px] top-[2334px] w-[379px]" data-name="Klever (@klever_io) • Instagram photos and videos 3" data-node-id="55:383">
        <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgKleverKleverIoInstagramPhotosAndVideos3} />
      </div>
      <div className="absolute content-stretch flex gap-[11px] items-end left-[-52px] top-[2757px]" data-node-id="55:398">
        <div className="h-[378px] relative rounded-[32px] shrink-0 w-[379px]" data-name="Klever (@klever_io) • Instagram photos and videos 4" data-node-id="55:397">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgKleverKleverIoInstagramPhotosAndVideos3} />
        </div>
        <div className="h-[378px] relative rounded-[43px] shrink-0 w-[505px]" data-name="Stanislav Hristov 4" data-node-id="55:393">
          <Image alt="" unoptimized width={2400} height={2400} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[43px] size-full" src={imgStanislavHristov3} />
        </div>
        <div className="h-[378px] relative rounded-[45px] shrink-0 w-[505px]" data-name="UI Design-2 2" data-node-id="55:394">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[45px]">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[104.76%] left-[-4.55%] max-w-none top-[-4.76%] w-[104.55%]" src={imgUiDesign21} />
          </div>
        </div>
        <div className="h-[383px] relative rounded-[35px] shrink-0 w-[592px]" data-name="-266 2" data-node-id="55:396">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[35px]">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[154.19%] left-0 max-w-none top-[-40.85%] w-full" src={img2661} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[409px] left-[calc(50%+11px)] top-[4153px] w-[872px]" data-node-id="48:505">
        <div className="absolute inset-[-5.13%_-2.41%]">
          <Image alt="" unoptimized width={2400} height={2400} className="block max-w-none size-full" src={imgEllipse3459} />
        </div>
      </div>
      <Frame className="hidden -translate-x-1/2 absolute h-[905px] left-[calc(50%-0.5px)] top-[3879px] w-[1609px]" />
      <div className="-translate-x-1/2 absolute h-[829px] left-[calc(50%+0.5px)] top-[1277px] w-[1431px]" data-name="WHAT WE DO" data-node-id="90:525">
        <div className="absolute contents left-[1130px] top-[128px]" data-node-id="90:526">
          <div className="absolute bg-[#a2b8ee] h-[553px] left-[1130px] rounded-[19px] top-[128px] w-[258px]" data-node-id="90:527" />
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[1329px] not-italic text-[#0f0f0f] text-[20px] text-right top-[576.5px] whitespace-nowrap" data-node-id="90:528">
            <p className="leading-[25px]">AI Automation</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[1162px] not-italic text-[#0f0f0f] text-[22px] top-[198.5px] whitespace-nowrap" data-node-id="90:529">
            <p className="leading-[35px]">AI INTEGRATIONS</p>
          </div>
        </div>
        <div className="absolute bg-[#ff7500] h-[553px] left-[320px] rounded-[19px] top-[128px] w-[258px]" data-node-id="90:530" />
        <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[524px] not-italic text-[20px] text-right text-white top-[576.5px] whitespace-nowrap" data-node-id="90:531">
          <p className="leading-[25px]">App Development</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[382px] not-italic text-[22px] text-white top-[198.5px] whitespace-nowrap" data-node-id="90:532">
          <p className="leading-[35px]">MOBILE APP</p>
        </div>
        <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[373px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[607px]" data-name="Button 13" data-node-id="90:533">
          <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:533;13:52" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="I90:533;13:33">
            Continue
          </p>
          <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:533;13:44" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I90:533;13:34">
            <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I90:533;13:34;21:1594">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[860px] top-[129px]" data-node-id="90:534">
          <div className="absolute contents left-[860px] top-[129px]" data-node-id="90:535">
            <div className="absolute bg-[#473dff] h-[553px] left-[860px] rounded-[19px] top-[129px] w-[258px]" data-node-id="90:536" />
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[1081px] not-italic text-[20px] text-right text-white top-[578.5px] whitespace-nowrap" data-node-id="90:537">
              <p className="leading-[25px]">Process Automation</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[909px] not-italic text-[22px] text-white top-[200.5px] whitespace-nowrap" data-node-id="90:538">
              <p className="leading-[35px]">CRM SYSTEMS</p>
            </div>
            <div className="absolute h-[209px] left-[885px] top-[292px] w-[211px]" data-name="Sports_00065_" data-node-id="90:539">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[131.58%] left-[-15.17%] max-w-none top-[-15.79%] w-[130.33%]" src={imgSports00065} />
              </div>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[914px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[609px]" data-name="Button 14" data-node-id="90:540">
            <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:540;13:52" />
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="I90:540;13:33">
              Continue
            </p>
            <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:540;13:44" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I90:540;13:34">
              <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I90:540;13:34;21:1594">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[1189px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[607px]" data-name="Button 16" data-node-id="90:541">
          <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:541;13:52" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="I90:541;13:33">
            Continue
          </p>
          <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:541;13:44" />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I90:541;13:34">
            <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I90:541;13:34;21:1594">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[590px] top-[129px]" data-node-id="90:542">
          <div className="absolute contents left-[590px] top-[129px]" data-node-id="90:543">
            <div className="absolute bg-[#292929] h-[553px] left-[590px] rounded-[19px] top-[129px] w-[258px]" data-node-id="90:544" />
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight justify-center leading-[0] left-[792px] not-italic text-[20px] text-right text-white top-[577.5px] whitespace-nowrap" data-node-id="90:545">
              <p className="leading-[25px]">Cloud Solutions</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[619px] not-italic text-[22px] text-white top-[199.5px] whitespace-nowrap" data-node-id="90:546">
              <p className="leading-[35px]">SAAS PLATFORMS</p>
            </div>
          </div>
          <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[644px] overflow-clip px-[24px] py-[16px] rounded-[40px] top-[608px]" data-name="Button 15" data-node-id="90:547">
            <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[69px_0_-103px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:547;13:52" />
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="I90:547;13:33">
              Continue
            </p>
            <div className="absolute bg-[#46fff4] blur-[7.5px] inset-[64px_0_-98px_0] opacity-0 rounded-tl-[60px] rounded-tr-[60px]" data-name="glow" data-node-id="I90:547;13:44" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Right" data-node-id="I90:547;13:34">
              <div className="absolute inset-[8.33%]" data-name="safearea" data-node-id="I90:547;13:34;21:1594">
                <Image alt="" unoptimized width={2400} height={2400} className="absolute block max-w-none size-full" src={imgSafearea} />
              </div>
            </div>
          </div>
          <div className="absolute h-[190px] left-[622px] top-[310px] w-[195px]" data-name="Cloud Infrastructure" data-node-id="90:548">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[140.91%] left-[-17.24%] max-w-none top-[-16.67%] w-[137.44%]" src={imgCloudInfrastructure} />
            </div>
          </div>
        </div>
        <div className="absolute h-[183px] left-[392px] top-[308px] w-[114px]" data-name="PC" data-node-id="90:549">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[155.42%] left-[-74.48%] max-w-none top-[-27.71%] w-[248.96%]" src={imgPc1} />
          </div>
        </div>
        <Group className="-translate-x-1/2 absolute h-[276px] left-[calc(50%+0.5px)] top-[655px] w-[642px]" />
        <div className="absolute h-[231px] left-[1148px] top-[289px] w-[221px]" data-name="-276 1" data-node-id="90:552">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[125.97%] left-[-23.2%] max-w-none top-[-19.91%] w-[146.4%]" src={img2761} />
          </div>
        </div>
        <div className="absolute contents leading-[0] left-[50px] text-white top-[6px] whitespace-nowrap" data-node-id="90:553">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-[56px] not-italic text-[16px] top-[23.5px]" data-node-id="90:554">
            <p className="leading-[35px]">SERVICES</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black_Italic',sans-serif] font-black italic justify-center left-[50px] text-[35px] top-[58.5px]" data-node-id="90:555">
            <p>
              <span className="leading-[35px]">{`WHAT WE `}</span>
              <span className="leading-[35px] text-[#ff7500]">DO</span>
            </p>
          </div>
        </div>
        <Group1 className="absolute h-[553px] left-[50px] top-[129px] w-[258px]" />
      </div>
      <div className="absolute flex h-[373px] items-center justify-center left-[989px] top-[904px] w-[450px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[373px] relative w-[450px]" data-name="28A" data-node-id="10:462">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image alt="" unoptimized width={2400} height={2400} className="absolute h-[214.48%] left-0 max-w-none top-[-70.38%] w-full" src={img28A} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}