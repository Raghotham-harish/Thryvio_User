import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ThryvioHorizontal } from "@/components/ThryvioLogos";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("/"); }, 1200);
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#F5F8FC] flex flex-col">
      {/* Mini header */}
      <header className="bg-white border-b border-[#D6E1F2] px-6 py-4 flex items-center justify-between">
        <Link to="/" aria-label="Thryvio home">
          <ThryvioHorizontal width={100} height={32} />
        </Link>
        <p className="text-[13px] text-[#435070]" style={{ fontFamily: "Khula" }}>
          No account?{" "}
          <Link to="/signup" className="font-bold text-[#2563EB] hover:text-[#1D4ED8]">Get started free</Link>
        </p>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-[#D6E1F2] shadow-sm p-8">
            <h1 className="text-[28px] font-semibold text-[#0A192F] mb-1" style={{ fontFamily: "Fraunces" }}>Welcome back</h1>
            <p className="text-[14px] text-[#435070] mb-7" style={{ fontFamily: "Khula" }}>Sign in to continue your coaching journey.</p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="login-email" className="block text-[13px] font-semibold text-[#2C3A52] mb-1.5">Email address</label>
                <input
                  id="login-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-[#6674A0] rounded-xl text-[14px] text-[#0D1B2E] bg-white focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 transition-all placeholder:text-[#B0BDD4]"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="login-pass" className="text-[13px] font-semibold text-[#2C3A52]">Password</label>
                  <Link to="/forgot-password" className="text-[12px] font-semibold text-[#2563EB] hover:text-[#1D4ED8]">Forgot password?</Link>
                </div>
                <div className="relative">
                  <input
                    id="login-pass"
                    type={showPass ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-11 border border-[#6674A0] rounded-xl text-[14px] text-[#0D1B2E] bg-white focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 transition-all placeholder:text-[#B0BDD4]"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(s => !s)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#435070] hover:text-[#0A192F]"
                  >
                    <span className="material-symbols-outlined text-[20px]">{showPass ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-[15px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span> Signing in…</>
                ) : "Sign in"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-[#D6E1F2]" />
              <span className="text-[12px] text-[#B0BDD4] font-semibold">or continue with</span>
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
          </div>

          <p className="text-center text-[12px] text-[#B0BDD4] mt-6" style={{ fontFamily: "Khula" }}>
            By signing in you agree to our{" "}
            <Link to="/terms" className="underline hover:text-[#435070]">Terms</Link>
            {" and "}
            <Link to="/privacy" className="underline hover:text-[#435070]">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
