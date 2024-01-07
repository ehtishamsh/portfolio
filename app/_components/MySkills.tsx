"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import Skills from "./utils/Skills";
import { Reveal2 } from "./_animation/Revel2";
import Lottie from "lottie-react";
import SkillsLottie from "./utils/skillAnimation.json";
import Arrow from "./utils/Arrow.json";
import Link from "next/link";
function MySkills() {
  return (
    <div className="w-full p-16 flex justify-center items-center flex-col max-md:p-3 max-sm:p-2">
      <Reveal delayTime={0.4}>
        <h1 className="text-5xl text-white">
          My <span className="font-extrabold">Skills</span>
        </h1>
      </Reveal>
      <div className="w-full flex justify-center items-center flex-col gap-4">
        <div className="w-2/3 mt-40 max-sm:w-3/4">
          <Reveal delayTime={1}>
            <div className="flex justify-center items-center">
              <Lottie animationData={SkillsLottie} />
            </div>
          </Reveal>
        </div>
        <div className="w-36 mb-32">
          <Reveal delayTime={1.5}>
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
