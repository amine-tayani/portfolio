import MouseTracker from "@/components/v2/AnimatedComponents/MouseTracker";
import ScrollToTop from "@/components/v2/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amine Tayani",
  description: "Amine Tayani Portfolio",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="group/spotlight relative">
          <MouseTracker />
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            {children}
            <ScrollToTop />
          </div>
        </div>
      </div>
    </div>
  );
}
