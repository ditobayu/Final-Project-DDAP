"use client";
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`flex flex-row justify-center items-center py-2 px-4 ${className} duration-200`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
export default Button;
