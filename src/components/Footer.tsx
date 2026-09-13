import { Link } from "react-router";
import { ThryvioHorizontalDark } from "@/components/ThryvioLogos";

const cols = [
  {
    heading: "Platform",
    links: [
      { label: "Find a Coach or Mentor", to: "/find-a-coach" },
      { label: "Programs & Events", to: "/programs" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "For Companies",
    links: [
      { label: "Enterprise Coaching", to: "/enterprise" },
      { label: "Team Development", to: "/enterprise#team" },
      { label: "Leadership Programs", to: "/enterprise#leadership" },
      { label: "Request a Demo", to: "/enterprise#demo" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Insights", to: "/blog" },
      { label: "Our Standards", to: "/standards" },
      { label: "Success Stories", to: "/stories" },
      { label: "Help Center", to: "/help" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Thryvio", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand col */}
          <div className="md:col-span-1">
            <ThryvioHorizontalDark width={124} height={40} />
            <p className="mt-4 text-[13px] text-white/50 leading-relaxed" style={{ fontFamily: "Khula" }}>
              Connecting people with world-class coaches and mentors. Globally credentialed. GDPR Compliant.
            </p>
            <div className="mt-5 flex gap-3">
              {["linkedin", "twitter", "instagram"].map(s => (
                <a key={s} href="#" aria-label={s} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-white/60">open_in_new</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">{col.heading}</p>
              <ul className="space-y-2.5" role="list">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                      style={{ fontFamily: "Khula" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/30" style={{ fontFamily: "Khula" }}>
            © 2026 Thryvio. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-[12px] text-white/30" style={{ fontFamily: "Khula" }}>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#1DD7A5]">verified</span>
              Credentialed Professionals
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#1DD7A5]">security</span>
              SOC 2 Type II
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#1DD7A5]">lock</span>
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
