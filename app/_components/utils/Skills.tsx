import React, { useEffect, useRef, useState } from "react";
import * as Icons from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import Datas from "../Data";
import { Reveal } from "../_animation/Reveal";
function Skills() {
  const [data, setData] = useState(Datas.data);
  const ref = useRef(null);
  const inView = useInView(ref);
  const mediaControlls = useAnimation();
  useEffect(() => {
    if (inView) {
      mediaControlls.start("visible");
    }
  }, [inView]);
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
        key={item.id}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mediaControlls}
        transition={{ delay: 1, ease: "easeInOut", duration: 0.5 }}
        className="w-1/5  max-md:w-1/4 max-sm:w-full select-none "
      >
        <motion.div
          initial="initial"
          whileHover="whileHover"
          className=" relative flex items-center w-full h-full justify-center flex-col gap-6 text-xl bg-black border p-6 border-white hover:bg-white text-white hover:text-black"
        >
          <motion.span className="text-5xl max-sm:text-3xl">
            <Reveal delayTime={1.5}>{renderIcon(item.iconName)}</Reveal>
          </motion.span>
          <motion.span className="max-sm:text-xs  select-none">
            <Reveal delayTime={1.5}>{item.name}</Reveal>
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
              <p className="text-sm max-sm:[font-size:_12px_!important]">
                {item.history}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  });
  return (
    <div
      ref={ref}
      className="h-full flex flex-wrap justify-center max-sm:grid max-sm:grid-cols-2 gap-10 px-14 max-md:px-3 max-xxxxs:gap-4   w-full "
    >
      {createElement}
    </div>
  );
}

export default Skills;
