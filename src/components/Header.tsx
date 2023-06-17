"use client";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "@/components/Navbar/Navigation";
import { MenuToggle } from "@/components/Navbar/MenuToggle";
import { useDimensions } from "@/hooks/useDimensions";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      background: "#141424",
      clipPath: `circle(${height * 2 + 200}px at 20px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      background: "#222233",
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div id="home">
      <div>
        <nav>
          <div className="max-w-full mx-auto sm:px-6 md:mx-2 lg:mx-0 px-8 lg:px-16 xl:px-32 xl:mx-6 my-4">
            <div className="flex items-center justify-between h-16">
              <div className="z-10 sm:flex flex-shrink-0 space-x-3">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="#6c63ff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center">
                <div className="hidden md:block xl:mr-10">
                  <div className="ml-10 flex font-Jbrains items-baseline space-x-4">
                    <span className=" text-gray-300 px-3 py-2 text-sm hover-underline ">
                      <AnchorLink aria-label="hero section" href="#home">
                        About
                      </AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink aria-label="skills section" href="#skills">
                        Skills
                      </AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink
                        aria-label="projects section"
                        href="#projects"
                      >
                        Projects
                      </AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink
                        aria-label="experiences section"
                        href="#experiences"
                      >
                        Experiences
                      </AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink aria-label="Contact section" href="#contact">
                        Contact
                      </AnchorLink>
                    </span>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <motion.nav
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  custom={height}
                  ref={containerRef}
                >
                  <motion.div className="background" variants={sidebar} />
                  <Navigation toggle={() => toggleOpen()} />
                  <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
