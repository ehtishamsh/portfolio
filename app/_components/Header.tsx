"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Reveal } from "./_animation/Reveal";
import { Reveal2 } from "./_animation/Revel2";
import useHash from "./utils/Hash";
import MobileNav from "./utils/MobileNav";
import { BsList, BsX, BsXLg } from "react-icons/bs";
function Header() {
  const path = usePathname();
  const hash = useHash();
  const [hidden, setHidden] = useState(false);
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const fixedWidth = 768;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (width < fixedWidth) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);

  return (
    <>
      {!show ? (
        <motion.header
          variants={{
            visible: {
              y: 10,
            },
            hidden: {
              y: "-100%",
            },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`bg-transparent lex justify-center items-center py-6 px-11 max-sm:px-2 fixed top-0 right-0 left-0 z-50`}
        >
          <Reveal2 width="100%">
            <nav className="border border-gray-400 bg-black/65 backdrop-blur-sm rounded-3xl  text-gray-950 flex items-center w-3/5 max-sm:w-full transition-all duration-500">
              <Link
                href={"/"}
                className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3  text-center px-2 ${
                  hash === "" && path === "/"
                    ? "text-black bg-white hover:text-gray-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <Reveal center={true} width="100%">
                  HOME
                </Reveal>
              </Link>
              <Link
                href={"/#skills"}
                className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3  text-center px-2 ${
                  hash === "skills"
                    ? "text-black bg-white hover:text-gray-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <Reveal center={true} delayTime={0.3} width="100%">
                  SKILLS
                </Reveal>
              </Link>
              <Link
                href={"/#about"}
                className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3  text-center px-2 ${
                  hash === "about"
                    ? "text-black bg-white hover:text-gray-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <Reveal center={true} delayTime={0.3} width="100%">
                  ABOUT ME
                </Reveal>
              </Link>
              <Link
                href={"/contact"}
                className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3  text-center px-2 ${
                  hash === "" && path === "/contact"
                    ? "text-black bg-white hover:text-gray-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                <Reveal center={true} delayTime={0.3} width="100%">
                  CONTACT
                </Reveal>
              </Link>
            </nav>
          </Reveal2>
        </motion.header>
      ) : (
        <motion.header className="bg-transparent backdrop-blur-sm py-5  px-4 top-0 w-full left-0 fixed flex z-[999] justify-between items-center">
          <div className="rounded-3xl bg-white p-2 border border-gray-600">
            <h1 className="text-black text-sm font-mono">Ehtisham</h1>
          </div>
          <motion.button
            onClick={() => setButton((prev) => !prev)}
            className=" rounded-full text-2xl active:scale-[1.2] transition-all duration-200 bg-white p-2 z-[999999]"
          >
            {!button ? <BsList /> : <BsXLg />}
          </motion.button>
          <MobileNav button={button} />
        </motion.header>
      )}
    </>
  );
}

export default Header;
