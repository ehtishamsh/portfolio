"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import Skills from "./utils/Skills";

function MySkills() {
  return (
    <div className="w-full p-16 flex justify-center items-center flex-col">
      <Reveal>
        <h1 className="text-5xl text-white">
          My <span className="font-extrabold">Skills</span>
        </h1>
      </Reveal>
      <Skills />
    </div>
  );
}

export default MySkills;
