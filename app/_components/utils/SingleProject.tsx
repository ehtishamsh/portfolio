import React from "react";

function SingleProject() {
  return (
    <div className="w-full grid grid-cols-1">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1674289121415-ec50cba976b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
            className="object-cover max-w-[580px] max-h-[420px]"
            alt=""
          />{" "}
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non
          nemo autem officiis, atque quaerat magni aut aspernatur quibusdam quod
          numquam saepe dicta beatae consequatur inventore earum placeat fuga
          doloribus.
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
