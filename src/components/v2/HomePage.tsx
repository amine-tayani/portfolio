"use client";

import * as React from "react";
import { Tab } from "@headlessui/react";
import AboutTabPanel from "@/components/v2/AboutTabPanel";
import ExperienceTabPanel from "@/components/v2/ExperienceTabPanel";
import ProjectTabPanel from "@/components/v2/ProjectTabPanel";
import SocialMediaLinks from "@/components/v2/SocialMediaLinks";
import Footer from "@/components/v2/Footer";
import Link from "react-anchor-link-smooth-scroll";

const HomePage: React.FC = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Amine Tayani</a>
          </h1>
          <h2 className="mt-3 text-xl font-medium text-slate-200 sm:text-xl tracking-tight">
            Full Stack Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            My focus is on building engaging and functional experiences for the
            web.
          </p>

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="my-80 w-max">
              <li>
                <Link
                  className="group flex items-center py-3 active"
                  href="#about"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center py-3"
                  href="#experience"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
                  <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </Link>
              </li>
              <li>
                <Link className="group flex items-center py-3" href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
                  <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
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
