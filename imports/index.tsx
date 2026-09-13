import svgPaths from "./svg-qzlrdagewh";

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(45.00000000000001deg, rgb(37, 99, 235) 0%, rgb(45, 212, 191) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-1/2" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[28px]">CC</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">CoachCoaching</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(59,130,246,0.2)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(96,165,250,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">SUPER</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <OverlayBorder />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Margin1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">ADMIN OPERATIONS CONSOLE</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Background />
      <Margin />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">us-east-1a • Core</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#2dd4bf] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Margin2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">v4.2.8</p>
        </div>
      </div>
    </div>
  );
}

function NodeRegionIndicator() {
  return (
    <div className="bg-[rgba(15,23,42,0.9)] relative rounded-[6px] shrink-0 w-full" data-name="Node & Region indicator">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[11px] py-[7px] relative size-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function BrandOperationsNodeHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand & Operations Node Header">
      <div aria-hidden className="absolute border-[rgba(30,41,59,0.8)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[21px] pt-[20px] px-[20px] relative size-full">
        <Container1 />
        <NodeRegionIndicator />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16px]">PLATFORM OVERVIEW</p>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.pfb6bf00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg1 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5.56%]">
          <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 13.3333 8" width="13.3333">
            <path d={svgPaths.padd8a00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg3 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Analytics & Revenue`}</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin1 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p1440cc80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg5 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Live Telemetry</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin2 />
      <Container13 />
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <Container12 />
          <div className="bg-[#2dd4bf] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function SectionOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section: Overview">
      <Container9 />
      <Nav />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16px]">{`WORKSPACE & DIRECTORY`}</p>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.27%_12.5%_14.07%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.66%_-5.56%]">
          <svg className="block size-full" fill="none" height="13.1187" preserveAspectRatio="none" viewBox="0 0 13.3333 13.1187" width="13.3333">
            <path d={svgPaths.p3e432280} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg7 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Mentor Approvals</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin3 />
      <Container16 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(20,184,166,0.2)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(20,184,166,0.3)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5eead4] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">12 Pending</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[11.99px] py-[8px] relative size-full">
          <Container15 />
          <OverlayBorder1 />
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-10%_-37.5%_-5%]">
          <svg className="block size-full" fill="none" height="15.3333" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333" width="15.3333">
            <path d={svgPaths.p4174800} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg9 />
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Mentors & Coaches`}</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin4 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-36.93%_5.56%_-5.56%_-5.56%]">
          <svg className="block size-full" fill="none" height="17.0979" preserveAspectRatio="none" viewBox="0 0 11.9999 17.0979" width="11.9999">
            <path d={svgPaths.p3f1361e0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg11 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">{`Mentees & Users`}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin5 />
      <Container19 />
    </div>
  );
}

function LinkActiveSelectionState() {
  return (
    <div className="bg-[#2563eb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active Selection State">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <Container18 />
          <div className="bg-[#5eead4] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%_19.78%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.02%_-5.56%]">
          <svg className="block size-full" fill="none" height="10.8354" preserveAspectRatio="none" viewBox="0 0 13.3333 10.8354" width="13.3333">
            <path d={svgPaths.p20cc9200} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg13 />
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Coaching Programs</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin6 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p1f159560} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg15 />
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg14 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Sessions & Bookings`}</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin7 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link3 />
      <Link4 />
      <LinkActiveSelectionState />
      <Link5 />
      <Link6 />
    </div>
  );
}

function SectionWorkspaceDirectoryActiveTabHere() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section: Workspace & Directory (Active Tab Here)">
      <Container14 />
      <Nav1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16px]">{`COMMERCE & LEDGER`}</p>
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 13.3335 10.6667" width="13.3335">
            <path d={svgPaths.p1d6b6f00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg17 />
    </div>
  );
}

function SvgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg16 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Transactions & Escrow`}</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin8 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-28.57%_-22.22%_-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="12.6667" preserveAspectRatio="none" viewBox="0 0 15.3333 12.6667" width="15.3333">
            <path d={svgPaths.p3b18f00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg19 />
    </div>
  );
}

function SvgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg18 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Payout Runs</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin9 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">Auto</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <Container24 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link7 />
      <Link8 />
    </div>
  );
}

function SectionCommerceLedger() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section: Commerce & Ledger">
      <Container22 />
      <Nav2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16px]">{`SECURITY & GOVERNANCE`}</p>
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333" width="10.6667">
            <path d={svgPaths.p212e1900} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg21 />
    </div>
  );
}

function SvgMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg20 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Audit Logs & Telemetry`}</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin10 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p2215f8c0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg23 />
    </div>
  );
}

function SvgMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg22 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Platform Settings</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin11 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-18.75%_-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p21f28c00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg25 />
    </div>
  );
}

function SvgMargin12() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[12px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg24 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Security & 2FA`}</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <SvgMargin12 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Nav3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Nav">
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function SectionSecuritySystem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section: Security & System">
      <Container27 />
      <Nav3 />
    </div>
  );
}

function NavigationLinksSections() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation Links Sections">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[12px] py-[16px] relative size-full">
        <SectionOverview />
        <SectionWorkspaceDirectoryActiveTabHere />
        <SectionCommerceLedger />
        <SectionSecuritySystem />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <BrandOperationsNodeHeader />
        <NavigationLinksSections />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#2dd4bf] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Health Telemetry</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2dd4bf] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">99.99%</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Gateway Latency</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">38ms</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[4px] relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[rgba(30,41,59,0.8)] relative rounded-[6px] shrink-0 w-full" data-name="Link">
      <div aria-hidden className="absolute border border-[rgba(51,65,85,0.6)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[11px] text-center whitespace-nowrap">
          <p className="leading-[16.5px]">Open Status Hub</p>
        </div>
      </div>
    </div>
  );
}

function HealthTelemetryWidgetFooterInSidebar() {
  return (
    <div className="bg-[rgba(15,23,42,0.9)] relative rounded-[12px] shrink-0 w-full" data-name="Health Telemetry Widget Footer in Sidebar">
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container31 />
        <Container34 />
        <Link12 />
      </div>
    </div>
  );
}

function HealthTelemetryWidgetFooterInSidebarMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Health Telemetry Widget Footer in Sidebar:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <HealthTelemetryWidgetFooterInSidebar />
      </div>
    </div>
  );
}

function AsidePersistentExecutiveDarkLeftNavigationConsole0A192F() {
  return (
    <div className="bg-[#0a192f] content-stretch flex flex-col h-full items-start justify-between pr-px relative shrink-0 w-[288px] z-[2]" data-name="Aside - Persistent Executive Dark Left Navigation Console (0A192F)">
      <div aria-hidden className="absolute border-[#1e293b] border-r border-solid inset-0 pointer-events-none" />
      <Container />
      <HealthTelemetryWidgetFooterInSidebarMargin />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Platform</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[7.84px]" data-name="SVG">
      <div className="absolute inset-[33.67%_33.33%_33.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" height="5.22667" preserveAspectRatio="none" viewBox="0 0 2.94 5.22667" width="2.94">
            <path d={svgPaths.p39c35e00} id="Vector" stroke="#CBD5E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.653333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-center overflow-clip relative shrink-0 w-[7.84px]" data-name="SVG">
      <Svg27 />
    </div>
  );
}

