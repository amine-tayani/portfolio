const Project = ({ project }) => {
  return (
    <div className="relative group max-w-xs mx-auto overflow-hidden bg-gray-100 rounded dark:bg-gray-800 cursor-pointer">
      <div className="flex justify-center p-4 group-hover:opacity-0">
        <img
          className="object-cover object-center w-full h-44 rounded-md shadow-lg"
          src={project.ImgUrl}
          alt={`${project.imgAlt}`}
        />
      </div>
      <div className="text-left group-hover:opacity-0">
        <a href="#" className="ml-6 font-semibold text-lg text-gray-900">
          {project.Title}
        </a>
        <div className="flex space-x-3 p-4 group-hover:opacity-0">
          {project.Stack.map((stack) => (
            <a
              className="text-xs font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
              href="#"
            >
              {stack}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute p-10 top-0 opacity-0 group-hover:opacity-100 transform hover:-translate-y-1 hover:scale-x-105 transition duration-200 ease-in-out">
          <p className="text-gray-400 font-normal text-base text-center">{project.Description}</p>

          <div className="flex justify-between space-x-2 m-4">
            <a
              href={project.Preview != "" ? project.Preview : "#"}
              className="py-2 px-3 cursor-pointer bg-indigo-600 hover:bg-greyvy text-white w-1/2 transition ease-in duration-400 text-center text-base focus:outline-none rounded-lg "
            >
              Preview
            </a>
            <a
              href={project.GithubLink != "" ? project.GithubLink : "#"}
              className="py-2 px-4 cursor-pointer bg-indigo-600 hover:bg-greyvy text-white w-1/2 transition ease-in duration-400 text-center text-base focus:outline-none rounded-lg "
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
