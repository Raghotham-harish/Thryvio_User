import { createBrowserRouter, Outlet } from "react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import FindCoach from "@/pages/FindCoach";
import Programs from "@/pages/Programs";
import HowItWorks from "@/pages/HowItWorks";
import Enterprise from "@/pages/Enterprise";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import DesignSystem from "@/pages/DesignSystem";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function AuthLayout() {
  return <Outlet />;
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <span className="material-symbols-outlined text-[64px] text-[#B0BDD4] mb-4">search_off</span>
      <h1 className="text-[36px] font-semibold text-[#0A192F] mb-2" style={{ fontFamily: "Fraunces" }}>Page not found</h1>
      <p className="text-[16px] text-[#435070] mb-6" style={{ fontFamily: "Khula" }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="px-6 py-3 rounded-xl font-bold text-[14px] bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">Go home</a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "find-a-coach", Component: FindCoach },
      { path: "programs", Component: Programs },
      { path: "how-it-works", Component: HowItWorks },
      { path: "enterprise", Component: Enterprise },
      { path: "design-system", Component: DesignSystem },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
    ],
  },
]);
