import { useState } from "react";
import { Link } from "react-router";
import Select from "@/components/Select";

/* ─────────────────────────────────────────────────────────────
   DESIGN-SYSTEM CONSTANTS
   All interactive / structural chrome uses these tokens only.
   Per-item colors are ONLY used for category tag pills.
───────────────────────────────────────────────────────────── */
const DS = {
  btn:        "bg-[#2563EB] hover:bg-[#1D4ED8] text-white",
  btnDark:    "bg-[#0A192F] hover:bg-[#0D2347] text-white",
  btnText:    "text-[#2563EB] hover:text-[#1D4ED8]",
  iconBlue:   "text-[#2563EB]",
  iconMint:   "text-[#1DD7A5]",
  chipBg:     "bg-[#F1F3F7] text-[#435070]",          // org chips + role pills
  bar:        "#2563EB",                               // progress bars
  urgency:    "text-[#B45309]",                        // amber warning — AA on white 4.8:1
  success:    "text-[#065F46]",                        // green status — AA on white 7.4:1
  border:     "border-[#D6E1F2]",
  surface:    "bg-[#F5F8FC]",
  label:      "text-[10px] font-bold uppercase tracking-wider text-[#2C3A52]",
  sectionLbl: "text-[10px] font-bold uppercase tracking-wider text-[#2563EB]",
};

type Tab = "programs" | "events" | "workshops";

type Speaker = { name: string; title: string; photo: string };
type OrgLogo  = { name: string; abbr: string };

type Program = {
  type: "program";
  title: string; tag: string; tagColor: string; desc: string;
  photo: string; price: string; seats: string; seatsLeft: number; totalSeats: number;
  duration: string; level: string; startDate: string;
  speaker: Speaker; benefits: string[]; attendeeOrgs: OrgLogo[];
};

type Event = {
  type: "event";
  title: string; tag: string; tagColor: string; desc: string;
  photo: string; price: string; seats: string; registered: number;
  date: string; days: string; format: string;
  location: string; isOffline: boolean;
  speakers: Speaker[]; attendeeOrgs: OrgLogo[];
};

type Workshop = {
  type: "workshop";
  title: string; tag: string; tagColor: string; desc: string;
  photo: string;
  price: string; seats: string; seatsLeft: number; totalSeats: number;
  duration: string; cohortSize: number;
  speaker: Speaker; benefits: string[]; attendeeOrgs: OrgLogo[];
};

/* ── Org abbreviations — no colors, chip style enforced by DS ── */
const orgs: Record<string, OrgLogo> = {
  google:    { name: "Google",    abbr: "G"  },
  microsoft: { name: "Microsoft", abbr: "Ms" },
  mckinsey:  { name: "McKinsey",  abbr: "Mc" },
  amazon:    { name: "Amazon",    abbr: "Az" },
  deloitte:  { name: "Deloitte",  abbr: "D"  },
  goldman:   { name: "Goldman",   abbr: "GS" },
  stripe:    { name: "Stripe",    abbr: "St" },
  shopify:   { name: "Shopify",   abbr: "Sh" },
  hsbc:      { name: "HSBC",      abbr: "H"  },
  pwc:       { name: "PwC",       abbr: "P"  },
  bain:      { name: "Bain",      abbr: "B"  },
  netflix:   { name: "Netflix",   abbr: "N"  },
};

