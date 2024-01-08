import React, { useEffect, useRef, useState } from "react";
import * as Icons from "react-icons/si";
import { motion } from "framer-motion";
import Datas from "../Data";
import { Reveal } from "../_animation/Reveal";
function Skills() {
  const [data, setData] = useState(Datas.data);
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    if (IconComponent) {
      return <IconComponent />;
    }
    return null;
  };

  const createElement = data.map((item) => {
    return (
      <motion.div
        initial="initial"
        key={item.id}
        whileHover="whileHover"
        className=" relative flex items-center w-1/5  max-md:w-1/4 max-sm:w-full  justify-center  select-none flex-col gap-6 text-xl bg-black border p-6 border-white hover:bg-white text-white hover:text-black"
      >
        <motion.span className="text-5xl max-sm:text-3xl">
          <Reveal delayTime={0.5}>{renderIcon(item.iconName)}</Reveal>
        </motion.span>
        <motion.span className="max-sm:text-xs select-none">
          <Reveal delayTime={0.5}>{item.name}</Reveal>
        </motion.span>
        <motion.div
          style={{
            translateX: "0%",
            translateY: "0%",
          }}
          variants={{
            initial: { scale: 0 },
            whileHover: { scale: 1.05 },
          }}
          transition={{ type: "spring", duration: 1.6, bounce: 0.5 }}
          className="absolute z-30 h-64 w-full p-2 overflow-hidden rounded-lg  select-none bg-white border-dashed border-2 border-slate-700 text-black"
        >
          <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
            <p className="text-sm">{item.history}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  });
  return (
    <div className="h-full flex flex-wrap justify-center max-sm:grid max-sm:grid-cols-2 gap-10 px-14 max-md:px-3   w-full ">
      {createElement}
    </div>
  );
}

export default Skills;
