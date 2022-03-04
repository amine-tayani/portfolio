import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDimensions } from "../hooks/useDimensions";
import { MenuToggle } from "../components/Navbar/MenuToggle";
import { Navigation } from "../components/Navbar/Navigation";

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
          <div className="max-w-full mx-auto px-8 sm:px-6 lg:px-16 my-4">
            <div className="flex items-center justify-between h-16">
              <div className="hidden sm:flex flex-shrink-0 space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#597e8d"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 12h6" />
                  <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
                  <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
                </svg>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex font-Jbrains items-baseline space-x-6">
                    <span className=" text-gray-300 px-3 py-2 text-sm hover-underline ">
                      <AnchorLink href="#home">Home</AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink href="#skills">Skills</AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink href="#projects">Projects</AnchorLink>
                    </span>
                    <span className=" text-gray-300 px-3 py-2 text-sm  hover-underline ">
                      <AnchorLink href="#contact">Contact</AnchorLink>
                    </span>
                    <button className="w-full p-3 text-sm tracking-wide rounded border  border-purpley text-gray-100 hover:bg-purpley transition ease-in-out duration-200 focus:outline-none focus:bg-blue-700">
                      Resume
                    </button>
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
                  <Navigation />
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
