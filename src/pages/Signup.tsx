import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ThryvioHorizontal } from "@/components/ThryvioLogos";

type Role = "coachee" | "coach" | "company";

const roles: { id: Role; icon: string; label: string; desc: string }[] = [
  { id: "coachee", icon: "person", label: "I want a coach", desc: "Find and work with a coach or mentor" },
  { id: "coach", icon: "workspace_premium", label: "I am a coach", desc: "Offer coaching on the Thryvio platform" },
  { id: "company", icon: "corporate_fare", label: "For my company", desc: "Coaching programs for my team" },
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>("coachee");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("/"); }, 1200);
  }

  const perks = [
    "Free 30-min intro session with any coach",
    "12,400+ ICF-certified coaches",
    "Cancel or switch coaches any time",
    "Progress tracking & milestone reports",
  ];

  return (
    <main id="main-content" className="min-h-screen bg-[#F5F8FC] flex flex-col">
      <header className="bg-white border-b border-[#D6E1F2] px-6 py-4 flex items-center justify-between">
        <Link to="/" aria-label="Thryvio home">
          <ThryvioHorizontal width={100} height={32} />
        </Link>
        <p className="text-[13px] text-[#435070]" style={{ fontFamily: "Khula" }}>
          Already a member?{" "}
          <Link to="/login" className="font-bold text-[#2563EB] hover:text-[#1D4ED8]">Sign in</Link>
        </p>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">
          {/* Left — perks */}
          <div className="hidden lg:flex flex-col justify-center max-w-xs">
            <h2 className="text-[28px] font-semibold text-[#0A192F] mb-6" style={{ fontFamily: "Fraunces" }}>
              Join 300,000+ people growing with Thryvio
            </h2>
            <ul className="space-y-4" role="list">
              {perks.map(p => (
                <li key={p} className="flex items-start gap-3 text-[14px] text-[#435070]" style={{ fontFamily: "Khula" }}>
                  <span className="material-symbols-outlined text-[18px] text-[#10B981] mt-0.5 shrink-0">check_circle</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="flex-1">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2].map(s => (
                <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-[#2563EB]" : "bg-[#D6E1F2]"}`} />
              ))}
              <span className="text-[12px] text-[#435070] font-semibold ml-1">{step} / 2</span>
            </div>

            <div className="bg-white rounded-2xl border border-[#D6E1F2] shadow-sm p-8">
              {step === 1 ? (
                <>
                  <h1 className="text-[26px] font-semibold text-[#0A192F] mb-1" style={{ fontFamily: "Fraunces" }}>Get started free</h1>
                  <p className="text-[14px] text-[#435070] mb-6" style={{ fontFamily: "Khula" }}>What brings you to Thryvio?</p>

                  <div className="space-y-3 mb-6" role="group" aria-label="Account type">
                    {roles.map(r => (
                      <label
                        key={r.id}
                        className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${role === r.id ? "border-[#2563EB] bg-[#EBF0F9]" : "border-[#D6E1F2] hover:border-[#2563EB]/40"}`}
                      >
                        <input type="radio" name="role" value={r.id} checked={role === r.id} onChange={() => setRole(r.id)} className="sr-only" />
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${role === r.id ? "bg-[#2563EB] text-white" : "bg-[#EBF0F9] text-[#435070]"}`}>
                          <span className="material-symbols-outlined text-[20px]">{r.icon}</span>
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#0D1B2E]">{r.label}</p>
                          <p className="text-[12px] text-[#435070]" style={{ fontFamily: "Khula" }}>{r.desc}</p>
                        </div>
                        {role === r.id && <span className="material-symbols-outlined text-[20px] text-[#2563EB] ml-auto">check_circle</span>}
                      </label>
                    ))}
                  </div>

                  <button onClick={() => setStep(2)} className="w-full py-3.5 rounded-xl font-bold text-[15px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                    Continue
                    <span className="material-symbols-outlined text-[18px] ml-2 align-middle">arrow_forward</span>
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => setStep(1)} className="flex items-center gap-1 text-[13px] font-semibold text-[#435070] hover:text-[#0A192F] mb-4 -ml-1">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back
                  </button>

                  <h1 className="text-[26px] font-semibold text-[#0A192F] mb-1" style={{ fontFamily: "Fraunces" }}>Create your account</h1>
                  <p className="text-[14px] text-[#435070] mb-6" style={{ fontFamily: "Khula" }}>Free forever · No credit card required</p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="su-name" className="block text-[13px] font-semibold text-[#2C3A52] mb-1.5">Full name</label>
                      <input id="su-name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 border border-[#6674A0] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 transition-all placeholder:text-[#B0BDD4]" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label htmlFor="su-email" className="block text-[13px] font-semibold text-[#2C3A52] mb-1.5">Email address</label>
                      <input id="su-email" type="email" required autoComplete="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 border border-[#6674A0] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 transition-all placeholder:text-[#B0BDD4]" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label htmlFor="su-pass" className="block text-[13px] font-semibold text-[#2C3A52] mb-1.5">Password</label>
                      <input id="su-pass" type="password" required autoComplete="new-password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} className="w-full px-4 py-3 border border-[#6674A0] rounded-xl text-[14px] text-[#0D1B2E] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 transition-all placeholder:text-[#B0BDD4]" placeholder="Min. 8 characters" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl font-bold text-[15px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] disabled:opacity-60 transition-colors flex items-center justify-center gap-2">
                      {loading ? (
                        <><span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Creating account…</>
                      ) : "Create free account"}
                    </button>
                  </form>

                  <div className="my-5 flex items-center gap-3">
                    <div className="flex-1 h-px bg-[#D6E1F2]" />
                    <span className="text-[12px] text-[#5B6D90] font-semibold">or</span>
                    <div className="flex-1 h-px bg-[#D6E1F2]" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {["Google", "LinkedIn"].map(p => (
                      <button key={p} className="flex items-center justify-center gap-2 py-3 border border-[#D6E1F2] rounded-xl text-[13px] font-semibold text-[#2C3A52] hover:bg-[#F5F8FC] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                        {p}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <p className="text-center text-[12px] text-[#5B6D90] mt-4" style={{ fontFamily: "Khula" }}>
              By creating an account you agree to our{" "}
              <Link to="/terms" className="underline hover:text-[#2563EB]">Terms</Link>
              {" and "}
              <Link to="/privacy" className="underline hover:text-[#435070]">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
