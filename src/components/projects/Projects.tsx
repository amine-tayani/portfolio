"use client";

import React from "react";
import Card from "@/components/projects/Card";
import { data } from "./data";

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="w-full mt-32 mx-10 sm:mx-12 md:mx-20 lg:mx-64"
    >
      <div className="">
        <h1 className="tracking-tighter font-inter font-bold lg:mb-20 mb-10 mt-8 sm:mt-14 text-3xl text-gray-300 sm:text-3xl">
          Some Things I{`'`}ve Built
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-max ">
        {data.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
