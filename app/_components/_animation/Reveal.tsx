import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

export const Reveal = ({
  children,
  width = "fit-content",
  center = false,
  delayTime = 0.25,
}: {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  center?: boolean;
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
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mediaControlls}
        transition={{ delay: delayTime, ease: "easeInOut", duration: 0.5 }}
        className={center ? "text-center" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};
