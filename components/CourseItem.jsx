import Image from "next/image";
import React from "react";
// import React from "";

const CourseItem = ({ title, icon, callback, style }) => {
  return (
    <button
      className="flex flex-col justify-between border-4 w-52 h-52 p-4 rounded-3xl border-[#0065C1]"
      onClick={() => callback()}
    >
      <h3 className="text-3xl font-semibold">{title}</h3>
      <div className="flex flex-row justify-end w-full">
        <Image src={icon} width={60} height={60} alt="Course Item" />
      </div>
    </button>
  );
};

export default CourseItem;
