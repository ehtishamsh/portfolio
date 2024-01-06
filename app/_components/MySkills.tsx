"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import Skills from "./utils/Skills";
import { Reveal2 } from "./_animation/Revel2";
import Lottie from "lottie-react";
import SkillsLottie from "./utils/skillAnimation.json";
import Link from "next/link";
import Hover from "./_animation/Hover";
function MySkills() {
  return (
    <div className="w-full p-16 flex justify-center items-center flex-col">
      <Reveal delayTime={0.4}>
        <h1 className="text-5xl text-white">
          My <span className="font-extrabold">Skills</span>
        </h1>
      </Reveal>
      <div className="w-full flex justify-center items-center">
        <div className="w-2/5">
          <Reveal delayTime={2}>
            <Lottie animationData={SkillsLottie} />
          </Reveal>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default MySkills;
