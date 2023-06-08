import Nav from "@components/Nav";
import React from "react";
import about from "@assets/About1.png";
import Image from "next/image";
import gear from "@assets/gear.png";
import abstract from "@assets/abstract.png";

export const metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col px-4 pt-20 md:pt-0 sm:px-12 md:px-32">
        <div className="md:h-screen flex items-center">
          <Image
            src={about}
            alt="aboutImage"
            height={5000}
            width={5000}
            className="w-full shadow-xl"
          />
        </div>
        <div className="w-full mt-8 flex flex-col sm:flex-row gap-8 md:gap-20">
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <h1 className="text-xl sm:text-4xl font-bold w-full text-center">
              About Us
            </h1>
            <div className="text-md p-4 font-sans">
              <p>
                This programming language learning website was founded with the
                goal of providing quality content and free access to anyone
                interested in learning programming languages. <br></br>
                <br></br>
                We are committed to continually improving and updating our
                content to remain relevant to the evolving technology and the
                needs of course participants. We also encourage course
                participants to collaborate and interact with people or other
                participants in discussion forum. <br></br>
                <br></br>
                Join us in the exciting world of programming and unlock your
                potential for success. Let’s embark on this learning journey
                together!
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <h1 className="text-xl sm:text-4xl font-bold w-full text-center">
              Our Story
            </h1>
            <div className="text-md md:text-md p-4 font-sans">
              <p>
                This programming language learning website began with our
                passion for providing accessible and high-quality education in
                programming. As a team of experienced software developers, we
                recognized that learning programming could be a daunting
                challenge of many people.<br></br>
                <br></br>
                We embarked on this journey by creating a series of tutorials
                and articles on programming languages that we shared freely on
                our blog. The positive response from readers inspired us to go
                further and create a comprehensive online learning platform.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full items-center flex flex-col-reverse sm:flex-row py-20 gap-8 md:gap-20">
          <div className="flex flex-col w-full">
            <h1 className="text-center py-4 text-xl sm:text-4xl font-bold">
              Our Vision
            </h1>
            <div className=" p-4 font-sans text-md flex flex-col gap-2">
              <p>
                To assist community in learning programming languages
                effectively and enjoyably.
              </p>
              <p>
                Becoming a trusted leading source of online education in
                programming
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center h-1/2 shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl">
            <Image
              src={gear}
              alt="landingIMG"
              height={1000}
              width={1000}
              className="w-[50dvh] h-[50dvh]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row-reverse py-20 gap-8 md:gap-20">
          <div className="flex flex-col w-full">
            <h1 className="text-center py-4 text-xl sm:text-4xl font-bold">
              Our mission
            </h1>
            <div className=" p-4 font-sans text-md flex flex-col gap-4">
              <p>
                Provide high-quality learning content on programming languages
                that is easily understandable by beginners and experienced
                individuals alike.
              </p>
              <p>
                Deliver an interactive learning experience through tutorials,
                exercises, and practical projects that help course participants
                master programming languages.
              </p>
              <p>
                Establish an active discussion forum and learning community for
                sharing knowledge and solving programming-related problems.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center relative shadow-xl bg-gradient-to-r from-orange-300 from-10% via-red-300 via-30% to-pink-500 to-90% rounded-xl">
            <Image
              src={abstract}
              alt="landingIMG"
              height={1000}
              width={1000}
              className="w-[50dvh] h-[80dvh] relative bottom-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
