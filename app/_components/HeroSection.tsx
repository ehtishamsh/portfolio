"use client";
import React from "react";
import { BsDownload, BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Reveal } from "./_animation/Reveal";
import Link from "next/link";
function HeroSection() {
  return (
    <div className="h-[calc(100vh-80px)] max-sm:mt-0 w-full flex justify-center items-center p-7 max-sm:p-3 mt-20 mb-9 max-sm:mb-0">
      <div className="w-full h-full relative">
        <div className="w-full h-full flex flex-col justify-center items-center text-black">
          <Reveal>
            <h1 className="text-[5vw] max-sm:text-[7.5vw] mb-5 m-0 z-30 max-sm:mb-2 name">
              Hi, I am <span className="font-bold">Ehtisham.</span>
            </h1>
          </Reveal>
          <Reveal delayTime={0.35}>
            <p className="text-[2vw] max-sm:text-[4.5vw] z-30  m-0 prof">
              Full Stack Web <span className="font-bold">Developer</span>
            </p>
          </Reveal>
          <div className="grid grid-cols-4 gap-6 max-sm:gap-2 max-sm:px-4 justify-between pt-5 max-xl:pt-5 max-lg:grid max-lg:grid-cols-4">
            <a
              href="#contact"
              className="rounded-xl border-2 border-black bg-white p-3 gap-2 text-black max-md:p-2 max-sm:gap-1 max-sm:text-xs   transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none col-span-2 flex justify-center items-center"
            >
              <Reveal delayTime={0.4}>
                <p className="z-30">Contact me</p>
              </Reveal>
              <Reveal delayTime={0.4}>
                <BsArrowRight className="z-30 text-2xl max-md:text-xl max-sm:text-sm" />
              </Reveal>
            </a>
            <Link
              href="https://drive.google.com/file/d/1YQQQfT_QIvEQsOSIxn3uUZPMB0Y3-6Xf/view?usp=sharing"
              target="_blank"
              className="rounded-xl border-2 border-black bg-white p-3 gap-2 max-md:p-2 max-sm:gap-1 max-sm:text-xs  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none col-span-2  flex justify-center items-center"
            >
              <Reveal delayTime={0.4}>
                <p className="z-30">Download CV</p>
              </Reveal>
              <Reveal delayTime={0.4}>
                <BsDownload className="z-30 text-2xl max-md:text-xl max-sm:text-sm" />
              </Reveal>
            </Link>
            <a
              href="https://www.facebook.com/ahtishams.shah"
              className="p-3 max-sm:px-1 max-sm:py-2 bg-white border-2 flex justify-center max-md:p-2 items-center border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-black rounded-lg"
            >
              <Reveal delayTime={0.4}>
                <FaFacebook className="z-30 text-2xl max-md:text-xl max-sm:text-base" />
              </Reveal>
            </a>
            <a
              href="https://github.com/ehtishamsh"
              className="p-3 max-sm:px-1 max-sm:py-2 bg-white border-2 flex justify-center max-md:p-2 items-center border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-black rounded-lg"
            >
              <Reveal delayTime={0.4}>
                <FaGithub className="z-30 text-2xl max-md:text-xl max-sm:text-base" />
              </Reveal>
            </a>
            <a
              href="https://www.linkedin.com/in/ehtishamshah"
              className="p-3 max-sm:px-1 max-sm:py-2 bg-white border-2 flex justify-center max-md:p-2 items-center border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-black rounded-lg"
            >
              <Reveal delayTime={0.4}>
                <FaLinkedin className="z-30 text-2xl max-md:text-xl max-sm:text-base" />
              </Reveal>
            </a>
            <a
              href="#"
              className="p-3 max-sm:px-1 max-sm:py-2 bg-white border-2  border-black cursor-pointer max-md:p-2 justify-center items-center flex hover:bg-black hover:text-white transition-all duration-300 text-black rounded-lg"
            >
              <Reveal delayTime={0.4}>
                <FaTwitter className="z-30 text-2xl max-md:text-xl max-sm:text-base" />
              </Reveal>
            </a>
          </div>
        </div>

        <div className="absolute blob top-1/2 max-xxxxs:h-[60%] left-1/2 transform -translate-x-1/2 hero -translate-y-1/2 w-[65%] h-[90%] max-sm:h-[75%] max-md:w-full max-md:h-[85%] max-lg:w-[90%] max-lg:h-[85%]  bg-white -z-10"></div>
      </div>
    </div>
  );
}

export default HeroSection;
