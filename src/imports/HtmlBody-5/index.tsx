import svgPaths from "./svg-fot9hw3cg6";
import imgSarahJohnsonPortrait from "./d29aa7a66e2f88d8792511edf29180e6e286a441.png";
import imgSarahJohnson from "./874a9d1245b16655683144e843f20184ce1ed8a9.png";

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">/</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Mentor Portal</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">/</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Account & Profile Settings`}</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Container1 />
      <Link1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex gap-[6px] items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#14b8a6] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[11px] whitespace-nowrap">
        <p className="leading-[16px]">ICF Studio v2.4 Live</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p28acb600} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Sync LinkedIn Data</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Nav />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function BreadcrumbsSecondaryUtilityBar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[11px] pt-[10px] right-0 top-[65px]" data-name="Breadcrumbs & Secondary Utility Bar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3cf62b00} fill="#2563EB" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e40af] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">{`Mentor Settings & Governance`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex gap-[8px] items-center px-[11px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#bfdbfe] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Svg1 />
      <Container6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a192f] text-[36px] tracking-[-0.9px] whitespace-nowrap">
        <p>
          <span className="leading-[40px]">{`Account & `}</span>
          <span className="[word-break:break-word] font-['Newsreader:Italic',sans-serif] font-normal italic leading-[40px] text-[#2563eb]">Profile Studio</span>
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Manage your executive mentorship profile, verified credentials, communication telemetry, directory</p>
        <p className="leading-[20px]">indexing, and account governance.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <BackgroundBorder1 />
        <Heading />
        <Container7 />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p17a56800} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p15816640} id="Vector_2" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[15px] py-[9px] relative rounded-[8px] shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">View Public Profile</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[15px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Discard</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p292ff0f0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Save Changes</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#2563eb] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Svg3 />
      <Container8 />
    </div>
  );
}

function ActionControls() {
  return (
    <div className="relative shrink-0" data-name="Action Controls">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Link2 />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function TopWorkspaceHeroHeader() {
  return (
    <div className="content-stretch flex items-end justify-between pb-[25px] relative shrink-0 w-full" data-name="Top Workspace Hero Header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container5 />
      <ActionControls />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Profile Information</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#2563eb] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[14px] relative size-full">
        <Container9 />
        <div className="bg-[#2563eb] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">{`Contact & Social`}</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Notification Telemetry</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">{`Privacy & Directory`}</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">{`Security & 2FA`}</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">{`Billing & Payouts`}</p>
        </div>
      </div>
    </div>
  );
}

function WorkspaceTabNavigationStrip() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspace Tab Navigation Strip">
      <div className="content-stretch flex gap-[24px] items-center overflow-auto pb-px relative rounded-[inherit] size-full">
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Profile Information</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] whitespace-nowrap">
        <p className="leading-[28px]">Public Vetted</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <Container12 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Update your executive mentorship identity, credentials, and executive summary.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading1 />
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-right tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">COMPLETENESS</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.5px] items-start pb-[2.5px] relative size-full">
        <Container15 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[16px]">94% • High Strength</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[15px]">94</p>
        </div>
      </div>
    </div>
  );
}

function ProfileCompletenessIndicator() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Profile Completeness Indicator">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[15px] py-[7px] relative size-full">
        <Container14 />
        <Border />
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Section Header">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[24px] relative size-full">
          <Container11 />
          <ProfileCompletenessIndicator />
        </div>
      </div>
    </div>
  );
}

function SarahJohnsonPortrait() {
  return (
    <div className="relative rounded-[9999px] shadow-[0px_0px_0px_4px_white,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[80px]" data-name="Sarah Johnson Portrait">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute h-[179.02%] left-0 max-w-none top-[-39.51%] w-full" src={imgSarahJohnsonPortrait} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <SarahJohnsonPortrait />
        <div className="absolute bg-[#14b8a6] bottom-[4px] right-[4px] rounded-[9999px] size-[16px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Executive Portrait</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">4.98 Rating (94 Reviews)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Recommended dimensions: 800x800px minimum. Square PNG or JPG under 5MB with neutral background.</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Change Photo</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Remove</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function AvatarAndPhotoManagementCard() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[12px] shrink-0 w-full" data-name="Avatar and Photo Management Card">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[17px] relative size-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p>
          <span className="leading-[16px]">{`FULL NAME `}</span>
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#ef4444]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">Sarah Johnson</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container22 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FullName() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Full Name">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p>
          <span className="leading-[16px]">{`COMPANY & EXECUTIVE TITLE `}</span>
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic text-[#ef4444]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">Google • Staff / Director PM</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[37px] pr-[15px] py-[9px] relative size-full">
          <Container24 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pb-[11.5px] pl-[12px] pt-[10.5px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">G</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container25 />
    </div>
  );
}

function CurrentCompanySeniorTitle() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Current Company & Senior Title">
      <Label1 />
      <Container23 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">{`DISPLAY HEADLINE & AUTHORITY STATEMENT`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`Helped 500+ Product Managers crack FAANG interviews & scale to VP Leadership.`}</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container26 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] w-full">
        <p className="leading-[16.5px]">Featured across executive discovery directories and search results.</p>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Headline">
      <Label2 />
      <Input2 />
      <Container27 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">{`CORE EXPERTISE & DOMAIN SPECIALIZATIONS`}</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#14b8a6] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">×</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[11px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Product Management</p>
        </div>
        <Button11 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#14b8a6] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">×</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] items-center px-[11px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Product Strategy</p>
        </div>
        <Button12 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#14b8a6] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">×</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[11px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Executive Leadership</p>
        </div>
        <Button13 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#14b8a6] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">×</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.01px] items-center px-[11px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Team Building</p>
        </div>
        <Button14 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#14b8a6] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">×</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[11px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#115e59] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">{`AI & Machine Learning`}</p>
        </div>
        <Button15 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">+ Add Tag</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[13px] relative size-full">
          <BackgroundBorder5 />
          <BackgroundBorder6 />
          <BackgroundBorder7 />
          <BackgroundBorder8 />
          <BackgroundBorder9 />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function ExpertiseTags() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Expertise Tags">
      <Label3 />
      <BackgroundBorder4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">{`LANGUAGES SPOKEN & DELIVERY FLUENCY`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">English (Native)</p>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Hindi (Fluent)</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+ Add Language</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Button:margin">
      <Button17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder10 />
      <BackgroundBorder11 />
      <ButtonMargin />
    </div>
  );
}

function Languages() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-4 self-start shrink-0" data-name="Languages">
      <Label4 />
      <Container28 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`EXECUTIVE BIO & MENTORSHIP PHILOSOPHY`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">138 / 600 words</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full whitespace-pre-wrap">
          <p className="leading-[22.75px] mb-0">{`Experienced Product Leader helping startups and enterprise teams build successful products. Sarah has worked with global teams across Google, Meta, and Spotify, `}</p>
          <p className="leading-[22.75px]">mentoring aspiring Product Managers, founders, and senior professionals navigating promotion cycles and architectural scale.</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[56.5px] pt-[9.875px] px-[15px] relative size-full">
          <Container31 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] w-full">
        <p className="leading-[16.5px]">Markdown formatting supported: Use **bold** for emphasis and * bullet points for key achievements.</p>
      </div>
    </div>
  );
}

function ExecutiveBioAbout() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-5 self-start shrink-0" data-name="Executive Bio / About">
      <Container29 />
      <Textarea />
      <Container32 />
    </div>
  );
}

function FormFieldsGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_____60px_82.50px_76px_48px_164px] relative shrink-0 w-full" data-name="Form Fields Grid">
      <FullName />
      <CurrentCompanySeniorTitle />
      <Headline />
      <ExpertiseTags />
      <Languages />
      <ExecutiveBioAbout />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <AvatarAndPhotoManagementCard />
        <FormFieldsGrid />
      </div>
    </div>
  );
}

function SectionProfileInfo() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="SectionProfileInfo">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <SectionHeader />
        <Container16 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.03),0px_2px_4px_-2px_rgba(15,23,42,0.03)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[18px] w-full">
          <p className="leading-[28px]">{`Contact Information & Direct Endpoints`}</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[16px]">Manage your communication channels, SMS webhook triggers, and administrative contact.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-[21px] pt-[20px] px-[24px] relative size-full">
        <Heading3 />
        <Container33 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PRIMARY EMAIL ADDRESS</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2e4af7c0} fill="#0D9488" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex gap-[4px] items-center px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Svg4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Verified</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <BackgroundBorder12 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">mentor@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-bl-[8px] rounded-tl-[8px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[15px] py-[9px] relative size-full">
          <Container37 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-center justify-center pb-[11.5px] pl-[14px] pr-[15px] pt-[10.5px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Change</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Input3 />
      <Button18 />
    </div>
  );
}

function EmailAddressWithVerifiedPill() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Email Address with Verified Pill">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PHONE NUMBER (SMS RELAYS)</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Used for 2FA SMS</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">+1 (555) 382-9104</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container40 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PhoneNumberWith2FaStatus() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch pb-[4.5px] relative row-1 self-start shrink-0" data-name="Phone Number with 2FA status">
      <Container38 />
      <Input4 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">{`LOCATION & PRIMARY BASE`}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">San Francisco, CA, United States</p>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container42 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[12px] top-[10px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">PST (UTC-8)</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input5 />
      <Container43 />
    </div>
  );
}

function LocationTimezone() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Location & Timezone">
      <Label8 />
      <Container41 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">EXECUTIVE PORTFOLIO / PERSONAL URL</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`https://sarahjohnson.io`}</p>
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container44 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PersonalWebsite() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Personal Website">
      <Label9 />
      <Input6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[1166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__65px_60px] relative size-full">
        <EmailAddressWithVerifiedPill />
        <PhoneNumberWith2FaStatus />
        <LocationTimezone />
        <PersonalWebsite />
      </div>
    </div>
  );
}

