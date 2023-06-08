import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Image from "next/image";
import cfinish from "@assets/cfinish.svg";
import Component4 from "@assets/Component4.svg";
import Component6 from "@assets/Component6.svg";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col sm:flex-row h-screen sm:pl-28 pt-20 pb-12 gap-4 sm:gap-0">
      <div className="flex flex-col sm:px-0 px-4 sm:w-7/12 gap-4 sm:gap-8 justify-between">
        <div className="flex flex-row gap-8">
          <Image
            className="border-4 rounded-lg border-slate-600"
            src={session.user.image}
            alt="profile"
            height={150}
            width={150}
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-3xl">{session.user.name}</h3>
            <h3 className="text-slate-500 text-sm">Beginner Level</h3>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center justify-between">
          <Link
            href={"/dashboard/courses"}
            className="flex flex-row items-center gap-4"
          >
            <Image
              src={Component4}
              alt="Component4"
              height={100}
              width={100}
              className="w-20 h-20 hover:scale-95 duration-200"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">0</h2>
              <h2 className="">lesson learned</h2>
            </div>
          </Link>
          <Link
            href={"/dashboard/courses"}
            className="flex flex-row items-center gap-4"
          >
            <Image
              src={cfinish}
              alt="cfinish"
              height={100}
              width={100}
              className="w-20 h-20 hover:scale-95 duration-200"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">0</h2>
              <h2 className="">Course Finished</h2>
            </div>
          </Link>
          <Link
            href={"/dashboard/courses"}
            className="flex flex-row items-center gap-4"
          >
            <Image
              src={Component6}
              alt="Component6"
              height={100}
              width={100}
              className="w-20 h-20 hover:scale-95 duration-200"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">0%</h2>
              <h2 className="">Exercise Done</h2>
            </div>
          </Link>
        </div>
        <Link
          className="bg-slate-800  text-slate-100 hover:scale-105 duration-200 hover:z-50 shadow-sm hover:shadow-slate-500 p-8 rounded-3xl gap-8 h-1/2"
          href={"/dashboard/courses"}
        >
          <h2 className="text-3xl font-semibold">Courses</h2>
          <h3 className="text-xl">Explore some materials you need.</h3>
        </Link>
      </div>
      <div className="flex flex-col sm:w-5/12 gap-4 sm:gap-8 px-4 sm:px-8 pb-24 sm:pb-0">
        <Link
          className="bg-blue-500  text-slate-100 hover:scale-105 duration-200 hover:z-50 shadow-sm hover:shadow-blue-500 p-8 rounded-3xl flex-col flex flex-1"
          href={"/dashboard/exercise"}
        >
          <h2 className="text-3xl font-semibold">Exercise</h2>
          <h3 className="text-xl">Some questions to improve your skill.</h3>
        </Link>
        <Link
          className="bg-green-500 text-slate-100 hover:scale-105 duration-200 hover:z-50 shadow-sm hover:shadow-green-500 p-8 rounded-3xl gap-8 h-1/2"
          href={"/dashboard/forum"}
        >
          <h2 className="text-3xl font-semibold">Discussion Forum</h2>
          <h3 className="text-xl">Discuss to another users.</h3>
        </Link>
      </div>
    </div>
  );
};

export default page;
