"use client";

import * as React from "react";
import Link from "next/link";

const AboutTabPanel: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <div className="mb-4 text-[0.975rem]">
          I am an experienced Full Stack Developer specializing in JavaScript.
          With expertise in{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://nodejs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Node.js
          </Link>
          ,{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Express
          </Link>
          ,{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </Link>
          , and{" "}
          <Link
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </Link>
          , I build websites and web applications. I possess a comprehensive
          understanding of the entire web development process, transforming
          design concepts into responsive websites.{" "}
          <p className="my-4">
            Using Node.js and Express, I create robust server-side logic. On the
            front-end, I utilize React and Next.js to develop interactive user
            interfaces with efficient code. I thrive in dynamic environments,
            collaborating with cross-functional teams to bring projects from
            conception to deployment.{" "}
          </p>
          <p>
            Constantly staying updated with industry trends, I am passionate
            about delivering engaging and scalable web applications that meet
            client and user needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTabPanel;
