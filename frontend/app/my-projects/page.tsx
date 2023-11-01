import React from "react";
import { projects } from "../data/data";
import ProjectCard from "./components/project-card";

const MyProjects = () => {
  return (
    <div className="container grid grid-cols-1 gap-2 content-center mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-4">
        My projects {"  "}
        <span className="text-blue">( {projects.length} )</span>
      </h2>
      <div className="flex flex-row flex-wrap gap-10 mt-6">
        {projects.map((project) => {
          return <ProjectCard key={project.id} data={project} />;
        })}
      </div>
    </div>
  );
};

export default MyProjects;
