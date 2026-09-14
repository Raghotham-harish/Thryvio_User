import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { ThryvioHorizontal, ThryvioHorizontalDark } from "@/components/ThryvioLogos";

/* ── Organisations mega-menu data ── */
const orgSolutions = [
  { icon: "trending_up", label: "Leadership Pipeline", desc: "Develop your next generation of leaders" },
  { icon: "groups", label: "Team Effectiveness", desc: "Transform group dynamics and trust" },
  { icon: "psychology", label: "Executive Coaching", desc: "1:1 coaching for C-suite and VPs" },
  { icon: "diversity_3", label: "DEI & Belonging", desc: "Purpose-built for inclusive leadership" },
  { icon: "health_and_safety", label: "Well-being at Scale", desc: "Prevent burnout across your workforce" },
  { icon: "school", label: "Custom Learning Journeys", desc: "White-labelled programs with full analytics" },
];

const orgWhoWeServe = [
  { icon: "apartment", label: "Enterprise (1,000+)", desc: "Global programs, SSO & custom analytics" },
  { icon: "business", label: "Mid-market (100–999)", desc: "Scalable cohorts with a success manager" },
  { icon: "store", label: "SMEs & Scale-ups", desc: "Starter plans from 20 employees" },
  { icon: "school", label: "Universities & Non-profits", desc: "Special pricing for educational bodies" },
];

const orgQuickLinks = [
  { label: "Pricing", to: "/enterprise#pricing" },
  { label: "Request a Demo", to: "/enterprise#demo" },
  { label: "Case Studies", to: "/enterprise#case-studies" },
  { label: "ROI Calculator", to: "/enterprise" },
];