function SectionContactInfo() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="SectionContactInfo">
      <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip pb-[25px] pt-px px-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder />
        <Container34 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.03),0px_2px_4px_-2px_rgba(15,23,42,0.03)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">{`Social & Executive Credentials`}</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Connect your external presence for corporate vetting and badge authentication.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading4 />
        <Container46 />
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">3 of 5 Connected</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder1() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[24px] relative size-full">
          <Container45 />
          <BackgroundBorder13 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0a66c2] content-stretch flex items-center justify-center pb-px relative rounded-[4px] shrink-0 size-[16px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">in</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Background />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">LinkedIn Profile</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p1d6dc100} fill="#14B8A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Container">
      <Svg5 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d9488] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">Verified</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Label">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`https://linkedin.com/in/sarah-johnson-executive`}</p>
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container50 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="LinkedIn">
      <Label10 />
      <Input7 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center pb-px relative rounded-[4px] shrink-0 size-[16px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['FreeSerif:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">𝕏</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Label">
      <Background1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Twitter / X Handle</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`https://x.com/sarahjohnson_pm`}</p>
        </div>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container51 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function XTwitter() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="X (Twitter)">
      <Label11 />
      <Input8 />
    </div>
  );
}

function Background2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Background">
          <rect fill="#DC2626" height="16" rx="4" width="16" />
          <path d={svgPaths.p387e98c8} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Label">
      <Background2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">YouTube or Executive Podcast</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`https://youtube.com/@TheProductMindset`}</p>
        </div>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container52 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function YouTubePodcast() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="YouTube / Podcast">
      <Label12 />
      <Input9 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center pb-px relative rounded-[4px] shrink-0 size-[16px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">gh</p>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Label">
      <Background3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">GitHub Organization / Repository</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`https://github.com/sarah-johnson-tech`}</p>
        </div>
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container53 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function GitHub() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="GitHub">
      <Label13 />
      <Input10 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f59e0b] content-stretch flex items-center justify-center pb-px relative rounded-[4px] shrink-0 size-[16px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['FreeSans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">✎</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Label">
      <Background4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Substack Newsletter / Featured Writing</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
          <p className="leading-[20px]">{`https://sarahproductlead.substack.com`}</p>
        </div>
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[15px] py-[9px] relative size-full">
          <Container54 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubstackThoughtLeadership() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Substack / Thought Leadership">
      <Label14 />
      <Input11 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[1166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___60px_60px_60px] relative size-full">
        <LinkedIn />
        <XTwitter />
        <YouTubePodcast />
        <GitHub />
        <SubstackThoughtLeadership />
      </div>
    </div>
  );
}

