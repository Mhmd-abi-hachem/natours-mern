import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineFlag,
  HiOutlineMapPin,
  HiOutlineUser,
} from "react-icons/hi2";

function TourCardContent({ tour }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-7 py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-12">
      <h4 className="text-lg md:text-[1.35rem] uppercase font-bold col-span-1 sm:col-span-2">
        {`${tour.difficulty} ${tour.duration}-day tour`}
      </h4>

      <p className="col-span-1 sm:col-span-2 text-xl sm:text-2xl md:text-[1.65rem] tracking-wide leading-relaxed italic -mt-2 sm:-mt-3 mb-3">
        {tour.summary}
      </p>

      <div className="flex items-center text-xl sm:text-2xl ">
        <HiOutlineMapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 mr-2 sm:mr-3 text-[#55c57a]" />
        <span>{tour.startLocation.description}</span>
      </div>

      <div className="flex items-center text-xl sm:text-2xl">
        <HiOutlineCalendar className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 mr-2 sm:mr-3 text-[#55c57a]" />
        <span>
          {new Date(
            new Date().setMonth(
              new Date().getMonth() + Math.floor(Math.random() * 6) + 1
            )
          ).toLocaleString("en-us", {
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="flex items-center text-xl sm:text-2xl">
        <HiOutlineFlag className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 mr-2 sm:mr-3 text-[#55c57a]" />
        <span>{`${tour.locations} stops`}</span>
      </div>

      <div className="flex items-center text-xl sm:text-2xl">
        <HiOutlineUser className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 mr-2 sm:mr-3 text-[#55c57a]" />
        <span>${tour.maxGroupSize}</span>
      </div>
    </div>
  );
}

export default TourCardContent;
