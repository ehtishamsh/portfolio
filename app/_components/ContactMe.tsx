"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";

function ContactMe() {
  return (
    <div className="bg-white py-14 mt-20 max-sm:py-8 max-sm:mt-12">
      <div className=" max-w-7xl mx-auto  px-10 py-8  max-sm:px-4 max-sm:py-8 max-xxxxs:py-3   relative  ">
        <div className="grid grid-cols-2 gap-28 max-sm:gap-12 max-md:grid-cols-1 px-5">
          <div>
            <form
              action=""
              className="flex justify-center items-center gap-7 flex-col"
            >
              <input
                type="text"
                className="border-2 border-gray-800 rounded p-2 text-sm w-full "
                placeholder="Name"
              />
              <input
                type="text"
                className="border-2 border-gray-800 rounded p-2 text-sm w-full "
                placeholder="Email"
              />
              <textarea
                rows={5}
                className="border-2 border-gray-800 rounded p-2 text-sm w-full "
                placeholder="How can I help you?"
              />
              <button className="border-2 border-gray-800 rounded-md p-2 text-sm w-full  bg-black text-white">
                Get In Touch
              </button>
            </form>
          </div>
          <div className="flex justify-center w-full flex-col max-sm:-order-1">
            <h1 className="text-5xl max-sm:text-4xl font-bold mb-6">
              Let's <span className="outline-title">talk</span> for <br />
              Something special
            </h1>
            <p className="text-base text-gray-600 max-sm:text-sm">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
