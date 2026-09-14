import { useState } from "react";

type Tab = "colors" | "typography" | "gradients" | "buttons" | "chips" | "icons" | "spacing" | "components";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "colors",     label: "Colours",     icon: "palette"           },
  { id: "gradients",  label: "Gradients",   icon: "gradient"          },
  { id: "typography", label: "Typography",  icon: "text_fields"       },
  { id: "buttons",    label: "Buttons",     icon: "smart_button"      },
  { id: "chips",      label: "Chips & Pills",icon: "label"            },
  { id: "icons",      label: "Icon Wells",  icon: "interests"         },
  { id: "spacing",    label: "Spacing",     icon: "space_bar"         },
  { id: "components", label: "Components",  icon: "widgets"           },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-[13px] font-bold uppercase tracking-widest text-[#6B7A99] mb-5 flex items-center gap-2">
        <span className="flex-1 h-px bg-[#D6E1F2]" />
        {title}
        <span className="flex-1 h-px bg-[#D6E1F2]" />
      </h2>
      {children}
    </div>
  );
}

function Swatch({ name, hex, token, dark }: { name: string; hex: string; token: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  return (
    <button onClick={copy} className="rounded-xl overflow-hidden border border-[#D6E1F2] text-left hover:shadow-md transition-all group w-full">
      <div className="h-16 w-full relative" style={{ background: hex }}>
        <span className={`absolute inset-0 flex items-center justify-center text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity ${dark ? "text-white" : "text-[#0A192F]"}`}>
          {copied ? "Copied!" : "Copy hex"}
        </span>
      </div>
      <div className="p-2.5 bg-white">
        <p className="text-[11px] font-bold text-[#0D1B2E] truncate">{name}</p>
        <p className="text-[10px] font-mono text-[#6B7A99] mt-0.5">{hex}</p>
        <p className="text-[9px] font-mono text-[#B0BDD4] mt-0.5 truncate">{token}</p>
      </div>
    </button>
  );
}

const palette = {
  brand: [
    { name: "Navy",           hex: "#0A192F", token: "--color-navy",           dark: true  },
    { name: "Navy Mid",       hex: "#0D1C32", token: "--color-navy-mid",       dark: true  },
    { name: "Navy Light",     hex: "#152744", token: "--color-navy-light",     dark: true  },
    { name: "Royal",          hex: "#2563EB", token: "--color-royal",          dark: true  },
    { name: "Royal Hover",    hex: "#1D4ED8", token: "--color-royal-hover",    dark: true  },
    { name: "Royal Light",    hex: "#EFF6FF", token: "--color-royal-light",    dark: false },
    { name: "Mint",           hex: "#1DD7A5", token: "--color-mint",           dark: false },
    { name: "Mint Light",     hex: "#ECFDF9", token: "--color-mint-light",     dark: false },
  ],
  semantic: [
    { name: "Emerald",        hex: "#10B981", token: "--color-emerald",        dark: true  },
    { name: "Emerald Text",   hex: "#065F46", token: "--color-emerald-text",   dark: true  },
    { name: "Emerald Light",  hex: "#ECFDF5", token: "--color-emerald-light",  dark: false },
    { name: "Warning",        hex: "#F59E0B", token: "--color-warning",        dark: false },
    { name: "Warning Light",  hex: "#FFFBEB", token: "--color-warning-light",  dark: false },
    { name: "Error",          hex: "#BA1A1A", token: "--color-error",          dark: true  },
    { name: "Error Container",hex: "#FFDAD6", token: "--color-error-container",dark: false },
  ],
  surface: [
    { name: "Surface",        hex: "#F5F8FC", token: "--color-surface",                   dark: false },
    { name: "Card",           hex: "#FFFFFF", token: "--color-surface-card",              dark: false },
    { name: "Surface Dim",    hex: "#C8D6EA", token: "--color-surface-dim",               dark: false },
    { name: "Container Low",  hex: "#EBF0F9", token: "--color-surface-container-low",     dark: false },
    { name: "Container",      hex: "#E2EAF6", token: "--color-surface-container",         dark: false },
    { name: "Container High", hex: "#D6E1F2", token: "--color-surface-container-high",    dark: false },
  ],
  text: [
    { name: "On Surface",     hex: "#0D1B2E", token: "--color-on-surface",          dark: true  },
    { name: "On Surface Var", hex: "#2C3A52", token: "--color-on-surface-variant",  dark: true  },
    { name: "Outline",        hex: "#435070", token: "--color-outline",              dark: true  },
    { name: "Outline Muted",  hex: "#5B6D90", token: "--color-outline-muted",       dark: true  },
    { name: "Outline Variant",hex: "#B0BDD4", token: "--color-outline-variant",     dark: false },
    { name: "Input Border",   hex: "#6674A0", token: "--color-input-border",        dark: true  },
  ],
};

const gradients = [
  {
    name: "Surface Wash",
    cls: "bg-gradient-wash",
    desc: "Brand-tinted light surface. Use for hero washes, feature section backgrounds.",
    code: "linear-gradient(135deg, #C8E6FF 0%, #D6E4FF 40%, #DDD6FF 100%)",
  },
  {
    name: "Hero Depth",
    cls: "bg-gradient-hero",
    desc: "Deep navy anchored with teal-to-blue sweep. Hero sections, dark CTAs.",
    code: "linear-gradient(140deg, #0A192F 0%, #0D2347 35%, #0A2D5A 65%, #062550 100%)",
  },
  {
    name: "Accent Tint",
    cls: "bg-gradient-accent",
    desc: "Mint + Royal subtle tint on white. Cards, callouts, highlighted sections.",
    code: "linear-gradient(135deg, rgba(0,219,162,.07) 0%, rgba(0,101,244,.05) 60%, rgba(0,63,175,.04) 100%), #fff",
  },
  {
    name: "Icon BG — Blue",
    cls: "icon-bg",
    desc: "Blue-wash gradient for feature icon wells. Default icon container.",
    code: "linear-gradient(135deg, #EBF0F9 0%, #EFF6FF 60%, #E8F5FF 100%)",
  },
  {
    name: "Icon BG — Mint",
    cls: "icon-bg-mint",
    desc: "Mint-tinted gradient for confirmation / success icon wells.",
    code: "linear-gradient(135deg, #ECFDF9 0%, #E6F7F4 50%, #EBF0F9 100%)",
  },
];

export default function DesignSystem() {
  const [active, setActive] = useState<Tab>("colors");

  return (
    <div className="min-h-screen bg-[#F5F8FC]">
      {/* Header */}
      <div className="bg-gradient-hero border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1DD7A5]/30 bg-[#1DD7A5]/10 text-[#1DD7A5] text-[11px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-[13px]">verified</span>
            Internal reference only
          </span>
          <h1 className="text-[44px] font-medium text-white leading-tight" style={{ fontFamily: "Fraunces" }}>
            Thryvio <span className="italic accent-underline" style={{ fontWeight: 500 }}>Design System</span>
          </h1>
          <p className="mt-3 text-[15px] max-w-xl leading-relaxed" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
            Centralised token reference, component patterns, and visual standards for the Thryvio platform.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-1.5 px-4 py-3.5 text-[13px] font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  active === t.id
                    ? "border-[#1DD7A5] text-white"
                    : "border-transparent text-white/50 hover:text-white/80"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* ── COLOURS ── */}
        {active === "colors" && (
          <div>
            <Section title="Brand Palette">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {palette.brand.map(c => <Swatch key={c.token} {...c} />)}
              </div>
            </Section>
            <Section title="Semantic Colours">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {palette.semantic.map(c => <Swatch key={c.token} {...c} />)}
              </div>
            </Section>
            <Section title="Surface Scale">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {palette.surface.map(c => <Swatch key={c.token} {...c} />)}
              </div>
              <div className="mt-4 flex items-center gap-2">
                {palette.surface.map(c => (
                  <div key={c.hex} className="flex-1 h-10 rounded-lg border border-[#D6E1F2]" style={{ background: c.hex }} title={c.name} />
                ))}
              </div>
              <p className="text-[11px] text-[#6B7A99] mt-2 text-center" style={{ fontFamily: "Khula" }}>Surface scale — lightest to darkest</p>
            </Section>
            <Section title="Text / Outline Scale">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {palette.text.map(c => <Swatch key={c.token} {...c} />)}
              </div>
              <div className="mt-6 bg-white border border-[#D6E1F2] rounded-2xl p-6 space-y-3">
                {palette.text.map(c => (
                  <div key={c.hex} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded shrink-0 border border-[#D6E1F2]" style={{ background: c.hex }} />
                    <p className="text-[16px] font-semibold flex-1" style={{ color: c.hex }}>
                      {c.name} — The quick brown fox jumps over the lazy dog
                    </p>
                    <span className="text-[10px] font-mono text-[#B0BDD4]">{c.hex}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── GRADIENTS ── */}
        {active === "gradients" && (
          <div>
            <Section title="Named Gradients">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gradients.map(g => (
                  <div key={g.name} className="rounded-2xl overflow-hidden border border-[#D6E1F2] bg-white">
                    <div className={`h-36 w-full ${g.cls}`} />
                    <div className="p-5">
                      <p className="text-[14px] font-bold text-[#0D1B2E] mb-1">{g.name}</p>
                      <p className="text-[12px] text-[#435070] mb-3 leading-snug" style={{ fontFamily: "Khula" }}>{g.desc}</p>
                      <code className="text-[10px] font-mono text-[#6B7A99] bg-[#F5F8FC] px-2 py-1.5 rounded-lg block leading-relaxed break-all">{g.cls.startsWith("icon") ? g.cls : `.${g.cls}`}</code>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Gradient in context">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-hero rounded-2xl p-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#A8F0DF" }}>Hero Depth in use</p>
                  <p className="text-[28px] font-medium text-white" style={{ fontFamily: "Fraunces" }}>Build a coaching<br /><span className="italic accent-underline" style={{ fontWeight: 500 }}>culture that scales.</span></p>
                  <div className="mt-5 flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl font-bold text-[13px] bg-[#1DD7A5] text-[#0A192F]">Primary CTA</button>
                    <button className="px-5 py-2.5 rounded-xl font-bold text-[13px] border border-white/25 text-white">Secondary</button>
                  </div>
                </div>
                <div className="bg-gradient-wash rounded-2xl p-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-3">Surface Wash in use</p>
                  <p className="text-[28px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>Light brand<br /><span className="italic accent-underline-blue" style={{ fontWeight: 500 }}>section background</span></p>
                  <div className="mt-5 flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl font-bold text-[13px] bg-[#2563EB] text-white">Primary CTA</button>
                    <button className="px-5 py-2.5 rounded-xl font-bold text-[13px] border border-[#D6E1F2] text-[#2C3A52]">Secondary</button>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ── TYPOGRAPHY ── */}
        {active === "typography" && (
          <div>
            <Section title="Font Families">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { family: "Fraunces", role: "Display — font-display", token: "--font-display", sample: "Coaching that transforms careers.", weight: 500, italic: false },
                  { family: "Fraunces", role: "Display Italic — accent spans", token: "--font-display", sample: "Results that speak for themselves", weight: 500, italic: true },
                  { family: "Arsenal", role: "UI / Navigation — font-sans", token: "--font-sans", sample: "Navigation labels, headings, buttons", weight: 600, italic: false },
                  { family: "Khula",   role: "Body copy — font-body", token: "--font-body", sample: "Descriptive copy, card descriptions, form helper text and secondary prose.", weight: 400, italic: false },
                  { family: "Inter",   role: "Data / Mono-spaced — font-data", token: "--font-data", sample: "4.2× ROI  ·  $6,800/mo  ·  89% satisfaction", weight: 400, italic: false },
                ].map(f => (
                  <div key={f.role} className="bg-white border border-[#D6E1F2] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 rounded-full bg-[#ECEEF2] text-[#5A6479] text-[10px] font-bold">{f.family}</span>
                      <span className="text-[11px] text-[#6B7A99]" style={{ fontFamily: "Khula" }}>{f.role}</span>
                    </div>
                    <p
                      className={`text-[24px] text-[#0D1B2E] leading-snug ${f.italic ? "italic" : ""}`}
                      style={{ fontFamily: f.family, fontWeight: f.weight }}
                    >
                      {f.sample}
                    </p>
                    <p className="text-[10px] font-mono text-[#B0BDD4] mt-3">{f.token}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Type Scale">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-5">
                {[
                  { size: "56px", label: "Display XL",   weight: "500", family: "Fraunces" },
                  { size: "42px", label: "Display L",    weight: "500", family: "Fraunces" },
                  { size: "32px", label: "Display M",    weight: "500", family: "Fraunces" },
                  { size: "22px", label: "Heading",      weight: "700", family: "Arsenal"  },
                  { size: "17px", label: "Subheading",   weight: "600", family: "Arsenal"  },
                  { size: "15px", label: "Body L",       weight: "400", family: "Khula"    },
                  { size: "13px", label: "Body M",       weight: "400", family: "Khula"    },
                  { size: "11px", label: "Caption",      weight: "600", family: "Khula"    },
                  { size: "10px", label: "Label / Badge",weight: "700", family: "Arsenal"  },
                ].map(t => (
                  <div key={t.size} className="flex items-baseline gap-4 border-b border-[#F5F8FC] pb-4 last:border-0 last:pb-0">
                    <span className="w-24 shrink-0 text-[11px] font-mono text-[#6B7A99]">{t.size} / {t.label}</span>
                    <p style={{ fontSize: t.size, fontFamily: t.family, fontWeight: t.weight, color: "#0D1B2E", lineHeight: 1.2 }}>
                      Thryvio coaching platform
                    </p>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Accent Underline">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-5">
                <p className="text-[38px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>
                  Build a coaching culture that <span className="italic accent-underline" style={{ fontWeight: 500 }}>scales.</span>
                </p>
                <p className="text-[28px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>
                  Results that <span className="italic accent-underline" style={{ fontWeight: 500 }}>speak for themselves</span>
                </p>
                <div className="bg-[#0A192F] rounded-xl p-6">
                  <p className="text-[28px] font-medium text-white" style={{ fontFamily: "Fraunces" }}>
                    Coaching that <span className="italic accent-underline" style={{ fontWeight: 500 }}>transforms</span>
                  </p>
                </div>
                <code className="text-[11px] font-mono text-[#6B7A99] bg-[#F5F8FC] px-3 py-2 rounded-lg block">
                  {'<span className="italic accent-underline" style={{ fontWeight:500 }}>word</span>'}
                </code>
              </div>
            </Section>
          </div>
        )}

        {/* ── BUTTONS ── */}
        {active === "buttons" && (
          <div>
            <Section title="Primary — Hero & Page-level CTAs only">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">Primary blue</button>
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#1DD7A5] text-[#0A192F] hover:bg-[#15C496] transition-colors">Mint CTA</button>
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#2563EB] text-white opacity-40 cursor-not-allowed">Disabled</button>
                <div className="w-px h-10 bg-[#D6E1F2]" />
                <p className="text-[12px] text-[#6B7A99]" style={{ fontFamily: "Khula" }}>Use sparingly — max 1 per viewport. Hero, page hero, pricing CTAs.</p>
              </div>
            </Section>
            <Section title="Dark — Card-level & Repeat CTAs">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#0A192F] text-white hover:bg-[#0D2347] transition-colors">Enroll now →</button>
                <button className="px-4 py-2 rounded-xl font-bold text-[12px] bg-[#0A192F] text-white hover:bg-[#0D2347] transition-colors">Register →</button>
                <button className="px-4 py-2 rounded-xl font-bold text-[12px] bg-[#0A192F] text-white hover:bg-[#0D2347] transition-colors">View profile</button>
                <div className="w-px h-10 bg-[#D6E1F2]" />
                <p className="text-[12px] text-[#6B7A99]" style={{ fontFamily: "Khula" }}>Card-level, listing CTAs. Never competes with primary blue.</p>
              </div>
            </Section>
            <Section title="Ghost & Outlined">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] border-2 border-[#D6E1F2] text-[#2C3A52] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">Ghost</button>
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] transition-colors">Outlined blue</button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#2563EB] transition-all">
                  <span className="material-symbols-outlined text-[16px]">person_search</span>Browse coaches
                </button>
              </div>
            </Section>
            <Section title="On dark backgrounds">
              <div className="bg-gradient-hero rounded-2xl p-8 flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#1DD7A5] text-[#0A192F] hover:bg-[#15C496] transition-colors">Request a demo</button>
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] border border-white/25 text-white hover:bg-white/8 transition-colors">Explore solutions</button>
                <button className="px-6 py-3 rounded-xl font-bold text-[14px] border border-white/15 text-white/70 hover:text-white transition-colors">See case studies →</button>
              </div>
            </Section>
          </div>
        )}

        {/* ── CHIPS ── */}
        {active === "chips" && (
          <div>
            <Section title="Org / Avatar chips — neutral always, never brand blue">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8">
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  {["G","Ms","Mc","Az","D","GS","St","Sh","H","P","B","N"].map(a => (
                    <div key={a} className="w-8 h-8 rounded-full bg-[#ECEEF2] text-[#5A6479] flex items-center justify-center text-[10px] font-bold">{a}</div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#ECEEF2] text-[#5A6479] flex items-center justify-center text-[10px] font-bold -ml-2 ring-1 ring-[#D6E1F2]">+12</div>
                </div>
                <code className="text-[11px] font-mono text-[#6B7A99] bg-[#F5F8FC] px-3 py-2 rounded-lg block">bg-[#ECEEF2] text-[#5A6479] rounded-full</code>
              </div>
            </Section>
            <Section title="Role & Type pills">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#ECEEF2] text-[#5A6479]">Coach</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46]">Mentor</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#ECEEF2] text-[#5A6479]">ICF PCC</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#ECEEF2] text-[#5A6479]">ICF MCC</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#ECEEF2] text-[#5A6479]">Forbes 30</span>
                </div>
                <code className="text-[11px] font-mono text-[#6B7A99] bg-[#F5F8FC] px-3 py-2 rounded-lg block">bg-[#ECEEF2] text-[#5A6479]  /  bg-[#ECFDF5] text-[#065F46] for Mentor</code>
              </div>
            </Section>
            <Section title="Category tag pills — on card images (dark glass, not brand color)">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-4">
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=280&fit=crop&auto=format" alt="" className="w-full h-full object-cover" style={{ filter: "saturate(0.8)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg,rgba(10,25,47,.6) 0%,transparent 60%)" }} />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {["Leadership","Advanced"].map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/45 backdrop-blur-sm">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Leadership","Career","Business","Performance","Well-being","Life"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/45 backdrop-blur-sm">{t}</span>
                  ))}
                </div>
                <code className="text-[11px] font-mono text-[#6B7A99] bg-[#F5F8FC] px-3 py-2 rounded-lg block">bg-black/45 backdrop-blur-sm text-white  — never tagColor background</code>
              </div>
            </Section>
            <Section title="Filter pills — active state uses brand blue">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-[#2563EB] text-white">All</button>
                  {["Leadership","Career","Business","Performance","Well-being","Life"].map(t => (
                    <button key={t} className="px-3 py-1.5 rounded-full text-[13px] font-semibold bg-white border border-[#D6E1F2] text-[#2C3A52] hover:border-[#2563EB] hover:text-[#2563EB]">{t}</button>
                  ))}
                </div>
                <code className="text-[11px] font-mono text-[#6B7A99] bg-[#F5F8FC] px-3 py-2 rounded-lg block">Active: bg-[#2563EB] text-white  /  Inactive: bg-white border-[#D6E1F2] text-[#2C3A52]</code>
              </div>
            </Section>
            <Section title="Status indicators">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-3">
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-[13px] font-bold text-[#065F46] flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">check_circle</span>Open · 15 seats</span>
                  <span className="text-[13px] font-bold text-[#B45309] flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">warning</span>3 seats left</span>
                  <span className="text-[13px] font-bold text-[#6B7A99]">Full — waitlist</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0A192F] bg-[#1DD7A5]">New</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-[#2563EB]/80">Most popular</span>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* ── ICON WELLS ── */}
        {active === "icons" && (
          <div>
            <Section title="Icon well variants">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8">
                <div className="flex flex-wrap gap-8 items-end">
                  {[
                    { cls: "icon-bg",   color: "#2563EB", icon: "trending_up",    label: ".icon-bg",       size: "w-11 h-11" },
                    { cls: "icon-bg",   color: "#2563EB", icon: "groups",         label: ".icon-bg lg",    size: "w-14 h-14" },
                    { cls: "icon-bg-mint", color: "#1DD7A5", icon: "check_circle",label: ".icon-bg-mint",  size: "w-11 h-11" },
                    { cls: "icon-bg-mint", color: "#1DD7A5", icon: "verified",     label: ".icon-bg-mint lg", size: "w-14 h-14" },
                  ].map((w, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`${w.size} rounded-xl ${w.cls} flex items-center justify-center`}>
                        <span className="material-symbols-outlined" style={{ fontSize: w.size === "w-14 h-14" ? "26px" : "22px", color: w.color }}>{w.icon}</span>
                      </div>
                      <p className="text-[10px] font-mono text-[#6B7A99]">{w.label}</p>
                    </div>
                  ))}
                  <div className="w-px h-14 bg-[#D6E1F2]" />
                  {[
                    { bg: "bg-[#0A192F]", color: "text-white",      icon: "corporate_fare", label: "Navy fill"   },
                    { bg: "bg-[#2563EB]", color: "text-white",      icon: "school",         label: "Royal fill"  },
                    { bg: "bg-[#ECEEF2]", color: "text-[#5A6479]",  icon: "person",         label: "Neutral"     },
                  ].map(w => (
                    <div key={w.label} className="flex flex-col items-center gap-2">
                      <div className={`w-11 h-11 rounded-xl ${w.bg} flex items-center justify-center`}>
                        <span className={`material-symbols-outlined text-[22px] ${w.color}`}>{w.icon}</span>
                      </div>
                      <p className="text-[10px] font-mono text-[#6B7A99]">{w.label}</p>
                    </div>
                  ))}
                  <div className="w-px h-14 bg-[#D6E1F2]" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center bg-[#1a2e4a]">
                      <span className="material-symbols-outlined text-[22px] text-white/80">groups</span>
                    </div>
                    <p className="text-[10px] font-mono text-[#6B7A99]">Dark glass</p>
                  </div>
                </div>
              </div>
            </Section>
            <Section title="Icon well in grid context">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: "trending_up",    title: "Leadership Pipeline",    desc: "Develop your next generation of leaders" },
                  { icon: "groups",         title: "Team Effectiveness",     desc: "Transform group dynamics and trust"      },
                  { icon: "psychology",     title: "Executive Coaching",     desc: "1:1 coaching for C-suite and VPs"        },
                  { icon: "diversity_3",    title: "DEI & Belonging",        desc: "Purpose-built for inclusive leadership"  },
                  { icon: "health_and_safety", title: "Well-being at Scale", desc: "Prevent burnout across your workforce"  },
                  { icon: "school",         title: "Custom Journeys",        desc: "White-labelled programs with analytics"  },
                ].map(s => (
                  <div key={s.title} className="bg-white border border-[#D6E1F2] rounded-2xl p-5 hover:shadow-md hover:border-[#2563EB]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl icon-bg flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[20px] text-[#2563EB]">{s.icon}</span>
                    </div>
                    <p className="text-[14px] font-bold text-[#0D1B2E] mb-1">{s.title}</p>
                    <p className="text-[12px] text-[#435070]" style={{ fontFamily: "Khula" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── SPACING ── */}
        {active === "spacing" && (
          <div>
            <Section title="Spacing scale">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-3">
                {[1,2,3,4,5,6,8,10,12,16,20,24].map(n => (
                  <div key={n} className="flex items-center gap-4">
                    <span className="w-16 text-[11px] font-mono text-[#6B7A99] shrink-0">{n * 4}px / {n}</span>
                    <div className="h-5 rounded bg-[#2563EB]/20 border border-[#2563EB]/30" style={{ width: n * 4 }} />
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Border radius">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 flex flex-wrap gap-6 items-end">
                {[
                  { r: "4px",  label: "rounded (4px)",    cls: "rounded"    },
                  { r: "8px",  label: "rounded-lg (8px)", cls: "rounded-lg" },
                  { r: "12px", label: "rounded-xl (12px)",cls: "rounded-xl" },
                  { r: "16px", label: "rounded-2xl (16px)",cls:"rounded-2xl"},
                  { r: "9999px",label:"rounded-full",     cls: "rounded-full"},
                ].map(r => (
                  <div key={r.r} className="flex flex-col items-center gap-2">
                    <div className={`w-16 h-16 bg-[#2563EB]/15 border-2 border-[#2563EB]/30 ${r.cls}`} />
                    <p className="text-[10px] font-mono text-[#6B7A99] text-center">{r.label}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Shadow scale">
              <div className="bg-[#F5F8FC] rounded-2xl p-8 flex flex-wrap gap-8">
                {[
                  { cls: "shadow-sm",  label: "shadow-sm"  },
                  { cls: "shadow",     label: "shadow"     },
                  { cls: "shadow-md",  label: "shadow-md"  },
                  { cls: "shadow-lg",  label: "shadow-lg"  },
                  { cls: "shadow-xl",  label: "shadow-xl"  },
                  { cls: "shadow-2xl", label: "shadow-2xl" },
                ].map(s => (
                  <div key={s.cls} className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 bg-white rounded-2xl ${s.cls}`} />
                    <p className="text-[10px] font-mono text-[#6B7A99]">{s.label}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ── COMPONENTS ── */}
        {active === "components" && (
          <div>
            <Section title="Progress / seats bar">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-4">
                {[
                  { pct: 80, seats: "4 seats left", urgent: true  },
                  { pct: 62, seats: "8 seats left", urgent: false },
                  { pct: 100, seats: "Full — waitlist", urgent: false },
                ].map(b => (
                  <div key={b.pct}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[11px] font-bold ${b.urgent ? "text-[#B45309]" : b.pct === 100 ? "text-[#6B7A99]" : "text-[#065F46]"}`}>
                        {b.urgent && <span className="material-symbols-outlined text-[12px] align-middle mr-0.5">warning</span>}
                        {b.seats}
                      </span>
                      <span className="text-[11px] text-[#6B7A99]">{b.pct}% full</span>
                    </div>
                    <div className="h-1.5 bg-[#EBF0F9] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#2563EB]" style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Speaker / coach row">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 space-y-4">
                {[
                  { name: "Dr. Serena Okafor", title: "Executive & Leadership Coach", photo: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=80&h=80&fit=crop&auto=format" },
                  { name: "Marcus Hightower",  title: "Career Transition Specialist",  photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
                ].map(s => (
                  <div key={s.name} className="flex items-center gap-3 pb-4 border-b border-[#D6E1F2] last:border-0 last:pb-0">
                    <img src={s.photo} alt={s.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#EBF0F9]" />
                    <div>
                      <p className="text-[13px] font-bold text-[#0D1B2E]">{s.name}</p>
                      <p className="text-[11px] text-[#6B7A99]" style={{ fontFamily: "Khula" }}>{s.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Stat tiles — single dark color">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[
                  { value: "4.2×",    label: "ROI on coaching investment"         },
                  { value: "31%",     label: "Avg. leadership effectiveness gain" },
                  { value: "12,400+", label: "Verified coaches & mentors"         },
                  { value: "4.9/5",   label: "Average session rating"             },
                ].map(s => (
                  <div key={s.value} className="bg-white border border-[#D6E1F2] rounded-2xl p-5">
                    <p className="text-[32px] font-semibold leading-none text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>{s.value}</p>
                    <p className="text-[12px] text-[#435070] mt-2 leading-snug" style={{ fontFamily: "Khula" }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "4.2×",    label: "ROI on coaching investment"         },
                  { value: "31%",     label: "Avg. leadership effectiveness gain" },
                  { value: "12,400+", label: "Verified coaches & mentors"         },
                  { value: "4.9/5",   label: "Average session rating"             },
                ].map(s => (
                  <div key={s.value} className="bg-[#0A192F] rounded-2xl p-5">
                    <p className="text-[32px] font-semibold leading-none text-white" style={{ fontFamily: "Fraunces" }}>{s.value}</p>
                    <p className="text-[12px] mt-2 leading-snug" style={{ fontFamily: "Khula", color: "#A8F0DF" }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#6B7A99] mt-2" style={{ fontFamily: "Khula" }}>Stat value always <code className="font-mono bg-[#F5F8FC] px-1 rounded">text-[#0A192F]</code> on light, <code className="font-mono bg-[#F5F8FC] px-1 rounded">text-white</code> on dark — never per-item colors.</p>
            </Section>

            <Section title="Data table">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#F5F8FC] border-b border-[#D6E1F2]">
                      {["Coach / Mentor","Specialty","Sessions","Rating","Status"].map(h => (
                        <th key={h} className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-[#6B7A99]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D6E1F2]">
                    {[
                      { name:"Dr. Serena Okafor", specialty:"Leadership", sessions:320, rating:"4.9", status:"Available", photo:"https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=40&h=40&fit=crop" },
                      { name:"Marcus Hightower",  specialty:"Career",     sessions:214, rating:"4.8", status:"Available", photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop" },
                      { name:"Priya Nambiar",     specialty:"Performance",sessions:189, rating:"5.0", status:"Busy",      photo:"https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=40&h=40&fit=crop" },
                      { name:"James Whitfield",   specialty:"Business",   sessions:402, rating:"4.7", status:"Available", photo:"https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=40&h=40&fit=crop" },
                    ].map(row => (
                      <tr key={row.name} className="hover:bg-[#F5F8FC] transition-colors">
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <img src={row.photo} alt={row.name} className="w-7 h-7 rounded-full object-cover ring-1 ring-[#D6E1F2]" />
                            <span className="text-[13px] font-semibold text-[#0D1B2E]">{row.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECEEF2] text-[#5A6479]">{row.specialty}</span>
                        </td>
                        <td className="px-5 py-3.5 text-[13px] text-[#0A192F] font-semibold" style={{ fontFamily: "Inter" }}>{row.sessions}</td>
                        <td className="px-5 py-3.5 text-[13px] text-[#0A192F] font-semibold" style={{ fontFamily: "Inter" }}>⭐ {row.rating}</td>
                        <td className="px-5 py-3.5">
                          <span className={`text-[11px] font-bold ${row.status === "Available" ? "text-[#065F46]" : "text-[#B45309]"}`}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
            <Section title="Form elements">
              <div className="bg-white border border-[#D6E1F2] rounded-2xl p-8 max-w-lg space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5">Full name</label>
                  <input type="text" defaultValue="Jane Smith" className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20" />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5">Work email</label>
                  <input type="email" placeholder="jane@company.com" className="w-full px-4 py-2.5 border border-[#6674A0] bg-white rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20" />
                  <p className="text-[11px] text-[#6B7A99] mt-1" style={{ fontFamily: "Khula" }}>Input border: #6674A0 (4.7:1 contrast)</p>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5">Team size</label>
                  <select className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none appearance-none">
                    <option>21–100 employees</option>
                  </select>
                </div>
              </div>
            </Section>
          </div>
        )}

      </div>

      <div className="border-t border-[#D6E1F2] py-6 text-center">
        <p className="text-[11px] text-[#B0BDD4]" style={{ fontFamily: "Khula" }}>
          Thryvio Design System · Internal reference · Not for distribution
        </p>
      </div>
    </div>
  );
}
