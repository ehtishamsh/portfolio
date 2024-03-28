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
              <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-white rounded-2xl px-14 py-12 ">
                <div className="w-24 h-24  relative">
                  <img
                    src="duck.jpg"
                    className=" w-full h-full  rounded-full object-cover border border-gray-950"
                    alt=""
                  />
                  <PiQuotes className="text-2xl absolute -bottom-1 z-20 right-0" />
                </div>
                <p className="relative text-base text-gray-600 text-center">
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
            <div className="  justify-center items-center flex">
              <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-white rounded-2xl px-14 py-12 ">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-400">
                  <img
                    src="duck.jpg"
                    className=" w-full h-full object-cover border border-gray-950"
                    alt=""
                  />
                </div>
                <p className="text-base text-gray-600 text-center">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <hr className="p-[1.5px] bg-black w-[50%] rounded-md" />
                <h5 className="text-base font-semibold text-gray-600">
                  Afn Alen
                </h5>

                <h5 className="text-sm font-semibold text-gray-600">
                  Upwork Client
                </h5>
              </div>
            </div>
            <div className="  justify-center items-center flex">
              <div className="flex flex-col justify-center items-center gap-6 w-[90%] bg-white rounded-2xl px-14 py-12 ">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-400">
                  <img
                    src="duck.jpg"
                    className=" w-full h-full object-cover border border-gray-950"
                    alt=""
                  />
                </div>
                <p className="text-base text-gray-600 text-center">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <hr className="p-[1.5px] bg-black w-[50%] rounded-md" />
                <h5 className="text-base font-semibold text-gray-600">
                  Ehtisham Shah
                </h5>

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
