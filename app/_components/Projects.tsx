import React from "react";

interface dataType {
  project_data: [
    {
      name: string;
      id: number;
      url: string;
      img_url: string;
      description: string;
    }
  ];
}

const data: dataType = {
  project_data: [
    {
      name: "Electronics Gala",
      id: 1,
      url: "",
      img_url: "/Project-1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo neque consequatur aliquid amet. Quibusdam vero, officia doloremque deleniti aliquam, tempora fuga vitae quisquam, consectetur dolores sit explicabo nihil iusto.",
    },
    {
      name: "Electronics Gala",
      id: 2,
      url: "",
      img_url: "/Project-1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo neque consequatur aliquid amet. Quibusdam vero, officia doloremque deleniti aliquam, tempora fuga vitae quisquam, consectetur dolores sit explicabo nihil iusto.",
    },
    {
      name: "Electronics Gala",
      id: 3,
      url: "",
      img_url: "/Project-1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo neque consequatur aliquid amet. Quibusdam vero, officia doloremque deleniti aliquam, tempora fuga vitae quisquam, consectetur dolores sit explicabo nihil iusto.",
    },
  ],
};

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-20 mt-16 bg-black text-white">
      <h1 className="text-5xl max-lg:text-3xl my-16  max-lg:mb-4 max-xxxxs:text-center z-30">
        My <span className="font-extrabold">Projects</span>
      </h1>
    </div>
  );
}

export default Projects;
