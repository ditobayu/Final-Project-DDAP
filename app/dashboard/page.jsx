import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Image from "next/image";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-row h-screen pl-28 pt-20 pb-12">
      <div className="flex flex-col w-7/12 gap-8 justify-between">
        <div className="flex flex-row gap-8">
          <Image
            className="border-4 rounded-lg border-slate-600"
            src={session.user.image}
            alt="profile"
            height={150}
            width={150}
          />
          <div className="flex flex-col">
            <h3>{session.user.name}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <svg
              fill="white"
              className="w-20 h-20 bg-slate-800 rounded-lg py-1 px-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <div className="flex flex-col">
              <h2 className="text-2xl">14</h2>
              <h2 className="">lesson learned</h2>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <svg
              fill="white"
              className="w-20 h-20 bg-slate-800 rounded-lg py-1 px-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <div className="flex flex-col">
              <h2 className="text-2xl">14</h2>
              <h2 className="">lesson learned</h2>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <svg
              fill="white"
              className="w-20 h-20 bg-slate-800 rounded-lg py-1 px-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <div className="flex flex-col">
              <h2 className="text-2xl">14</h2>
              <h2 className="">lesson learned</h2>
            </div>
          </div>
        </div>
        <Link
          className="bg-slate-800 text-slate-100 p-8 rounded-3xl gap-8 h-1/2"
          href={"/dashboard/courses"}
        >
          <h2 className="text-3xl font-semibold">Courses</h2>
          <h3 className="text-xl">Explore some materials you need.</h3>
        </Link>
      </div>
      <div className="flex flex-col w-5/12 gap-8 px-8">
        <Link
          className="bg-blue-500 text-slate-100 p-8 rounded-3xl gap-8 flex flex-1"
          href={"/dashboard/exercise"}
        >
          <h2 className="text-3xl font-semibold">Exercise</h2>
          <h3 className="text-xl">Some questions to improve your skill.</h3>
        </Link>
        <Link
          className="bg-green-500 text-slate-100 p-8 rounded-3xl gap-8 h-1/2"
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
