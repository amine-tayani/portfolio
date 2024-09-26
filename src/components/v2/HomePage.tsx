"use client";

import * as React from "react";
import Link from "next/link";
import NavigationLinks from "@/components/v2/NavigationLinks";
import AboutTabPanel from "@/components/v2/AboutTabPanel";
import ExperienceTabPanel from "@/components/v2/ExperienceTabPanel";
import ProjectTabPanel from "@/components/v2/ProjectTabPanel";
import SocialMediaLinks from "@/components/v2/SocialMediaLinks";
import Footer from "@/components/v2/Footer";
import WordsPullUp from "./AnimatedComponents/WordsPullUp";

const HomePage: React.FC = () => {
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
        <div className="flex space-x-4 mt-12">
          <Link
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="Voir mon cv"
            href="/assets/resume/Amine_CV_dernier.pdf"
          >
            <span>
              <span className=" border-b border-transparent pb-px transition group-hover:border-teal-300">
                Voir mon
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                  {" "}
                  CV
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </Link>

          <Link
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="View my resume"
            href="/assets/resume/RESUME_DEV_LTS.pdf"
          >
            <span>
              <span className=" border-b border-transparent pb-px transition group-hover:border-teal-300">
                View my
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                  {" "}
                  Resume
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </Link>
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
