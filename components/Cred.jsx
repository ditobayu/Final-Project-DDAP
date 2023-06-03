"use client";

import React, { useEffect, useState } from "react";

import { signIn, getProviders } from "next-auth/react";
import Image from "next/image";
import google from "@assets/google-color-svgrepo-com.svg";

const Cred = () => {
  const [providers, setProviders] = useState();
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  console.log(providers);
  return (
    <div className="flex flex-col ">
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className="flex px-8 py-2 hover:bg-slate-200 duration-200 items-center flex-row border-2 border-slate-400 rounded-full gap-4"
          >
            <Image
              // src={"/@assets/google-color-svgrepo-com"}
              src={google}
              alt="google"
              height={16}
              width={16}
            />
            Continue with Google
          </button>
        ))}
    </div>
  );
};

export default Cred;
