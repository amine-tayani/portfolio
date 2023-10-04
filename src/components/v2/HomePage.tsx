"use client";

import * as React from "react";
import NavigationLinks from "@/components/v2/NavigationLinks";
import AboutTabPanel from "@/components/v2/AboutTabPanel";
import ExperienceTabPanel from "@/components/v2/ExperienceTabPanel";
import ProjectTabPanel from "@/components/v2/ProjectTabPanel";
import SocialMediaLinks from "@/components/v2/SocialMediaLinks";
import Footer from "@/components/v2/Footer";
import WordsPullUp from "./AnimatedComponents/WordsPullUp";
import Preloader from "../preloader";
import { usePathname, useSearchParams } from "next/navigation";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleComplete();

    return () => {
      handleStart();
    };
  }, [pathname, searchParams]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">
              <WordsPullUp words="Amine Tayani" />
            </a>
          </h1>
          <h2 className="mt-3 text-xl font-medium text-slate-200 sm:text-xl tracking-tight">
            <WordsPullUp words="Full Stack Developer" />
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            My focus is on building engaging and functional experiences for the
            web.
          </p>
          <NavigationLinks />
        </div>
        <SocialMediaLinks />
      </header>

      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <AboutTabPanel />
        <ExperienceTabPanel />
        <ProjectTabPanel />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
