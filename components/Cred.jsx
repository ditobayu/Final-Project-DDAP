"use client";

import React from "react";

import { signIn, getProviders } from "next-auth/react";

const Cred = async () => {
  const providers = await getProviders();
  console.log(providers);
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className="black_btn"
          >
            Sign in
          </button>
        ))}
    </div>
  );
};

export default Cred;
