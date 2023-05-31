import Coursebar from "@components/Coursebar";
import React from "react";

export const metadata = {
  title: "Course",
};

const page = (props) => {
  return (
    <div className="flex flex-col h-screen pl-28 pt-20 pb-12">
      <Coursebar courseId={props.params.id} />
      <h3>page{props.params.id}</h3>
    </div>
  );
};

export default page;