function SvgMargin13() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pl-[12px] relative shrink-0 w-[19.84px]" data-name="SVG:margin">
      <Svg26 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] pr-[7.08px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">{`Directory &`}</p>
        <p className="leading-[16px]">Governance</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[7.84px]" data-name="SVG">
      <div className="absolute inset-[33.67%_33.33%_33.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" height="5.22667" preserveAspectRatio="none" viewBox="0 0 2.94 5.22667" width="2.94">
            <path d={svgPaths.p39c35e00} id="Vector" stroke="#CBD5E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.653333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-center overflow-clip relative shrink-0 w-[7.84px]" data-name="SVG">
      <Svg29 />
    </div>
  );
}

function SvgMargin14() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pl-[12px] relative shrink-0 w-[19.84px]" data-name="SVG:margin">
      <Svg28 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start pl-[8px] pr-[20.68px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">All</p>
        <p className="leading-[16px] mb-0">Registered</p>
        <p className="leading-[16px]">Mentees</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Background1 />
    </div>
  );
}

function LeftSideBreadcrumbContext() {
  return (
    <div className="relative shrink-0" data-name="Left side: Breadcrumb & Context">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container37 />
        <SvgMargin13 />
        <Margin3 />
        <SvgMargin14 />
        <Margin4 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[normal]">Quick search mentees, IDs, cohorts (Press ⌘K)...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[8px] pl-[37px] pr-[49px] pt-[7px] relative size-full">
          <Container38 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2aa1a600} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
      <Svg30 />
    </div>
  );
}

function Keyboard() {
  return (
    <div className="bg-[rgba(226,232,240,0.8)] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Keyboard">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">⌘K</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center pr-[8px] right-[-0.01px] top-0" data-name="Container">
      <Keyboard />
    </div>
  );
}

function CenterSearchCommandPalette() {
  return (
    <div className="relative shrink-0 w-[261.34px]" data-name="Center / Search Command Palette">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Input />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[3.78px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px] mb-0">All Systems</p>
          <p className="leading-[16.5px]">Operational</p>
        </div>
      </div>
    </div>
  );
}

function PlatformOperationalIndicator() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center px-[11px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Platform Operational Indicator">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#14b8a6] h-[8px] relative rounded-[9999px] shrink-0 w-[4.17px]" data-name="Background" />
      <Margin5 />
    </div>
  );
}

function Svg31() {
  return (
    <div className="h-[14px] relative shrink-0 w-[9.05px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 9.05 14" width="9.05">
        <g id="SVG">
          <path d={svgPaths.p21a9000} id="Vector" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.754167" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8.46px] items-center pl-[13px] pr-[15.49px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg31 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px] mb-0">Export</p>
        <p className="leading-[16px]">CSV</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Svg32() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.52px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 8.52 14" width="8.52">
        <g id="SVG">
          <path d="M4.26 4.16V9.84M7.1 7H1.42" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.71" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2563eb] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8.73px] items-center pl-[14px] pr-[16.74px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Svg32 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px] mb-0">Add</p>
        <p className="leading-[16px]">User</p>
      </div>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function DividerMargin() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pl-[12px] relative shrink-0 w-[12.55px]" data-name="Divider:margin">
      <div className="bg-[#e2e8f0] h-[24px] relative shrink-0 w-[0.55px]" data-name="Divider" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(59,130,246,0.2)] size-[32px] top-0" data-name="Overlay+Shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">SJ</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#14b8a6] bottom-0 content-stretch flex flex-col items-end justify-end right-0 rounded-[9999px] size-[10px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[10px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[2]" data-name="Container">
      <Background2 />
      <Background3 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
        <p className="leading-[15px] mb-0">Sarah</p>
        <p className="leading-[15px]">Johnson</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px] mb-0">Super</p>
        <p className="leading-[15px]">Admin</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0 z-[1]" data-name="Margin">
      <Container42 />
    </div>
  );
}

function AdminProfileAvatarRole() {
  return (
    <div className="content-stretch flex isolate items-center pl-[4px] relative shrink-0" data-name="Admin Profile Avatar & Role">
      <Container41 />
      <Margin6 />
    </div>
  );
}

function AdminProfileAvatarRoleMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Admin Profile Avatar & Role:margin">
      <AdminProfileAvatarRole />
    </div>
  );
}

function RightActionSuite() {
  return (
    <div className="relative shrink-0" data-name="Right Action Suite">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <PlatformOperationalIndicator />
        <ButtonMargin />
        <ButtonMargin1 />
        <DividerMargin />
        <AdminProfileAvatarRoleMargin />
      </div>
    </div>
  );
}

function HeaderGlobalCommandBar() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full z-[2]" data-name="Header - GlobalCommandBar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <LeftSideBreadcrumbContext />
          <CenterSearchCommandPalette />
          <RightActionSuite />
        </div>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5eead4] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Live Platform Monitoring • High-Density View</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(19,78,74,0.6)] content-stretch flex items-center px-[11px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(20,184,166,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#2dd4bf] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Margin7 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] whitespace-nowrap">
        <p>
          <span className="leading-[40px]">{`Users Management & `}</span>
          <span className="[word-break:break-word] font-['Newsreader:Italic',sans-serif] font-normal italic leading-[40px] text-[#bfdbfe]">Mentee Governance</span>
        </p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Manage all registered users, monitor account activity, memberships, verification status, and user</p>
        <p className="leading-[20px]">engagement from one centralized executive console.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[672px] pt-[1.75px] relative shrink-0" data-name="Container">
      <OverlayBorder2 />
      <Heading />
      <Container47 />
    </div>
  );
}

function Svg33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="SVG">
          <path d={svgPaths.p3ef4b0c0} id="Vector" stroke="#5EEAD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(20,184,166,0.2)] h-[44px] relative rounded-[8px] shrink-0 w-[33.8px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(45,212,191,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Svg33 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">USER GROWTH</p>
        <p className="leading-[16.5px]">VELOCITY</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[56px] leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center left-0 text-[20px] text-white top-[13.5px]">
        <p className="leading-[28px]">{`+12.8% `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[84.01px] text-[#5eead4] text-[12px] top-[14.5px]">
        <p className="leading-[16px]">This</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#5eead4] text-[12px] top-[42.5px]">
        <p className="leading-[16px]">Month</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container49 />
      <Paragraph />
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function HeroRightQuickWidget() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.05)] content-stretch flex items-center p-[15px] relative rounded-[12px] shrink-0" data-name="Hero Right Quick Widget">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <OverlayBorder3 />
      <Margin8 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container46 />
        <HeroRightQuickWidget />
      </div>
    </div>
  );
}

