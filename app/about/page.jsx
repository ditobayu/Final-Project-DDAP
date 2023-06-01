import Nav from "@components/Nav";
import React from "react";

export const metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <Nav />
      <div className="pt-24 flex flex-col px-10">
        <div className="w-full h-28 bg-slate-500 rounded-xl">
          <img src=""></img>
        </div>
        <div className="w-full h-screen mt-12 flex flex-row gap-10">
          <div className="w-1/2 bg-slate-300 flex flex-col gap-4">
            <div className="text-center bg-[#d9d9d9] py-6 rounded-2xl border border-black shadow-[7px_8px_0px_rgba(168,168,168,255)]">
              <h1 className="text-5xl font-bold">About Us</h1>
            </div>
            <div className="bg-[#d9d9d9] rounded-2xl border border-black p-2 font-sans text-2xl">
              <p>This programming language learning website was founded with the goal of providing quality content and free access to anyone interested in learning programming languages. <br></br><br></br>
                We are committed to continually improving and updating our content to remain relevant to the evolving technology and the needs of course participants. We also encourage course participants to collaborate and interact with people or other participants in discussion forum. <br></br><br></br>
                Join us in the exciting world of programming and unlock your potential for success. Let’s embark on this learning journey together!
              </p>
            </div>
            <div className="text-center bg-[#d9d9d9] py-6 rounded-2xl border border-black shadow-[7px_8px_0px_rgba(168,168,168,255)] mt-8">
              <h1 className="text-5xl font-bold">Our Vision</h1>
            </div>
            <div className="bg-[#d9d9d9] rounded-2xl border border-black p-2 font-sans text-2xl">
              <p>- To assist community in learning programming languages  effectively and enjoyably.</p>
              <p>- Becoming a trusted leading source of online education in programming</p>
            </div>
          </div>

          <div className="w-1/2 bg-slate-300 flex flex-col gap-4">
            <div className="text-center bg-[#d9d9d9] py-6 rounded-2xl border border-black shadow-[7px_8px_0px_rgba(168,168,168,255)]">
              <h1 className="text-5xl font-bold">Our Story</h1>
            </div>
            <div className="bg-[#d9d9d9] rounded-2xl border border-black p-2 font-sans text-2xl">
              <p>This programming language learning website began with our passion for providing accessible and high-quality education in programming. As a team of experienced software developers, we recognized that learning programming could be a daunting challenge of many people.<br></br><br></br>
              We embarked on this journey by creating a series of tutorials and articles on programming languages that we shared freely on our blog. The positive response from readers inspired us to go further and create a comprehensive online learning platform.
              </p>
            </div>
          </div>
        </div> 
       
      </div>
    </div>
  );
};

export default page;
