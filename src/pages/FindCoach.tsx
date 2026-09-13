import { useState } from "react";
import { useSearchParams, Link } from "react-router";

const allCoaches = [
  {
    name: "Dr. Serena Okafor",
    title: "Executive & Leadership Coach",
    rating: 4.9, reviews: 214, sessions: "1,840",
    tags: ["Leadership", "Strategy", "C-Suite", "Executive"],
    price: 220, availability: "Available this week",
    initials: "SO", color: "#2563EB",
    specialty: "Executive Leadership", lang: "English", style: "Structured",
    photo: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=400&h=400&fit=crop&auto=format",
    roles: ["Coach", "Mentor"] as string[],
  },
  {
    name: "Marcus Hightower",
    title: "Career Transition Specialist",
    rating: 4.8, reviews: 187, sessions: "1,200",
    tags: ["Career", "Pivots", "Tech", "Transitions"],
    price: 160, availability: "Available Mon–Fri",
    initials: "MH", color: "#0065F4",
    specialty: "Career Transitions", lang: "English", style: "Collaborative",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
    roles: ["Mentor"] as string[],
  },
  {
    name: "Priya Nambiar",
    title: "Life & Performance Coach",
    rating: 5.0, reviews: 96, sessions: "740",
    tags: ["Performance", "Mindset", "Well-being", "Life"],
    price: 140, availability: "3 slots this week",
    initials: "PN", color: "#00DBA2",
    specialty: "Performance", lang: "English, Hindi", style: "Empathetic",
    photo: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=400&h=400&fit=crop&auto=format",
    roles: ["Coach"] as string[],
  },
  {
    name: "James Whitfield",
    title: "Business Growth Mentor",
    rating: 4.7, reviews: 312, sessions: "2,900",
    tags: ["Business", "Startups", "Scale", "Strategy"],
    price: 190, availability: "Available tomorrow",
    initials: "JW", color: "#003FAF",
    specialty: "Business Strategy", lang: "English", style: "Direct",
    photo: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=400&h=400&fit=crop&auto=format",
    roles: ["Coach", "Mentor"] as string[],
  },
  {
    name: "Camille Dupont",
    title: "Well-being & Resilience Coach",
    rating: 4.8, reviews: 143, sessions: "980",
    tags: ["Well-being", "Mindfulness", "Stress", "Relationships"],
    price: 130, availability: "Next week",
    initials: "CD", color: "#10B981",
    specialty: "Well-being", lang: "English, French", style: "Empathetic",
    photo: "https://images.unsplash.com/photo-1619970096004-08f804595ea4?w=400&h=400&fit=crop&auto=format",
    roles: ["Coach"] as string[],
  },
  {
    name: "Raj Mehta",
    title: "Tech Leadership & Mentoring",
    rating: 4.6, reviews: 208, sessions: "1,550",
    tags: ["Tech", "Leadership", "Engineering", "Management"],
    price: 200, availability: "Available Tue/Thu",
    initials: "RM", color: "#7C3AED",
    specialty: "Executive Leadership", lang: "English, Hindi", style: "Direct",
    photo: "https://images.unsplash.com/photo-1676989880361-091e12efc056?w=400&h=400&fit=crop&auto=format",
    roles: ["Mentor"] as string[],
  },
  {
    name: "Sofia Alvarez",
    title: "Life Design & Purpose Coach",
    rating: 4.9, reviews: 72, sessions: "520",
    tags: ["Life", "Purpose", "Clarity", "Transitions"],
    price: 120, availability: "Available this week",
    initials: "SA", color: "#EC4899",
    specialty: "Life Coaching", lang: "English, Spanish", style: "Collaborative",
    photo: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=400&fit=crop&auto=format",
    roles: ["Coach"] as string[],
  },
  {
    name: "Daniel Osei",
    title: "Leadership & Team Coach",
    rating: 4.7, reviews: 165, sessions: "1,100",
    tags: ["Leadership", "Teams", "Culture", "DEI"],
    price: 175, availability: "2 slots left",
    initials: "DO", color: "#B45309",
    specialty: "Executive Leadership", lang: "English", style: "Structured",
    photo: "https://images.unsplash.com/photo-1639747276707-a615a3a4655a?w=400&h=400&fit=crop&auto=format",
    roles: ["Coach", "Mentor"] as string[],
  },
];