function SectionPageTitleAndHero() {
  return (
    <div className="bg-gradient-to-r from-[#0a192f] relative rounded-[16px] shrink-0 to-[#1e3a8a] via-1/2 via-[#112240] w-full" data-name="Section - PageTitleAndHero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[29px] relative size-full">
          <div className="absolute bg-[rgba(20,184,166,0.1)] blur-[20px] bottom-[-39.5px] right-[-39px] rounded-[9999px] size-[256px]" data-name="Overlay+Blur" />
          <Container45 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">TOTAL USERS</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_21)" id="SVG">
          <path d={svgPaths.p346e1500} id="Vector" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_0_21">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Background">
      <Svg34 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container51 />
        <Background4 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px]">24,856</p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Svg35() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p61dcca0} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Svg35 />
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">+18%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[11px] relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Kpi1TotalUsers() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start pb-[22px] pt-[17px] px-[17px] relative rounded-[12px] shrink-0 w-[145.66px]" data-name="KPI 1: Total Users">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container50 />
      <Container52 />
      <HorizontalBorder />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[40.36px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">ACTIVE</p>
        <p className="leading-[16.5px]">USERS</p>
      </div>
    </div>
  );
}

function Svg36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p9018000} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[27.36px]" data-name="Background">
      <Svg36 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container56 />
        <Background5 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px]">19,842</p>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Svg37() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p61dcca0} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Svg37 />
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">+12%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[11px] relative size-full">
          <Container58 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Kpi2ActiveUsers() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[17px] relative rounded-[12px] shrink-0 w-[145.67px]" data-name="KPI 2: Active Users">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container55 />
      <Container57 />
      <HorizontalBorder1 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[31.29px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">PREMIUM</p>
        <p className="leading-[16.5px]">MEMBERS</p>
      </div>
    </div>
  );
}

function Svg38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.pe8b260} id="Vector" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[21.33px]" data-name="Background">
      <Svg38 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container61 />
          <Background6 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px]">11,248</p>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Svg39() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p61dcca0} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Svg39 />
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">+24%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[11px] relative size-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Kpi3PremiumMembers() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[17px] relative rounded-[12px] shrink-0 w-[145.67px]" data-name="KPI 3: Premium Members">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container60 />
      <Container62 />
      <HorizontalBorder2 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32.98px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">VERIFIED</p>
        <p className="leading-[16.5px]">USERS</p>
      </div>
    </div>
  );
}

function Svg40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p25812600} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[25.27px]" data-name="Background">
      <Svg40 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container66 />
          <Background7 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px]">23,120</p>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p61dcca0} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Svg41 />
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">+8%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] pt-[11px] relative size-full">
          <Container68 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Kpi4VerifiedUsers() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[17px] relative rounded-[12px] shrink-0 w-[145.66px]" data-name="KPI 4: Verified Users">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container65 />
      <Container67 />
      <HorizontalBorder3 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pr-[30.99px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">BLOCKED</p>
        <p className="leading-[16.5px]">USERS</p>
      </div>
    </div>
  );
}

function Svg42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3a8b6e80} id="Vector" stroke="#E11D48" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[24.77px]" data-name="Background">
      <Svg42 />
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container71 />
          <Background8 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px]">214</p>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Svg43() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p2a782b00} id="Vector" stroke="#F43F5E" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Svg43 />
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">-4%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[11px] relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Kpi5BlockedUsers() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[17px] relative rounded-[12px] shrink-0 w-[145.67px]" data-name="KPI 5: Blocked Users">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container70 />
      <Container72 />
      <HorizontalBorder4 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[29.53px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">NEW THIS</p>
        <p className="leading-[16.5px]">MONTH</p>
      </div>
    </div>
  );
}

function Svg44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p15123780} id="Vector" stroke="#9333EA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#faf5ff] content-stretch flex h-[28px] items-center justify-center relative rounded-[8px] shrink-0 w-[23.06px]" data-name="Background">
      <Svg44 />
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container76 />
        <Background9 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[32px]">1,284</p>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">Performance</p>
        </div>
      </div>
    </div>
  );
}

function Svg45() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p61dcca0} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">
        <Svg45 />
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
          <p className="leading-[16.5px]">+32%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[11px] relative size-full">
          <Container78 />
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Kpi6NewThisMonth() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[17px] relative rounded-[12px] shrink-0 w-[145.67px]" data-name="KPI 6: New This Month">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.9)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container75 />
      <Container77 />
      <HorizontalBorder5 />
    </div>
  );
}

function Section6MetricsMatchingSnapshotAndRequirements() {
  return (
    <div className="content-stretch flex gap-[14px] items-start justify-center relative shrink-0 w-full" data-name="Section - 6 Metrics matching snapshot and requirements">
      <Kpi1TotalUsers />
      <Kpi2ActiveUsers />
      <Kpi3PremiumMembers />
      <Kpi4VerifiedUsers />
      <Kpi5BlockedUsers />
      <Kpi6NewThisMonth />
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
          <p className="leading-[normal]">Search by candidate name, company, email, or skill keywords...</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[41px] pr-[17px] pt-[9px] relative size-full">
          <Container81 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2aa1a600} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[14px] top-0" data-name="Container">
      <Svg46 />
    </div>
  );
}

function SearchInputForDirectory() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Search input for directory">
      <Input1 />
      <Container82 />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="image">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[11.77px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">All Status</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center pl-[13px] pr-[33px] py-[7px] relative rounded-[8px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[85px] pr-[9px] py-[6px] relative rounded-[inherit] size-full">
        <Image />
      </div>
      <Container83 />
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="image">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.89px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">All Memberships</p>
        </div>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center pl-[13px] pr-[33px] py-[7px] relative rounded-[8px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[116px] pr-[9px] py-[6px] relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <Container84 />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="image">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.53px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">All Verification</p>
        </div>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center pl-[13px] pr-[33px] py-[7px] relative rounded-[8px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[103px] pr-[9px] py-[6px] relative rounded-[inherit] size-full">
        <Image2 />
      </div>
      <Container85 />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="image">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[50.23px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Newest First</p>
        </div>
      </div>
    </div>
  );
}

function Options3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center pl-[13px] pr-[33px] py-[7px] relative rounded-[8px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[141px] pr-[9px] py-[6px] relative rounded-[inherit] size-full">
        <Image3 />
      </div>
      <Container86 />
    </div>
  );
}

function DropdownFilterStrip() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Dropdown Filter Strip">
      <Options />
      <Options1 />
      <Options2 />
      <Options3 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <SearchInputForDirectory />
        <DropdownFilterStrip />
      </div>
    </div>
  );
}

function Svg47() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p11c3e60} id="Vector" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative size-full">
        <Svg47 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Grid View</p>
        </div>
      </div>
    </div>
  );
}

function Svg48() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p14ad6f00} id="Vector" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative size-full">
        <Svg48 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">List View</p>
        </div>
      </div>
    </div>
  );
}

function GridListSwitcher() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start p-[3px] relative rounded-[8px] shrink-0" data-name="Grid / List Switcher">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">{`Showing `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic text-[#334155]">6</span>
          <span className="leading-[16px]">{` active candidate profiles`}</span>
        </p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <GridListSwitcher />
        <Margin9 />
      </div>
    </div>
  );
}

function Svg49() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3926bb00} id="Vector" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <Svg49 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Advanced Filters</p>
      </div>
    </div>
  );
}

function Svg50() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p28acb600} id="Vector" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[4px] items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <Svg50 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Refresh</p>
      </div>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button4 />
        <ButtonMargin2 />
      </div>
    </div>
  );
}

