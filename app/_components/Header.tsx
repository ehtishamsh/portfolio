"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const path = usePathname();
  return (
    <header className="bg-transparent  flex justify-center items-center py-6 px-11 max-sm:px-2 fixed top-0 right-0 left-0 z-50">
      <nav className="border border-gray-400 bg-black/65 backdrop-blur-sm rounded-3xl  text-gray-950 flex items-center w-3/5 max-sm:w-full transition-all duration-500">
        <Link
          href={"/"}
          className={`w-1/3 transition-all duration-500 rounded-3xl text-center p-2 ${
            path === "/"
              ? "text-black bg-white hover:text-gray-500"
              : "text-white hover:text-gray-300"
          }`}
        >
          Home
        </Link>
        <Link
          href={"/contact"}
          className={`w-1/3 transition-all duration-500 rounded-3xl text-center p-2 ${
            path === "/contact"
              ? "text-black bg-white hover:text-gray-500"
              : "text-white hover:text-gray-300"
          }`}
        >
          Contact
        </Link>
        <Link
          href={"/about"}
          className={`w-1/3 transition-all duration-500 rounded-3xl text-center p-2 ${
            path === "/about"
              ? "text-black bg-white hover:text-gray-500"
              : "text-white hover:text-gray-300"
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
