import React from "react";
import { Link } from "react-router-dom";
import { HiMiniStar } from "react-icons/hi2";

import Button from "../../shared/ui/Button";

function TourCardFooter({ tour }) {
  return (
    <div className="bg-[#f7f7f7] py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-12 border-t border-[#f1f1f1] text-2xl md:text-[1.75rem] grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 mt-auto">
      <p className="flex gap-2 sm:gap-4">
        <span className="font-extrabold">${tour.price} </span>
        <span className="text-[#999]"> per person</span>
      </p>

      <p className=" row-start-2 row-end-3 flex gap-2 items-center sm:gap-3">
        <span className="font-extrabold">{tour.ratingsAverage}</span>
        <span className="text-[#999] flex gap-2 items-center">
          <span className="flex items-center">
            <HiMiniStar className="w-7 h-7 sm:w-8 sm:h-8 text-[#55c57a]" />
          </span>
          ({tour.ratingsQuantity})
        </span>
      </p>

      <Link
        to={`/tours/${tour._id}`}
        className="justify-self-start sm:justify-self-end self-center row-span-2 mt-3 md:mt-0"
      >
        <Button variation="primary" size="small">
          Details
        </Button>
      </Link>
    </div>
  );
}

export default TourCardFooter;