function SectionSocialLinks() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="SectionSocialLinks">
      <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip pb-[25px] pt-px px-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder1 />
        <Container47 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.03),0px_2px_4px_-2px_rgba(15,23,42,0.03)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">{`Notification & Dispatch Telemetry`}</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Control operational triggers, mentee updates, and platform performance digests.</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading5 />
        <Container56 />
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[9px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Real-time Webhook Active</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder2() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[24px] relative size-full">
          <Container55 />
          <BackgroundBorder14 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Email Notifications</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Receive executive booking requests, mentee milestone submissions, and vital account alerts.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#0d9488] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Toggle1EmailNotifications() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Toggle 1: Email Notifications">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container58 />
          <Label15 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Booking Notifications</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Instant SMS and mobile push notification whenever a high-velocity sprint or retainer is booked.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#0d9488] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Toggle2BookingNotifications() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Toggle 2: Booking Notifications">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container61 />
          <Label16 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Session Reminders & Calendar Pings`}</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Dispatch calendar pings 1 hour and 15 minutes before 1-on-1 advisory sessions.</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#0d9488] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Toggle3SessionReminders() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Toggle 3: Session Reminders">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container64 />
          <Label17 />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Curated Executive Briefings</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Quarterly ICF mentorship benchmarks, compensation indexes, and invite-only networking summits.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#e2e8f0] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[2px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Toggle4MarketingEmails() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Toggle 4: Marketing Emails">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container67 />
          <Label18 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Weekly Telemetry & Payout Summary`}</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Every Monday: Mentee feedback ratings, retainer utilization, and gross Stripe payout forecasts.</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#0d9488] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Toggle5WeeklyReports() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Toggle 5: Weekly Reports">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container70 />
          <Label19 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Toggle1EmailNotifications />
        <Toggle2BookingNotifications />
        <Toggle3SessionReminders />
        <Toggle4MarketingEmails />
        <Toggle5WeeklyReports />
      </div>
    </div>
  );
}

