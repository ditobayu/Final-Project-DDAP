"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex flex-row items-center fixed top-0 w-full bg-white justify-between py-4 px-8">
      <h1 className="text-3xl font-semibold">
        <span className="text-green-400">Doo</span>-
        <span className="text-blue-400">IT</span>
      </h1>
      <div className="hidden sm:flex flex-row items-center gap-8">
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </div>
      <div className="hidden sm:flex flex-row items-center gap-4">
        {session ? (
          <>
            <h3>{session.user.name}</h3>
            <Image
              className="rounded-full"
              src={session.user.image}
              alt="profile"
              height={48}
              width={48}
            />
          </>
        ) : (
          <>
            <Link className="bg-slate-200 rounded-lg py-2 px-4" href={"/login"}>
              Login
            </Link>
            <Link
              className="bg-slate-800 text-slate-100 rounded-lg py-2 px-4"
              href={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </div>
      <button
        className="flex sm:hidden"
        onClick={() => setBurger((prev) => !prev)}
      >
        <svg
          fill="currentColor"
          class="w-12 h-12 bg-slate-200 p-2 rounded-md"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div
        className={`${
          burger ? "flex sm:hidden" : "hidden"
        } px-8 py-4 h-screen w-3/4 bg-slate-200 shadow-lg fixed right-0 top-0 flex flex-col gap-4`}
      >
        <div className="flex flex-row justify-end w-full">
          <button
            className="flex sm:hidden "
            onClick={() => setBurger((prev) => !prev)}
          >
            <svg
              fill="currentColor"
              class="w-12 h-12 bg-slate-100 p-2 rounded-md"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Link
            className="bg-slate-100 hover:bg-white duration-200 white w-full justify-center flex rounded-lg py-2 px-4"
            href={"/dashboard"}
          >
            Home
          </Link>
          <Link
            className="bg-slate-100 hover:bg-white duration-200 white w-full justify-center flex rounded-lg py-2 px-4"
            href={"/about"}
          >
            About Us
          </Link>
          <Link
            className="bg-slate-100 hover:bg-white duration-200 white w-full justify-center flex rounded-lg py-2 px-4"
            href={"/contact"}
          >
            Contact Us
          </Link>
          <div className="flex flex-row gap-4 w-full">
            <Link
              className="bg-slate-100 hover:bg-white duration-200 white w-full justify-center flex rounded-lg py-2 px-4"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="bg-slate-800 w-full justify-center flex text-slate-100 rounded-lg py-2 px-4"
              href={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
