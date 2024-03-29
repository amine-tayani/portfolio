import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import MouseTracker from "@/components/v2/AnimatedComponents/MouseTracker";
import ScrollToTop from "@/components/v2/ScrollToTop";
import "../../globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amine-tayani.vercel.app/"),
  title: {
    default: "Amine Tayani",
    template: "%s | Amine Tayani",
  },
  description: "Full Stack Developer.",
  openGraph: {
    title: "Amine Tayani",
    description: "Full Stack Developer.",
    url: "https://amine-tayani.vercel.app/",
    siteName: "Amine Tayani",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Amine Tayani",
    card: "summary_large_image",
  },
  verification: {
    google: "1NqrZzSI8G_nWHBZST4LJVm4E2opRYHcFzEzbJDk6O8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
          <div className="group/spotlight relative">
            <MouseTracker />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              {children}
              <Analytics />
              <ScrollToTop />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
