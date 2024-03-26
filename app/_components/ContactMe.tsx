"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";

function ContactMe() {
  return (
    <div className="w-full  mt-20 px-10 py-8  max-sm:px-4 max-sm:py-8 max-xxxxs:py-3 max-xxxxs:mt-10  relative ">
      <Reveal delayTime={0.8} width="100%">
        <h1 className="text-5xl max-lg:text-3xl mb-8 max-lg:mb-4 max-xxxxs:text-center z-30 text-white text-center">
          Contact <span className="font-extrabold">Me</span>
        </h1>
      </Reveal>
    </div>
  );
}

export default ContactMe;
