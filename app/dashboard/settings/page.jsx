"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import facebook from "@assets/facebook-color-svgrepo-com.svg";
import google from "@assets/google-color-svgrepo-com.svg";
import twitter from "@assets/twitter-color-svgrepo-com.svg";
import whatsapp from "@assets/whatsapp-whats-app-svgrepo-com.svg";
import instagram from "@assets/instagram-1-svgrepo-com.svg";
// import Link from "next/link";
// import SignOut from "@components/SignOut";
// import { signOut } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const [isDetail, setIsDetail] = useState(false);
  console.log(session);
  const [activeSection, setActiveSection] = useState("account");
  return (
    <div className="flex flex-col md:flex-row h-screen sm:pl-28 pt-20 pb-12 gap-4 md:gap-0">
      <div
        className={`${
          isDetail ? "hidden md:flex" : "flex"
        } flex-col w-full md:w-3/12 lg:w-2/12 px-4 gap-4`}
      >
        <h2 className="text-2xl font-semibold">Settings</h2>
        <button
          onClick={() => {
            setIsDetail(true);
            setActiveSection("account");
          }}
          className="flex items-center bg-slate-200 flex-row gap-4 hover:bg-slate-300 shadow-lg duration-200 p-4 rounded-lg"
        >
          <svg fill="currentColor" className="w-6 h-6 " viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          My Account
        </button>
        <button
          onClick={() => {
            setIsDetail(true);
            setActiveSection("contact");
          }}
          className="flex items-center bg-slate-200 flex-row gap-4 hover:bg-slate-300 shadow-lg duration-200 p-4 rounded-lg"
        >
          <svg
            fill="currentColor"
            className="w-6 h-6 -rolodex"
            viewBox="0 0 16 16"
          >
            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
          </svg>
          Contacts
        </button>
        <button
          onClick={() => {
            setIsDetail(true);
            setActiveSection("other");
          }}
          className="flex items-center bg-slate-200 flex-row gap-4 hover:bg-slate-300 shadow-lg duration-200 p-4 rounded-lg"
        >
          <svg
            fill="currentColor"
            className="w-6 h-6 -dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          Others
        </button>
        <button
          onClick={() => signOut()}
          className="flex items-center bg-slate-200 flex-row gap-4 hover:bg-slate-300 shadow-lg duration-200 p-4 rounded-lg text-[#FF0000] "
        >
          <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
          Log Out
        </button>
      </div>
      <div className="flex flex-col w-full md:w-10/12 px-4 md:px-12 gap-4">
        <input
          type="text"
          name="search"
          className={`${
            isDetail ? "flex" : "hidden md:flex"
          } px-4 flex border-2 h-12 border-slate-400 rounded-lg`}
          placeholder="Search"
        />
        <div
          className={`${
            activeSection == "account"
              ? isDetail
                ? "flex"
                : "hidden md:flex"
              : "hidden"
          } flex-col gap-4`}
        >
          <div className="flex flex-row items-center gap-4">
            <button
              className="flex md:hidden rounded-full h-12 w-12 p-1 hover:bg-slate-200 items-center justify-center duration-200"
              onClick={() => setIsDetail(false)}
            >
              <svg
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <h3 className="font-semibold text-2xl">My Account</h3>
          </div>
          <div className=" bg-slate-200 rounded-xl p-4 md:p-8 gap-4 flex flex-col">
            <div className="flex flex-row items-center gap-4 px-8">
              <Image
                src={session?.user?.image}
                alt="profile"
                height={70}
                width={70}
                className="rounded-lg "
              />
              <h4 className="font-semibold">{session?.user?.name}</h4>
            </div>
            <div className="flex flex-col py-4 px-4 md:px-8 gap-4 bg-slate-100 rounded-xl">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-semibold">Username</h3>
                  <h3>{session?.user?.name}</h3>
                </div>
                <button className="py-1 md:py-2 px-2 md:px-4 bg-slate-800 text-slate-100 rounded-lg">
                  Edit
                </button>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-semibold">Email</h3>
                  <h3>{session?.user?.email}</h3>
                </div>
                <button className="py-1 md:py-2 px-2 md:px-4 bg-slate-800 text-slate-100 rounded-lg">
                  Edit
                </button>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-semibold">Id</h3>
                  <h3>{session?.user?.id}</h3>
                </div>
                <button className="py-1 md:py-2 px-2 md:px-4 bg-slate-800 text-slate-100 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            activeSection == "contact"
              ? isDetail
                ? "flex"
                : "hidden md:flex"
              : "hidden"
          } flex-col gap-4`}
        >
          <div className="flex flex-row items-center gap-4">
            <button
              className="flex md:hidden rounded-full h-12 w-12 p-1 hover:bg-slate-200 items-center justify-center duration-200"
              onClick={() => setIsDetail(false)}
            >
              <svg
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <h3 className="font-semibold text-2xl">Contact</h3>
          </div>
          <div className=" bg-slate-200 rounded-xl p-8 gap-8 flex flex-col">
            <div className="flex flex-col">
              <h3 className="font-semibold">Apps & Help center</h3>
              <h3 className="">
                If you have any questions, comments, or suggestions, get in
                touch with us.
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold">CUSTOMER SERVICE</h3>
              <h3 className="">ambatu@dooit.com</h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">SOCIAL MEDIA</h3>
              <div className="flex flex-row items-center gap-4">
                <Image src={facebook} height={32} width={32} alt="facebook" />
                <Image src={instagram} height={32} width={32} alt="facebook" />
                <Image src={twitter} height={32} width={32} alt="facebook" />
                <Image src={whatsapp} height={32} width={32} alt="facebook" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            activeSection == "other"
              ? isDetail
                ? "flex"
                : "hidden md:flex"
              : "hidden"
          } flex-col gap-4`}
        >
          <div className="flex flex-row items-center gap-4">
            <button
              className="flex md:hidden rounded-full h-12 w-12 p-1 hover:bg-slate-200 items-center justify-center duration-200"
              onClick={() => setIsDetail(false)}
            >
              <svg
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <h3 className="font-semibold text-2xl">Others</h3>
          </div>
          <div className=" bg-slate-200 rounded-xl p-8 gap-4 flex flex-col">
            <h3>SELECT LANGUAGE</h3>
            <button className="px-4 py-2 rounded-lg text-white bg-slate-700 w-40 items-center">
              English
            </button>
            <button className="px-4 py-2 rounded-lg text-white bg-slate-700 w-40 items-center">
              Indonesia
            </button>
            <h3>THEME</h3>
            <div className="flex flex-row items-center gap-4">
              <button className="flex flex-col items-center justify-center gap-2">
                <div className="flex bg-white rounded-full h-16 w-16"></div>
                <h3>Default</h3>
              </button>
              <button className="flex flex-col items-center justify-center gap-2">
                <div className="flex bg-slate-800 rounded-full h-16 w-16"></div>
                <h3>Dark</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
