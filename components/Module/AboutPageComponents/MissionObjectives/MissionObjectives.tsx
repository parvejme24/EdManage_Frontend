import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function AimObjectives() {
  return (
    <div className="container mx-auto max-w-7xl px-5 lg:px-0">
      <h3 className="text-2xl font-bold mt-10 mb-5">
        Aim & Objectives{" "}
      </h3>
      <p className="p-10 rounded-lg border  text-center relative">
        <FaQuoteLeft className="absolute top-3 left-3 text-5xl text-gray-200 -z-10" />
        <span className="z-10">
           The aim of EdManage is to ensure the balanced development of students'
          physical, mental, and moral abilities through modern education and
          co-curricular activities. Our objective is to nurture each student as
          a responsible citizen capable of leadership in professional life and
          national development. Our core values are: “Education, Discipline,
          Character, Patriotism, and Service.”
        </span>
      </p>
    </div>
  );
}
