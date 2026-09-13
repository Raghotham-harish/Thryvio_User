import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ThryvioMark } from "@/components/ThryvioLogos";

const stats = [
  { value: "12,400+", label: "Certified Professionals" },
  { value: "94%", label: "Client Satisfaction" },
  { value: "180+", label: "Countries Served" },
  { value: "3.2M+", label: "Sessions Completed" },
];

/* ── Goal-driven exploration tiles ── */
const goalTiles = [
  {
    icon: "rocket_launch",
    label: "Advance my career",
    sub: "Promotions, pivots & job transitions",
    color: "#2563EB",
    bg: "#EBF0F9",
    count: "3,200 advisors",
    query: "Career",
  },
  {
    icon: "group_work",
    label: "Build leadership skills",
    sub: "Executive presence, teams & strategy",
    color: "#0065F4",
    bg: "#EBF4FF",
    count: "1,800 advisors",
    query: "Leadership",
  },
  {
    icon: "storefront",
    label: "Grow my business",
    sub: "Startups, scale-ups & entrepreneurship",
    color: "#003FAF",
    bg: "#EAF0FF",
    count: "1,400 advisors",
    query: "Business",
  },
  {
    icon: "self_improvement",
    label: "Improve well-being",
    sub: "Mindfulness, energy & resilience",
    color: "#10B981",
    bg: "#ECFDF5",
    count: "980 advisors",
    query: "Well-being",
  },
  {
    icon: "psychology",
    label: "Unlock peak performance",
    sub: "Habits, mindset & accountability",
    color: "#00DBA2",
    bg: "#ECFDF9",
    count: "1,100 advisors",
    query: "Performance",
  },
  {
    icon: "diversity_1",
    label: "Navigate relationships",
    sub: "Communication, conflict & connection",
    color: "#7C3AED",
    bg: "#F5F0FF",
    count: "640 advisors",
    query: "Relationships",
  },
];

/* ── Featured members ── */
const members = [
  {
    name: "Dr. Serena Okafor",
    title: "Executive & Leadership Coach",
    roles: ["Coach", "Mentor"],
    rating: 4.9,
    reviews: 214,
    tags: ["Leadership", "Strategy", "C-Suite"],
    price: "$220",
    availability: "Available this week",
    photo: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=400&h=400&fit=crop&auto=format",
    color: "#2563EB",
  },
  {
    name: "Marcus Hightower",
    title: "Career Transition Specialist",
    roles: ["Mentor"],
    rating: 4.8,
    reviews: 187,
    tags: ["Career", "Pivots", "Tech"],
    price: "$160",
    availability: "Available Mon–Fri",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
    color: "#0065F4",
  },
  {
    name: "Priya Nambiar",
    title: "Life & Performance Coach",
    roles: ["Coach"],
    rating: 5.0,
    reviews: 96,
    tags: ["Performance", "Mindset", "Well-being"],
    price: "$140",
    availability: "3 slots this week",
    photo: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=400&h=400&fit=crop&auto=format",
    color: "#00DBA2",
  },
  {
    name: "James Whitfield",
    title: "Business Growth Advisor",
    roles: ["Coach", "Mentor"],
    rating: 4.7,
    reviews: 312,
    tags: ["Business", "Startups", "Scale"],
    price: "$190",
    availability: "Available tomorrow",
    photo: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=400&h=400&fit=crop&auto=format",
    color: "#003FAF",
  },
];

const rolePill: Record<string, string> = {
  Coach: "bg-[#ECEEF2] text-[#5A6479]",
  Mentor: "bg-[#ECFDF9] text-[#065F46]",
};

/* ── Live programs strip ── */
const liveItems = [
  { type: "Live Event", label: "Career Reinvention Bootcamp", date: "Oct 14–15", seats: "Open", color: "#0065F4" },
  { type: "Program", label: "90-Day Leadership Accelerator", date: "Oct 20 start", seats: "4 left", color: "#2563EB" },
  { type: "Workshop", label: "Inner Leader: Mindset Reset", date: "Cohort open", seats: "12 enrolled", color: "#00DBA2" },
  { type: "AMA", label: "Startup Founder AMA with James Whitfield", date: "Oct 30", seats: "Free", color: "#003FAF" },
  { type: "Workshop", label: "Difficult Conversations Masterclass", date: "Nov 3 start", seats: "6 left", color: "#7C3AED" },
];

