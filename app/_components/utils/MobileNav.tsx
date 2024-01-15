"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function MobileNav({
  button,
  hash,
  path,
}: {
  button: boolean;
  hash: string;
  path: string;
}) {
  console.log(path);
  return (
    <motion.div
      variants={{
        hidden: { x: "100%", opacity: 0 },
        visible: { x: "0%", opacity: 1 },
      }}
      initial="hidden" // Set initial state to hidden
      animate={button ? "visible" : "hidden"}
      transition={{
        type: "spring", // Use spring animation
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
      className="w-full flex justify-center items-center fixed top-0 left-0 h-screen text-white z-[99] bg-black"
    >
      <motion.div
        className={`flex flex-col justify-center items-center  w-full px-16 gap-10`}
      >
        <Link
          href={"/"}
          className={`${
            path === "/" && hash === "" ? "text-gray-500" : "text-white"
          } text-4xl hover:text-gray-200transition-all duration-300`}
        >
          Home
        </Link>
        <Link
          href={"/#skills"}
          className={`${
            hash === "skills" ? "text-gray-500" : "text-white"
          } text-4xl hover:text-gray-200transition-all duration-300`}
        >
          Skills
        </Link>
        <Link
          href={"/#about"}
          className={`${
            hash === "about" ? "text-gray-500" : "text-white"
          } text-4xl hover:text-gray-200transition-all duration-300`}
        >
          About Me
        </Link>
        <Link
          href={"/#projects"}
          className={`${
            hash === "projects" ? "text-gray-500" : "text-white"
          } text-4xl hover:text-gray-200transition-all duration-300`}
        >
          Projects
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MobileNav;
