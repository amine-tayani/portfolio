import HeroiconsSet from "./HeroiconsSet";

const Hero = () => {
  return (
    <div className="flex relative">
      <div className="hidden lg:block absolute mx-20 bottom-0 right-0">
        <HeroiconsSet />
      </div>
      <section className="text-gray-200 body-font">
        <div className="container flex flex-col mx-auto  px-5 text-left  md:flex-row lg:px-28 lg:mt-0 md:mt-10">
          <div className="flex flex-col font-inter space-y-8 pt-0 mb-16 lg:flex-grow md:w-full lg:w-1/2  xl:mr-10 md:pr-12 lg:pl-32 md:mb-8 ">
            <h1 className="mb-4 mt-20 font-Jbrains text-[#6c63ff] font-medium">
              Hi, my name is
            </h1>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
              Amine Tayani.
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400 ">
              I build things for the Web.
            </h3>
            <div className="w-full max-w-xl">
              <p className="text-gray-400 font-Jbrains">
                I'm a Full Stack Developer with experience building websites and
                web applications. I specialize mostly in JavaScript and have
                decent experience working with{" "}
                <span className="text-gray-100">Node.js</span>,{" "}
                <span className="text-gray-100">Express</span>,{" "}
                <span className="text-gray-100">React</span> and{" "}
                <span className="text-gray-100">Next.js</span>.
              </p>
            </div>
            <button className="w-52 p-4 text-sm font-inter tracking-wide rounded border border-purpley text-gray-100 hover:bg-purpley transition ease-in-out duration-200 focus:outline-none focus:bg-blue-700">
              Check out my resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