function SecondaryRowViewTogglesUtilities() {
  return (
    <div className="relative shrink-0 w-full" data-name="Secondary Row: View Toggles & Utilities">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative size-full">
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function SectionAdvancedControlsBar() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Section - AdvancedControlsBar">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
        <Container80 />
        <SecondaryRowViewTogglesUtilities />
      </div>
    </div>
  );
}

function Svg52() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6668 9.33333" width="11.6668">
            <path d={svgPaths.p1ebd0300} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg51() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg52 />
    </div>
  );
}

function SvgMargin15() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg51 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">rahul@example.com</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin15 />
        <Container91 />
      </div>
    </div>
  );
}

function Svg54() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p1f9c0120} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg53() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg54 />
    </div>
  );
}

function SvgMargin16() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg53 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">+91 9876543210</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin16 />
        <Container93 />
      </div>
    </div>
  );
}

function Svg56() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%_10.48%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.41%_-6.25%]">
          <svg className="block size-full" fill="none" height="11.9499" preserveAspectRatio="none" viewBox="0 0 10.5 11.9499" width="10.5">
            <path d={svgPaths.p30912e00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="4.66667" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667" width="4.66667">
            <path d={svgPaths.p62d0400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg55() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg56 />
    </div>
  );
}

function SvgMargin17() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg55 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Bangalore, India</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin17 />
        <Container95 />
      </div>
    </div>
  );
}

function Svg57() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3d3e1f80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg57 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Joined: 12 Jan 2025</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">● 5 min ago</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function ContactMetaDetails() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.5)] content-stretch flex flex-col gap-[6px] items-start left-0 pb-[13px] pt-[12px] px-[20px] right-0 top-[182px]" data-name="Contact & Meta details">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container90 />
      <Container92 />
      <Container94 />
      <Container96 />
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">18</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">PROGRAMS</p>
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">8</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">5</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">MENTORS</p>
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">6</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container105 />
        <Container106 />
      </div>
    </div>
  );
}

function ActivityTelemetryQuad() {
  return (
    <div className="absolute bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_65px] left-0 p-[16px] right-0 top-[293px]" data-name="Activity Telemetry Quad">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">★ 11</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reviews:</p>
      </div>
      <Container109 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">96% Completed</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container110 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#2563eb] h-[6px] left-0 right-[4%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function ProfileCompletionProgressRating() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[8px] right-0 top-[463px]" data-name="Profile Completion Progress & Rating">
      <Container107 />
      <Background10 />
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Lifetime Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a8a] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹48,600</p>
        </div>
      </div>
    </div>
  );
}

function LifetimeSpendingCallout() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.6)] content-stretch flex items-center justify-between left-[20px] pl-[13px] pr-[13.01px] py-[13px] right-[20px] rounded-[12px] top-[517px]" data-name="Lifetime Spending Callout">
      <div aria-hidden className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PREMIUM</p>
      </div>
    </div>
  );
}

function BannerAccentWithMembershipBadge() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#0f172a] h-[80px] items-start justify-end left-0 p-[14px] right-0 to-[rgba(69,26,3,0.6)] top-0 via-1/2 via-[#1e293b]" data-name="Banner Accent with Membership Badge">
      <Background11 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(133.55628516838368deg, rgb(37, 99, 235) 0%, rgb(55, 48, 163) 100%)" }} data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[28px]">RS</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <BackgroundBorderShadow />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[4px] rounded-[9999px] size-[14px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-0.01px] relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Rahul Sharma</p>
      </div>
    </div>
  );
}

function Svg59() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[10%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.7998" preserveAspectRatio="none" viewBox="0 0 12.7998 12.7998" width="12.7998">
          <path clipRule="evenodd" d={svgPaths.p34040a20} fill="#3B82F6" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg58() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg59 />
    </div>
  );
}

function SvgMargin18() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[6px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg58 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <SvgMargin18 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">@rahulsharma</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic text-[#475569] text-[12px] text-center top-[23.75px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">Passionate software engineer focused on</p>
        <p className="leading-[16.5px]">career growth and engineering…</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container115 />
        <Container116 />
        <Container117 />
      </div>
    </div>
  );
}

function ProfileInfoAvatarHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pb-[17px] px-[20px] right-0 top-[40px]" data-name="Profile Info & Avatar Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactMetaDetails />
        <ActivityTelemetryQuad />
        <ProfileCompletionProgressRating />
        <LifetimeSpendingCallout />
        <BannerAccentWithMembershipBadge />
        <ProfileInfoAvatarHeader />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[8px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">View Dossier</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 w-[129.67px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Edit Profile</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Suspend / Block</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.67px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Delete Account</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function CardActionsFooter() {
  return (
    <div className="bg-[rgba(248,250,252,0.7)] relative shrink-0 w-full" data-name="Card Actions Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Container118 />
        <Container119 />
      </div>
    </div>
  );
}

function Card1RahulSharma() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 1: Rahul Sharma">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <Container89 />
        <CardActionsFooter />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Svg61() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6668 9.33333" width="11.6668">
            <path d={svgPaths.p1ebd0300} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg60() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg61 />
    </div>
  );
}

function SvgMargin19() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg60 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">priya@example.com</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin19 />
        <Container122 />
      </div>
    </div>
  );
}

function Svg63() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p1f9c0120} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg62() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg63 />
    </div>
  );
}

function SvgMargin20() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg62 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">+91 9123456780</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin20 />
        <Container124 />
      </div>
    </div>
  );
}

function Svg65() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%_10.48%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.41%_-6.25%]">
          <svg className="block size-full" fill="none" height="11.9499" preserveAspectRatio="none" viewBox="0 0 10.5 11.9499" width="10.5">
            <path d={svgPaths.p30912e00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="4.66667" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667" width="4.66667">
            <path d={svgPaths.p62d0400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg64() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg65 />
    </div>
  );
}

function SvgMargin21() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg64 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Hyderabad, India</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin21 />
        <Container126 />
      </div>
    </div>
  );
}

function Svg66() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3d3e1f80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg66 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Joined: 18 Mar 2025</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">● 25 min ago</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function ContactMetaDetails1() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.5)] content-stretch flex flex-col gap-[6px] items-start left-0 pb-[13px] pt-[12px] px-[20px] right-0 top-[182px]" data-name="Contact & Meta details">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container121 />
      <Container123 />
      <Container125 />
      <Container127 />
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">26</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container130 />
        <Container131 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">PROGRAMS</p>
        </div>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">11</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container132 />
        <Container133 />
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">8</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container134 />
        <Container135 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">MENTORS</p>
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">9</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container136 />
        <Container137 />
      </div>
    </div>
  );
}

function ActivityTelemetryQuad1() {
  return (
    <div className="absolute bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_65px] left-0 p-[16px] right-0 top-[293px]" data-name="Activity Telemetry Quad">
      <BackgroundBorder4 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
      <BackgroundBorder7 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">★ 18</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reviews:</p>
      </div>
      <Container140 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">100% Completed</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container139 />
      <Container141 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6px] items-start overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-[#14b8a6] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ProfileCompletionProgressRating1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[8px] right-0 top-[463px]" data-name="Profile Completion Progress & Rating">
      <Container138 />
      <Background12 />
    </div>
  );
}

function Container142() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#134e4a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Lifetime Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#134e4a] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹72,800</p>
        </div>
      </div>
    </div>
  );
}

