"use client";
import React from "react";
import blob from "../_components/_animation/blob.json";
import Lottie from "lottie-react";
function HeroSection() {
  return (
    <div className="h-[calc(100vh-80px)] w-full flex justify-center items-center p-7 mt-16">
      <div className="w-full h-full relative">
        <div className="w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-5 z-30">Hi, I am Ehtisham.</h1>
          <p className="text-2xl  z-30 ">Full Stack Web Developer</p>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] overflow-hidden -z-10">
          <Lottie animationData={blob} loop={true} style={{ height: "50%" }} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
