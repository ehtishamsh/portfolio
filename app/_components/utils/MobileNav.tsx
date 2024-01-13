"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function MobileNav() {
  return (
    <motion.div className="w-full flex justify-center items-center sticky top-0 left-0 h-screen bg-black text-white z-[99999]">
      <motion.div className="flex flex-col justify-center items-center gap-10">
        <Link
          href={"/"}
          className="text-3xl bold hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href={"/"}
          className="text-3xl bold hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          My Skills
        </Link>
        <Link
          href={"/"}
          className="text-3xl bold hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          About Me
        </Link>
        <Link
          href={"/"}
          className="text-3xl bold hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          My Projects
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MobileNav;