function LifetimeSpendingCallout1() {
  return (
    <div className="absolute bg-[rgba(240,253,250,0.6)] content-stretch flex items-center justify-between left-[20px] pl-[13px] pr-[13.01px] py-[13px] right-[20px] rounded-[12px] top-[517px]" data-name="Lifetime Spending Callout">
      <div aria-hidden className="absolute border border-[#ccfbf1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container142 />
      <Container143 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#0d9488] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PRO MENTEE</p>
      </div>
    </div>
  );
}

function BannerAccentWithMembershipBadge1() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#0f172a] h-[80px] items-start justify-end left-0 p-[14px] right-0 to-[#0f172a] top-0 via-1/2 via-[#042f2e]" data-name="Banner Accent with Membership Badge">
      <Background13 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(133.29604987324896deg, rgb(20, 184, 166) 0%, rgb(4, 120, 87) 100%)" }} data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[28px]">PP</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <BackgroundBorderShadow1 />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[4px] rounded-[9999px] size-[14px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-0.01px] relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Priya Patel</p>
      </div>
    </div>
  );
}

function Svg68() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[10%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.7998" preserveAspectRatio="none" viewBox="0 0 12.7998 12.7998" width="12.7998">
          <path clipRule="evenodd" d={svgPaths.p34040a20} fill="#3B82F6" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg68 />
    </div>
  );
}

function SvgMargin22() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[6px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg67 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <SvgMargin22 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">@priyapatel</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[41px] leading-[0] not-italic overflow-clip relative shrink-0 text-[#475569] text-[12px] text-center w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-0.01px)] top-[15.5px]">
        <p className="leading-[16.5px]">Product manager who enjoys</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-0.33px)] overflow-hidden text-ellipsis top-[32px]">
        <p className="leading-[16.5px]">mentorship, networking, and high-growth</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container146 />
        <Container147 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function ProfileInfoAvatarHeader1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pb-[17px] px-[20px] right-0 top-[40px]" data-name="Profile Info & Avatar Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container144 />
      <Container145 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactMetaDetails1 />
        <ActivityTelemetryQuad1 />
        <ProfileCompletionProgressRating1 />
        <LifetimeSpendingCallout1 />
        <BannerAccentWithMembershipBadge1 />
        <ProfileInfoAvatarHeader1 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[8px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">View Dossier</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 w-[129.67px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Edit Profile</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start justify-center relative size-full">
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Suspend / Block</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.67px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Delete Account</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start justify-center relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function CardActionsFooter1() {
  return (
    <div className="bg-[rgba(248,250,252,0.7)] relative shrink-0 w-full" data-name="Card Actions Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Container148 />
        <Container149 />
      </div>
    </div>
  );
}

function Card2PriyaPatel() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 2: Priya Patel">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <Container120 />
        <CardActionsFooter1 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Svg70() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6668 9.33333" width="11.6668">
            <path d={svgPaths.p1ebd0300} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg69() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg70 />
    </div>
  );
}

function SvgMargin23() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg69 />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">amit.verma@example.com</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin23 />
        <Container152 />
      </div>
    </div>
  );
}

function Svg72() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p1f9c0120} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg71() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg72 />
    </div>
  );
}

function SvgMargin24() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg71 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">+91 9811122233</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin24 />
        <Container154 />
      </div>
    </div>
  );
}

function Svg74() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%_10.48%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.41%_-6.25%]">
          <svg className="block size-full" fill="none" height="11.9499" preserveAspectRatio="none" viewBox="0 0 10.5 11.9499" width="10.5">
            <path d={svgPaths.p30912e00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="4.66667" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667" width="4.66667">
            <path d={svgPaths.p62d0400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg73() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg74 />
    </div>
  );
}

function SvgMargin25() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg73 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Pune, India</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin25 />
        <Container156 />
      </div>
    </div>
  );
}

function Svg75() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3d3e1f80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg75 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Joined: 08 Feb 2025</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">● 12 min ago</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
          <Container158 />
          <Container159 />
        </div>
      </div>
    </div>
  );
}

function ContactMetaDetails2() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.5)] content-stretch flex flex-col gap-[6px] items-start left-0 pb-[13px] pt-[12px] px-[20px] right-[-0.01px] top-[182px]" data-name="Contact & Meta details">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container151 />
      <Container153 />
      <Container155 />
      <Container157 />
    </div>
  );
}

function Container160() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">21</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container160 />
        <Container161 />
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">PROGRAMS</p>
        </div>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">9</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container162 />
        <Container163 />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">6</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container164 />
        <Container165 />
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">MENTORS</p>
        </div>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">8</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container166 />
        <Container167 />
      </div>
    </div>
  );
}

function ActivityTelemetryQuad2() {
  return (
    <div className="absolute bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_65px] left-0 p-[16px] right-[-0.01px] top-[293px]" data-name="Activity Telemetry Quad">
      <BackgroundBorder8 />
      <BackgroundBorder9 />
      <BackgroundBorder10 />
      <BackgroundBorder11 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">★ 14</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reviews:</p>
      </div>
      <Container170 />
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">94% Completed</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container169 />
      <Container171 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#2563eb] h-[6px] left-0 right-[6%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function ProfileCompletionProgressRating2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[8px] right-[-0.01px] top-[463px]" data-name="Profile Completion Progress & Rating">
      <Container168 />
      <Background14 />
    </div>
  );
}

function Container172() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Lifetime Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a8a] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹58,200</p>
        </div>
      </div>
    </div>
  );
}

function LifetimeSpendingCallout2() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.6)] content-stretch flex items-center justify-between left-[20px] p-[13px] right-[19.99px] rounded-[12px] top-[517px]" data-name="Lifetime Spending Callout">
      <div aria-hidden className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container172 />
      <Container173 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PREMIUM</p>
      </div>
    </div>
  );
}

function BannerAccentWithMembershipBadge2() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#0f172a] h-[80px] items-start justify-end left-0 p-[14px] right-[-0.01px] to-[#0f172a] top-0 via-1/2 via-[#1e1b4b]" data-name="Banner Accent with Membership Badge">
      <Background15 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(135.2377398572034deg, rgb(79, 70, 229) 0%, rgb(107, 33, 168) 100%)" }} data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[28px]">AV</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container174() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <BackgroundBorderShadow2 />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[4px] rounded-[9999px] size-[14px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Amit Verma</p>
      </div>
    </div>
  );
}

function Svg77() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[10%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.7998" preserveAspectRatio="none" viewBox="0 0 12.7998 12.7998" width="12.7998">
          <path clipRule="evenodd" d={svgPaths.p34040a20} fill="#3B82F6" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg76() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg77 />
    </div>
  );
}

function SvgMargin26() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[6px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg76 />
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <SvgMargin26 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">@amitverma</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+5.18px)] not-italic text-[#475569] text-[12px] text-center top-[23.75px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">Senior UI/UX Designer focused on</p>
        <p className="leading-[16.5px]">design systems, web accessibility, and…</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container176 />
        <Container177 />
        <Container178 />
      </div>
    </div>
  );
}

