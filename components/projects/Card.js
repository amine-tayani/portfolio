const Card = ({ project }) => {
  return (
    <div>
      <div className="relative p-6 max-w-xs h-72 bg-[#202040] group rounded cursor-pointer transform hover:-translate-y-2 duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <svg
            className="w-10 h-10 cursor-pointer text-purpley "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="M11.17 6l3.42 3.41l.58.59H28v16H4V6h7.17m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="flex items-center space-x-2">
            {project.GithubLink !== "" && (
              <a href={project.GithubLink != "" ? project.GithubLink : "#"}>
                <svg
                  className="w-6 h-6 cursor-pointer text-gray-400 hover:text-purpley duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            )}
            <a href={project.Preview != "" ? project.Preview : "#"}>
              <svg
                className="w-6 h-6 cursor-pointer text-gray-400 hover:text-purpley duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"></path>
                  <path d="M10 14L20 4"></path>
                  <path d="M15 4h5v5"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <a href="#">
          <h5 class="mt-6 mb-3 text-xl font-bold font-Jbrains tracking-tighter text-[#F1EDFF] group-hover:text-purpley ">
            {project.Title}
          </h5>
        </a>
        <p class="mb-6 text-[#ACA9BB] font-inter text-sm ">
          {project.Description}
        </p>
        <div className="flex space-x-3 absolute bottom-0 mb-8">
          {project.Stack.map((t) => {
            return (
              <p className="text-xs font-medium font-Jbrains text-[#79759C]">
                {t}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