function SectionNotificationTelemetry() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="SectionNotificationTelemetry">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder2 />
        <Container57 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.03),0px_2px_4px_-2px_rgba(15,23,42,0.03)]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">{`Privacy & Directory Visibility`}</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Control indexing parameters and what prospective corporate mentees see.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading6 />
        <Container74 />
      </div>
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="bg-[#f0fdfa] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[11px] py-[5px] relative size-full">
        <div className="bg-[#14b8a6] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Live in Global Directory</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder3() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[24px] relative size-full">
          <Container73 />
          <BackgroundBorder15 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Public Profile Visibility</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Allow your profile to appear across coachcoaching.com marketplace and category landing pages.</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#0d9488] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Item1PublicProfile() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item 1: Public Profile">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container76 />
          <Label20 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Search Engine Indexing</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Allow Google, Bing, and external aggregators to index your verified credentials dossier.</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#0d9488] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Item2SearchVisibility() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item 2: Search Visibility">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container79 />
          <Label21 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Show Email Address Publicly</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Display your verified email directly on your public bio card for recruiter inquiries.</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#e2e8f0] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[2px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Item3ShowEmailAddress() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item 3: Show Email Address">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container82 />
          <Label22 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Show Phone Number Publicly</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Expose raw direct phone number. (Recommended off to safeguard executive privacy).</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pr-[16px] relative size-full">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#e2e8f0] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[2px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Item4ShowPhoneNumber() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item 4: Show Phone Number">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[15px] relative size-full">
          <Container85 />
          <Label23 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <Item1PublicProfile />
        <Item2SearchVisibility />
        <Item3ShowEmailAddress />
        <Item4ShowPhoneNumber />
      </div>
    </div>
  );
}