function ProfileInfoAvatarHeader2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pb-[17px] px-[20px] right-[-0.01px] top-[40px]" data-name="Profile Info & Avatar Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container174 />
      <Container175 />
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactMetaDetails2 />
        <ActivityTelemetryQuad2 />
        <ProfileCompletionProgressRating2 />
        <LifetimeSpendingCallout2 />
        <BannerAccentWithMembershipBadge2 />
        <ProfileInfoAvatarHeader2 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#2563eb] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">View Dossier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Edit Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[4px] relative rounded-[6px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Suspend / Block</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[4px] relative rounded-[6px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Delete Account</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function CardActionsFooter2() {
  return (
    <div className="bg-[rgba(248,250,252,0.7)] relative shrink-0 w-full" data-name="Card Actions Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Container179 />
        <Container180 />
      </div>
    </div>
  );
}

function Card3AmitVerma() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="CARD 3: Amit Verma">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <Container150 />
        <CardActionsFooter2 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Svg79() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6668 9.33333" width="11.6668">
            <path d={svgPaths.p1ebd0300} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg78() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg79 />
    </div>
  );
}

function SvgMargin27() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg78 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">sneha@example.com</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin27 />
        <Container183 />
      </div>
    </div>
  );
}

function Svg81() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p1f9c0120} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg80() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg81 />
    </div>
  );
}

function SvgMargin28() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg80 />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">+91 9870011223</p>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin28 />
        <Container185 />
      </div>
    </div>
  );
}

function Svg83() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%_10.48%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.41%_-6.25%]">
          <svg className="block size-full" fill="none" height="11.9499" preserveAspectRatio="none" viewBox="0 0 10.5 11.9499" width="10.5">
            <path d={svgPaths.p30912e00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="4.66667" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667" width="4.66667">
            <path d={svgPaths.p62d0400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg83 />
    </div>
  );
}

function SvgMargin29() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg82 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Mumbai, India</p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin29 />
        <Container187 />
      </div>
    </div>
  );
}

function Svg84() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3d3e1f80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg84 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Joined: 22 Apr 2025</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">3 days ago</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
        <Container189 />
        <Container190 />
      </div>
    </div>
  );
}

function ContactMetaDetails3() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.5)] content-stretch flex flex-col gap-[6px] items-start left-0 pb-[13px] pt-[12px] px-[20px] right-0 top-[182px]" data-name="Contact & Meta details">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container182 />
      <Container184 />
      <Container186 />
      <Container188 />
    </div>
  );
}

function Container191() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">9</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container191 />
        <Container192 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">PROGRAMS</p>
        </div>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">5</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container193 />
        <Container194 />
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">3</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container195 />
        <Container196 />
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">MENTORS</p>
        </div>
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">4</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container197 />
        <Container198 />
      </div>
    </div>
  );
}

function ActivityTelemetryQuad3() {
  return (
    <div className="absolute bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_65px] left-0 p-[16px] right-0 top-[293px]" data-name="Activity Telemetry Quad">
      <BackgroundBorder12 />
      <BackgroundBorder13 />
      <BackgroundBorder14 />
      <BackgroundBorder15 />
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">★ 9</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reviews:</p>
      </div>
      <Container201 />
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">82% Completed</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container200 />
      <Container202 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#94a3b8] h-[6px] left-0 right-[18%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function ProfileCompletionProgressRating3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[8px] right-0 top-[463px]" data-name="Profile Completion Progress & Rating">
      <Container199 />
      <Background16 />
    </div>
  );
}

function Container203() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Lifetime Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹16,400</p>
        </div>
      </div>
    </div>
  );
}

function LifetimeSpendingCallout3() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex items-center justify-between left-[20px] pl-[13px] pr-[13.01px] py-[13px] right-[20px] rounded-[12px] top-[517px]" data-name="Lifetime Spending Callout">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container203 />
      <Container204 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#0284c7] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">BASIC TIER</p>
      </div>
    </div>
  );
}

function BannerAccentWithMembershipBadge3() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#1e293b] h-[80px] items-start justify-end left-0 p-[14px] right-0 to-[#0c4a6e] top-0" data-name="Banner Accent with Membership Badge">
      <Background17 />
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(134.58319381370177deg, rgb(236, 72, 153) 0%, rgb(225, 29, 72) 100%)" }} data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[28px]">SK</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container205() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <BackgroundBorderShadow3 />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[3.99px] rounded-[9999px] size-[14px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Sneha Kapoor</p>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">@snehakapoor</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic text-[#475569] text-[12px] text-center top-[23.75px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">Marketing professional exploring career</p>
        <p className="leading-[16.5px]">coaching, personal branding, and…</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container207 />
        <Container208 />
        <Container209 />
      </div>
    </div>
  );
}

function ProfileInfoAvatarHeader3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pb-[17px] px-[20px] right-0 top-[40px]" data-name="Profile Info & Avatar Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container205 />
      <Container206 />
    </div>
  );
}

function Container181() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactMetaDetails3 />
        <ActivityTelemetryQuad3 />
        <ProfileCompletionProgressRating3 />
        <LifetimeSpendingCallout3 />
        <BannerAccentWithMembershipBadge3 />
        <ProfileInfoAvatarHeader3 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[8px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">View Dossier</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 w-[129.67px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Edit Profile</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button18 />
        <Button19 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Suspend / Block</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.67px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Delete Account</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button20 />
        <Button21 />
      </div>
    </div>
  );
}

function CardActionsFooter3() {
  return (
    <div className="bg-[rgba(248,250,252,0.7)] relative shrink-0 w-full" data-name="Card Actions Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Container210 />
        <Container211 />
      </div>
    </div>
  );
}

function Card4SnehaKapoor() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 4: Sneha Kapoor">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <Container181 />
        <CardActionsFooter3 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Svg86() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6668 9.33333" width="11.6668">
            <path d={svgPaths.p1ebd0300} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg85() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg86 />
    </div>
  );
}

function SvgMargin30() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg85 />
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">rohan.mehta@example.com</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin30 />
        <Container214 />
      </div>
    </div>
  );
}

function Svg88() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p1f9c0120} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg87() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg88 />
    </div>
  );
}

function SvgMargin31() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg87 />
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">+91 9898989898</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin31 />
        <Container216 />
      </div>
    </div>
  );
}

function Svg90() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%_10.48%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.41%_-6.25%]">
          <svg className="block size-full" fill="none" height="11.9499" preserveAspectRatio="none" viewBox="0 0 10.5 11.9499" width="10.5">
            <path d={svgPaths.p30912e00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="4.66667" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667" width="4.66667">
            <path d={svgPaths.p62d0400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg89() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg90 />
    </div>
  );
}

function SvgMargin32() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg89 />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Delhi, India</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin32 />
        <Container218 />
      </div>
    </div>
  );
}

function Svg91() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3d3e1f80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg91 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Joined: 14 May 2025</p>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">● 2 min ago</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] pt-[4px] relative size-full">
          <Container220 />
          <Container221 />
        </div>
      </div>
    </div>
  );
}

function ContactMetaDetails4() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.5)] content-stretch flex flex-col gap-[6px] items-start left-0 pb-[13px] pt-[12px] px-[20px] right-0 top-[182px]" data-name="Contact & Meta details">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container213 />
      <Container215 />
      <Container217 />
      <Container219 />
    </div>
  );
}

