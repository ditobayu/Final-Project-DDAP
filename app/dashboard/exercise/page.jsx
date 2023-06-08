"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CourseItem from "@components/CourseItem";
import Link from "next/link";

const page = () => {
  // const session = await getServerSession(authOptions);
  // const courses = await Course.find().select("title");
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/course")
      .then((res) => res.json())
      .then((courses) => {
        setCourses(courses);
        setCourses([...courses, ...courses]);
        console.log(courses[0]);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:h-screen sm:pl-28 pt-20 pb-12">
      <div className="flex flex-col w-full pb-40 md:w-3/12 px-4 gap-4 md:h-screen overflow-y-scroll md:fixed">
        <h3 className="font-semibold">Reccomendation</h3>
        {courses[0]?.data.map((val) => (
          <Link
            href={`/dashboard/courses/${courses[0]._id}`}
            className="border-2 border-slate-600 rounded-lg flex justify-center h-48 sm:h-64 md:h-40 w-full relative "
          >
            <Image
              src={courses[0].image}
              alt="course"
              height={100}
              width={100}
              className="w-1/2 h-1/2 mt-4"
            />

            <h3 className="absolute bottom-0 px-2 w-full bg-slate-600 text-slate-100 py-1 text-sm flex justify-center">
              {val.title}
            </h3>
          </Link>
        ))}
      </div>
      <div className="flex flex-col w-full md:w-9/12 px-4 md:px-8 md:ml-[25%]">
        <h3 className="font-semibold">Exercises</h3>
        <div className="h-48 gap-4 flex flex-row p-4 items-center noScrollbar overflow-x-scroll">
          {courses.map((val) => (
            <div>
              <Link
                href={`/dashboard/courses/${val._id}`}
                key={val._id}
                className={`flex w-32 h-32 flex-col items-center relative border sm:border-4 shadow-lg hover:bg-blue-100 duration-200 hover:scale-105 rounded-lg border-[#0065C1]`}
              >
                <Image
                  src={val?.smallImage}
                  alt="course"
                  height={50}
                  width={50}
                  className="w-1/2 h-1/2 mt-4"
                />
                <h3 className="absolute bottom-0 w-full bg-slate-600 text-slate-100 py-1 text-sm flex justify-center">
                  {val.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        <h3 className="font-semibold">Last Exercise</h3>
        <Link
          href={`/dashboard/courses/${courses[0]?._id}`}
          className="flex items-center relative justify-center hover:scale-95 w-full flex-1 border-2 border-slate-600 rounded-lg hover:bg-slate-100 duration-200"
        >
          <Image
            src={courses[0]?.image}
            alt="course"
            height={50}
            width={50}
            className="w-44 h-44 mt-4"
          />
          <h3 className="absolute bottom-0 w-full bg-slate-600 text-slate-100 py-1 text-sm flex justify-center">
            {courses[0]?.data[0]?.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default page;
