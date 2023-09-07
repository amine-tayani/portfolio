"use client";

import "../../globals.css";
import { Inter } from "next/font/google";
import  Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
      <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}`}
      />
    <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}');

        `}
    </Script>
    </html>
  );
}
