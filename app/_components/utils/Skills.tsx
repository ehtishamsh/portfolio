import React, { useRef, useState } from "react";
import * as Icons from "react-icons/si";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Datas from "../Data";
function Skills() {
  const [data, setData] = useState(Datas.data);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = (ref.current as HTMLDivElement).getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

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
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        key={item.id}
        whileHover="whileHover"
        className=" relative flex items-center w-1/5  max-md:w-1/4 max-sm:w-1/3  justify-center flex-col gap-6 text-xl bg-black border p-6 border-white hover:bg-white text-white hover:text-black"
      >
        <motion.span className="text-5xl max-sm:text-3xl">
          {renderIcon(item.iconName)}
        </motion.span>
        <motion.span className="max-sm:text-xs">{item.name}</motion.span>
        <motion.div
          style={{
            translateX: "0%",
            translateY: "0%",
          }}
          variants={{
            initial: { scale: 0, rotate: "0deg" },
            whileHover: { scale: 1.1, rotate: "0deg" },
          }}
          transition={{ type: "spring" }}
          className="absolute z-30 h-64 w-full p-2 overflow-hidden rounded-lg bg-white border-4 border-gray-700 text-black"
        >
          <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
            <p className="text-sm">{item.history}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  });
  return (
    <div className="h-full flex flex-wrap justify-center gap-10 px-14 max-md:px-3   w-full ">
      {createElement}
    </div>
  );
}

export default Skills;
