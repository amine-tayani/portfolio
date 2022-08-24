import { Tab } from "@headlessui/react";
import { experiences } from "./data";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const container = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Experiences = () => {
  return (
    <div
      className="w-full mt-32 mx-10 max-w-lg sm:max-w-3xl sm:mx-12 md:mx-20 lg:mx-64 font-inter"
      id="experiences"
    >
      <div className="">
        <h1 className="tracking-tighter font-inter font-bold mb-10 lg:mb-20 mt-8 sm:mt-14 text-3xl text-gray-300 sm:text-3xl">
          Where I've worked
        </h1>
      </div>
      <div className="flex flex-col -ml-2 sm:-ml-0 sm:flex-row sm:space-x-12 sm:items-center lg:max-w-3xl sm:px-0">
        <Tab.Group defaultIndex={0}>
          <Tab.List
            id="scrollBar"
            className=" flex flex-row justify-center space-x-4 sm:space-x-0 sm:flex-col overflow-x-scroll sm:overflow-hidden max-w-xs sm:max-w-full"
          >
            {experiences.map((exp) => (
              <Tab
                key={exp.id}
                className={({ selected }) =>
                  classNames(
                    " sm:w-56 sm:border-l-[3px] sm:border-[#79759c1a] py-3 text-left sm:px-6 text-sm sm:text-base rounded-sm sm:hover:bg-[#2d2d44] hover:text-purpley",
                    "focus:outline-none transition-all duration-500 ease-in-out",
                    selected
                      ? " text-purpley sm:border-l-[3px] sm:border-[#6c63ffe6]"
                      : "text-[#79759C] hover:text-purpley"
                  )
                }
              >
                <motion.div transition={{ duration: 1.2 }}>
                  {exp.company_name}
                </motion.div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {experiences.map((exp) => (
              <Tab.Panel
                key={exp.id}
                className={classNames(
                  "p-1 mt-4 max-w-xs sm:mt-0 sm:p-0 sm:max-w-full",
                  "focus:outline-none"
                )}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="flex flex-col space-y-2 tracking-tight"
                >
                  <h1 className="text-[#F1EDFF] font-bold sm:text-xl ">
                    {exp.role} - {"  "}
                    <span className="text-purpley font-Jbrains">
                      {exp.company_name}
                    </span>
                  </h1>

                  <p className=" text-[#79759C] sm:text-lg">
                    {exp.job_date} , {exp.location}
                  </p>
                  <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={container}
                    className="flex flex-col"
                  >
                    {exp.tasks.map((task) => (
                      <motion.li variants={item}>
                        <div className="p-2 text-[#ACA9BB]">
                          <span className="leading-6 text-sm sm:text-base">
                            {task}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Experiences;
