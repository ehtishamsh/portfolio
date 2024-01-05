import React, { useState } from "react";

import data from "../Data";

function Skills() {
  const [dataItem, setDataItem] = useState(data.data);
  return (
    <div className="grid  grid-cols-5 gap-4 justify-between items-center">
      <div className="flex flex-col justify-center items-center p-6 bg-black border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
        Hello
      </div>
    </div>
  );
}

export default Skills;
