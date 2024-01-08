"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Reveal } from "./_animation/Reveal";
import { Reveal2 } from "./_animation/Revel2";
import useHash from "./utils/Hash";
function Header() {
  const path = usePathname();
  const hash = useHash();

  return (
    <header className="bg-transparent  flex justify-center items-center py-6 px-11 max-sm:px-2 fixed top-0 right-0 left-0 z-50">
      <Reveal2 width="100%">
        <nav className="border border-gray-400 bg-black/65 backdrop-blur-sm rounded-3xl  text-gray-950 flex items-center w-3/5 max-sm:w-full transition-all duration-500">
          <Link
            href={"/"}
            className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3 font-bold text-center px-2 ${
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
            href={"#skills"}
            className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3 font-bold text-center px-2 ${
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
            href={"/contact"}
            className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3 font-bold text-center px-2 ${
              hash === "" && path === "/contact"
                ? "text-black bg-white hover:text-gray-500"
                : "text-white hover:text-gray-300"
            }`}
          >
            <Reveal center={true} delayTime={0.3} width="100%">
              CONTACT
            </Reveal>
          </Link>
          <Link
            href={"/about"}
            className={`w-1/3 transition-all duration-500 rounded-3xl text-sm py-3 font-bold text-center px-2 ${
              path === "/about"
                ? "text-black bg-white hover:text-gray-500"
                : "text-white hover:text-gray-300"
            }`}
          >
            <Reveal center={true} width="100%" delayTime={0.35}>
              ABOUT
            </Reveal>
          </Link>
        </nav>
      </Reveal2>
    </header>
  );
}

export default Header;
