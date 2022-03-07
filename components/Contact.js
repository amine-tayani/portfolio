import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_p56bhsm",
        e.target,
        "user_QdBhYdb5Q7kmNn9RBHRyz"
      )
      .then(e.target.reset());
  };

  return (
    <div
      id="contact"
      className="max-w-screen-xl px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 mt-10"
    >
      <div className="flex justify-center">
        <div className="p-2 text-center ">
          <h2 className=" font-inter font-bold lg:mb-12 mb-14 mt-8 sm:mt-14 text-4xl text-gray-300 sm:text-5xl md:text-6xl">
            Get In Touch
          </h2>
          <div className="w-full max-w-xl">
            <p className="text-gray-400 font-Jbrains">
              I’m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
          </div>
          <button className="mt-12 py-4 px-12 text-sm tracking-wide font-inter rounded border border-purpley text-gray-100 hover:bg-purpley transition ease-in-out duration-200 focus:outline-none focus:bg-purpley">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