function SectionPrivacyVisibility() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="SectionPrivacyVisibility">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder3 />
        <Container75 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.03),0px_2px_4px_-2px_rgba(15,23,42,0.03)]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[18px] w-full">
          <p className="leading-[28px]">{`Security, Keys & Active Sessions`}</p>
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
          <p className="leading-[16px]">Protect high-value payout accounts with hardware keys, TOTP tokens, and session auditing.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder4() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-[21px] pt-[20px] px-[24px] relative size-full">
        <Heading7 />
        <Container88 />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p2a9b4880} id="Vector" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Background">
      <Svg6 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-start pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Password Management</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Last changed 42 days ago. Minimum 14 characters with uppercase, symbol and digit.</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start relative size-full">
        <Margin />
        <Container91 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Update Password</p>
        </div>
      </div>
    </div>
  );
}

function PasswordRow() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Password Row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container90 />
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.pbf685c0} id="Vector" stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Background">
      <Svg7 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-start pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background6 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Two-Factor Authentication (2FA)</p>
      </div>
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Enabled (Authenticator App)</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <BackgroundBorder16 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">{`Enforces biometric or 6-digit TOTP confirmation on payout withdrawals & login.`}</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container96 />
      <Container98 />
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start relative size-full">
        <Margin1 />
        <Container95 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Manage Keys</p>
        </div>
      </div>
    </div>
  );
}

function Component2FaRow() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="2FA Row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container94 />
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2121af96} id="Vector" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ACTIVE AUTHORIZED SESSIONS</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Svg8 />
      <Container101 />
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Revoke Other Sessions</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container100 />
        <Button21 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[0px] whitespace-nowrap">
        <p className="leading-[16px] mb-0 text-[12px]">{`Apple MacBook Pro 16" • Chrome 124`}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#94a3b8] text-[11px]">San Francisco, CA • 192.0.2.1 (Current active session)</p>
      </div>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">This Device</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <BackgroundBorder17 />
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[0px] whitespace-nowrap">
          <p className="leading-[16px] mb-0 text-[12px]">Apple iPhone 15 Pro • Safari iOS</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#94a3b8] text-[11px]">San Francisco, CA • Last active 3 hours ago</p>
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Revoke</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container105 />
      <Button22 />
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container103 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function ConnectedDevicesRow() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Connected Devices Row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
        <Container99 />
        <Container102 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <PasswordRow />
        <Component2FaRow />
        <ConnectedDevicesRow />
      </div>
    </div>
  );
}

