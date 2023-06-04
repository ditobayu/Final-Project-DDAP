"use client";

import Coursebar from "@components/Coursebar";
import React from "react";
import { useState, useEffect } from "react";

const page = (props) => {
  const [course, setCourse] = useState([]);
  const [activeVideo, setActiveVideo] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [indexVideo, setIndexVideo] = useState(1);
  useEffect(() => {
    fetch("/api/course/choosed", {
      headers: {
        id: props.params.id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setActiveVideo(data?.data[0].video);
        setTitle(data?.data[0].title);
        setDesc(data?.data[0].desc);
        // setIndexVideo((prev) => prev + 1);
        console.log(data);
      });
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen sm:pl-28 pt-20 pb-12">
      <div className="flex flex-col w-full md:w-4/12 lg:w-3/12 py-2 px-8 md:px-2 lg:px-8 overflow-y-scroll h-full border-4 border-slate-200 rounded-md">
        <h3 className="font-semibold my-2 text-lg">{course?.title}</h3>
        <div className="flex flex-col gap-4">
          {course?.data?.map((val, index) => (
            <button
              className="bg-slate-200 rounded-xl px-4 py-2 shadow-lg hover:scale-105 duration-200"
              key={index}
              onClick={() => {
                setActiveVideo(val.video);
                setTitle(val.title);
                setDesc(val.desc);
                setIndexVideo(index + 1);
              }}
            >
              <h4>
                {val.title} ({index + 1} / {course?.data?.length})
              </h4>
              <h4>{val.title}</h4>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-9/12 px-2 sm:px-8 gap-8">
        <iframe
          src={activeVideo}
          className="w-full flex h-48 sm:h-72 md:h-96 lg:h-[80%] rounded-2xl"
          title="YouTube video player"
          // frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowFullScreen="true"
          allowFullScreen={true}
        ></iframe>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex flex-row items-center gap-4">
            <button className="blackButton py-2 px-2 text-sm sm:px-8 rounded-full duration-200 text-white">
              Discussion
            </button>
            <button
              onClick={() => {
                setIndexVideo((prev) =>
                  prev >= course?.data.length - 1 ? 0 : prev + 1
                );
                setActiveVideo(course?.data[indexVideo].video);
                setTitle(course?.data[indexVideo].title);
                setDesc(course?.data[indexVideo].desc);
              }}
              className="greenButton py-2 px-2 text-sm sm:px-8 rounded-full duration-200 text-white"
            >
              Next
            </button>
          </div>
        </div>
        <h3>{desc}</h3>
      </div>
    </div>
  );
};

export default page;
