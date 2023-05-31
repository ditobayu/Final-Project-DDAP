"use client";
import Image from "next/image";
import React from "react";
// import React from "";

const CourseItem = ({ title, icon, callback, className }) => {
  return (
    <button
      className={`flex flex-col justify-between ${className} border-[#0065C1]`}
      onClick={() => callback()}
    >
      <h3 className="">{title}</h3>
      <div className="flex flex-row justify-end w-full">
        <Image src={icon} width={60} height={60} alt="Course Item" />
      </div>
    </button>
  );
};

export default CourseItem;
