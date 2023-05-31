import React from "react";
import Course from "@models/Course";
import CourseItem from "@components/CourseItem";

const CourseList = async () => {
  const course = await Course.find().select("title");
  return (
    <div className="flex flex-row gap-8 ">
      {course.map((val) => (
        <CourseItem title={val.title} className="p-2 h-40 w-40 border-4" />
      ))}
    </div>
  );
};

export default CourseList;
