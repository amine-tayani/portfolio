import { motion } from "framer-motion"
import Typical from "react-typical"

const Hero = () => {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { duration: 4, ease: "easeInOut" } },
  }

  return (
    <>
      <section className="text-gray-200 body-font">
        <div className="container flex flex-col items-center px-5 mx-auto  md:flex-row lg:px-28 lg:mt-0 md:mt-10">
          <div className="flex flex-col items-center lg:items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-10 md:pr-12 md:mb-0 ">
            <h1 className="mb-8 mt-8 text-2xl font-black tracking-wide text-center md:text-3xl md:text-left lg:text-4xl ">
              Hi, I'm Amine Tayani
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-center md:text-left text-gray-400">
              <Typical
                steps={[
                  "I'm a Full Stack Developer 😃",
                  2000,
                  "I build web applications 🙄.",
                  2000,
                  "I use Frameworks like React ,Express, django and Laravel 😎.",
                  2000,
                ]}
              />
            </p>
            <div className="flex flex-wrap w-full mt-2 -mx-4 text-left ">
              <div className="w-1/4 p-4 mt-4 sm:w-1/4 ">
                <a
                  href="https://github.com/amine-tayani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    className="h-12 w-12 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stokeWidth="1.5"
                    stroke="#6c63ff"
                    fill="none"
                    stokeLinecap="round"
                    stokeLinejoin="round"
                  >
                    <motion.path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <motion.path
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                    />
                  </motion.svg>
                </a>
              </div>
              <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                <a
                  href="https://www.linkedin.com/in/amine-tayani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    className="h-12 w-12 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#6c63ff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.rect
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                    />
                    <motion.line
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                      x1="8"
                      y1="11"
                      x2="8"
                      y2="16"
                    />
                    <motion.line
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                      x1="8"
                      y1="8"
                      x2="8"
                      y2="8.01"
                    />
                    <motion.line
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                      x1="12"
                      y1="16"
                      x2="12"
                      y2="11"
                    />
                    <motion.path
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                      d="M16 16v-3a2 2 0 0 0 -4 0"
                    />
                  </motion.svg>
                </a>
              </div>
              <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                <a
                  href="https://codesandbox.io/u/Blazer3z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    className="h-12 w-12 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stokeWidth="1.5"
                    stroke="#6c63ff"
                    fill="none"
                    stokeLinecap="round"
                    stokeLinejoin="round"
                  >
                    <motion.path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M12 12l4 -2.25l4 -2.25"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.line
                      x1="12"
                      y1="12"
                      x2="12"
                      y2="21"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M12 12l-4 -2.25l-4 -2.25"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M20 12l-4 2v4.75"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M4 12l4 2l0 4.75"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M8 5.25l4 2.25l4 -2.25"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                  </motion.svg>
                </a>
              </div>
              <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                <a
                  href="https://codepen.io/amine-tayani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.svg
                    whileHover={{ scale: 1.2 }}
                    className="h-12 w-12 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stokeWidth="1.5"
                    stroke="#6c63ff"
                    fill="none"
                    stokeLinecap="round"
                    stokeLinejoin="round"
                  >
                    <motion.path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M3 15l9 6l9 -6l-9 -6l-9 6"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.path
                      d="M3 9l9 6l9 -6l-9 -6l-9 6"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.line
                      x1="3"
                      y1="9"
                      x2="3"
                      y2="15"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.line
                      x1="21"
                      y1="9"
                      x2="21"
                      y2="15"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.line
                      x1="12"
                      y1="3"
                      x2="12"
                      y2="9"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                    <motion.line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="21"
                      initial="hidden"
                      animate="visible"
                      variants={pathVariants}
                    />
                  </motion.svg>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-5/6 sm:w-3/5 sm:max-w-lg lg:max-w-lg lg:w-1/2 xl:w-full ">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="/images/web-dev.png"
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