/* ── Trending searches ── */
const trending = [
  "Executive coach", "Career pivot", "Startup mentor", "Work-life balance",
  "Public speaking", "Leadership transition", "Burnout recovery", "Women in tech",
];

/* ── Impact numbers ── */
const impacts = [
  { icon: "trending_up", value: "+$38K", label: "Average salary growth in year 1", color: "#2563EB" },
  { icon: "star", value: "4.9 / 5", label: "Average advisor rating across 3.2M sessions", color: "#B45309" },
  { icon: "timer", value: "< 48h", label: "Average time to first booking", color: "#00DBA2" },
  { icon: "workspace_premium", value: "100%", label: "Advisors credentialed & background-checked", color: "#0065F4" },
];

/* ── Testimonials ── */
const testimonials = [
  {
    quote: "Within 90 days I had a clear strategy, a new leadership framework, and had negotiated a $40K raise. Thryvio matched me perfectly.",
    name: "Tanya R.",
    role: "VP Engineering, fintech",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    color: "#2563EB",
  },
  {
    quote: "I was skeptical until my first session. Now I can't imagine navigating my career without my mentor on Thryvio.",
    name: "Dmitri V.",
    role: "Founder, SaaS startup",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    color: "#00DBA2",
  },
  {
    quote: "The professionals on Thryvio are a different calibre. My coach holds me accountable without judgment — it's transformative.",
    name: "Amara L.",
    role: "Product Director",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&auto=format",
    color: "#0065F4",
  },
];

/* ── Upcoming programs ── */
const upcomingPrograms = [
  {
    type: "Program",
    title: "90-Day Leadership Accelerator",
    lead: "Dr. Serena Okafor",
    duration: "12 weeks",
    seats: "4 seats left",
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format",
    color: "#2563EB",
  },
  {
    type: "Live Event",
    title: "Career Reinvention Bootcamp",
    lead: "Marcus Hightower",
    duration: "2-day intensive",
    seats: "Registration open",
    photo: "https://images.unsplash.com/photo-1623652653308-d49d335c92eb?w=600&h=400&fit=crop&auto=format",
    color: "#00DBA2",
  },
  {
    type: "Workshop",
    title: "Inner Leader: Mindset Reset",
    lead: "Priya Nambiar",
    duration: "4-week cohort",
    seats: "12 enrolled",
    photo: "https://images.unsplash.com/photo-1623303647440-967d26b95b47?w=600&h=400&fit=crop&auto=format",
    color: "#0065F4",
  },
];

/* ── Trusted orgs ── */
const trustedOrgs = ["TechCorp", "NovaCare", "Meridian Group", "Atlas Partners", "Veritas Capital", "Solaris Health", "Axiom Labs", "Crestline Finance"];

function DiamondAccent() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block mr-2 -mt-0.5 shrink-0">
      <rect x="5" y="0.5" width="6.36" height="6.36" rx="0.8" transform="rotate(45 5 0.5)" fill="#1DD7A5" />
    </svg>
  );
}

