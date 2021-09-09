import { data } from "./data"
import Project from "./Project"

const Projects = () => {
  return (
    <div id="projects" className="w-full p-12">
      <div className=" flex justify-center ">
        <h2 className="text-center lg:mb-20 mb-10 mt-8 sm:mt-12 font-sans text-2xl tracking-widest text-gray-300 sm:text-4xl">
          Some Things I've Built
        </h2>
      </div>
      <div className="flex flex-col space-y-10 lg:grid lg:grid-cols-3 lg:gap-x-3 ">
        {data.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}

export default Projects
