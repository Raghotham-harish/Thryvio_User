import { useState } from "react";
import { Link } from "react-router";

function DiamondAccent() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block mr-2 -mt-0.5 shrink-0">
      <rect x="5" y="0.5" width="6.36" height="6.36" rx="0.8" transform="rotate(45 5 0.5)" fill="#1DD7A5" />
    </svg>
  );
}

const stats = [
  { value: "31%", label: "avg. increase in leadership effectiveness" },
  { value: "4.2×", label: "return on coaching investment" },
  { value: "67%", label: "of coached employees stay 3+ years longer" },
  { value: "89%", label: "of HR leaders report measurable performance lift" },
];

const solutions = [
  {
    icon: "trending_up",
    title: "Leadership Pipeline",
    desc: "Identify and develop your next generation of leaders before critical roles go vacant. Structured 6–12 month programs built around your competency framework.",
    photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=460&fit=crop&auto=format",
  },
  {
    icon: "groups",
    title: "Team Effectiveness",
    desc: "Transform group dynamics, communication, and trust. Coaching cohorts for high-stakes cross-functional groups and newly formed executive teams.",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=460&fit=crop&auto=format",
  },
  {
    icon: "psychology",
    title: "Executive Coaching",
    desc: "1:1 coaching for C-suite, VPs, and senior directors from rigorously credentialed executive coaches with Fortune 500 experience.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=460&fit=crop&auto=format",
  },
  {
    icon: "diversity_3",
    title: "DEI & Belonging",
    desc: "Coaching and mentoring programs purpose-built to support underrepresented talent, allyship development, and inclusive leadership at every level.",
    photo: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=700&h=460&fit=crop&auto=format",
  },
  {
    icon: "health_and_safety",
    title: "Well-being at Scale",
    desc: "Prevent burnout before it costs you top talent. Group and individual well-being programs embedded into your employee benefit stack.",
    photo: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&h=460&fit=crop&auto=format",
  },
  {
    icon: "school",
    title: "Custom Learning Journeys",
    desc: "White-labelled coaching programs designed with your L&D team and deployed on Thryvio's infrastructure — with full analytics and ROI reporting.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&h=460&fit=crop&auto=format",
  },
];

const caseStudies = [
  {
    company: "Global Tech Firm",
    industry: "Technology",
    result: "Reduced senior attrition by 34% in 12 months through targeted leadership coaching.",
    stat: "−34%", statLabel: "attrition",
    tag: "Retention",
    photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=460&fit=crop&auto=format",
  },
  {
    company: "Healthcare Network",
    industry: "Healthcare",
    result: "Promoted 18 internal leaders instead of external hires, saving $2.1M in recruitment costs.",
    stat: "$2.1M", statLabel: "saved",
    tag: "Pipeline",
    photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=460&fit=crop&auto=format",
  },
  {
    company: "Financial Services Group",
    industry: "Finance",
    result: "87% of participants reported measurable behaviour change within 90 days of completing a program.",
    stat: "87%", statLabel: "behaviour change",
    tag: "Effectiveness",
    photo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=460&fit=crop&auto=format",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "$2,400",
    period: "/ month",
    seats: "Up to 20 employees",
    features: ["Access to 500+ coaches and mentors", "Individual 1:1 sessions", "Progress dashboard", "Email support", "Monthly reporting"],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Business",
    price: "$6,800",
    period: "/ month",
    seats: "Up to 80 employees",
    features: ["Everything in Starter", "Group coaching cohorts", "Custom program design", "Dedicated success manager", "API & HRIS integration", "Quarterly ROI report"],
    cta: "Book a demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    seats: "Unlimited employees",
    features: ["Everything in Business", "White-label option", "SSO & advanced security", "Custom analytics", "SLA guarantee", "Executive sponsor support"],
    cta: "Contact sales",
    popular: false,
  },
];

const clients = ["TechCorp", "NovaCare", "Meridian Group", "Atlas Partners", "Veritas Capital", "Solaris Health"];

