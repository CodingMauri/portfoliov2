import React from "react";
import { useState } from "react";
import classNames from "classnames";
export const Projects = ({ project, isLeft }) => {
  const [isHovered, setHovered] = useState(null);

  return (
      <div
        className={`w-full h-full flex items-center justify-center bg-[#141414] ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-1/2 p-8 ">
          <h2 className="text-2xl font-banner text-white mb-4">
            {project.title}
          </h2>
          <p className="text-white">{project.description}</p>
        </div>
        <div
          className="w-1/2 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={project.image.project1}
            alt={project.title}
            className={classNames(
              "w-full h-full object-cover rounded-lg border-4  outline-white hover:blur-sm transition-all duration-300 z-1",
              isHovered ? "blur-sm transition-all duration-300 " : null
            )}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-2 ">
            <a
              href={project.github}
              className="mx-2 py-2 px-4 bg-gray-800 text-white rounded-md "
            >
              GitHub
            </a>
            {project.live ? null : (
              <a
                href={project.live}
                className="mx-2 py-2 px-4 bg-gray-800 text-white rounded-md"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
  
  );
};
