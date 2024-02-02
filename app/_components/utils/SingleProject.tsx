"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiBootstrap, SiJavascript, SiMysql, SiPhp } from "react-icons/si";
import Link from "next/link";

function SingleProject() {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      target="_blank"
      onTapStart={() => setHover(true)}
      href="https://github.com/ehtishamsh/Electronics-Gala"
      className="w-full grid grid-cols-1 mt-14 p-10 border-4 max-lg:p-6 max-md:px-4 border-slate-100 rounded-3xl transition-all duration-500 hover:border-black hover:text-black hover:bg-white hover:scale-105"
    >
      <div className="grid grid-cols-2 gap-12 max-lg:gap-8 max-sm:gap-4 max-md:grid-cols-1">
        <div className="flex justify-center items-center">
          <motion.img
            src="project1.png"
            className={`object-cover rounded-3xl max-sm:border max-sm:border-slate-950/40  z-10 ${
              hover ? "border border-slate-950/40" : ""
            }`}
            alt=""
          />
        </div>
        <div className="w-full">
          <h6
            className={`mb-2 max-sm:mb-1 text-sm max-lg:text-xs  ${
              hover ? "text-gray-600" : "text-gray-400 max-sm:text-gray-600"
            }`}
          >
            TITLE:
          </h6>
          <h1 className="mb-6 max-sm:mb-4 text-5xl font-bold max-lg:text-3xl max-sm:text-2xl">
            Electonic's Gala
          </h1>
          <h6
            className={`mb-2 max-sm:mb-1 text-sm max-lg:text-xs ${
              hover ? "text-gray-600" : "text-gray-400  max-sm:text-gray-600"
            } `}
          >
            DESCRIPTION:
          </h6>
          <p
            className={`text-xl max-lg:text-base max-sm:text-sm  mb-6 max-sm:mb-4 ${
              hover ? "text-gray-600" : "text-gray-400  max-sm:text-gray-600"
            }`}
          >
            Electronic Gala is a user-friendly, responsive electronic ecommerce
            website that allows users to browse and purchase a wide range of
            electronic gadgets and accessories. This website is built using a
            combination of front-end and back-end technologies to ensure a
            smooth and secure shopps.
          </p>
          <h6
            className={`mb-2 max-sm:mb-1 text-sm max-lg:text-xs  ${
              hover ? "text-gray-600" : "text-gray-400  max-sm:text-gray-600"
            }`}
          >
            TECH STACK:
          </h6>

          <div className="flex justify-start gap-4 items-center text-4xl ">
            <SiPhp /> <SiMysql /> <SiJavascript /> <SiBootstrap />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default SingleProject;
