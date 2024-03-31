"use client";
import React from "react";
import { Reveal } from "./_animation/Reveal";
import { PiQuotes } from "react-icons/pi";

interface Testi {
  name: string;
  image: string;
  quote: string;
  role: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  IconColor: string;
}
const testimonials: Testi[] = [
  {
    name: "Ray",
    image: "testMan.png",
    quote:
      "This was an elite experience for all the quality you would look for in a timely professional and exceptional artist. I highly recommend! I look forward to working together in the future.",
    role: "Upwork Client",
    backgroundColor: "bg-white",
    borderColor: "border-gray-950",
    textColor: "text-gray-600",
    IconColor: "bg-black text-white",
  },
  {
    name: "Nikki",
    image: "testGirl.png",
    quote:
      "He did an excellent job. Great communication. Very quick and thoughtful work!",
    role: "Upwork Client",
    backgroundColor: "bg-black",
    borderColor: "border-gray-800",
    textColor: "text-gray-100",
    IconColor: "bg-white text-black",
  },
  {
    name: "Remros",
    image: "testMan.png",
    quote:
      "Another successful project with Ehtisham, highly talented and recommended!",
    role: "Upwork Client",
    backgroundColor: "bg-white",
    borderColor: "border-gray-950",
    textColor: "text-gray-600",
    IconColor: "bg-black text-white",
  },
];

function MyTestimonials() {
  const getTesti = testimonials.map((testimonial: Testi, index: number) => (
    <div key={index}>
      <Reveal>
        <div className="justify-center items-center flex">
          <div
            className={`flex flex-col justify-center items-center gap-6 w-[90%] ${testimonial.backgroundColor} rounded-2xl px-12 py-8 max-sm:px-8 max-sm:py-6 border ${testimonial.borderColor}`}
          >
            <div className="w-24 h-24 relative">
              <img
                src={testimonial.image}
                className="w-full h-full rounded-full object-cover border border-gray-950"
                alt=""
              />
              <PiQuotes
                className={`text-4xl ${testimonial.IconColor}  rounded-full p-1 absolute -bottom-3 z-20 -right-2`}
              />
            </div>
            <p
              className={`relative text-base ${testimonial.textColor} text-center line-clamp-3`}
            >
              {testimonial.quote}
            </p>
            <hr className="p-[1.5px] bg-black w-[50%] rounded-md" />
            <h5 className={`text-base font-semibold ${testimonial.textColor}`}>
              {testimonial.name}
            </h5>
            <h5 className={`text-sm font-semibold ${testimonial.textColor}`}>
              {testimonial.role}
            </h5>
          </div>
        </div>
      </Reveal>{" "}
    </div>
  ));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full  mt-20 px-10 py-8  max-sm:px-4 max-sm:py-8 max-xxxxs:py-3 max-xxxxs:mt-10  relative ">
        <Reveal delayTime={0.8} width="100%">
          <h1 className="text-5xl max-lg:text-3xl mb-12 max-lg:mb-4 max-xxxxs:text-center z-30 text-white text-center">
            My <span className="font-extrabold">Testimonials</span>
          </h1>
        </Reveal>
        <div className="flex justify-center items-center max-md:mt-12">
          <div className="grid grid-cols-3  items-center max-md:grid-cols-2 max-sm:grid-cols-1  justify-center gap-7">
            {getTesti}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTestimonials;
