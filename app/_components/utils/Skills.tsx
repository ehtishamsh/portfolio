import React, { useState } from "react";

import data from "../Data";
import * as Icons from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const renderIcon = (iconName: keyof typeof Icons) => {
    const IconComponent = Icons[iconName];
    if (IconComponent) {
      return <IconComponent />;
    }
    return null;
  };

  const [dataItem, setDataItem] = useState(data.data);
  return (
    <div className="grid relative  grid-cols-5 gap-4 px-14 justify-between items-center w-full">
      <div className="flex flex-col justify-center items-center p-6 text-xl gap-6 bg-black border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
        <div className="text-5xl">{renderIcon("SiTailwindcss")}</div>
        Next JS
      </div>
    </div>
  );
}

export default Skills;
