import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

export const Reveal2 = ({
  children,
  width = "fit-content",
  center = false,
}: {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  center?: boolean;
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
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mediaControlls}
        className={
          width === "fit-content"
            ? ""
            : "bg-transparent  flex justify-center items-center"
        }
        transition={{ delay: 0.25, ease: "easeInOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
