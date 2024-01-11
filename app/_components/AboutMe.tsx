"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import Image from "next/image";
import Dots from "./utils/Dots.json";
import Lottie from "lottie-react";

function AboutMe() {
  return (
    <div className="w-full  mt-20 px-10 py-14  bg-white max-sm:px-4 max-sm:py-8  relative text-black">
      <div className="custom-shape-divider-top-1704856316">
        <svg
          className="max-lg:h-[110px_!important] max-sm:h-[80px_!important] max-xxxxs:h-[60px_!important] "
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-24 max-lg:gap-8 mb-28 pb-8 mt-28 max-xxxxs:mt-10 max-xxxxs:mb-10"
        id="about"
      >
        <div className="h-full">
          <div className=" relative px-11 max-lg:p-0  max-md:p-7 max-md:mt-6">
            <Reveal delayTime={1}>
              <img
                src="/profile.webp"
                alt=""
                className=" object-contain flex justify-center items-center  rounded-full bg-gray-200 border max-lg:mt-6 border-gray-950"
              />
            </Reveal>
            <div className="w-1/2 max-xxxs:-translate-x-1 max-xxxs:-translate-y-0 max-xxxxxs:translate-x-2 max-xxxxxs:translate-y-2  absolute top-0 left-0 -translate-y-12 -translate-x-16 max-lg:-translate-x-10 max-lg:-translate-y-4  max-xl:-translate-x-10 max-md:-translate-y-5">
              <Reveal delayTime={2}>
                <Lottie animationData={Dots} loop width="100%" />
              </Reveal>
            </div>
          </div>
        </div>

        <div className=" flex justify-center flex-col">
          <Reveal delayTime={0.8}>
            <h1 className="text-5xl max-lg:text-3xl mb-8 max-lg:mb-4">
              About <span className="font-extrabold">Me</span>
            </h1>
          </Reveal>
          <Reveal delayTime={1}>
            <p className="text-base max-lg:text-sm text-wrap mb-2">
              {`   I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.`}
            </p>
          </Reveal>
          <Reveal delayTime={1.2}>
            <p className="text-base max-lg:text-sm text-wrap">
              {`     I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as react.js,Next.js, TypeScript, Tailwindcss and
            much more.`}
            </p>
          </Reveal>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1704855364">
        <svg
          className="max-lg:h-[110px_!important] max-sm:h-[80px_!important] max-xxxxs:h-[60px_!important] "
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default AboutMe;
