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
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="Voir mon cv"
            href="/assets/resume/Amine_CV_dernier.pdf"
          >
            <span>
              <span className=" border-b border-transparent pb-px transition group-hover:border-teal-300">
                French
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                  {" "}
                  resume
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
        </li>

        <li>
          <Link
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="View my resume"
            href="/assets/resume/RESUME_DEV_LTS.pdf"
          >
            <span>
              <span className=" border-b border-transparent pb-px transition group-hover:border-teal-300">
                English
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
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
