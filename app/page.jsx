import Nav from "@components/Nav";
import Image from "next/image";

import React from "react";

export const metadata = {
  title: "Doo-IT",
  description: "Generated by Pemuja GKM",
};

const Home = () => {
  return (
    <section>
      <Nav />
      <div className="flex flex-row mt-8 pt-16 px-4 gap-2 fon">
        <div className="w-1/2 flex flex-col h-screen pt-8">
          <div className="mx-8">
            <h2 className="text-4xl font-semibold">Hi, Welcome to Doo-IT E-Learning!</h2>
            <br></br>
            <h1 className="text-8xl font-extrabold">Best IT</h1>
            <br></br>
            <h1 className="text-8xl font-extrabold">Online Course</h1>
            <br></br><br></br>
            <h2 className="text-4xl font-semibold font-sans font-poppins">Doo-IT provides general knowledge to help increase your insight.</h2>
          </div>
          <div className="mt-8 mx-8">
            <button className="bg-green-500 text-white w-1/2 text-4xl py-4 shadow-[5px_6px_0px_rgba(3,147,0,255)] rounded-[50px] hover:w-transition duration-1000 ease-in-out">Get Started</button>
          </div>
        </div>
        <div className="bg-slate-400 w-1/2 h-screen">

        </div>
      </div>
    </section>
  );
};

export default Home;