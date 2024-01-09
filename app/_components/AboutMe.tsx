"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";

function AboutMe() {
  return (
    <div className="w-full h-screen p-7 flex flex-col  items-center bg-white text-black">
      <Reveal delayTime={0.4}>
        <h1 className="text-5xl mt-11">
          About <span className="font-extrabold">Me</span>
        </h1>
      </Reveal>
      <div className="w-full flex justify-between items-center gap-5">
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

export default AboutMe;