function SectionSecuritySettings() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="SectionSecuritySettings">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder4 />
        <Container89 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(15,23,42,0.03),0px_2px_4px_-2px_rgba(15,23,42,0.03)]" />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p23f03200} fill="#B91C1C" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">{`Danger Zone & Irreversible Actions`}</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Svg9 />
        <Heading8 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(220,38,38,0.9)] w-full">
          <p className="leading-[16px]">Permanent account termination and advisory license revocation.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder5() {
  return (
    <div className="bg-[rgba(254,242,242,0.8)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#fee2e2] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-[21px] pt-[20px] px-[24px] relative size-full">
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Pause Mentorship Availability</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Temporarily hide from the public directory while preserving all client reviews and cohort archives.</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container110 />
        <Container111 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">{`Logout & Pause Account`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#fee2e2] border-b border-solid inset-0 pointer-events-none" />
      <Container109 />
      <Button23 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Deactivate & Delete Mentor Account`}</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Once deactivated, all active subscriptions will be refunded and verified badges will become void.</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#dc2626] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Deactivate Account</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <Button24 />
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <HorizontalBorder1 />
        <Container112 />
      </div>
    </div>
  );
}

function SectionDangerZone() {
  return (
    <div className="bg-[rgba(254,242,242,0.4)] relative rounded-[12px] shrink-0 w-full" data-name="SectionDangerZone">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder5 />
        <Container108 />
      </div>
      <div aria-hidden className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">All cloud sync checkpoints operational. Last saved: 2 mins ago.</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#14b8a6] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container117 />
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Cancel</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Save All Preferences</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button25 />
        <Button26 />
      </div>
    </div>
  );
}

function BottomFloatingStickySaveToolbarOnMobile() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="Bottom Floating / Sticky Save Toolbar on Mobile">
      <div aria-hidden className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container116 />
      <Container118 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <SectionProfileInfo />
      <SectionContactInfo />
      <SectionSocialLinks />
      <SectionNotificationTelemetry />
      <SectionPrivacyVisibility />
      <SectionSecuritySettings />
      <SectionDangerZone />
      <BottomFloatingStickySaveToolbarOnMobile />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 max-w-[1280px] p-[32px] right-0 top-[108px]" data-name="MainContent">
      <TopWorkspaceHeroHeader />
      <WorkspaceTabNavigationStrip />
      <Container10 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a192f] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">C</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">CoachCoaching</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background7 />
      <Container122 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[19.5px] mb-0">The premier network of accredited executive</p>
        <p className="leading-[19.5px] mb-0">mentors and high-velocity digital leaders</p>
        <p className="leading-[19.5px] mb-0">accelerating technical, executive, and founder</p>
        <p className="leading-[19.5px]">careers.</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2dafe2e0} fill="#2DD4BF" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2dd4bf] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">ICF Accredited Network</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(30,41,59,0.8)] content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Svg10 />
      <Container124 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] w-full">
        <p className="leading-[16.5px] mb-0">Institutional Contact:</p>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16.5px] text-[#cbd5e1] underline">support@coachcoaching.com</p>
      </div>
    </div>
  );
}

function Col1BrandIcfAccreditation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Col 1: Brand & ICF Accreditation">
      <Container121 />
      <Container123 />
      <OverlayBorder />
      <Container125 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">PLATFORM</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Browse Mentors</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Tech Leaders</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Executive Coaches</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Career Transitions</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Free Chemistry Calls</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Col2Platform() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[73px] relative" data-name="Col 2: Platform">
      <Heading9 />
      <List />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">FOR MENTORS</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Apply to Coach</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Earnings Calculator</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Mentor Guidelines</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Community Standards</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Certification Studio</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Col3ForMentors() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[73px] relative" data-name="Col 3: For Mentors">
      <Heading10 />
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">{`RESOURCES & TRUST`}</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">ICF Standards</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Mentorship FAQs</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Career Guides</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Salary Benchmarks</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">{`Privacy Policy & Terms`}</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function Col4ResourcesTrust() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px pb-[73px] relative" data-name="Col 4: Resources & Trust">
      <Heading11 />
      <List2 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Col1BrandIcfAccreditation />
      <Col2Platform />
      <Col3ForMentors />
      <Col4ResourcesTrust />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">All systems operational</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">• 500+ Mentors Online</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#2dd4bf] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container127 />
        <Container128 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Substack</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">YouTube</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">© 2025 CoachCoaching Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function BottomAttributionStatus() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="Bottom Attribution & Status">
      <div aria-hidden className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <Container126 />
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container119() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[32px] py-[48px] relative size-full">
        <Container120 />
        <BottomAttributionStatus />
      </div>
    </div>
  );
}

function GlobalFooter() {
  return (
    <div className="bg-[#0a192f] content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="GlobalFooter">
      <div aria-hidden className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <Container119 />
    </div>
  );
}

function GlobalFooterMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[80px] right-0 top-[3858.5px]" data-name="GlobalFooter:margin">
      <GlobalFooter />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Newsreader:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#2dd4bf] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">C</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#0a192f] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[32px] items-center justify-center relative rounded-[8px] shrink-0 w-[30.17px]" data-name="Background+Shadow">
      <Container132 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">CoachCoaching</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container135 />
      <div className="bg-[#14b8a6] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[10px] mb-0">LEARN • CONNECT •</p>
        <p className="leading-[10px]">GROW</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container134 />
      <Container136 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center py-[4px] relative rounded-[6px] shrink-0" data-name="Link">
      <BackgroundShadow />
      <Container133 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27.09px] relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Find</p>
        <p className="leading-[20px]">Mentors</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[42.51px] relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">{`Programs &`}</p>
        <p className="leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[19.5px] relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">For</p>
        <p className="leading-[20px]">Enterprise</p>
      </div>
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex flex-col items-start px-[7px] py-[3px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#99f6e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f766e] text-[10px] whitespace-nowrap">
        <p className="leading-[20px]">Active</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex gap-[47.6px] items-center relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a192f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Become a</p>
        <p className="leading-[20px]">Mentor</p>
      </div>
      <BackgroundBorder18 />
    </div>
  );
}

function PrimaryNavigationLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Primary Navigation Links">
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function PlatformLogoMonogram() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Platform Logo & Monogram">
      <Link6 />
      <PrimaryNavigationLinks />
    </div>
  );
}

function Container137() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
          <p className="leading-[normal]">Search mentors, skills...</p>
        </div>
      </div>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-[224px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] pl-[33px] pr-[49px] pt-[7px] relative rounded-[inherit] size-full">
        <Container137 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute left-[10px] size-[14px] top-[8px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p198e9c0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start px-[7px] py-[3px] right-[8px] rounded-[4px] top-[4.5px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">⌘K</p>
      </div>
    </div>
  );
}

function QuickSearch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Quick Search">
      <Input12 />
      <Svg11 />
      <BackgroundBorder19 />
    </div>
  );
}

function LinkLogInLink() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[9.22px] relative shrink-0" data-name="Link - Log In link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Log</p>
        <p className="leading-[20px]">In</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[14px] relative shrink-0 w-[11.58px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 11.58 14" width="11.58">
        <g clipPath="url(#clip0_0_4)" id="SVG">
          <path d={svgPaths.p2e3a3f00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.965" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="14" width="11.58" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkPrimaryCtaButton() {
  return (
    <div className="bg-[#2563eb] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center pl-[16px] pr-[43.47px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link - Primary CTA Button">
      <Svg12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px] mb-0">Find Your</p>
        <p className="leading-[16px]">Mentor</p>
      </div>
    </div>
  );
}

function SarahJohnson() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Sarah Johnson">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]" src={imgSarahJohnson} />
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shadow-[0px_0px_0px_2px_#e2e8f0] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <SarahJohnson />
        <div className="absolute bg-[#14b8a6] bottom-0 right-0 rounded-[9999px] size-[10px]" data-name="Background+Border">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function MentorAvatarMenu() {
  return (
    <div className="content-stretch flex items-center pl-[9px] relative shrink-0" data-name="Mentor Avatar Menu">
      <div aria-hidden className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
      <Button27 />
    </div>
  );
}

function RightActionControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right Action Controls">
      <QuickSearch />
      <LinkLogInLink />
      <LinkPrimaryCtaButton />
      <MentorAvatarMenu />
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <PlatformLogoMonogram />
        <RightActionControls />
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col items-start left-0 pb-px px-[32px] right-0 top-0" data-name="MainHeader">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container131 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <BreadcrumbsSecondaryUtilityBar />
      <MainContent />
      <GlobalFooterMargin />
      <MainHeader />
    </div>
  );
}