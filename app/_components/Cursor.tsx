"use client";
import React, { useEffect, useState } from "react";

function Cursor() {
  useEffect(() => {
    const cursor: HTMLDivElement | null = document.querySelector(".cursor");

    const handleMouseMove = (e: MouseEvent) => {
      const rings: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(".rings");
      rings.forEach((ring, index) => {
        ring.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      });

      const links: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("a");
      const isHovering = Array.from(links).some((link) =>
        link.contains(e.target as Node)
      );

      if (isHovering) {
        cursor?.classList.add("grow");
        document.querySelector(".dot")?.classList.add("removeDot");
      } else {
        cursor?.classList.remove("grow");
        document.querySelector(".dot")?.classList.remove("removeDot");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div id="cursor" className="cursor max-sm:hidden">
      <div className="rings">
        <div></div>
      </div>
      <div className="rings">
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Cursor;
