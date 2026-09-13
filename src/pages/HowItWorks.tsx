import { useState } from "react";
import { Link } from "react-router";

const steps = [
  { icon: "flag", title: "Set your intention", desc: "Clarity precedes change. Identify what is blocking you — a stalled career, a leadership gap, a life that needs redesigning. The more specific, the better the match.", color: "#2563EB" },
  { icon: "person_search", title: "Get matched", desc: "Use our guided match tool or browse independently. Filter by specialty, coaching style, language, and availability. Every professional is fully credentialed and background-checked.", color: "#0065F4" },
  { icon: "video_call", title: "Free intro call", desc: "A 30-minute, no-commitment discovery session. You decide if the chemistry is right — no pressure, no charge.", color: "#00DBA2" },
  { icon: "calendar_month", title: "Build a coaching plan", desc: "Your coach or mentor collaborates with you to build a structured plan with milestones, session cadence, and measurable outcomes.", color: "#2563EB" },
  { icon: "trending_up", title: "Show up and grow", desc: "Attend your sessions, complete commitments between calls, and track progress. The transformation compounds with consistency.", color: "#003FAF" },
  { icon: "emoji_events", title: "Celebrate outcomes", desc: "Reach milestones, revisit goals, and extend or close your engagement — you are in control at every stage.", color: "#10B981" },
];

const faqs = [
  { q: "How are coaches and mentors vetted?", a: "Every coach and mentor on Thryvio is credentialed by a globally recognised coaching body, has completed a minimum of 100 client hours, and passes our background and reference check. We re-verify credentials annually." },
  { q: "What is the difference between coaching and mentoring?", a: "Coaches use structured frameworks to help you discover your own answers — they are trained in established coaching methodology. Mentors share lived experience and domain expertise to guide you. Thryvio offers both, clearly labeled on every profile." },
  { q: "How does the free intro call work?", a: "After booking, your coach or mentor sends a short pre-session questionnaire. The 30-minute call is a two-way interview — you assess them as much as they learn about your goals. No payment until you decide to proceed." },
  { q: "Can I switch coaches or mentors?", a: "Yes, any time. If the fit is not right, contact support and we will rematch you within 24 hours. Your session credits carry over." },
  { q: "Is my information confidential?", a: "Absolutely. All sessions are bound by professional coaching ethics and Thryvio's code of conduct. Coaches and mentors are prohibited from sharing client information. Sessions are never recorded without your explicit consent." },
  { q: "What if I cannot afford standard rates?", a: "We offer an Income-Adjusted Coaching Fund with subsidised rates for qualifying individuals. Apply on the pricing page." },
];

const personas = [
  {
    icon: "person",
    title: "For individuals",
    color: "#2563EB",
    points: ["Navigate career transitions", "Develop executive presence", "Work through burnout or life changes", "Build confidence and clarity", "Achieve measurable personal goals"],
  },
  {
    icon: "business_center",
    title: "For professionals",
    color: "#0065F4",
    points: ["Accelerate leadership development", "Manage up and across teams", "Prepare for a board or C-suite role", "Improve stakeholder communication", "Balance performance with well-being"],
  },
  {
    icon: "corporate_fare",
    title: "For organisations",
    color: "#003FAF",
    points: ["Scale coaching across teams", "Retain high-potential talent", "Develop future leaders", "Support DEI initiatives", "Measure ROI on people investment"],
  },
];

function DiamondAccent() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block mr-2 -mt-0.5 shrink-0">
      <rect x="5" y="0.5" width="6.36" height="6.36" rx="0.8" transform="rotate(45 5 0.5)" fill="#1DD7A5" />
    </svg>
  );
}

function GeometricDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="180" stroke="#1DD7A5" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="200" cy="200" r="140" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25" />
      <circle cx="200" cy="200" r="100" stroke="#1DD7A5" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="200" cy="200" r="60" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.15" />
      <path d="M200 20 A180 180 0 0 1 380 200" stroke="#1DD7A5" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M200 60 A140 140 0 0 1 340 200" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative bg-[#0A192F] py-24 overflow-hidden" aria-labelledby="hiw-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=1400&h=600&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            style={{ filter: "grayscale(60%) contrast(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A192F 50%, rgba(10,25,47,0.8) 100%)" }} />
        </div>
        <GeometricDecor className="absolute -right-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center" style={{ color: "#A8F0DF" }}>
              <DiamondAccent />
              Designed for real transformation
            </p>
            <h1 id="hiw-heading" className="text-[48px] font-medium text-white mb-4 leading-[1.1]" style={{ fontFamily: "Fraunces" }}>
              How <span className="italic accent-underline" style={{ fontWeight: 500 }}>Thryvio</span> works
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
              A structured, human-first process from discovery to breakthrough — built around what decades of coaching research shows actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-[#F5F8FC]" aria-labelledby="steps-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#435070] mb-2 flex items-center justify-center">
              <DiamondAccent />
              The journey
            </p>
            <h2 id="steps-heading" className="text-[32px] font-medium text-[#0A192F] leading-tight" style={{ fontFamily: "Fraunces" }}>
              Six stages of the <span className="italic accent-underline" style={{ fontWeight: 500 }}>Thryvio journey</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-[#D6E1F2] hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-bg w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px] text-[#2563EB]">{s.icon}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#6B7A99]">STEP {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#0D1B2E] mb-2 leading-tight">{s.title}</h3>
                <p className="text-[14px] text-[#435070] leading-relaxed" style={{ fontFamily: "Khula" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white" aria-labelledby="personas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#435070] mb-2 flex items-center justify-center">
              <DiamondAccent />
              Who it is for
            </p>
            <h2 id="personas-heading" className="text-[32px] font-medium text-[#0A192F] mb-4 leading-tight" style={{ fontFamily: "Fraunces" }}>
              Coaching and mentoring for <span className="italic accent-underline" style={{ fontWeight: 500 }}>every stage</span>
            </h2>
            <p className="text-[16px] text-[#435070] max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "Khula" }}>
              Thryvio serves people at every stage — from first-time career builders to senior executives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map(p => (
              <div key={p.title} className="card-border-left border-l-4 border border-[#D6E1F2] overflow-hidden">
                <div className="p-6">
                  <div className="icon-bg w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px] text-[#2563EB]">{p.icon}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D1B2E] mb-4 leading-tight">{p.title}</h3>
                  <ul className="space-y-2.5" role="list">
                    {p.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2 text-[14px] text-[#435070] leading-relaxed" style={{ fontFamily: "Khula" }}>
                        <span className="material-symbols-outlined text-[16px] mt-0.5 shrink-0" style={{ color: "#1DD7A5" }}>check_circle</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 bg-[#EBF0F9]" aria-label="Trust and credentials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "verified", label: "Fully Credentialed", sub: "All professionals verified" },
              { icon: "security", label: "SOC 2 Type II", sub: "Enterprise-grade security" },
              { icon: "lock", label: "GDPR Compliant", sub: "Your data is protected" },
              { icon: "support_agent", label: "24/7 Support", sub: "Human help when needed" },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#D6E1F2]">
                <span className="material-symbols-outlined text-[28px] text-[#2563EB] block mb-2" aria-hidden="true">{s.icon}</span>
                <p className="text-[14px] font-bold text-[#0D1B2E]">{s.label}</p>
                <p className="text-[12px] text-[#435070] mt-0.5 leading-relaxed" style={{ fontFamily: "Khula" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#435070] mb-2 flex items-center justify-center">
              <DiamondAccent />
              Common questions
            </p>
            <h2 id="faq-heading" className="text-[32px] font-medium text-[#0A192F] leading-tight" style={{ fontFamily: "Fraunces" }}>
              Frequently asked <span className="italic accent-underline" style={{ fontWeight: 500 }}>questions</span>
            </h2>
          </div>
          <div className="space-y-3" role="list">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#D6E1F2] rounded-xl overflow-hidden" role="listitem">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F5F8FC] transition-colors"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[15px] font-semibold text-[#0D1B2E]">{faq.q}</span>
                  <span className="material-symbols-outlined text-[20px] text-[#435070] shrink-0 transition-transform" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>expand_more</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 border-t border-[#D6E1F2]">
                    <p className="text-[14px] text-[#435070] leading-relaxed pt-4" style={{ fontFamily: "Khula" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* IA footer links */}
          <div className="mt-10 pt-8 border-t border-[#D6E1F2]">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#6B7A99] mb-4">You might also explore</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/find-a-coach" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
                <span className="material-symbols-outlined text-[16px]">person_search</span>
                Find a coach or mentor
              </Link>
              <Link to="/programs" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
                <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                Browse programs
              </Link>
              <Link to="/enterprise" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
                <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                Enterprise coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero" aria-label="Get started">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[36px] font-medium text-white mb-4 leading-[1.1]" style={{ fontFamily: "Fraunces" }}>Ready to begin?</h2>
          <p className="text-[16px] mb-8 leading-relaxed" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
            Your first step is a free 30-minute intro call — zero commitment, zero cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/find-a-coach" className="px-7 py-3.5 rounded-xl font-bold text-[15px] bg-[#1DD7A5] text-[#0A192F] hover:bg-[#15C496] transition-colors">
              Find my coach or mentor
            </Link>
            <Link to="/signup" className="px-7 py-3.5 rounded-xl font-bold text-[15px] border-2 text-white hover:bg-white/10 transition-colors" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
