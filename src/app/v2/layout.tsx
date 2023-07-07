import MouseTracker from "@/components/v2/MouseTracker";
import ScrollToTop from "@/components/v2/ScrollToTop";
import Link from "next/link";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="group/spotlight relative">
          <MouseTracker />
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <Link
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </Link>
            {children}
            <ScrollToTop />
          </div>
        </div>
      </div>
    </div>
  );
}
