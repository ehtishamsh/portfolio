"use client";
import React from "react";
import SingleProject from "./utils/SingleProject";
import { Reveal } from "./_animation/Reveal";

function Projects() {
  return (
    <Reveal delayTime={0.5} width={"100%"}>
      <div
        id="projects"
        className="flex flex-col justify-center items-center px-16 py-20  max-sm:py-12 max-lg:px-10 max-md:px-6 mt-16 bg-black text-white"
      >
        <h1 className="text-5xl max-lg:text-3xl my-16 max-sm:my-4  max-lg:mb-4 max-xxxxs:text-center z-30">
          My <span className="font-extrabold">Projects</span>
        </h1>
        <SingleProject />
      </div>
    </Reveal>
  );
}

export default Projects;
