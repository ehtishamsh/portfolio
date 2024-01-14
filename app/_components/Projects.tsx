import React from "react";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-20 mt-16 bg-black text-white">
      <h1 className="text-5xl max-lg:text-3xl my-16  max-lg:mb-4 max-xxxxs:text-center z-30">
        My <span className="font-extrabold">Projects</span>
      </h1>
      <div className="w-full flex justify-center items-center gap-6">
        <div className="w-1/2">
          <img src="projects.webp" alt="" />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <h1 className="text-4xl font-bold">01</h1>
          <h1 className="text-3xl font-bold">Crypto Screener Application</h1>
          <p className="text-base text-gray-700">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-6">
        <div className="w-1/2">
          <img src="projects.webp" alt="" />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <h1 className="text-4xl font-bold">01</h1>
          <h1 className="text-3xl font-bold">Crypto Screener Application</h1>
          <p className="text-base text-gray-700">
            {`      I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to specimen book.`}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-6">
        <div className="w-1/2">
          <img src="projects.webp" alt="" />
        </div>
        <div className="flex flex-col gap-3 w-1/2">
          <h1 className="text-4xl font-bold">01</h1>
          <h1 className="text-3xl font-bold">Crypto Screener Application</h1>
          <p className="text-base text-gray-700">
            {`   I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
