import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Image from "next/image";
import Course from "@models/Course";
import CourseItem from "@components/CourseItem";

export const metadata = {
  title: "Profile",
  description: "Generated by Pemuja GKM",
};

const page = async () => {
  const session = await getServerSession(authOptions);
  const courses = await Course.find();
  console.log(courses[1].image);
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 pb-20 md:pb-0 md:h-screen sm:pl-28 pt-20 ">
      <div className="flex flex-col w-full md:w-4/12 gap-4 px-8 md:px-0">
        <div className="flex flex-row gap-8 items-center">
          <Image
            className="border-4 rounded-lg border-slate-600"
            src={session.user.image}
            alt="profile"
            height={100}
            width={100}
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{session.user.name}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 border-2 border-slate-400 rounded-lg flex-1">
          <h3>Your Name</h3>
          <h3 className="flex py-2 px-4 rounded-lg border-2 border-slate-400">
            {session.user.name}
          </h3>
          <h3 className="text-ellipsis">Email</h3>
          <h3 className="flex py-2 px-4 rounded-lg border-2 border-slate-400">
            {session.user.email}
          </h3>
          <h3>Phone Number</h3>
          <h3 className="flex py-2 px-4 rounded-lg border-2 border-slate-400">
            {session.user.name}
          </h3>
        </div>
      </div>
      <div className="flex flex-col px-8 w-full md:w-8/12 gap-4">
        <h2 className="font-semibold text-3xl">Courses</h2>
        <div className="flex flex-1 flex-col p-4 border-4 rounded-lg gap-4 border-slate-400">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            Finished
            <span className="bg-green-400 text-slate-100 p-1 flex items-center justify-center text-lg h-8 w-8 rounded-lg">
              7
            </span>
          </h3>
          <div className="flex flex-row overflow-y-scroll items-center gap-4">
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
        </div>
        <div className="flex flex-1 flex-col p-4 border-4 rounded-lg gap-4 border-slate-400">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            Unfinished
            <span className="bg-slate-600 text-slate-100 p-1 flex items-center justify-center text-lg h-8 w-8 rounded-lg">
              7
            </span>
          </h3>

          <div className="flex flex-row overflow-y-scroll items-center gap-4">
            {courses.map((val) => (
              <div>
                <Link
                  href={`/dashboard/courses/${val._id}`}
                  key={val._id}
                  className={`flex w-32 h-32 flex-col items-center relative border sm:border-4 shadow-lg hover:bg-blue-100 duration-200 hover:scale-105 rounded-lg border-[#0065C1]`}
                >
                  <Image
                    src={val?.image}
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
        </div>
      </div>
    </div>
  );
};

export default page;
