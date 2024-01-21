import React from "react";
import SingleProject from "./utils/SingleProject";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-20 mt-16 bg-black text-white">
      <h1 className="text-5xl max-lg:text-3xl my-16  max-lg:mb-4 max-xxxxs:text-center z-30">
        My <span className="font-extrabold">Projects</span>
      </h1>
      <SingleProject />
    </div>
  );
}

export default Projects;
