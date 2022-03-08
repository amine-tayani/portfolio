import { data } from "./data";
import Card from "./Card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full mt-32 mx-10 sm:mx-12 md:mx-20 lg:mx-64"
    >
      <div className="">
        <h5 className="tracking-tighter font-inter font-bold lg:mb-20 mb-10 mt-8 sm:mt-14 text-3xl text-gray-300 sm:text-3xl">
          Some Things I've Built
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-max">
        {data.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