function GeometricDecor({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="260" cy="260" r="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
      <circle cx="260" cy="260" r="170" stroke="rgba(29,215,165,0.12)" strokeWidth="1" />
      <circle cx="260" cy="260" r="100" stroke="rgba(29,215,165,0.18)" strokeWidth="1.5" />
      <path d="M 260 20 A 240 240 0 0 1 500 260" stroke="rgba(0,219,162,0.25)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 20 260 A 240 240 0 0 1 260 500" stroke="rgba(37,99,235,0.2)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="260" cy="20" r="4" fill="#1DD7A5" opacity="0.6" />
      <circle cx="500" cy="260" r="3" fill="#2563EB" opacity="0.5" />
    </svg>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/find-a-coach${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  }

  return (
    <main id="main-content">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-hero overflow-hidden" aria-label="Hero">
        <GeometricDecor className="absolute -right-16 top-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none select-none" />
        <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none select-none translate-y-16">
          <ThryvioMark className="w-[360px] h-[360px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px] py-14 md:py-20">

            {/* Copy */}
            <div className="lg:pr-12 py-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1DD7A5]/15 text-[#A8F0DF] text-[11px] font-bold uppercase tracking-wider mb-7">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">verified</span>
                Verified Coaching &amp; Mentoring Platform
              </span>

              <h1 className="text-[42px] sm:text-[54px] md:text-[60px] font-medium text-white leading-[1.1] mb-5" style={{ fontFamily: "Fraunces" }}>
                Find your coach<br />
                or <span className="italic accent-underline" style={{ fontWeight: 500 }}>mentor.</span>
              </h1>

              <p className="text-[16px] leading-relaxed mb-7 max-w-md" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
                Connect with world-class, credentialed coaches and mentors for career growth, leadership development, and life transformation.
              </p>

              <form onSubmit={handleSearch} className="flex gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1.5 max-w-lg mb-5">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <span className="material-symbols-outlined text-white/60 text-[20px] shrink-0" aria-hidden="true">search</span>
                  <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="e.g. Leadership coach, career mentor..."
                    className="flex-1 bg-transparent text-white placeholder:text-white/50 text-[14px] outline-none"
                    aria-label="Search coaches and mentors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[14px] rounded-lg transition-colors shrink-0"
                >
                  Search
                </button>
              </form>

              {/* Trending chips */}
              <div>
                <p className="text-[11px] font-semibold text-white/45 mb-2 uppercase tracking-wider">Trending</p>
                <div className="flex flex-wrap gap-2">
                  {["Executive", "Career pivot", "Startup", "Life", "Well-being", "Performance"].map(t => (
                    <button
                      key={t}
                      onClick={() => navigate(`/find-a-coach?q=${t}`)}
                      className="px-3 py-1 rounded-full text-[12px] font-semibold text-white/80 bg-white/10 hover:bg-white/18 border border-white/20 hover:border-white/35 transition-all"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo collage */}
            <div className="hidden lg:grid grid-cols-2 gap-3 relative h-full min-h-[520px] py-6">
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-52 bg-[#0D2347]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=400&fit=crop&auto=format"
                  alt="A coaching session between two professionals"
                  className="w-full h-full object-cover opacity-80"
                  style={{ filter: "contrast(1.05) saturate(0.8)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.55) 0%, transparent 60%)" }} />
                {/* Stat chip */}
                <div className="absolute bottom-4 left-4 bg-[#0A192F]/80 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: "#A8F0DF" }}>Avg. outcome</p>
                  <p className="text-[22px] font-semibold text-white" style={{ fontFamily: "Fraunces" }}>+$38K</p>
                  <p className="text-[10px] font-semibold" style={{ color: "#A8F0DF" }}>salary growth / year 1</p>
                </div>
                {/* Online chip */}
                <div className="absolute bottom-4 right-4 bg-[#0A192F]/80 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1DD7A5] pulse-dot" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-bold text-white">12 advisors online</p>
                    <p className="text-[10px]" style={{ color: "#A8F0DF" }}>Ready to meet you</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-44 bg-[#0D2347]">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=320&fit=crop&auto=format"
                  alt="Professional in a coaching conversation"
                  className="w-full h-full object-cover opacity-75"
                  style={{ filter: "saturate(0.85)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3">
                  <p className="text-[11px] font-bold text-white">Executive Coaching</p>
                  <p className="text-[10px]" style={{ color: "#A8F0DF" }}>1,800 advisors</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-44 bg-[#0D2347]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=320&fit=crop&auto=format"
                  alt="Mentor in a professional setting"
                  className="w-full h-full object-cover opacity-75"
                  style={{ filter: "saturate(0.85)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3">
                  <p className="text-[11px] font-bold text-white">Career Mentoring</p>
                  <p className="text-[10px]" style={{ color: "#A8F0DF" }}>3,200 advisors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-white border-b border-[#D6E1F2]" aria-label="Platform statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i < 3 ? "md:border-r md:border-[#D6E1F2]" : ""}`}>
                <dd className="text-[34px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>{s.value}</dd>
                <dt className="text-[12px] font-semibold text-[#435070] uppercase tracking-wider mt-1" style={{ fontFamily: "Khula" }}>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Live events ticker strip ── */}
      <section className="bg-[#0A192F] border-b border-white/10 overflow-hidden" aria-label="Live and upcoming events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <span className="flex items-center gap-1.5 shrink-0 text-[11px] font-bold uppercase tracking-widest text-[#1DD7A5]">
            <span className="w-2 h-2 rounded-full bg-[#1DD7A5] pulse-dot" aria-hidden="true" />
            Live &amp; upcoming
          </span>
          <div className="h-4 w-px bg-white/20 shrink-0" />
          <div className="flex gap-6 overflow-x-auto scrollbar-none">
            {liveItems.map(item => (
              <Link
                key={item.label}
                to="/programs"
                className="flex items-center gap-2 shrink-0 group"
              >
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold text-white shrink-0"
                  style={{ background: item.color }}
                >
                  {item.type}
                </span>
                <span className="text-[12px] font-semibold text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[11px] text-white/40 shrink-0">{item.date}</span>
                <span className="text-[10px] font-bold text-[#1DD7A5] shrink-0">{item.seats}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore by goal ── */}
      <section className="py-20 bg-[#F5F8FC]" aria-labelledby="goals-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-2 flex items-center">
                <DiamondAccent />
                What do you want to achieve?
              </p>
              <h2 id="goals-heading" className="text-[36px] sm:text-[42px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>
                Explore by <span className="italic accent-underline-blue accent-underline" style={{ fontWeight: 500 }}>goal</span>
              </h2>
            </div>
            <Link to="/find-a-coach" className="flex items-center gap-1.5 text-[14px] font-bold text-[#1D4ED8] hover:text-[#1E40AF]">
              Browse all advisors
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {goalTiles.map(g => (
              <Link
                key={g.label}
                to={`/find-a-coach?q=${g.query}`}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[#D6E1F2] hover:border-[#2563EB]/40 hover:shadow-lg transition-all cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{ background: g.bg }}
                >
                  <span className="material-symbols-outlined text-[24px]" style={{ color: g.color }} aria-hidden="true">{g.icon}</span>
                </div>
                <p className="text-[13px] font-bold text-[#0A192F] leading-snug mb-1">{g.label}</p>
                <p className="text-[11px] text-[#6B7A99] leading-snug mb-2">{g.sub}</p>
                <span className="text-[10px] font-bold mt-auto" style={{ color: g.color }}>{g.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending searches ── */}
      <section className="py-10 bg-white border-b border-[#D6E1F2]" aria-label="Trending searches">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4 flex-wrap">
          <span className="text-[12px] font-bold text-[#435070] uppercase tracking-wider shrink-0 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#2563EB]" aria-hidden="true">trending_up</span>
            Trending searches
          </span>
          {trending.map(t => (
            <Link
              key={t}
              to={`/find-a-coach?q=${encodeURIComponent(t)}`}
              className="px-3.5 py-1.5 rounded-full border border-[#D6E1F2] bg-[#F5F8FC] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EBF0F9] transition-all"
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured members ── */}
      <section className="py-20 bg-white" aria-labelledby="members-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-2 flex items-center">
                <DiamondAccent />
                Top rated this month
              </p>
              <h2 id="members-heading" className="text-[36px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>
                Meet featured <span className="italic accent-underline-blue accent-underline" style={{ fontWeight: 500 }}>coaches &amp; mentors</span>
              </h2>
            </div>
            <Link to="/find-a-coach" className="flex items-center gap-1.5 text-[14px] font-bold text-[#1D4ED8] hover:text-[#1E40AF]">
              View all members
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {members.map(m => (
              <article
                key={m.name}
                className="bg-white border border-[#D6E1F2] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#2563EB]/30 transition-all group cursor-pointer"
              >
                {/* Photo — no gradient top bar */}
                <div className="relative h-44 bg-[#0D2347] overflow-hidden">
                  <img
                    src={m.photo}
                    alt={`${m.name} — ${m.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "contrast(1.02) saturate(0.9)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.6) 0%, transparent 55%)" }} />
                  {/* Role pills */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    {m.roles.map(r => (
                      <span key={r} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${rolePill[r]}`}>{r}</span>
                    ))}
                  </div>
                  {/* Availability */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DD7A5] shrink-0 pulse-dot" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-white">{m.availability}</span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[15px] font-bold text-[#0A192F] leading-tight">{m.name}</p>
                  <p className="text-[12px] text-[#435070] mb-3 mt-0.5" style={{ fontFamily: "Khula" }}>{m.title}</p>

                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="material-symbols-outlined text-[15px] text-[#B45309]" aria-hidden="true">star</span>
                    <span className="text-[13px] font-bold text-[#0A192F]">{m.rating}</span>
                    <span className="text-[12px] text-[#435070]">({m.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {m.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[#ECEEF2] text-[#5A6479] text-[11px] font-semibold">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#D6E1F2]">
                    <p className="text-[16px] font-bold text-[#0A192F]">{m.price}<span className="text-[11px] font-normal text-[#435070]">/hr</span></p>
                    <button className="px-3 py-1.5 text-[12px] font-bold rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                      View profile
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Discovery CTA strip under members */}
          <div className="mt-8 rounded-2xl bg-[#F5F8FC] border border-[#D6E1F2] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=60&h=60&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1619970096004-08f804595ea4?w=60&h=60&fit=crop&auto=format",
                ].map((src, i) => (
                  <img key={i} src={src} alt="" aria-hidden="true" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[#ECEEF2] flex items-center justify-center text-[11px] font-bold text-[#5A6479]">+400</div>
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#0A192F]">12,400+ verified advisors available</p>
                <p className="text-[12px] text-[#435070]" style={{ fontFamily: "Khula" }}>In 52 languages · 180+ countries</p>
              </div>
            </div>
            <Link
              to="/find-a-coach"
              className="px-6 py-2.5 rounded-xl font-bold text-[14px] bg-[#0A192F] text-white hover:bg-[#152744] transition-colors shrink-0"
            >
              Browse all advisors
            </Link>
          </div>
        </div>
      </section>

      {/* ── Impact / proof section ── */}
      <section className="relative overflow-hidden bg-[#0A192F] py-20" aria-labelledby="impact-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1400&h=600&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-15"
            style={{ filter: "grayscale(60%) contrast(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0A192F 35%, rgba(10,25,47,0.75) 100%)" }} />
        </div>
        <GeometricDecor className="absolute -right-24 -top-24 w-[440px] h-[440px] opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center justify-center" style={{ color: "#A8F0DF" }}>
              <DiamondAccent />
              Proven outcomes
            </p>
            <h2 id="impact-heading" className="text-[36px] sm:text-[44px] font-medium text-white" style={{ fontFamily: "Fraunces" }}>
              Results that <span className="italic accent-underline" style={{ fontWeight: 500 }}>speak for themselves</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {impacts.map(item => (
              <div key={item.label} className="bg-white/6 backdrop-blur-sm border border-white/12 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}22` }}>
                  <span className="material-symbols-outlined text-[22px]" style={{ color: item.color }} aria-hidden="true">{item.icon}</span>
                </div>
                <p className="text-[32px] font-medium text-white mb-1" style={{ fontFamily: "Fraunces" }}>{item.value}</p>
                <p className="text-[12px] leading-snug" style={{ fontFamily: "Khula", color: "#A8F0DF" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs & events ── */}
      <section className="py-20 bg-[#F5F8FC]" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-2 flex items-center">
                <DiamondAccent />
                Live &amp; upcoming
              </p>
              <h2 id="programs-heading" className="text-[36px] font-medium text-[#0A192F]" style={{ fontFamily: "Fraunces" }}>
                Programs &amp; events
              </h2>
            </div>
            <Link to="/programs" className="flex items-center gap-1.5 text-[14px] font-bold text-[#1D4ED8] hover:text-[#1E40AF]">
              Browse all
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingPrograms.map(p => (
              <article
                key={p.title}
                className="rounded-2xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer border border-[#D6E1F2] bg-white"
              >
                <div className="relative h-52 bg-[#0D2347] overflow-hidden">
                  <img
                    src={p.photo}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "contrast(1.05) saturate(0.85)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.88) 0%, rgba(10,25,47,0.3) 60%, transparent 100%)" }} />
                  <span
                    className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ background: `${p.color}dd` }}
                  >
                    {p.type}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-[17px] font-bold text-white leading-tight">{p.title}</h3>
                    <p className="text-[12px] mt-1" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>with {p.lead}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[12px] text-[#435070]">
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">schedule</span>
                    {p.duration}
                  </span>
                  <span className="text-[11px] font-bold text-[#065F46] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block pulse-dot" aria-hidden="true" />
                    {p.seats}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative py-24 overflow-hidden" aria-labelledby="testimonials-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=1400&h=700&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-15"
            style={{ filter: "grayscale(70%) contrast(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-hero" style={{ opacity: 0.96 }} />
        </div>
        <GeometricDecor className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center justify-center" style={{ color: "#A8F0DF" }}>
              <DiamondAccent />
              Real stories
            </p>
            <h2 id="testimonials-heading" className="text-[36px] sm:text-[44px] font-medium text-white" style={{ fontFamily: "Fraunces" }}>
              <span className="italic accent-underline" style={{ fontWeight: 500 }}>Life-changing</span> outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <figure key={t.name} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/11 transition-colors">
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" aria-hidden="true" className="mb-4 opacity-60">
                  <path d="M0 28V17.5C0 7.833 5.333 2.333 16 1L17.5 3.5C13.167 4.667 11 7.5 11 12H16V28H0ZM20 28V17.5C20 7.833 25.333 2.333 36 1L37.5 3.5C33.167 4.667 31 7.5 31 12H36V28H20Z" fill="#1DD7A5" />
                </svg>
                <blockquote>
                  <p className="text-[15px] leading-relaxed" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>{t.quote}</p>
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                  <img src={t.photo} alt={t.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                  <div>
                    <p className="text-[13px] font-bold text-white">{t.name}</p>
                    <p className="text-[12px]" style={{ fontFamily: "Khula", color: "#A8F0DF" }}>{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted by organisations ── */}
      <section className="py-12 bg-white border-b border-[#D6E1F2]" aria-label="Trusted organisations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-[#B0BDD4] mb-8">Trusted by teams at leading organisations</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustedOrgs.map(org => (
              <span key={org} className="text-[15px] font-bold text-[#B0BDD4] hover:text-[#6B7A99] transition-colors cursor-default select-none" style={{ fontFamily: "Fraunces" }}>
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise strip ── */}
      <section className="bg-[#EBF0F9] overflow-hidden" aria-labelledby="enterprise-heading">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="px-8 sm:px-12 py-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#2563EB] mb-3 flex items-center">
              <DiamondAccent />
              For organisations
            </p>
            <h2 id="enterprise-heading" className="text-[30px] sm:text-[36px] font-medium text-[#0A192F] mb-4" style={{ fontFamily: "Fraunces" }}>
              Scale coaching &amp; mentoring across your <span className="italic accent-underline-blue accent-underline" style={{ fontWeight: 500 }}>entire workforce</span>
            </h2>
            <p className="text-[15px] text-[#435070] max-w-md mb-8" style={{ fontFamily: "Khula" }}>
              Thryvio Enterprise gives HR and L&D teams a turnkey platform — connecting your people with credentialed coaches and mentors from individual contributors to the C-suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/enterprise" className="px-6 py-3 rounded-xl font-bold text-[15px] bg-[#0A192F] text-white hover:bg-[#152744] transition-colors text-center">
                Explore Enterprise
              </Link>
              <Link to="/enterprise#demo" className="px-6 py-3 rounded-xl font-bold text-[15px] border-2 border-[#0A192F] text-[#0A192F] hover:bg-white transition-colors text-center">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block min-h-[320px] bg-[#0D2347]">
            <img
              src="https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af?w=700&h=500&fit=crop&auto=format"
              alt="Team session in a modern office environment"
              className="w-full h-full object-cover opacity-75"
              style={{ filter: "contrast(1.05) saturate(0.85)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #EBF0F9 0%, transparent 20%)" }} />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="cta-heading">
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.04] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <circle cx="200" cy="200" r="190" stroke="#2563EB" strokeWidth="2" />
          <circle cx="200" cy="200" r="130" stroke="#2563EB" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="70" stroke="#1DD7A5" strokeWidth="2" />
        </svg>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 id="cta-heading" className="text-[40px] sm:text-[50px] font-medium text-[#0A192F] mb-4" style={{ fontFamily: "Fraunces" }}>
            Your next chapter<br />
            <span className="italic accent-underline" style={{ fontWeight: 500 }}>starts here.</span>
          </h2>
          <p className="text-[17px] text-[#435070] mb-8" style={{ fontFamily: "Khula" }}>
            Join over 300,000 people who found clarity, confidence, and momentum with Thryvio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/signup" className="px-8 py-3.5 rounded-xl font-bold text-[16px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
              Get started — it's free
            </Link>
            <Link to="/find-a-coach" className="px-8 py-3.5 rounded-xl font-bold text-[16px] border-2 border-[#D6E1F2] text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-colors">
              Browse coaches &amp; mentors
            </Link>
          </div>
          <p className="mt-4 text-[13px] text-[#435070]" style={{ fontFamily: "Khula" }}>
            No credit card required · Free intro call included
          </p>
        </div>
      </section>
    </main>
  );
}
