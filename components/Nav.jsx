// "use client";

import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Image from "next/image";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// import { redirect } from "next/navigation";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  // const { data: session } = useSession();

  // const [providers, setProviders] = useState(null);
  // const [toggleDropdown, setToggleDropdown] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);

  return (
    <nav className="flex flex-row items-center fixed top-0 w-full bg-white justify-between py-4 px-8">
      <h1 className="text-3xl font-semibold">
        <span className="text-green-400">Doo</span>-
        <span className="text-blue-400">IT</span>
      </h1>
      <div className="flex flex-row items-center gap-8">
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </div>
      <div className="flex flex-row items-center gap-4">
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
    </nav>
    // <nav className="flex-between w-full mb-16 pt-3">
    //   <Link href="/" className="flex gap-2 flex-center">
    //     <Image
    //       src="/assets/images/logo.svg"
    //       alt="logo"
    //       width={30}
    //       height={30}
    //       className="object-contain"
    //     />
    //     <p className="logo_text">Promptopia</p>
    //   </Link>
    //   <Link href={"/dashboard/courses"}>course</Link>

    //   {/* Desktop Navigation */}
    //   <div className="sm:flex hidden">
    //     {session?.user ? (
    //       <div className="flex gap-3 md:gap-5">
    //         <Link href="/create-prompt" className="black_btn">
    //           Create Post
    //         </Link>

    //         <button type="button" onClick={signOut} className="outline_btn">
    //           Sign Out
    //         </button>

    //         <Link href="/profile">
    //           <Image
    //             src={session?.user.image}
    //             width={37}
    //             height={37}
    //             className="rounded-full"
    //             alt="profile"
    //           />
    //         </Link>
    //       </div>
    //     ) : (
    //       <>
    //         {providers &&
    //           Object.values(providers).map((provider) => (
    //             <button
    //               type="button"
    //               key={provider.name}
    //               onClick={() => {
    //                 signIn(provider.id);
    //               }}
    //               className="black_btn"
    //             >
    //               Sign in
    //             </button>
    //           ))}
    //       </>
    //     )}
    //   </div>
    // </nav>
  );
};

export default Nav;
