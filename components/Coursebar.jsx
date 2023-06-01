"use client";

import React from "react";
import { useState, useEffect } from "react";

const Coursebar = ({ courseId }) => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("/api/course/choosed", {
      headers: {
        id: courseId,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="flex flex-col">
      <h3>Coursebar</h3>
      {course?.data?.map((val) => (
        <button key={val.title}>
          <h4>{val.title}</h4>
        </button>
      ))}
    </div>
  );
};

export default Coursebar;
