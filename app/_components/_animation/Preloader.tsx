"use client";
import React from "react";
import { motion } from "framer-motion";
import Hi from "../utils/Animation - 1705029454985.json";
import Lottie from "lottie-react";
const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: "-100vh" }}
      exit={{ display: "none", y: "-100vh" }}
      transition={{ duration: 2.5, delay: 3 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99999] bg-black text-white"
    >
      <Lottie animationData={Hi} loop={false} />
    </motion.div>
  );
};

export default Preloader;
