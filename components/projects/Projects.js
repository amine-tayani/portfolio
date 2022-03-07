import { data } from "./data";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-32 mx-5 lg:mx-64">
      <div className="">
        <h5 className=" tracking-tighter font-black lg:mb-20 mb-14 mt-8 sm:mt-14 text-3xl text-gray-300 sm:text-3xl">
          Some Things I've Built
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-max">
        {data.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
