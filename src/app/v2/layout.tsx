import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <div className={montserrat.className}>{children}</div>;
}
