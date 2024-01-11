import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

export const RevealSkills = ({
  children,
  delayTime = 0.25,
}: {
  children: React.ReactNode;
  delayTime?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const mediaControlls = useAnimation();
  useEffect(() => {
    if (inView) {
      mediaControlls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref} className="w-1/5  max-md:w-1/4 max-sm:w-full  select-none">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mediaControlls}
        transition={{ delay: delayTime, ease: "easeInOut", duration: 0.5 }}
        className="w-full h-full flex items-center justify-center relative text-xl bg-black border border-white hover:bg-white text-white hover:text-black"
      >
        {children}
      </motion.div>
    </div>
  );
};