function Container222() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container223() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">34</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container222 />
        <Container223 />
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">PROGRAMS</p>
        </div>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">14</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container224 />
        <Container225 />
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">7</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container226 />
        <Container227 />
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">MENTORS</p>
        </div>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">8</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container228 />
        <Container229 />
      </div>
    </div>
  );
}

function ActivityTelemetryQuad4() {
  return (
    <div className="absolute bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_65px] left-0 p-[16px] right-0 top-[293px]" data-name="Activity Telemetry Quad">
      <BackgroundBorder16 />
      <BackgroundBorder17 />
      <BackgroundBorder18 />
      <BackgroundBorder19 />
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">★ 22</p>
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reviews:</p>
      </div>
      <Container232 />
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">98% Completed</p>
      </div>
    </div>
  );
}

function Container230() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container231 />
          <Container233 />
        </div>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#14b8a6] h-[6px] left-0 right-[2%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function ProfileCompletionProgressRating4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[8px] right-0 top-[463px]" data-name="Profile Completion Progress & Rating">
      <Container230 />
      <Background18 />
    </div>
  );
}

function Container234() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#134e4a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Lifetime Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#134e4a] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹94,500</p>
        </div>
      </div>
    </div>
  );
}

function LifetimeSpendingCallout4() {
  return (
    <div className="absolute bg-[rgba(240,253,250,0.6)] content-stretch flex items-center justify-between left-[20px] pl-[13px] pr-[13.01px] py-[13px] right-[20px] rounded-[12px] top-[517px]" data-name="Lifetime Spending Callout">
      <div aria-hidden className="absolute border border-[#ccfbf1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container234 />
      <Container235 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#0d9488] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PRO MENTEE</p>
      </div>
    </div>
  );
}

function BannerAccentWithMembershipBadge4() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#0f172a] h-[80px] items-start justify-end left-0 p-[14px] right-0 to-[#042f2e] top-0 via-1/2 via-[#1e1b4b]" data-name="Banner Accent with Membership Badge">
      <Background19 />
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(137.85561655618076deg, rgb(8, 145, 178) 0%, rgb(29, 78, 216) 100%)" }} data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[28px]">RM</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container236() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <BackgroundBorderShadow4 />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[3.99px] rounded-[9999px] size-[14px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Rohan Mehta</p>
      </div>
    </div>
  );
}

function Svg93() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[10%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.7998" preserveAspectRatio="none" viewBox="0 0 12.7998 12.7998" width="12.7998">
          <path clipRule="evenodd" d={svgPaths.p34040a20} fill="#3B82F6" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg92() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg93 />
    </div>
  );
}

function SvgMargin33() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[6px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg92 />
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <SvgMargin33 />
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">@rohanmehta</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[41px] leading-[0] not-italic overflow-clip relative shrink-0 text-[#475569] text-[12px] text-center w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-1/2 top-[15.5px]">
        <p className="leading-[16.5px]">Entrepreneur passionate about startup</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%-0.47px)] overflow-hidden text-ellipsis top-[32px]">
        <p className="leading-[16.5px]">growth, strategic leadership, and venture</p>
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container238 />
        <Container239 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function ProfileInfoAvatarHeader4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pb-[17px] px-[20px] right-0 top-[40px]" data-name="Profile Info & Avatar Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container236 />
      <Container237 />
    </div>
  );
}

function Container212() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactMetaDetails4 />
        <ActivityTelemetryQuad4 />
        <ProfileCompletionProgressRating4 />
        <LifetimeSpendingCallout4 />
        <BannerAccentWithMembershipBadge4 />
        <ProfileInfoAvatarHeader4 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative rounded-[8px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">View Dossier</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0 w-[129.67px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Edit Profile</p>
      </div>
    </div>
  );
}

function Container240() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start justify-center relative size-full">
        <Button22 />
        <Button23 />
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.66px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Suspend / Block</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-col items-center justify-center py-[4px] relative rounded-[6px] shrink-0 w-[129.67px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Delete Account</p>
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-start justify-center relative size-full">
        <Button24 />
        <Button25 />
      </div>
    </div>
  );
}

function CardActionsFooter4() {
  return (
    <div className="bg-[rgba(248,250,252,0.7)] relative shrink-0 w-full" data-name="Card Actions Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Container240 />
        <Container241 />
      </div>
    </div>
  );
}

function Card5RohanMehta() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 5: Rohan Mehta">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <Container212 />
        <CardActionsFooter4 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Svg95() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.56%]">
          <svg className="block size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 11.6668 9.33333" width="11.6668">
            <path d={svgPaths.p1ebd0300} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg94() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg95 />
    </div>
  );
}

function SvgMargin34() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg94 />
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">neha.singh@example.com</p>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin34 />
        <Container244 />
      </div>
    </div>
  );
}

function Svg97() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p1f9c0120} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg96() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg97 />
    </div>
  );
}

function SvgMargin35() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg96 />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">+91 9765432101</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin35 />
        <Container246 />
      </div>
    </div>
  );
}

function Svg99() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[14px]" data-name="SVG">
      <div className="absolute inset-[12.5%_16.67%_10.48%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.41%_-6.25%]">
          <svg className="block size-full" fill="none" height="11.9499" preserveAspectRatio="none" viewBox="0 0 10.5 11.9499" width="10.5">
            <path d={svgPaths.p30912e00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_37.5%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="4.66667" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667" width="4.66667">
            <path d={svgPaths.p62d0400} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg98() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Svg99 />
    </div>
  );
}

function SvgMargin36() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start pr-[8px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg98 />
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Bengaluru, India</p>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <SvgMargin36 />
        <Container248 />
      </div>
    </div>
  );
}

function Svg100() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p3d3e1f80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg100 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">Joined: 30 Jan 2025</p>
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">● 18 min ago</p>
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[4px] relative size-full">
        <Container250 />
        <Container251 />
      </div>
    </div>
  );
}

function ContactMetaDetails5() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.5)] content-stretch flex flex-col gap-[6px] items-start left-0 pb-[13px] pt-[12px] px-[20px] right-[-0.01px] top-[182px]" data-name="Contact & Meta details">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container243 />
      <Container245 />
      <Container247 />
      <Container249 />
    </div>
  );
}

function Container252() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">25</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder20() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container252 />
        <Container253 />
      </div>
    </div>
  );
}

function Container254() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">PROGRAMS</p>
        </div>
      </div>
    </div>
  );
}

function Container255() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">12</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder21() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container254 />
        <Container255 />
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
}

function Container257() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">6</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder22() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container256 />
        <Container257 />
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center uppercase whitespace-nowrap">
          <p className="leading-[15px]">MENTORS</p>
        </div>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[28px]">7</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder23() {
  return (
    <div className="bg-[#f8fafc] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[11px] relative size-full">
        <Container258 />
        <Container259 />
      </div>
    </div>
  );
}

function ActivityTelemetryQuad5() {
  return (
    <div className="absolute bg-white gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_65px] left-0 p-[16px] right-[-0.01px] top-[293px]" data-name="Activity Telemetry Quad">
      <BackgroundBorder20 />
      <BackgroundBorder21 />
      <BackgroundBorder22 />
      <BackgroundBorder23 />
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">★ 16</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reviews:</p>
      </div>
      <Container262 />
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">92% Completed</p>
      </div>
    </div>
  );
}

