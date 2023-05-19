"use client";

import React from "react";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex flex-row justify-between items-center absolute px-8 h-20 w-full z-10">
      <div className="flex flex-row gap-4 items-center">
        <button className="h-12 w-12 p-2">
          <svg
            fill="currentColor"
            className="w-full h-full"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {/* <button className="h-8 w-8 p-2">
          <svg
            fill="currentColor"
            className="w-full h-full"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button> */}
        {/* <h3>Course</h3> */}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h3>Halo, Dito Bayu</h3>
        <Image
          src={"/../public/html5.png"}
          width={60}
          height={60}
          alt="Course Item"
        />
      </div>
    </div>
    // <div>
    //   <Button
    //     className="greenButton rounded-full"
    //     callback={() => alert("asdasd")}
    //   >
    //     <p>asdsa</p>
    //   </Button>
    //   <CourseItem title="HTML" icon="/../public/html5.png" />
    // </div>
  );
};

export default Topbar;
