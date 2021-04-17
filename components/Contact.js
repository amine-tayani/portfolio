import emailjs from "emailjs-com"

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("gmail", "template_p56bhsm", e.target, "user_QdBhYdb5Q7kmNn9RBHRyz")
      .then(e.target.reset())
  }

  return (
    <div
      id="contact"
      className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mt-10"
    >
      <div className="flex flex-col lg:justify-between order-last md:order-first">
        <div className="p-2 text-center md:text-left">
          <h2 className="text-4xl tracking-wide lg:text-5xl text-gray-200">Get in touch</h2>
        </div>
        <div className="flex flex-col space-y-8 md:p-8 my-8 md:my-0">
          <div className="flex space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#0c73fc"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <span className="text-white font-medium ">+212 684363193</span>
          </div>
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
              strokeWidth="1.5"
              stroke="#0c73fc"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <span className="text-white font-medium">amine.tayanipro@gmail.com</span>
          </div>
          <div className="flex space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#0c73fc"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <line x1="12" y1="11" x2="12" y2="17" /> <polyline points="9 14 12 17 15 14" />
            </svg>
            <a href="/pdf/My_resume.pdf" download="resume.pdf">
              <span className="text-white font-medium ">My resume</span>
            </a>
          </div>
        </div>
        <div className="flex space-x-4 items-center justify-center lg:justify-start">
          <a href="https://github.com/amine-tayani/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 hover:bg-blue-700 hover:text-white rounded-full p-2 transition ease-in-out duration-400 cursor-pointer"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/amine-tayani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 hover:bg-blue-700 hover:text-white rounded-full p-2 transition ease-in-out duration-400 cursor-pointer"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </div>
      </div>
      <form className="space-y-6 bg-white p-8 rounded-md" onSubmit={sendEmail}>
        <div>
          <label for="name" className="text-gray-600 text-sm font-semibold">
            Your Name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded-md mt-2 border-2 border-gray-300 bg-transparent focus:outline-none focus:border-purpley"
          />
        </div>
        <div>
          <label for="email" className="text-gray-600 text-sm font-semibold">
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="w-full p-3 rounded-md mt-2 border-2 border-gray-300 bg-transparent focus:outline-none focus:border-purpley"
          />
        </div>
        <div>
          <label for="message" className="text-gray-600 text-sm font-semibold">
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows="3"
            className="w-full p-3 rounded-md mt-2 border-2 border-gray-300 bg-transparent focus:outline-none focus:border-purpley"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-semibold font-mont tracking-wide rounded bg-purpley text-gray-100 hover:bg-darkest-gray transition ease-in-out duration-200 focus:outline-none focus:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