function OrgMegaMenu({ dark }: { dark: boolean }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[880px] rounded-2xl shadow-2xl border overflow-hidden z-50 ${
        dark
          ? "bg-[#0A192F] border-white/10"
          : "bg-white border-[#D6E1F2]"
      }`}
      style={{ boxShadow: "0 24px 64px -12px rgba(10,25,47,0.22), 0 8px 24px -4px rgba(10,25,47,0.12)" }}
    >
      <div className="grid grid-cols-[2fr_1.4fr_1fr]">
        {/* Solutions */}
        <div className={`p-6 border-r ${dark ? "border-white/10" : "border-[#EBF0F9]"}`}>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`}>
            Solutions
          </p>
          <div className="grid grid-cols-2 gap-2">
            {orgSolutions.map(s => (
              <Link
                key={s.label}
                to="/enterprise"
                className={`flex items-start gap-2.5 p-2.5 rounded-xl group transition-colors ${
                  dark ? "hover:bg-white/8" : "hover:bg-[#F5F8FC]"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${dark ? "bg-white/10" : ""}`}
                  style={!dark ? { background: "linear-gradient(135deg, #EBF0F9 0%, #EFF6FF 60%, #E8F5FF 100%)" } : undefined}
                >
                  <span className={`material-symbols-outlined text-[15px] ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`} aria-hidden="true">{s.icon}</span>
                </div>
                <div>
                  <p className={`text-[12px] font-bold leading-tight ${dark ? "text-white" : "text-[#0A192F]"}`}>{s.label}</p>
                  <p className={`text-[11px] leading-snug mt-0.5 ${dark ? "text-white/65" : "text-[#435070]"}`}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Who we serve */}
        <div className={`p-6 border-r ${dark ? "border-white/10" : "border-[#EBF0F9]"}`}>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`}>
            Who we serve
          </p>
          <div className="flex flex-col gap-1">
            {orgWhoWeServe.map(w => (
              <Link
                key={w.label}
                to="/enterprise"
                className={`flex items-start gap-2.5 p-2.5 rounded-xl group transition-colors ${
                  dark ? "hover:bg-white/8" : "hover:bg-[#F5F8FC]"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${dark ? "bg-white/10" : ""}`}
                  style={!dark ? { background: "linear-gradient(135deg, #EBF0F9 0%, #EFF6FF 60%, #E8F5FF 100%)" } : undefined}
                >
                  <span className={`material-symbols-outlined text-[15px] ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`} aria-hidden="true">{w.icon}</span>
                </div>
                <div>
                  <p className={`text-[12px] font-bold leading-tight ${dark ? "text-white" : "text-[#0A192F]"}`}>{w.label}</p>
                  <p className={`text-[11px] leading-snug mt-0.5 ${dark ? "text-white/65" : "text-[#435070]"}`}>{w.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick links + featured */}
        <div className="p-6 flex flex-col gap-6">
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`}>
              Quick links
            </p>
            <div className="flex flex-col gap-1">
              {orgQuickLinks.map(l => (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] font-semibold transition-colors ${
                    dark ? "text-white/70 hover:text-white hover:bg-white/8" : "text-[#435070] hover:text-[#1D4ED8] hover:bg-[#EBF0F9]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">arrow_forward</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mini case study */}
          <div className={`rounded-xl p-3 border ${dark ? "bg-white/6 border-white/10" : "bg-[#F5F8FC] border-[#D6E1F2]"}`}>
            <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`}>
              Case study
            </p>
            <p className={`text-[11px] font-bold leading-snug mb-1 ${dark ? "text-white" : "text-[#0A192F]"}`}>
              Global tech firm cut senior attrition 34% in 12 months
            </p>
            <Link
              to="/enterprise#case-studies"
              className={`text-[11px] font-bold flex items-center gap-1 ${dark ? "text-[#A8F0DF]" : "text-[#2563EB]"}`}
            >
              Read more
              <span className="material-symbols-outlined text-[12px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className={`px-6 py-3 flex items-center justify-between border-t ${dark ? "bg-white/4 border-white/10" : "bg-[#F5F8FC] border-[#D6E1F2]"}`}>
        <p className={`text-[11px] ${dark ? "text-white/65" : "text-[#435070]"}`}>
          Trusted by 1,200+ organisations in 70+ countries
        </p>
        <Link
          to="/enterprise"
          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
            dark
              ? "bg-[#1DD7A5]/15 text-[#A8F0DF] hover:bg-[#1DD7A5]/25"
              : "bg-[#0A192F] text-white hover:bg-[#152744]"
          }`}
        >
          Explore Enterprise →
        </Link>
      </div>
    </div>
  );
}

const links = [
  { to: "/find-a-coach", label: "Explore Trivios" },
  { to: "/programs", label: "Programs & Events" },
];

export default function Nav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);
  const orgRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  const baseText = dark ? "text-white/70 hover:text-white" : "text-[#435070] hover:text-[#0A192F]";

  /* Close mega menu on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (orgRef.current && !orgRef.current.contains(e.target as Node)) {
        setOrgOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b ${dark ? "bg-[#0A192F]/95 border-white/10 backdrop-blur-md" : "bg-white/95 border-[#D6E1F2] backdrop-blur-md"}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16" aria-label="Main navigation">
        <Link to="/" aria-label="Thryvio home" className="shrink-0">
          {dark ? <ThryvioHorizontalDark width={120} height={39} /> : <ThryvioHorizontal width={120} height={39} />}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-stretch gap-0 relative h-16" role="list">
          {links.map(l => (
            <li key={l.to} className="flex items-stretch">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 inline-flex items-center text-[14px] font-semibold transition-colors border-b-2 ${
                    isActive
                      ? dark
                        ? "border-[#1DD7A5] text-white"
                        : "border-[#2563EB] text-[#2563EB]"
                      : `border-transparent ${baseText}`
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}

          {/* For Organisations with mega menu */}
          <li ref={orgRef} className="relative flex items-stretch">
            <button
              onClick={() => setOrgOpen(o => !o)}
              onMouseEnter={() => setOrgOpen(true)}
              className={`flex items-center gap-1 px-4 text-[14px] font-semibold transition-colors border-b-2 border-transparent ${baseText}`}
              aria-expanded={orgOpen}
              aria-haspopup="true"
            >
              For Organisations
              <span
                className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${orgOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
            {orgOpen && (
              <div onMouseLeave={() => setOrgOpen(false)}>
                <OrgMegaMenu dark={dark} />
              </div>
            )}
          </li>

        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-colors ${dark ? "text-white/80 hover:text-white" : "text-[#2C3A52] hover:text-[#0A192F]"}`}
          >
            Sign In
          </Link>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 rounded-lg text-[14px] font-bold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 rounded-lg ${dark ? "text-white" : "text-[#0A192F]"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="material-symbols-outlined text-[24px]">{open ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className={`md:hidden border-t px-4 pb-4 space-y-1 ${dark ? "bg-[#0A192F] border-white/10" : "bg-white border-[#D6E1F2]"}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 text-[15px] font-semibold transition-colors border-l-2 ${
                  isActive
                    ? dark ? "border-[#1DD7A5] text-white" : "border-[#2563EB] text-[#2563EB]"
                    : `border-transparent ${baseText}`
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/enterprise"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2.5 text-[15px] font-semibold transition-colors border-l-2 ${
                isActive
                  ? dark ? "border-[#1DD7A5] text-white" : "border-[#2563EB] text-[#2563EB]"
                  : `border-transparent ${baseText}`
              }`
            }
          >
            For Organisations
          </NavLink>
          <div className="pt-2 flex flex-col gap-2">
            <Link to="/login" onClick={() => setOpen(false)} className={`block px-3 py-2.5 rounded-lg text-[15px] font-semibold ${baseText}`}>Sign In</Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="block px-4 py-2.5 rounded-lg text-[15px] font-bold bg-[#2563EB] text-white text-center">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
