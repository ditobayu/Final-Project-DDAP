"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
// import CourseItem from "@components/CourseItem";

function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("/api/course")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setData((prev) => [...prev, ...data]);
        setData((prev) => [...prev, ...data]);
        setData((prev) => [...prev, ...data]);
        setData((prev) => [...prev, ...data]);
        setData((prev) => [...prev, ...data]);
        setData((prev) => [...prev, ...data]);
        setTitle(data[0].title);
        setDesc(data[0].desc);
        setId(data[0]._id);
        setLoading(false);
      });
  }, []);
  const qwe = [
    { title: "asda" },
    { title: "asda" },
    { title: "asda" },
    { title: "asda" },
    { title: "asda" },
    { title: "asda" },
    { title: "asda" },
  ];

  return (
    <div className="flex flex-row h-screen pl-28 pt-20 pb-12">
      <div className="flex flex-col h-full overflow-y-scroll gap-4 w-7/12">
        <h2 className="text-3xl font-semibold">Courses</h2>
        {isLoading ? <h3>Loading...</h3> : null}
        <div className="grid grid-cols-4 gap-4">
          {data?.map((val) => (
            <button
              className={`flex flex-1 flex-col justify-between border-4 bg-blue-200 rounded-lg p-2 h-52 border-[#0065C1]`}
              onClick={() => {
                setTitle(val.title);
                setDesc(val.desc);
                setId(val._id);
              }}
            >
              <h3 className="text-xl">{val.title}</h3>
              <div className="flex flex-row justify-end w-full">
                {/* <Image src={"icon"} width={60} height={60} alt="Course Item" /> */}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-5/12 flex gap-4 flex-col px-8">
        <h2 className="text-3xl font-semibold">Courses Detail</h2>
        <div className="rounded-lg border-4 border-blue-300 w-full h-64"></div>
        <h3>{title}</h3>
        <p className="flex flex-1 border-2 border-slate-400 p-4 rounded-lg">
          {desc}
        </p>
        <div className="flex justify-end ">
          <Link
            href={`/dashboard/courses/${id}`}
            className="greenButton rounded-full text-slate-100 py-2 px-4 duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Profile;
