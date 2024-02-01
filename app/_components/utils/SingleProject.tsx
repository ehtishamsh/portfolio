"use client";
import React from "react";
import { motion } from "framer-motion";

function SingleProject() {
  return (
    <motion.div className="w-full grid grid-cols-1">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <motion.div className="max-w-[580px] h-[406px] relative overflow-hidden">
            <motion.img
              src="project1.png"
              className="object-cover rounded-3xl z-10"
              alt=""
            />
          </motion.div>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non
          nemo autem officiis, atque quaerat magni aut aspernatur quibusdam quod
          numquam saepe dicta beatae consequatur inventore earum placeat fuga
          doloribus.
        </div>
      </div>
    </motion.div>
  );
}

export default SingleProject;
