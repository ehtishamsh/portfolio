"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import { PiQuotes } from "react-icons/pi";

function MyTestimonials() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full  mt-20 px-10 py-8  max-sm:px-4 max-sm:py-8 max-xxxxs:py-3 max-xxxxs:mt-10  relative ">
        <Reveal delayTime={0.8} width="100%">
          <h1 className="text-5xl max-lg:text-3xl mb-12 max-lg:mb-4 max-xxxxs:text-center z-30 text-white text-center">
            My <span className="font-extrabold">Testimonials</span>
          </h1>
        </Reveal>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3  items-center max-sm:grid-cols-1 justify-center gap-7">
            <div className=" justify-center items-center flex ">
              <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-white rounded-2xl px-12 py-8 ">
                <div className="w-24 h-24  relative">
                  <img
                    src="testMan.png"
                    className=" w-full h-full  rounded-full object-cover border border-gray-950"
                    alt=""
                  />
                  <PiQuotes className="text-4xl bg-black text-white rounded-full p-1 absolute -bottom-3 z-20 -right-2" />
                </div>
                <p className="relative text-base text-gray-600 text-center line-clamp-3">
                  {
                    " This was an elite experience  for all the quality you would look for in a timely professional and exceptional artist. I highly recommend! Ilook forward to working together in the future."
                  }
                </p>
                <hr className="p-[1.5px] bg-black w-[50%] rounded-md" />
                <h5 className="text-base font-semibold text-gray-600">Ray</h5>
                <h5 className="text-sm font-semibold text-gray-600">
                  Upwork Client
                </h5>
              </div>
            </div>
            <div className=" justify-center items-center flex ">
              <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-black border border-gray-800 rounded-2xl px-12 py-8 ">
                <div className="w-24 h-24  relative">
                  <img
                    src="testGirl.png"
                    className=" w-full h-full  rounded-full object-cover border-2 border-gray-100"
                    alt=""
                  />
                  <PiQuotes className="text-4xl bg-white text-black rounded-full p-1 absolute -bottom-3 z-20 -right-2" />
                </div>
                <p className="relative text-base text-gray-100 text-center line-clamp-3">
                  {
                    " He did an excellent job. Great communication. Very quick and thoughtful work!."
                  }
                </p>
                <hr className="p-[1.5px] bg-black w-[50%] rounded-md" />
                <h5 className="text-base font-semibold text-gray-100">Nikki</h5>
                <h5 className="text-sm font-semibold text-gray-100">
                  Upwork Client
                </h5>
              </div>
            </div>
            <div className=" justify-center items-center flex ">
              <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-white rounded-2xl px-12 py-8 ">
                <div className="w-24 h-24  relative">
                  <img
                    src="testMan.png"
                    className=" w-full h-full  rounded-full object-cover border border-gray-950"
                    alt=""
                  />
                  <PiQuotes className="text-4xl bg-black text-white rounded-full p-1 absolute -bottom-3 z-20 -right-2" />
                </div>
                <p className="relative text-base text-gray-200 text-center line-clamp-3">
                  {
                    " This was an elite experience  for all the quality you would look for in a timely professional and exceptional artist. I highly recommend! Ilook forward to working together in the future."
                  }
                </p>
                <hr className="p-[1.5px] bg-black w-[50%] rounded-md" />
                <h5 className="text-base font-semibold text-gray-600">Ray</h5>
                <h5 className="text-sm font-semibold text-gray-600">
                  Upwork Client
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTestimonials;
