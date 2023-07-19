"use client";

import "../../globals.css";
import { Inter } from "next/font/google";
import {
  AnimatePresence,
  LazyMotion,
  Transition,
  domAnimation,
  m,
} from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const onTheRight = { x: "100%", opacity: 0 };
  const inTheCenter = { x: 0, opacity: 1 };
  const onTheLeft = { x: "-100%", opacity: 0 };
  const transition: Transition = {
    duration: 0.5,
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  return (
    <html>
      <body className={inter.className}>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode={"wait"}>
            <m.div
              key={pathName}
              initial={onTheRight}
              animate={inTheCenter}
              exit={onTheLeft}
              transition={transition}
            >
              {children}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </body>
    </html>
  );
}
