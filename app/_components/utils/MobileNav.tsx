"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", text: "Home", hash: "" },
  { href: "/#skills", text: "Skills", hash: "skills" },
  { href: "/#about", text: "About Me", hash: "about" },
  { href: "/#projects", text: "Projects", hash: "projects" },
  { href: "/#contact", text: "Contact", hash: "contact" },
];

function MobileNav({
  button,
  hash,
  path,
}: {
  button: boolean;
  hash: string;
  path: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
        visible: { x: "0%", opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      initial="hidden"
      animate={button ? "visible" : "hidden"}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }}
      className="w-full flex justify-center h-svh items-center fixed top-0 left-0 text-white z-[99] bg-black"
    >
      <motion.div
        className={`flex flex-col justify-center items-center w-full px-16 gap-10`}
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, x: "100%" },
              visible: { opacity: 1, y: 0, x: "0%" },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.2,
            }}
          >
            <Link
              href={link.href}
              className={`${
                (path === link.href && hash === "") || hash === link.hash
                  ? "text-gray-500"
                  : "text-white"
              } text-4xl hover:text-gray-200 transition-all duration-300`}
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MobileNav;