type Coach = typeof allCoaches[0];

const specialties = ["All", "Executive Leadership", "Career Transitions", "Life Coaching", "Business Strategy", "Performance", "Well-being"];
const priceRanges = ["All", "Under $150", "$150–$200", "Over $200"];
const styles = ["All", "Structured", "Collaborative", "Empathetic", "Direct"];
const sortOptions = ["Top rated", "Most reviewed", "Price: low to high", "Price: high to low"];

function DiamondAccent() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block mr-2 -mt-0.5 shrink-0">
      <rect x="5" y="0.5" width="6.36" height="6.36" rx="0.8" transform="rotate(45 5 0.5)" fill="#1DD7A5" />
    </svg>
  );
}

export default function FindCoach() {
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQ);
  const [specialty, setSpecialty] = useState("All");
  const [price, setPrice] = useState("All");
  const [style, setStyle] = useState("All");
  const [sort, setSort] = useState("Top rated");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = allCoaches
    .filter(c => {
      const q = query.toLowerCase();
      const matchQ = !q || c.name.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q)) || c.specialty.toLowerCase().includes(q) || c.title.toLowerCase().includes(q);
      const matchSpec = specialty === "All" || c.specialty === specialty;
      const matchPrice = price === "All" || (price === "Under $150" && c.price < 150) || (price === "$150–$200" && c.price >= 150 && c.price <= 200) || (price === "Over $200" && c.price > 200);
      const matchStyle = style === "All" || c.style === style;
      return matchQ && matchSpec && matchPrice && matchStyle;
    })
    .sort((a, b) => {
      if (sort === "Top rated") return b.rating - a.rating;
      if (sort === "Most reviewed") return b.reviews - a.reviews;
      if (sort === "Price: low to high") return a.price - b.price;
      if (sort === "Price: high to low") return b.price - a.price;
      return 0;
    });

  return (
    <main id="main-content">
      {/* Page header — with imagery */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-white/10" aria-labelledby="fc-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1400&h=400&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            style={{ filter: "grayscale(40%) contrast(1.1)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0A192F 40%, rgba(10,25,47,0.8) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A8F0DF] mb-2 flex items-center">
            <DiamondAccent />
            Find your guide
          </p>
          <h1 id="fc-heading" className="text-[36px] sm:text-[44px] font-medium text-white leading-tight mb-3" style={{ fontFamily: "Fraunces" }}>
            Explore <span className="italic accent-underline" style={{ fontWeight: 500 }}>Trivios</span>
          </h1>
          <p className="text-[15px] mb-6 max-w-lg" style={{ fontFamily: "Khula", color: "#C8D9F0" }}>
            {allCoaches.length}+ credentialed coaches and mentors across every specialty, language, and coaching approach.
          </p>

          {/* Search bar */}
          <div className="flex gap-2 max-w-xl mb-5">
            <div className="flex-1 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <span className="material-symbols-outlined text-white/60 text-[20px] shrink-0">search</span>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by name, specialty, or focus area..."
                className="flex-1 bg-transparent text-white text-[14px] placeholder:text-white/50 outline-none"
                aria-label="Search coaches and mentors"
              />
              {query && (
                <button onClick={() => setQuery("")} aria-label="Clear search" className="text-white/60 hover:text-white">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Specialty quick links */}
          <div className="flex flex-wrap gap-2">
            {["Executive Leadership", "Career Transitions", "Life Coaching", "Business Strategy", "Performance", "Well-being"].map(s => (
              <button
                key={s}
                onClick={() => setSpecialty(s)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all border ${
                  specialty === s
                    ? "bg-[#2563EB] text-white border-[#2563EB]"
                    : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex gap-8">
        {/* Sidebar filters — desktop */}
        <aside className="w-56 shrink-0 hidden lg:block" aria-label="Filters">
          <FilterPanel specialty={specialty} setSpecialty={setSpecialty} price={price} setPrice={setPrice} style={style} setStyle={setStyle} />
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <p className="text-[14px] text-[#435070]" style={{ fontFamily: "Khula" }}>
              <span className="font-bold text-[#0D1B2E]">{filtered.length}</span> advisors found
            </p>
            <div className="flex items-center gap-3">
              {/* Mobile filter toggle */}
              <button
                className="lg:hidden flex items-center gap-1.5 px-3 py-2 border border-[#D6E1F2] rounded-lg text-[13px] font-semibold text-[#2C3A52]"
                onClick={() => setFilterOpen(o => !o)}
              >
                <span className="material-symbols-outlined text-[16px]">tune</span>
                Filters
              </button>

              {/* Sort */}
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="text-[13px] font-semibold text-[#2C3A52] border border-[#D6E1F2] rounded-lg px-3 py-2 bg-white outline-none cursor-pointer"
                aria-label="Sort coaches"
              >
                {sortOptions.map(s => <option key={s}>{s}</option>)}
              </select>

              {/* View toggle */}
              <div className="hidden sm:flex border border-[#D6E1F2] rounded-lg overflow-hidden">
                {(["grid", "list"] as const).map(v => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    aria-pressed={view === v}
                    className={`px-3 py-2 transition-colors ${view === v ? "bg-[#2563EB] text-white" : "bg-white text-[#435070] hover:bg-[#F5F8FC]"}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{v === "grid" ? "grid_view" : "view_list"}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile filters */}
          {filterOpen && (
            <div className="lg:hidden mb-6 p-4 bg-white border border-[#D6E1F2] rounded-xl">
              <FilterPanel specialty={specialty} setSpecialty={setSpecialty} price={price} setPrice={setPrice} style={style} setStyle={setStyle} />
            </div>
          )}

          {/* Coach grid / list */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-[48px] text-[#6B7A99] block mb-3">search_off</span>
              <p className="text-[18px] font-semibold text-[#2C3A52]">No advisors found</p>
              <p className="text-[14px] text-[#435070] mt-1 leading-relaxed" style={{ fontFamily: "Khula" }}>Try adjusting your search or filters.</p>
              <button onClick={() => { setQuery(""); setSpecialty("All"); setPrice("All"); setStyle("All"); }} className="mt-4 px-4 py-2 text-[13px] font-bold text-[#2563EB] border border-[#2563EB] rounded-lg hover:bg-[#EBF0F9]">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "space-y-4"}>
              {filtered.map(c => (
                view === "grid" ? <CoachCard key={c.name} c={c} /> : <CoachRow key={c.name} c={c} />
              ))}
            </div>
          )}

          {/* IA discoverability footer */}
          <section className="border-t border-[#D6E1F2] mt-12 pt-10 pb-6">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#6B7A99] mb-4">Explore further</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/programs" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
                <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                Browse programs &amp; events
              </Link>
              <Link to="/how-it-works" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
                <span className="material-symbols-outlined text-[16px]">help_outline</span>
                How matching works
              </Link>
              <Link to="/enterprise" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
                <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                Coaching for your organisation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function FilterPanel({ specialty, setSpecialty, price, setPrice, style, setStyle }: {
  specialty: string; setSpecialty: (v: string) => void;
  price: string; setPrice: (v: string) => void;
  style: string; setStyle: (v: string) => void;
}) {
  return (
    <div className="space-y-6">
      <FilterGroup label="Specialty" options={specialties} value={specialty} onChange={setSpecialty} />
      <FilterGroup label="Price / hr" options={priceRanges} value={price} onChange={setPrice} />
      <FilterGroup label="Approach" options={styles} value={style} onChange={setStyle} />
    </div>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="text-[11px] font-bold uppercase tracking-wider text-[#435070] mb-2">{label}</legend>
      <div className="space-y-1.5">
        {options.map(o => (
          <label key={o} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name={label}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="accent-[#2563EB]"
            />
            <span className={`text-[13px] transition-colors ${value === o ? "font-bold text-[#0A192F]" : "text-[#435070] group-hover:text-[#0A192F]"}`} style={{ fontFamily: "Khula" }}>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CoachCard({ c }: { c: Coach }) {
  return (
    <article className="bg-white border border-[#D6E1F2] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#2563EB]/30 transition-all group flex flex-col">
      {/* Photo header */}
      <div className="relative h-40 bg-[#0D2347] overflow-hidden">
        <img
          src={c.photo}
          alt={c.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "contrast(1.02) saturate(0.9)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.65) 0%, transparent 50%)" }} />
        {/* Role pills */}
        <div className="absolute top-3 right-3 flex gap-1">
          {c.roles.map(r => (
            <span key={r} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r === "Mentor" ? "bg-[#ECFDF5] text-[#065F46]" : "bg-[#ECEEF2] text-[#5A6479]"}`}>{r}</span>
          ))}
        </div>
        {/* Availability */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1DD7A5]" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-white">{c.availability}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <p className="text-[14px] font-bold text-[#0D1B2E] leading-tight">{c.name}</p>
          <p className="text-[12px] text-[#435070] leading-relaxed" style={{ fontFamily: "Khula" }}>{c.title}</p>
        </div>
        <div className="flex items-center gap-1.5 mb-3">
          <span className="material-symbols-outlined text-[15px] text-[#B45309]" aria-hidden="true">star</span>
          <span className="text-[13px] font-bold text-[#0D1B2E]">{c.rating}</span>
          <span className="text-[12px] text-[#435070]">({c.reviews}) · {c.sessions} sessions</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {c.tags.slice(0, 3).map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-[#ECEEF2] text-[#5A6479] text-[11px] font-semibold">{t}</span>)}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-[#D6E1F2] mt-auto">
          <div>
            <p className="text-[15px] font-bold text-[#0D1B2E]">${c.price}<span className="text-[11px] font-normal text-[#435070]">/hr</span></p>
            <p className="text-[11px] font-semibold" style={{ color: "#065F46" }}>{c.availability}</p>
          </div>
          <Link to={`/coach/${c.name.toLowerCase().replace(/ /g, "-")}`} className="px-3 py-1.5 text-[12px] font-bold rounded-lg bg-[#0A192F] text-white hover:bg-[#0D2347] transition-colors">
            View profile
          </Link>
        </div>
      </div>
    </article>
  );
}

function CoachRow({ c }: { c: Coach }) {
  return (
    <article className="bg-white border border-[#D6E1F2] rounded-2xl p-5 flex items-center gap-5 hover:shadow-md hover:border-[#2563EB]/30 transition-all">
      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
        <img src={c.photo} alt={c.name} className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-[15px] font-bold text-[#0D1B2E]">{c.name}</p>
          <span className="flex items-center gap-1 text-[12px]">
            <span className="material-symbols-outlined text-[13px] text-[#B45309]">star</span>
            <span className="font-bold text-[#0D1B2E]">{c.rating}</span>
            <span className="text-[#435070]">({c.reviews})</span>
          </span>
          {c.roles.map(r => (
            <span key={r} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r === "Mentor" ? "bg-[#ECFDF5] text-[#065F46]" : "bg-[#ECEEF2] text-[#5A6479]"}`}>{r}</span>
          ))}
        </div>
        <p className="text-[13px] text-[#435070] mb-2 leading-relaxed" style={{ fontFamily: "Khula" }}>{c.title}</p>
        <div className="flex flex-wrap gap-1.5">
          {c.tags.slice(0, 4).map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-[#ECEEF2] text-[#5A6479] text-[11px] font-semibold">{t}</span>)}
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[16px] font-bold text-[#0D1B2E]">${c.price}<span className="text-[12px] font-normal text-[#435070]">/hr</span></p>
        <p className="text-[11px] font-semibold mb-2" style={{ color: "#065F46" }}>{c.availability}</p>
        <Link to={`/coach/${c.name.toLowerCase().replace(/ /g, "-")}`} className="px-3 py-1.5 text-[12px] font-bold rounded-lg bg-[#0A192F] text-white hover:bg-[#0D2347] transition-colors">
          View profile
        </Link>
      </div>
    </article>
  );
}
