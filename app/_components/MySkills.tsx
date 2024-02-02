"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import Skills from "./utils/Skills";
import Lottie from "lottie-react";
import SkillsLottie from "./utils/skillAnimation.json";
import Arrow from "./utils/Arrow.json";
function MySkills() {
  return (
    <div
      id="skills"
      className="w-full p-16 mt-20 max-sm:mt-8 flex justify-center items-center flex-col max-md:p-3 max-sm:p-2"
    >
      <Reveal delayTime={0.4}>
        <h1 className="text-5xl max-sm:text-2xl max-sm:mb-8 text-white">
          My <span className="font-extrabold">Skills</span>
        </h1>
      </Reveal>
      <div className="w-full flex justify-center items-center flex-col gap-4 mt-9-">
        <div className="w-2/3 mt-32 mb-16 max-sm:mb-10 max-sm:mt-14 max-sm:w-full px-4">
          <Reveal delayTime={1} width="100%">
            <div className="flex justify-center items-center">
              <Lottie animationData={SkillsLottie} />
            </div>
          </Reveal>
        </div>
        <div className="w-40 mb-44 mt-11 max-sm:mt-5 max-sm:w-32 max-md:mb-20">
          <Reveal delayTime={1}>
            <div className="flex justify-center items-center">
              <Lottie animationData={Arrow} />
            </div>
          </Reveal>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default MySkills;
