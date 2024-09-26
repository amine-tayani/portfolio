"use client";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";

const NavigationLinks: React.FC = () => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="my-80 w-max">
        <li>
          <AnchorLink
            className="group flex items-center py-3 active"
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="group flex items-center py-3"
            href="#experience"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
            <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="group flex items-center py-3" href="#projects">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
            <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </AnchorLink>
        </li>
        <li>
          <Link
            className="group flex items-center py-3"
            aria-label="Voir mon cv"
            href="/assets/resume/Amine_CV_dernier.pdf"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
            <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              French Resume
            </span>
          </Link>
        </li>

        <li>
          <Link
            className="group flex items-center py-3"
            aria-label="View my resume"
            href="/assets/resume/RESUME_DEV_LTS.pdf"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
            <span className="nav-text hover:scale-110 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              English Resume
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