const programs: Program[] = [
  { type:"program", title:"90-Day Leadership Accelerator", tag:"Leadership", tagColor:"#2563EB",
    desc:"A rigorous cohort program for senior leaders stepping into transformational leadership.",
    photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=280&fit=crop&auto=format",
    price:"$1,800", seats:"4 seats left", seatsLeft:4, totalSeats:20,
    duration:"12 weeks", level:"Advanced", startDate:"Oct 20, 2025",
    speaker:{ name:"Dr. Serena Okafor", title:"Executive & Leadership Coach", photo:"https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=80&h=80&fit=crop&auto=format" },
    benefits:["Personal leadership roadmap","Weekly 1:1 coaching calls","360° stakeholder feedback"],
    attendeeOrgs:[orgs.mckinsey,orgs.google,orgs.goldman,orgs.deloitte] },

  { type:"program", title:"Career Clarity Sprint", tag:"Career", tagColor:"#0065F4",
    desc:"Build a confident, actionable plan for your next career chapter.",
    photo:"https://images.unsplash.com/photo-1623303647440-967d26b95b47?w=600&h=280&fit=crop&auto=format",
    price:"$680", seats:"8 seats left", seatsLeft:8, totalSeats:24,
    duration:"6 weeks", level:"All levels", startDate:"Nov 3, 2025",
    speaker:{ name:"Marcus Hightower", title:"Career Transition Specialist", photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
    benefits:["Identify your career north star","Resume & LinkedIn overhaul","Mock interview coaching"],
    attendeeOrgs:[orgs.amazon,orgs.microsoft,orgs.stripe,orgs.shopify] },

  { type:"program", title:"Founder's Mindset", tag:"Business", tagColor:"#003FAF",
    desc:"For early-stage founders balancing vision, execution, and resilience.",
    photo:"https://images.unsplash.com/photo-1599592187465-6dc742367282?w=600&h=280&fit=crop&auto=format",
    price:"$960", seats:"6 seats left", seatsLeft:6, totalSeats:16,
    duration:"8 weeks", level:"Intermediate", startDate:"Oct 27, 2025",
    speaker:{ name:"James Whitfield", title:"Business Growth Advisor", photo:"https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=80&h=80&fit=crop&auto=format" },
    benefits:["Investor-ready pitch deck","Founder resilience toolkit","Peer founder network"],
    attendeeOrgs:[orgs.stripe,orgs.shopify,orgs.google,orgs.amazon] },

  { type:"program", title:"High-Performance Habits", tag:"Performance", tagColor:"#059669",
    desc:"Science-backed routines and accountability for peak professional performance.",
    photo:"https://images.unsplash.com/photo-1623652653308-d49d335c92eb?w=600&h=280&fit=crop&auto=format",
    price:"$420", seats:"Full — waitlist", seatsLeft:0, totalSeats:20,
    duration:"4 weeks", level:"All levels", startDate:"Oct 15, 2025",
    speaker:{ name:"Priya Nambiar", title:"Life & Performance Coach", photo:"https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=80&h=80&fit=crop&auto=format" },
    benefits:["Evidence-based habit stack","Daily accountability check-ins","Personalised energy audit"],
    attendeeOrgs:[orgs.netflix,orgs.microsoft,orgs.deloitte,orgs.pwc] },

  { type:"program", title:"Executive Presence Intensive", tag:"Leadership", tagColor:"#2563EB",
    desc:"Command any room. Build gravitas, influence, and communication mastery.",
    photo:"https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=280&fit=crop&auto=format",
    price:"$1,400", seats:"3 seats left", seatsLeft:3, totalSeats:12,
    duration:"10 weeks", level:"Advanced", startDate:"Nov 10, 2025",
    speaker:{ name:"Daniel Osei", title:"Leadership & Team Coach", photo:"https://images.unsplash.com/photo-1639747276707-a615a3a4655a?w=80&h=80&fit=crop&auto=format" },
    benefits:["Boardroom communication skills","Live recorded practice sessions","Personal brand strategy"],
    attendeeOrgs:[orgs.goldman,orgs.mckinsey,orgs.hsbc,orgs.bain] },

  { type:"program", title:"Well-being Reset", tag:"Well-being", tagColor:"#059669",
    desc:"Rebuild energy, boundaries, and joy — a holistic reset for the overextended.",
    photo:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=280&fit=crop&auto=format",
    price:"$520", seats:"Open", seatsLeft:15, totalSeats:20,
    duration:"5 weeks", level:"All levels", startDate:"Nov 17, 2025",
    speaker:{ name:"Camille Dupont", title:"Well-being & Resilience Coach", photo:"https://images.unsplash.com/photo-1619970096004-08f804595ea4?w=80&h=80&fit=crop&auto=format" },
    benefits:["Burnout prevention framework","Boundaries & energy mapping","Weekly mindfulness sessions"],
    attendeeOrgs:[orgs.deloitte,orgs.pwc,orgs.hsbc,orgs.microsoft] },
];

const events: Event[] = [
  { type:"event", title:"Career Reinvention Bootcamp", tag:"Career", tagColor:"#0065F4",
    desc:"Two full days of strategy, storytelling, and networking for your next career leap.",
    photo:"https://images.unsplash.com/photo-1623652653308-d49d335c92eb?w=800&h=360&fit=crop&auto=format",
    price:"$280", seats:"Registration open", registered:84,
    date:"Oct 14–15", days:"2 days", format:"In-person intensive",
    location:"New York, NY", isOffline:true,
    speakers:[
      { name:"Marcus Hightower", title:"Career Specialist", photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
      { name:"Sofia Alvarez",    title:"Life Design Coach", photo:"https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=80&h=80&fit=crop&auto=format" },
    ],
    attendeeOrgs:[orgs.amazon,orgs.microsoft,orgs.stripe,orgs.shopify] },

  { type:"event", title:"Leadership Summit 2025", tag:"Leadership", tagColor:"#2563EB",
    desc:"Annual gathering of Thryvio coaches, mentors, and community — keynotes, panels, peer learning.",
    photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=360&fit=crop&auto=format",
    price:"$180", seats:"120 registered", registered:120,
    date:"Nov 8", days:"Full day", format:"Conference",
    location:"London, UK", isOffline:true,
    speakers:[
      { name:"Dr. Serena Okafor", title:"Executive Coach", photo:"https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=80&h=80&fit=crop&auto=format" },
      { name:"James Whitfield",   title:"Business Advisor", photo:"https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=80&h=80&fit=crop&auto=format" },
      { name:"Daniel Osei",       title:"Leadership Coach", photo:"https://images.unsplash.com/photo-1639747276707-a615a3a4655a?w=80&h=80&fit=crop&auto=format" },
    ],
    attendeeOrgs:[orgs.mckinsey,orgs.google,orgs.goldman,orgs.deloitte] },

  { type:"event", title:"Well-being & Burnout Recovery Day", tag:"Well-being", tagColor:"#059669",
    desc:"A guided reset for professionals navigating burnout, with tools to sustain recovery.",
    photo:"https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=360&fit=crop&auto=format",
    price:"$95", seats:"18 seats left", registered:32,
    date:"Oct 22", days:"Half day", format:"Workshop",
    location:"Online", isOffline:false,
    speakers:[
      { name:"Camille Dupont", title:"Well-being Coach", photo:"https://images.unsplash.com/photo-1619970096004-08f804595ea4?w=80&h=80&fit=crop&auto=format" },
    ],
    attendeeOrgs:[orgs.hsbc,orgs.pwc,orgs.deloitte,orgs.microsoft] },

  { type:"event", title:"Startup Founder AMA", tag:"Business", tagColor:"#003FAF",
    desc:"Bring your hardest questions. No slides, no fluff — pure Q&A with a seasoned advisor.",
    photo:"https://images.unsplash.com/photo-1599592187465-6dc742367282?w=800&h=360&fit=crop&auto=format",
    price:"Free", seats:"Open", registered:210,
    date:"Oct 30", days:"90 min", format:"Live Q&A",
    location:"Online", isOffline:false,
    speakers:[
      { name:"James Whitfield", title:"Business Advisor", photo:"https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=80&h=80&fit=crop&auto=format" },
    ],
    attendeeOrgs:[orgs.stripe,orgs.shopify,orgs.amazon,orgs.netflix] },
];

const workshops: Workshop[] = [
  { type:"workshop", title:"Inner Leader: Mindset Reset", tag:"Performance", tagColor:"#059669",
    desc:"Group coaching with weekly live sessions, peer accountability, and guided journaling.",
    photo:"https://images.unsplash.com/photo-1623652653308-d49d335c92eb?w=600&h=240&fit=crop&auto=format",
    price:"$360", seats:"12 enrolled", seatsLeft:4, totalSeats:16,
    duration:"4-week cohort", cohortSize:16,
    speaker:{ name:"Priya Nambiar", title:"Performance Coach · ICF PCC", photo:"https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=80&h=80&fit=crop&auto=format" },
    benefits:["Weekly live group sessions","Peer accountability pods","Guided journaling toolkit"],
    attendeeOrgs:[orgs.netflix,orgs.microsoft,orgs.stripe,orgs.deloitte] },

  { type:"workshop", title:"Difficult Conversations Masterclass", tag:"Leadership", tagColor:"#2563EB",
    desc:"Tackle the conversations you've been avoiding — with frameworks that actually work.",
    photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=240&fit=crop&auto=format",
    price:"$290", seats:"6 seats left", seatsLeft:6, totalSeats:20,
    duration:"3-week cohort", cohortSize:20,
    speaker:{ name:"Dr. Serena Okafor", title:"Executive Coach · Forbes 30 Under 30", photo:"https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=80&h=80&fit=crop&auto=format" },
    benefits:["COIN conversation framework","Live role-play practice","Reference playbook"],
    attendeeOrgs:[orgs.mckinsey,orgs.google,orgs.goldman,orgs.bain] },

  { type:"workshop", title:"Tech-to-Manager Transition", tag:"Career", tagColor:"#0065F4",
    desc:"For engineers becoming people managers — a practical guide to the identity shift.",
    photo:"https://images.unsplash.com/photo-1599592187465-6dc742367282?w=600&h=240&fit=crop&auto=format",
    price:"$440", seats:"8 seats left", seatsLeft:8, totalSeats:18,
    duration:"5-week cohort", cohortSize:18,
    speaker:{ name:"Raj Mehta", title:"Tech Leadership Mentor · ex-Google", photo:"https://images.unsplash.com/photo-1676989880361-091e12efc056?w=80&h=80&fit=crop&auto=format" },
    benefits:["IC→Manager identity playbook","Difficult feedback frameworks","1:1 coaching session included"],
    attendeeOrgs:[orgs.google,orgs.amazon,orgs.microsoft,orgs.stripe] },

  { type:"workshop", title:"Purpose & Life Design Workshop", tag:"Life", tagColor:"#7C3AED",
    desc:"Guided exercises to clarify your values, design your ideal life, and build your roadmap.",
    photo:"https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=240&fit=crop&auto=format",
    price:"$210", seats:"Open", seatsLeft:12, totalSeats:20,
    duration:"2-week intensive", cohortSize:20,
    speaker:{ name:"Sofia Alvarez", title:"Life Design Coach · TEDx Speaker", photo:"https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=80&h=80&fit=crop&auto=format" },
    benefits:["Values clarity workbook","Life wheel visualisation","90-day roadmap builder"],
    attendeeOrgs:[orgs.deloitte,orgs.pwc,orgs.netflix,orgs.shopify] },
];

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id:"programs",  label:"Programs",    icon:"workspace_premium" },
  { id:"events",    label:"Live Events", icon:"event"             },
  { id:"workshops", label:"Workshops",   icon:"groups"            },
];
const filterTags  = ["All","Leadership","Career","Business","Performance","Well-being","Life"];
const levelOptions = ["All","All levels","Intermediate","Advanced"];

