import React from "react";

export const Projects = ({ project, isLeft }) => {
  console.log(project)
  return (
      <div
        className={`w-full h-full flex items-center justify-center bg-[#141414] ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 p-8 ">
          <h2 className="text-2xl font-banner text-white mb-4">{project.title}</h2>
          <p className = "text-white">{project.description}</p>
          <button className = "text-white w-3/12 mt-2 bg-red-600 mr-2 rounded-md">Live</button>
          <button className = "text-white w-3/12 mt-2 bg-red-600  rounded-md">Github</button>

        </div>
        <div className="w-1/2">
          <img
            src={project.image.project1}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg border-4 outline-white"
          />
        </div>
      
      </div>
  );
};
