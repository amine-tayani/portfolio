"use client";

import "../../globals.css";
import { Inter } from "next/font/google";
import  Script from "next/script"
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
      <GoogleAnalytics GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID}`}/>
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
