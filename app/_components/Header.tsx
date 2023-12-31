"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  return (
    <header className="bg-transparent flex justify-center items-center py-6 px-11 fixed top-0 right-0 left-0">
      <nav className="border border-slate-800 bg-transparent backdrop-blur-sm rounded-3xl text-gray-800 flex items-center w-3/5">
        <Link
          href={"/"}
          className={`w-1/3 transition-all duration-300 rounded-3xl text-center p-2 ${
            path === "/"
              ? "text-gray-100 bg-gray-800 hover:bg-gray-700"
              : "text-gray-800 bg-transparent "
          }`}
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className={`bg-transparent w-1/3 transition-all duration-300 rounded-3xl text-center p-2 text-gray-800`}
        >
          About
        </Link>
        <Link
          href={"#experience"}
          className={`bg-transparent w-1/3 transition-all duration-300 rounded-3xl text-center p-2 text-gray-800`}
        >
          Experience
        </Link>
      </nav>
    </header>
  );
}

export default Header;
