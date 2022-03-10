import HeroiconsSet from "./HeroiconsSet";

const Hero = () => {
  return (
    <div className="flex lg:relative">
      <div className="hidden lg:block absolute lg:mx-20 bottom-0 right-0">
        <HeroiconsSet />
      </div>
      <section className="text-gray-200 body-font">
        <div className="container flex flex-col px-5 sm:px-14 md:px-20 md:text-justify lg:text-left md:flex-row lg:px-28 lg:mt-0 md:mt-10">
          <div className="flex flex-col font-inter space-y-4 md:space-y-8 pt-0 mb-16 lg:flex-grow sm:max-w-xl md:max-w-full md:pr-12 lg:pl-32 md:mb-8">
            <h1 className="lg:mb-4 mt-20 font-Jbrains text-[#6c63ff] font-medium">
              Hi, my name is
            </h1>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold ">
              Amine Tayani.
            </h2>
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-400 ">
              I build things for the Web.
            </h3>
            <div className="w-full max-w-xl ">
              <p className="mt-4 text-sm sm:text-base text-gray-400 font-Jbrains">
                I'm a Full Stack Developer with experience building websites and
                web applications. I specialize mostly in JavaScript and have
                decent experience working with{" "}
                <span className="text-gray-100">Node.js</span>,{" "}
                <span className="text-gray-100">Express</span>,{" "}
                <span className="text-gray-100">React</span> and{" "}
                <span className="text-gray-100">Next.js</span>.
              </p>
            </div>
            <a
              href="/pdf/resume_Amine_Tayani.pdf"
              download="amine_tayani_resume.pdf"
            >
              <button className="w-52 p-4 my-8  md:my-16 text-sm font-inter tracking-wide rounded border border-purpley text-gray-100 hover:bg-purpley transition ease-in-out duration-200 focus:outline-none focus:bg-purpley">
                Check out my resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
