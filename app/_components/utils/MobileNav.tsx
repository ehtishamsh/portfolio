"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function MobileNav({ button }: { button: boolean }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: "0%" },
      }}
      animate={button ? "visible" : "hidden"}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        delay: 0.2,
      }}
      className="w-full flex justify-center  items-center  fixed top-0 left-0 h-screen text-white z-[99]"
      style={{
        background: "url('duck.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className={`flex flex-col justify-center items-start w-full px-16 gap-10`}
      >
        <Link
          href={"/"}
          className="text-4xl font-extrabold underline-offset-4 underline hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href={"/"}
          className="text-4xl font-extrabold underline-offset-4 underline hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          My Skills
        </Link>
        <Link
          href={"/"}
          className="text-4xl font-extrabold underline-offset-4 underline hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          About Me
        </Link>
        <Link
          href={"/"}
          className="text-4xl font-extrabold underline-offset-4 underline hover:text-gray-200 active:text-gray-400 transition-all duration-300"
        >
          My Projects
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MobileNav;
