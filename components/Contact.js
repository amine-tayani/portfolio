const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-screen-xl px-8 py-16 mx-auto rounded-lg my-10 lg:my-20"
    >
      <div className="flex justify-center">
        <div className="p-2 text-center ">
          <h2 className=" font-inter font-bold lg:mb-12 mb-14 mt-8 sm:mt-14 text-4xl text-gray-300 sm:text-5xl md:text-6xl">
            Get In Touch
          </h2>
          <div className="w-full max-w-xl">
            <p className="text-gray-400 font-Jbrains">
              I’m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or you have job opportunity for
              me, I’ll try my best to get back to you!
            </p>
          </div>
          <a href="mailto:amine.tayani@gmail.com">
            <button className="mt-12 py-4 px-12 text-sm tracking-wide font-inter rounded border border-purpley text-gray-100 hover:bg-purpley transition ease-in-out duration-200 focus:outline-none focus:bg-purpley">
              Send Message
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