export default function Enterprise() {
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="main-content">

      {/* ── Hero — full-bleed split ── */}
      <section className="relative min-h-[92vh] flex items-center bg-[#060F1E]" aria-labelledby="ent-heading">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.6) contrast(1.05)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(6,15,30,0.97) 0%, rgba(6,15,30,0.90) 45%, rgba(6,15,30,0.45) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1DD7A5]/30 bg-[#1DD7A5]/10 text-[#1DD7A5] text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="material-symbols-outlined text-[13px]">corporate_fare</span>
              Enterprise coaching platform
            </span>
            <h1 id="ent-heading" className="text-[52px] sm:text-[64px] font-medium text-white leading-[1.05] mb-6" style={{ fontFamily: "Fraunces" }}>
              Build a coaching<br />
              culture that<br />
              <span className="italic accent-underline" style={{ fontWeight: 500 }}>scales.</span>
            </h1>
            <p className="text-[18px] leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
              Thryvio Enterprise gives HR and L&D leaders a turnkey coaching infrastructure — from leadership pipelines to well-being at scale — with full measurement and ROI reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="px-7 py-4 rounded-xl font-bold text-[15px] bg-[#1DD7A5] text-[#0A192F] hover:bg-[#15C496] transition-colors text-center">
                Request a demo
              </a>
              <a href="#solutions" className="px-7 py-4 rounded-xl font-bold text-[15px] border border-white/25 text-white hover:bg-white/8 transition-colors text-center">
                Explore solutions
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip — bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0A192F]/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map(s => (
              <div key={s.label} className="px-6 py-5">
                <p className="text-[32px] font-semibold text-white leading-none mb-1" style={{ fontFamily: "Fraunces" }}>{s.value}</p>
                <p className="text-[12px] leading-snug" style={{ fontFamily: "Khula", color: "#A8F0DF" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted by ── */}
      <section className="bg-white border-b border-[#D6E1F2] py-10" aria-label="Client organisations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-[#6B7A99] mb-7">Trusted by leading organisations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map(c => (
              <div key={c} className="px-5 py-2.5 rounded-lg border border-[#D6E1F2] bg-[#F5F8FC] text-[13px] font-bold text-[#6B7A99] tracking-wide">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions — image-forward grid ── */}
      <section id="solutions" className="py-24 bg-[#F5F8FC]" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-3 flex items-center">
              <DiamondAccent />What we offer
            </p>
            <h2 id="solutions-heading" className="text-[38px] font-medium text-[#0A192F] leading-tight" style={{ fontFamily: "Fraunces" }}>
              Coaching solutions for<br /><span className="italic accent-underline" style={{ fontWeight: 500 }}>every need</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(s => (
              <article key={s.title} className="bg-white rounded-2xl overflow-hidden border border-[#D6E1F2] hover:shadow-lg hover:border-[#2563EB]/20 transition-all group flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.photo}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "saturate(0.75) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.65) 0%, transparent 55%)" }} />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px] text-white">{s.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[16px] font-bold text-[#0D1B2E] mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#435070] leading-relaxed flex-1" style={{ fontFamily: "Khula" }}>{s.desc}</p>
                  <a href="#demo" className="mt-4 text-[13px] font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 transition-colors">
                    Learn more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial split — how it works ── */}
      <section className="bg-white py-24 overflow-hidden" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image panel */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=680&fit=crop&auto=format"
                  alt="Executive team in a strategic planning session"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#0A192F] text-white rounded-2xl px-6 py-5 shadow-2xl border border-white/10">
                <p className="text-[38px] font-semibold leading-none" style={{ fontFamily: "Fraunces" }}>4.2×</p>
                <p className="text-[12px] mt-1" style={{ fontFamily: "Khula", color: "#A8F0DF" }}>avg. return on<br />coaching investment</p>
              </div>
            </div>

            {/* Text panel */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-3 flex items-center">
                <DiamondAccent />How it works
              </p>
              <h2 id="how-heading" className="text-[36px] font-medium text-[#0A192F] mb-6 leading-tight" style={{ fontFamily: "Fraunces" }}>
                Built for your<br />
                <span className="italic accent-underline" style={{ fontWeight: 500 }}>L&D strategy</span>
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & design", desc: "Our enterprise team works with your HR and L&D leaders to map your goals, competency framework, and coaching needs." },
                  { step: "02", title: "Coach matching", desc: "We curate a roster of credentialed coaches and mentors matched to your industry, culture, and leadership level requirements." },
                  { step: "03", title: "Deploy at scale", desc: "Roll out 1:1, group, or cohort programs across your org — with scheduling, progress tracking, and HRIS integration built in." },
                  { step: "04", title: "Measure & iterate", desc: "Full ROI dashboards, 360° feedback loops, and quarterly business reviews ensure continuous improvement." },
                ].map(item => (
                  <div key={item.step} className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-[#D6E1F2] flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#2563EB]">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-[#0D1B2E] mb-1">{item.title}</h3>
                      <p className="text-[13px] text-[#435070] leading-relaxed" style={{ fontFamily: "Khula" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#demo" className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl font-bold text-[14px] bg-[#0A192F] text-white hover:bg-[#0D2347] transition-colors">
                Schedule a call <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case studies — full-bleed image cards ── */}
      <section id="case-studies" className="py-24 bg-[#0A192F]" aria-labelledby="cases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest flex items-center mb-3" style={{ color: "#A8F0DF" }}>
                <DiamondAccent />Client results
              </p>
              <h2 id="cases-heading" className="text-[38px] font-medium text-white leading-tight" style={{ fontFamily: "Fraunces" }}>
                Results that<br /><span className="italic accent-underline" style={{ fontWeight: 500 }}>speak for themselves</span>
              </h2>
            </div>
            <a href="#demo" className="shrink-0 px-5 py-3 rounded-xl font-bold text-[13px] border border-white/25 text-white hover:bg-white/8 transition-colors">
              See all case studies →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <article key={cs.company} className="rounded-2xl overflow-hidden group cursor-pointer flex flex-col">
                {/* Photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cs.photo}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "saturate(0.7) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(6,15,30,0.9) 0%, rgba(6,15,30,0.3) 60%, transparent 100%)" }} />
                  {/* Stat overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[40px] font-semibold text-white leading-none" style={{ fontFamily: "Fraunces" }}>{cs.stat}</p>
                      <p className="text-[11px] font-semibold" style={{ color: "#A8F0DF" }}>{cs.statLabel}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-[#0A192F] bg-[#1DD7A5]">{cs.tag}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-b-2xl p-5 flex-1 flex flex-col">
                  <p className="text-[14px] font-semibold text-white leading-snug flex-1" style={{ fontFamily: "Khula" }}>{cs.result}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-bold text-white">{cs.company}</p>
                      <p className="text-[11px]" style={{ color: "#A8F0DF" }}>{cs.industry}</p>
                    </div>
                    <span className="material-symbols-outlined text-[20px] text-white/40 group-hover:text-white transition-colors">arrow_forward</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-[#F5F8FC]" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-3 flex items-center justify-center">
              <DiamondAccent />Plans
            </p>
            <h2 id="pricing-heading" className="text-[36px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>
              Simple, <span className="italic accent-underline" style={{ fontWeight: 500 }}>transparent pricing</span>
            </h2>
            <p className="text-[15px] text-[#435070] mt-2" style={{ fontFamily: "Khula" }}>All plans include a 14-day free trial. No setup fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(t => (
              <div key={t.name} className={`rounded-2xl border overflow-hidden flex flex-col ${t.popular ? "border-[#2563EB] shadow-xl shadow-[#2563EB]/10" : "border-[#D6E1F2]"}`}>
                {t.popular && (
                  <div className="bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-widest text-center py-2">Most popular</div>
                )}
                <div className="h-1 bg-[#2563EB]" style={{ opacity: t.popular ? 1 : 0.25 }} />
                <div className="bg-white p-6 flex-1 flex flex-col">
                  <p className="text-[13px] font-bold text-[#435070] uppercase tracking-wider mb-1">{t.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[32px] font-semibold text-[#0D1B2E]" style={{ fontFamily: "Fraunces" }}>{t.price}</span>
                    <span className="text-[13px] text-[#435070]">{t.period}</span>
                  </div>
                  <p className="text-[13px] text-[#435070] mb-5" style={{ fontFamily: "Khula" }}>{t.seats}</p>
                  <ul className="space-y-2.5 mb-6 flex-1" role="list">
                    {t.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-[#2C3A52]" style={{ fontFamily: "Khula" }}>
                        <span className="material-symbols-outlined text-[15px] mt-0.5 shrink-0" style={{ color: "#1DD7A5" }}>check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#demo"
                    className={`block w-full text-center py-3 rounded-xl font-bold text-[14px] transition-colors ${t.popular ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]" : "bg-[#0A192F] text-white hover:bg-[#0D2347]"}`}
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed CTA band with image ── */}
      <section className="relative overflow-hidden py-24" aria-label="Enterprise contact CTA">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&h=600&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5) contrast(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,15,30,0.96) 0%, rgba(6,15,30,0.82) 55%, rgba(6,15,30,0.55) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest flex items-center mb-4" style={{ color: "#1DD7A5" }}>
              <DiamondAccent />Ready to start
            </p>
            <h2 className="text-[38px] font-medium text-white leading-tight mb-4" style={{ fontFamily: "Fraunces" }}>
              Talk to our<br /><span className="italic accent-underline" style={{ fontWeight: 500 }}>enterprise team</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-8" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
              We'll show you how Thryvio works for organisations like yours — and design a program around your specific goals and team size.
            </p>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: "groups", text: "20 to 20,000 employees" },
                { icon: "public", text: "Deployed in 40+ countries" },
                { icon: "verified", text: "GDPR & SOC 2 compliant" },
              ].map(pt => (
                <div key={pt.text} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" style={{ color: "#1DD7A5" }}>{pt.icon}</span>
                  <span className="text-[13px] font-semibold text-white/80" style={{ fontFamily: "Khula" }}>{pt.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Demo form ── */}
          <div id="demo">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 text-center">
                <span className="material-symbols-outlined text-[48px] block mb-3 text-[#065F46]">check_circle</span>
                <h3 className="text-[22px] font-semibold text-[#0D1B2E] mb-2" style={{ fontFamily: "Fraunces" }}>Request received!</h3>
                <p className="text-[14px] text-[#435070]" style={{ fontFamily: "Khula" }}>Our enterprise team will reach out within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 space-y-4 shadow-2xl" noValidate>
                <h3 className="text-[20px] font-semibold text-[#0D1B2E]" style={{ fontFamily: "Fraunces" }}>Request a demo</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5" htmlFor="ent-name">Full name</label>
                    <input id="ent-name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5" htmlFor="ent-email">Work email</label>
                    <input id="ent-email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20" placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5" htmlFor="ent-company">Company</label>
                    <input id="ent-company" type="text" required value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5" htmlFor="ent-size">Team size</label>
                    <select id="ent-size" required value={form.size} onChange={e => setForm(f => ({ ...f, size: e.target.value }))} className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] appearance-none">
                      <option value="">Select size</option>
                      <option>1–20 employees</option>
                      <option>21–100 employees</option>
                      <option>101–500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#2C3A52] mb-1.5" htmlFor="ent-msg">What are you hoping to achieve?</label>
                  <textarea id="ent-msg" rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-2.5 border border-[#D6E1F2] bg-[#F5F8FC] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 resize-none placeholder:text-[#6B7A99]" placeholder="e.g. Develop our senior leadership team, reduce attrition..." />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-[15px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                  Submit request
                </button>
                <p className="text-[11px] text-[#6B7A99] text-center" style={{ fontFamily: "Khula" }}>Our team responds within 1 business day. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Also explore ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-t border-[#D6E1F2] flex flex-wrap gap-3">
        <Link to="/find-a-coach" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
          <span className="material-symbols-outlined text-[16px]">person_search</span>
          Individual coaches &amp; mentors
        </Link>
        <Link to="/programs" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
          <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
          Programs &amp; group events
        </Link>
        <Link to="/how-it-works" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
          <span className="material-symbols-outlined text-[16px]">help_outline</span>
          How Thryvio works
        </Link>
      </div>
    </main>
  );
}