function Container260() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container261 />
      <Container263 />
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#f1f5f9] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#2563eb] h-[6px] left-0 right-[8%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function ProfileCompletionProgressRating5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[8px] right-[-0.01px] top-[463px]" data-name="Profile Completion Progress & Rating">
      <Container260 />
      <Background20 />
    </div>
  );
}

function Container264() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Lifetime Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e3a8a] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹64,200</p>
        </div>
      </div>
    </div>
  );
}

function LifetimeSpendingCallout5() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.6)] content-stretch flex items-center justify-between left-[20px] p-[13px] right-[19.99px] rounded-[12px] top-[517px]" data-name="Lifetime Spending Callout">
      <div aria-hidden className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container264 />
      <Container265 />
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PREMIUM</p>
      </div>
    </div>
  );
}

function BannerAccentWithMembershipBadge5() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#0f172a] h-[80px] items-start justify-end left-0 p-[14px] right-[-0.01px] to-[#0f172a] top-0 via-1/2 via-[rgba(69,26,3,0.8)]" data-name="Banner Accent with Membership Badge">
      <Background21 />
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="relative rounded-[9999px] shrink-0" style={{ backgroundImage: "linear-gradient(135.26928988518284deg, rgb(5, 150, 105) 0%, rgb(17, 94, 89) 100%)" }} data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[28px]">NS</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container266() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <BackgroundBorderShadow5 />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[4px] rounded-[9999px] size-[14px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Neha Singh</p>
      </div>
    </div>
  );
}

function Svg102() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[16px]" data-name="SVG">
      <div className="absolute inset-[10%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.7998" preserveAspectRatio="none" viewBox="0 0 12.7998 12.7998" width="12.7998">
          <path clipRule="evenodd" d={svgPaths.p34040a20} fill="#3B82F6" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg101() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Svg102 />
    </div>
  );
}

function SvgMargin37() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[6px] relative shrink-0 w-[22px]" data-name="SVG:margin">
      <Svg101 />
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <SvgMargin37 />
    </div>
  );
}

function Container269() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">@nehasingh</p>
      </div>
    </div>
  );
}

function Container270() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.01px)] not-italic text-[#475569] text-[12px] text-center top-[23.75px] whitespace-nowrap">
        <p className="leading-[16.5px] mb-0">HR leader helping professionals improve</p>
        <p className="leading-[16.5px]">communication, cross-functional…</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container268 />
        <Container269 />
        <Container270 />
      </div>
    </div>
  );
}

function ProfileInfoAvatarHeader5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 pb-[17px] px-[20px] right-[-0.01px] top-[40px]" data-name="Profile Info & Avatar Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container266 />
      <Container267 />
    </div>
  );
}

function Container242() {
  return (
    <div className="h-[579px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ContactMetaDetails5 />
        <ActivityTelemetryQuad5 />
        <ProfileCompletionProgressRating5 />
        <LifetimeSpendingCallout5 />
        <BannerAccentWithMembershipBadge5 />
        <ProfileInfoAvatarHeader5 />
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#2563eb] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">View Dossier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Edit Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container271() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button26 />
        <Button27 />
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[4px] relative rounded-[6px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Suspend / Block</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[#fff1f2] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[4px] relative rounded-[6px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#be123c] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[16.5px]">Delete Account</p>
      </div>
    </div>
  );
}

function Container272() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Button28 />
        <Button29 />
      </div>
    </div>
  );
}

function CardActionsFooter5() {
  return (
    <div className="bg-[rgba(248,250,252,0.7)] relative shrink-0 w-full" data-name="Card Actions Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Container271 />
        <Container272 />
      </div>
    </div>
  );
}

function Card6NehaSingh() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="CARD 6: Neha Singh">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <Container242 />
        <CardActionsFooter5 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function SectionHighDensity3ColumnGridRepresentingThe6UsersInTheOriginalScreenshot() {
  return (
    <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__676.50px_676.50px] relative shrink-0 w-full" data-name="Section - High Density 3-Column Grid representing the 6 users in the original screenshot">
      <Card1RahulSharma />
      <Card2PriyaPatel />
      <Card3AmitVerma />
      <Card4SnehaKapoor />
      <Card5RohanMehta />
      <Card6NehaSingh />
    </div>
  );
}

function Container273() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
          <p>
            <span className="leading-[16px]">{`Showing `}</span>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#1e293b]">1 – 6</span>
            <span className="leading-[16px]">{` of `}</span>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#1e293b]">24,856</span>
            <span className="leading-[16px]">{` registered users in cluster`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-50 px-[11px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Previous</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-[#2563eb] content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[4px] relative shrink-0 w-[36px]" data-name="Button:margin">
      <Button31 />
    </div>
  );
}

function Button32() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[4px] relative shrink-0 w-[36px]" data-name="Button:margin">
      <Button32 />
    </div>
  );
}

function Button33() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[4px] relative shrink-0 w-[36px]" data-name="Button:margin">
      <Button33 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] pr-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">...</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center pb-[8.5px] pt-[7.5px] px-px relative rounded-[8px] shrink-0 w-[32.31px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">4,142</p>
      </div>
    </div>
  );
}

function ButtonMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pl-[4px] relative shrink-0 w-[36px]" data-name="Button:margin">
      <Button34 />
    </div>
  );
}

function Button35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[11px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Next</p>
      </div>
    </div>
  );
}

function ButtonMargin7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button:margin">
      <Button35 />
    </div>
  );
}

function Container274() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button30 />
        <ButtonMargin3 />
        <ButtonMargin4 />
        <ButtonMargin5 />
        <Margin10 />
        <ButtonMargin6 />
        <ButtonMargin7 />
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Jump to page</p>
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container279 />
    </div>
  );
}

function RectangleAlignStretch() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
        <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container278 />
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[6px] shrink-0 w-[56px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[5px] relative rounded-[inherit] size-full">
        <Container277 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function InputMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0 w-[64px]" data-name="Input:margin">
      <Input2 />
    </div>
  );
}

function Button36() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Go</p>
      </div>
    </div>
  );
}

function ButtonMargin8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button36 />
    </div>
  );
}

function Container275() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container276 />
        <InputMargin />
        <ButtonMargin8 />
      </div>
    </div>
  );
}

function PaginationFooter() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="PaginationFooter">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[25px] py-[17px] relative size-full">
          <Container273 />
          <Container274 />
          <Container275 />
        </div>
      </div>
    </div>
  );
}

function MainScrollablePageContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Main - ScrollablePageContent">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <SectionPageTitleAndHero />
        <Section6MetricsMatchingSnapshotAndRequirements />
        <SectionAdvancedControlsBar />
        <SectionHighDensity3ColumnGridRepresentingThe6UsersInTheOriginalScreenshot />
        <PaginationFooter />
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[2095px] isolate items-start min-w-px relative z-[1]" data-name="MainContentCanvas">
      <HeaderGlobalCommandBar />
      <MainScrollablePageContent />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex isolate items-start relative size-full" data-name="Html → Body">
      <AsidePersistentExecutiveDarkLeftNavigationConsole0A192F />
      <MainContentCanvas />
    </div>
  );
}