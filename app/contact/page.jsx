import Nav from "@components/Nav";
import React from "react";

export const metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <div>
      <Nav />
      <div className="pt-24 flex flex-row px-8 gap-32 font-sans">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold">Talk to our team</h1><br></br>
          <h3 className="text-3xl font-normal">Our team would love to hear from you!</h3><br></br>
          <div className="flex flex-col">
            <div className="flex flex-row gap-8 text-xl">
              <div className="w-1/2 flex flex-col">
                <label for="firstName" className="font-semibold">First name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First name" className="p-2 border-solids border-2 border-slate-400 rounded-lg"></input>
              </div>

              <div className="w-1/2 flex flex-col">
              <label for="lastName" className="font-semibold">Last name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last name" className="p-2 border-solids border-2 border-slate-400 rounded-lg"></input>
              </div>
            </div>

            <br></br>

            <div className="flex flex-col text-xl">
              <label for="email" className="font-semibold">E-mail</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" className="p-2 border-solids border-2 border-slate-400 rounded-lg"></input>
            </div>

            <br></br>

            <div className="flex flex-col text-xl">
              <label for="message" className="font-semibold">Message</label>
              <input type="text" id="message" name="message" placeholder="Type your message here..." className="p-2 border-solids border-2 border-slate-400 rounded-lg pb-32"></input>
            </div>

            
            <button className="bg-[#04b500] text-white text-3xl my-4 py-4 shadow-[5px_6px_0px_#039300] rounded-xl hover:w-transition duration-1000 ease-in-out">Send message</button>

          </div>
        </div>

        <div className="w-1/2 px-12 text-white text-xl">
          <div className="bg-gradient-to-b from-[#0266c2] to-[#93c1eb] w-full h-full rounded-2xl p-12 flex flex-col gap-2 shadow-[9px_10px_0px_#b2b2b2]">
            <h1 className="text-3xl font-bold">Get in touch</h1><br></br>
            <p className="font-semibold">Contact us</p>
            <p className="font-light">Our friendly team is here to help</p>
            <p className="font-semibold">ambatudooit@gmail.com</p>
            <br></br>
            <p className="font-semibold">Call us</p>
            <p className="font-light">Everyday from 8am to 5pm</p>
            <p className="font-semibold">+62-8123-4567-890</p>
            <br></br>
            <p className="font-semibold">Social media</p>
            <div className="flex flex-row w-full bg-slate-400 h-12">

            </div><br></br>
            <button className="w-1/2 text-xl font-semibold bg-white text-[#1d77c8] py-2 shadow-[3px_4px_10px_#0065c1] rounded-[50px]">Contact now</button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