function DiamondAccent() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="inline-block mr-2 -mt-0.5 shrink-0">
      <rect x="5" y="0.5" width="6.36" height="6.36" rx="0.8" transform="rotate(45 5 0.5)" fill="#1DD7A5" />
    </svg>
  );
}

/* ── Org chip — design-system only, no per-item color ── */
function OrgChip({ org }: { org: OrgLogo }) {
  return (
    <div
      className="w-6 h-6 rounded-full bg-[#ECEEF2] text-[#5A6479] flex items-center justify-center text-[9px] font-bold shrink-0"
      title={org.name}
      aria-label={org.name}
    >
      {org.abbr}
    </div>
  );
}

/* ── Seats status line ── */
function SeatsStatus({ seats, seatsLeft, totalSeats }: { seats: string; seatsLeft: number; totalSeats: number }) {
  const urgent = seatsLeft > 0 && seatsLeft <= 5;
  const full   = seatsLeft === 0;
  const pct    = Math.round(((totalSeats - seatsLeft) / totalSeats) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className={`text-[11px] font-bold ${urgent ? DS.urgency : full ? "text-[#435070]" : DS.success}`}>
          {urgent && <span className="material-symbols-outlined text-[12px] align-middle mr-0.5">warning</span>}
          {seats}
        </span>
        <span className="text-[11px] text-[#435070]">{pct}% full</span>
      </div>
      <div className="h-1 bg-[#EBF0F9] rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width:`${pct}%`, background: DS.bar }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PROGRAM CARD
══════════════════════════════════════════ */
function ProgramCard({ p }: { p: Program }) {
  return (
    <article className={`bg-white ${DS.border} border rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#2563EB]/30 transition-all flex flex-col group`}>
      {/* Photo */}
      <div className="relative h-36 bg-[#0D2347] overflow-hidden">
        <img src={p.photo} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105" style={{ filter:"saturate(0.85) contrast(1.05)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(0deg, rgba(10,25,47,0.75) 0%, transparent 55%)" }} />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/45 backdrop-blur-sm">{p.tag}</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white bg-black/35">{p.level}</span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 bg-[#0A192F]/80 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1.5">
          <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color:"#A8F0DF" }}>Starts</p>
          <p className="text-[11px] font-bold text-white">{p.startDate}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Speaker */}
        <div className={`flex items-center gap-2 pb-3 border-b ${DS.border}`}>
          <img src={p.speaker.photo} alt={p.speaker.name} className="w-8 h-8 rounded-full object-cover shrink-0 ring-2 ring-[#EBF0F9]" />
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-[#0D1B2E] truncate">{p.speaker.name}</p>
            <p className="text-[11px] text-[#435070] truncate" style={{ fontFamily:"Khula" }}>{p.speaker.title}</p>
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-[14px] font-bold text-[#0D1B2E] leading-snug mb-1">{p.title}</h2>
          <p className="text-[12px] text-[#435070] leading-relaxed line-clamp-2" style={{ fontFamily:"Khula" }}>{p.desc}</p>
        </div>

        {/* Benefits */}
        <ul className="space-y-1">
          {p.benefits.map(b => (
            <li key={b} className="flex items-center gap-1.5 text-[12px] text-[#2C3A52]" style={{ fontFamily:"Khula" }}>
              <span className={`material-symbols-outlined text-[13px] shrink-0 ${DS.iconMint}`}>check_circle</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Duration + orgs */}
        <div className={`flex items-center justify-between pt-2 border-t ${DS.border}`}>
          <span className="flex items-center gap-1 text-[11px] text-[#435070]">
            <span className={`material-symbols-outlined text-[13px] ${DS.iconBlue}`}>schedule</span>
            {p.duration}
          </span>
          <div className="flex items-center gap-1">
            {p.attendeeOrgs.slice(0,3).map(o => <OrgChip key={o.name} org={o} />)}
            <span className="text-[10px] text-[#435070] ml-1">+orgs</span>
          </div>
        </div>

        {/* Seats + price + CTA */}
        <div className={`pt-3 border-t ${DS.border} mt-auto`}>
          <SeatsStatus seats={p.seats} seatsLeft={p.seatsLeft} totalSeats={p.totalSeats} />
          <div className="flex items-center justify-between mt-3">
            <p className="text-[17px] font-bold text-[#0D1B2E]">{p.price}</p>
            <button className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-colors ${DS.btnDark}`}>
              Enroll now →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════
   EVENT ROW — list style
══════════════════════════════════════════ */
function EventCard({ e }: { e: Event }) {
  return (
    <article className={`bg-white ${DS.border} border rounded-2xl overflow-hidden hover:shadow-md hover:border-[#2563EB]/30 transition-all group flex`}>
      {/* Thumbnail */}
      <div className="relative w-44 shrink-0 bg-[#0D2347] overflow-hidden">
        <img src={e.photo} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" style={{ filter:"saturate(0.8) contrast(1.05)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(90deg, transparent 55%, rgba(10,25,47,0.35) 100%)" }} />
        {/* Date badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5">
          <p className="text-[22px] font-bold text-white leading-none" style={{ fontFamily:"Fraunces" }}>{e.date}</p>
          <p className="text-[10px] font-semibold mt-0.5" style={{ color:"#A8F0DF" }}>{e.days} · {e.format}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2.5 min-w-0">
        {/* Tags row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-black/45 backdrop-blur-sm">{e.tag}</span>
          {e.isOffline
            ? <span className="flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF3C7] text-[#92400E]">
                <span className="material-symbols-outlined text-[11px]">location_on</span>{e.location}
              </span>
            : <span className="flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] text-[#065F46]">
                <span className="material-symbols-outlined text-[11px]">videocam</span>Online
              </span>
          }
        </div>

        {/* Title + desc */}
        <div>
          <h2 className="text-[15px] font-bold text-[#0D1B2E] leading-snug">{e.title}</h2>
          <p className="text-[12px] text-[#435070] leading-relaxed line-clamp-1 mt-0.5" style={{ fontFamily:"Khula" }}>{e.desc}</p>
        </div>

        {/* Speakers inline */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {e.speakers.slice(0,2).map(s => (
              <div key={s.name} className="flex items-center gap-1.5">
                <img src={s.photo} alt={s.name} className="w-6 h-6 rounded-full object-cover shrink-0 ring-1 ring-[#EBF0F9]" />
                <span className="text-[12px] font-semibold text-[#0D1B2E]">{s.name}</span>
              </div>
            ))}
            {e.speakers.length > 2 && <span className="text-[11px] text-[#435070]">+{e.speakers.length - 2}</span>}
          </div>
        </div>

        {/* Bottom row: orgs + registered + price + CTA */}
        <div className={`flex items-center gap-3 pt-2.5 border-t ${DS.border} mt-auto`}>
          <div className="flex gap-1">
            {e.attendeeOrgs.slice(0,3).map(o => <OrgChip key={o.name} org={o} />)}
          </div>
          <p className="text-[11px] text-[#435070]" style={{ fontFamily:"Khula" }}>{e.registered}+ registered</p>
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <p className="text-[16px] font-bold text-[#0D1B2E]">{e.price}</p>
            <button className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-colors ${DS.btnDark}`}>
              Register →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════
   WORKSHOP CARD — cohort style, no per-item color bleed
══════════════════════════════════════════ */
function WorkshopCard({ w }: { w: Workshop }) {
  const pct = Math.round(((w.totalSeats - w.seatsLeft) / w.totalSeats) * 100);
  const urgent = w.seatsLeft > 0 && w.seatsLeft <= 6;
  return (
    <article className={`bg-white border ${DS.border} rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#2563EB]/30 transition-all flex flex-col group`}>
      {/* Thumbnail */}
      <div className="relative h-36 bg-[#0D2347] overflow-hidden">
        <img src={w.photo} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" style={{ filter:"saturate(0.8) contrast(1.05)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(0deg, rgba(10,25,47,0.80) 0%, transparent 55%)" }} />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/45 backdrop-blur-sm">{w.tag}</span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-white bg-black/35">{w.duration}</span>
        </div>
        <div className="absolute bottom-2.5 left-3 right-3">
          <h2 className="text-[15px] font-bold text-white leading-snug">{w.title}</h2>
        </div>
      </div>

      {/* Compact header — left accent bar only */}
      <div className="flex items-start gap-3 px-4 pt-3">
        <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: w.tagColor, minHeight:"32px" }} />
        <div className="flex-1 min-w-0">
          <p className="text-[12px] text-[#435070] leading-relaxed line-clamp-2" style={{ fontFamily:"Khula" }}>{w.desc}</p>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4 flex flex-col flex-1 gap-3">
        {/* Speaker */}
        <div className={`flex items-center gap-2 pb-3 border-b ${DS.border}`}>
          <img src={w.speaker.photo} alt={w.speaker.name} className="w-8 h-8 rounded-full object-cover shrink-0 ring-2 ring-[#EBF0F9]" />
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-[#0D1B2E] truncate">{w.speaker.name}</p>
            <p className="text-[11px] text-[#435070] truncate" style={{ fontFamily:"Khula" }}>{w.speaker.title}</p>
          </div>
          <div className="ml-auto bg-[#ECEEF2] text-[#5A6479] rounded-lg px-2 py-1 text-center shrink-0">
            <p className="text-[14px] font-bold leading-none">{w.cohortSize}</p>
            <p className="text-[8px] font-bold uppercase tracking-wide">seats</p>
          </div>
        </div>

        {/* What you'll gain */}
        <div>
          <p className={`${DS.sectionLbl} mb-1.5`}>What you'll gain</p>
          <ul className="space-y-1">
            {w.benefits.map(b => (
              <li key={b} className="flex items-center gap-1.5 text-[12px] text-[#2C3A52]" style={{ fontFamily:"Khula" }}>
                <span className={`material-symbols-outlined text-[13px] shrink-0 ${DS.iconMint}`}>check_circle</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Orgs */}
        <div className={`flex items-center gap-2 pt-2 border-t ${DS.border}`}>
          <div className="flex gap-1">
            {w.attendeeOrgs.slice(0,4).map(o => <OrgChip key={o.name} org={o} />)}
          </div>
          <p className="text-[11px] text-[#435070]" style={{ fontFamily:"Khula" }}>Cohort members from</p>
        </div>

        {/* Progress + price + CTA */}
        <div className={`pt-3 border-t ${DS.border} mt-auto`}>
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[11px] font-bold ${urgent ? DS.urgency : DS.success}`}>
              {urgent && <span className="material-symbols-outlined text-[12px] align-middle mr-0.5">warning</span>}
              {w.seats}
            </span>
            <span className="text-[11px] text-[#435070]">{pct}% full</span>
          </div>
          <div className="h-1 bg-[#EBF0F9] rounded-full overflow-hidden mb-3">
            <div className="h-full rounded-full" style={{ width:`${pct}%`, background: DS.bar }} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[17px] font-bold text-[#0D1B2E]">{w.price}</p>
            <button className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-colors ${DS.btnDark}`}>
              Enroll now →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function Programs() {
  const [activeTab, setActiveTab] = useState<Tab>("programs");
  const [tag, setTag]   = useState("All");
  const [level, setLevel] = useState("All");

  const filteredPrograms  = programs.filter(p  => (tag === "All" || p.tag  === tag) && (level === "All" || p.level === level));
  const filteredEvents    = events.filter(e    => tag === "All" || e.tag  === tag);
  const filteredWorkshops = workshops.filter(w => tag === "All" || w.tag  === tag);
  const count = activeTab === "programs" ? filteredPrograms.length : activeTab === "events" ? filteredEvents.length : filteredWorkshops.length;

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-hero" aria-labelledby="programs-heading">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&h=500&fit=crop&auto=format" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" style={{ filter:"grayscale(30%) contrast(1.1)" }} />
          <div className="absolute inset-0" style={{ background:"linear-gradient(90deg, #0A192F 40%, rgba(10,25,47,0.75) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center" style={{ color:"#A8F0DF" }}>
            <DiamondAccent />Structured growth
          </p>
          <h1 id="programs-heading" className="text-[42px] font-medium text-white mb-3 leading-[1.1]" style={{ fontFamily:"Fraunces" }}>
            Programs &amp; <span className="italic accent-underline" style={{ fontWeight:500 }}>Events</span>
          </h1>
          <p className="text-[16px] max-w-xl leading-relaxed" style={{ fontFamily:"Khula", color:"#C8D9F0" }}>
            Cohort-based programs, live events, and workshops — structured learning with the depth of 1:1 coaching.
          </p>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div className="bg-white border-b border-[#D6E1F2] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div role="tablist" aria-label="Content type" className="flex gap-1 -mb-px">
            {tabs.map(t => (
              <button
                key={t.id} role="tab" aria-selected={activeTab === t.id}
                onClick={() => { setActiveTab(t.id); setTag("All"); setLevel("All"); }}
                className={`flex items-center gap-2 px-4 py-4 text-[14px] font-semibold border-b-2 transition-colors ${activeTab === t.id ? "border-[#2563EB] text-[#2563EB]" : "border-transparent text-[#435070] hover:text-[#0A192F]"}`}
              >
                <span className="material-symbols-outlined text-[18px]">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Sub-tabs (topic) ── */}
        <div className="border-b border-[#D6E1F2] mb-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-0 overflow-x-auto -mb-px">
            {filterTags.map(f => (
              <button
                key={f}
                onClick={() => setTag(f)}
                className={`px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  tag === f
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-[#435070] hover:text-[#0A192F] hover:border-[#D6E1F2]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 shrink-0 pb-2">
            {activeTab === "programs" && (
              <Select
                label="Filter by level"
                value={level}
                onChange={setLevel}
                options={levelOptions}
                className="w-40"
              />
            )}
            <p className="text-[12px] text-[#435070]" style={{ fontFamily:"Khula" }}>
              <span className="font-bold text-[#0D1B2E]">{count}</span> results
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        {count === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-[48px] text-[#435070] block mb-3">search_off</span>
            <p className="text-[18px] font-semibold text-[#2C3A52]">Nothing matches those filters</p>
            <button onClick={() => { setTag("All"); setLevel("All"); }} className="mt-4 px-4 py-2 text-[13px] font-bold text-[#2563EB] border border-[#2563EB] rounded-lg hover:bg-[#EBF0F9]">Clear filters</button>
          </div>
        ) : (
          <>
            {activeTab === "programs" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" role="tabpanel">
                {filteredPrograms.map(p => <ProgramCard key={p.title} p={p} />)}
              </div>
            )}
            {activeTab === "events" && (
              <div className="flex flex-col gap-4" role="tabpanel">
                {filteredEvents.map(e => <EventCard key={e.title} e={e} />)}
              </div>
            )}
            {activeTab === "workshops" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5" role="tabpanel">
                {filteredWorkshops.map(w => <WorkshopCard key={w.title} w={w} />)}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── CTA ── */}
      <section className="bg-[#EBF0F9] py-12" aria-label="Individual coaching CTA">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[26px] font-semibold text-[#0A192F] mb-2" style={{ fontFamily:"Fraunces" }}>
            Want something more personal?
          </h2>
          <p className="text-[14px] text-[#435070] mb-5" style={{ fontFamily:"Khula" }}>
            Book a 1:1 session with a coach or mentor tailored to your exact goals.
          </p>
          <Link to="/find-a-coach" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[14px] transition-colors ${DS.btn}`}>
            Find my coach or mentor
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/find-a-coach" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
              <span className="material-symbols-outlined text-[16px]">person_search</span>Browse coaches &amp; mentors
            </Link>
            <Link to="/enterprise" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6E1F2] text-[13px] font-semibold text-[#2C3A52] hover:border-[#2563EB] hover:text-[#1D4ED8] transition-all">
              <span className="material-symbols-outlined text-[16px]">corporate_fare</span>Team &amp; enterprise programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
