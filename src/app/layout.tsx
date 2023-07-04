import "../../globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Amine Tayani - Portfolio",
  description: "Amine Tayani's Portfolio",
  keywords: "Amine Tayani, Portfolio, Web Developer, Software Engineer",
  authors: [{ name: "Amine Tayani" }],
  category: "Software Development",
  creator: "Amine Tayani",
  publisher: "Amine Tayani",
  robots: "index, follow",
};

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
    </html>
  );
}
