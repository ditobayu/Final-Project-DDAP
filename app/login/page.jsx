"use client";

import Nav from "@/components/Nav";
import Cred from "@components/Cred";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import thumbsup from "@assets/thumbsup.png";

const page = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard");
  }
  useEffect(() => {
    if (session) {
      redirect("/dashboard");
    }
  }, [session]);
  return (
    <div className="flex">
      <Nav />
      <div className="pt-20 sm:pt-8 w-full flex flex-row h-screen">
        <div className="hidden md:flex w-1/2 items-center p-20 relative h-full">
          <Image
            src={thumbsup}
            alt="landingIMG"
            height={1000}
            width={1000}
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-8 sm:p-20 items-center">
          <div className="flex flex-col items-center w-full gap-4">
            <h3 className="text-2xl font-semibold">Welcome back!!</h3>
            <p className="text-slate-500">
              Let’s continue your learning journey
            </p>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="px-4 flex border-2 h-12 border-slate-400 rounded-lg"
                placeholder="Simonarsaprabaswara@gmail.com"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="px-4 flex border-2 h-12 border-slate-400 rounded-lg"
                placeholder="********"
              />
            </div>
            <button
              type="button"
              className="flex px-8 py-2 items-center flex-row border-2 border-slate-400 bg-slate-800 text-slate-100 rounded-full gap-4"
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-row gap-4 items-center w-full my-4">
            <div className="h-1 bg-slate-600 flex flex-1"></div>
            <h3>or</h3>
            <div className="h-1 bg-slate-600 flex flex-1"></div>
          </div>
          <Cred />
        </div>
      </div>
    </div>
  );
};

export default page;
