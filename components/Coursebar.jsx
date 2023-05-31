import React from "react";
import Course from "@models/Course";

const Coursebar = async ({ courseId }) => {
  const course = await Course.find({ _id: courseId });
  return (
    <div className="flex flex-col">
      <h3>Coursebar</h3>
      {course[0]?.data?.map((val) => (
        <h4>{val.title}</h4>
      ))}
    </div>
  );
};

export default Coursebar;
