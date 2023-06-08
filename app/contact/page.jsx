import Nav from "@components/Nav";
import React from "react";
import facebook from "@assets/facebook-color-svgrepo-com.svg";
import twitter from "@assets/twitter-color-svgrepo-com.svg";
import whatsapp from "@assets/whatsapp-whats-app-svgrepo-com.svg";
import instagram from "@assets/instagram-1-svgrepo-com.svg";
import Image from "next/image";

export const metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <div>
      <Nav />
      <div className="md:pt-28 flex flex-col-reverse md:flex-row pt-20 p-8 md:p-20 md:h-screen gap-8 md:gap-32">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Talk to our team</h1>
          <h3 className="text-xl font-normal">
            Our team would love to hear from you!
          </h3>
          <div className="flex flex-col md:justify-between md:flex-row gap-4">
            <div className="w-full md:w-[48%] flex flex-col">
              <label for="firstName" className="font-semibold">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="px-4 py-2 border-solids border-2 border-slate-400 rounded-lg"
              ></input>
            </div>

            <div className="w-full md:w-[48%] flex flex-col">
              <label for="lastName" className="font-semibold">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="px-4 py-2 border-solids border-2 border-slate-400 rounded-lg"
              ></input>
            </div>
          </div>

          <div className="flex flex-col">
            <label for="email" className="font-semibold">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="px-4 py-2 border-solids border-2 border-slate-400 rounded-lg"
            ></input>
          </div>

          <div className="flex flex-col flex-1">
            <label for="message" className="font-semibold">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="px-4 py-2 border-solid border-2 border-slate-400 rounded-lg flex flex-1"
            ></textarea>

            <button className="greenButton text-white my-4 py-2 rounded-xl duration-200">
              Send message
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-white text-xl">
          <div className="gap-4 bg-gradient-to-b from-[#0266c2] to-[#93c1eb] w-full h-full rounded-2xl p-12 md:p-8 flex flex-col shadow-[9px_10px_0px_#b2b2b2]">
            <h1 className="text-3xl font-bold">Get in touch</h1>
            <div className="flex flex-col ">
              <p className="text-md font-semibold">Contact us</p>
              <p className="text-sm font-light">
                Our friendly team is here to help
              </p>
              <p className="text-sm font-semibold">ambatudooit@gmail.com</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-md font-semibold">Call us</p>
              <p className="text-sm font-light">Everyday from 8am to 5pm</p>
              <p className="text-sm font-semibold">+62-8123-4567-890</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-md font-semibold">Social media</p>
              <div className="flex flex-row items-center gap-4">
                <Image src={facebook} height={32} width={32} alt="facebook" />
                <Image src={instagram} height={32} width={32} alt="facebook" />
                <Image src={twitter} height={32} width={32} alt="facebook" />
                <Image src={whatsapp} height={32} width={32} alt="facebook" />
              </div>
            </div>
            <button className="text-sm px-4 w-max font-semibold bg-white text-[#1d77c8] py-2 shadow-[0px_4px_10px_#0065c1] hover:shadow-[0px_4px_30px_#0065c1] duration-200 hover:scale-105 rounded-[50px]">
              Contact now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
