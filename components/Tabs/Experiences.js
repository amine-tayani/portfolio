import { Tab } from "@headlessui/react";
import { experiences } from "./data";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
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
      className="w-full mt-32 mx-10 sm:mx-12 md:mx-20 lg:mx-64 font-inter"
      id="experiences"
    >
      <div className="">
        <h1 className="tracking-tighter font-inter font-bold mb-10 lg:mb-20 mt-8 sm:mt-14 text-3xl text-gray-300 sm:text-3xl">
          Where I've worked
        </h1>
      </div>
      <div className="flex items-center space-x-8 w-full max-w-xl lg:max-w-3xl sm:px-0">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex flex-col">
            {experiences.map((exp) => (
              <Tab
                key={exp.id}
                className={({ selected }) =>
                  classNames(
                    "w-36 py-3 text-left px-4 text-sm rounded-sm hover:bg-[#2d2d44] hover:text-purpley hover:ring-1 hover:ring-purpley",
                    "focus:outline-none transition-all duration-300 ease-in-out",
                    selected
                      ? " ring-1 ring-purpley bg-[#2d2d44] text-purpley"
                      : "text-[#79759C] hover:text-purpley"
                  )
                }
              >
                {exp.company_name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {experiences.map((exp) => (
              <Tab.Panel
                key={exp.id}
                className={classNames(" p-3", "focus:outline-none")}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="flex flex-col space-y-2 tracking-tight"
                >
                  <h1 className="text-[#F1EDFF] font-semibold">
                    {exp.role} - {"  "}
                    <span className="text-purpley font-Jbrains">
                      {exp.company_name}
                    </span>
                  </h1>

                  <p className="text-sm text-[#79759C] ">
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
                        <div className="p-2 mx-2 text-sm text-[#ACA9BB]">
                          <span className="leading-6 "> - {task}</span>
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
