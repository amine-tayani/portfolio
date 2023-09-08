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
      <GoogleAnalytics/>
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
