import React from "react";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineCalendar,
  HiOutlineStar,
  HiOutlineUser,
} from "react-icons/hi2";

import OverviewBox from "../../shared/ui/OverviewBox";

const now = new Date();
const twoMonthsFromNow = new Date(now.setMonth(now.getMonth() + 2));
const date = twoMonthsFromNow.toLocaleString("en-us", {
  month: "long",
  year: "numeric",
});

function TourDescription({ tour }) {
  const paragraphs = tour.description.split("\n");

  return (
    <section className="section-description">
      <div className="bg-[#f7f7f7] flex items-center justify-center">
        <div>
          <div className="my-8">
            <h2 className="heading-secondary-description">Quick facts</h2>
            <div className="flex flex-col gap-6">
              <OverviewBox
                label="Next date"
                text={date}
                icon={
                  <HiOutlineCalendar className="w-8 h-8 md:w-10 md:h-10 text-[#55c57a]" />
                }
              />
              <OverviewBox
                label="Difficulty"
                text={tour.difficulty}
                icon={
                  <HiOutlineArrowTrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#55c57a]" />
                }
              />
              <OverviewBox
                label="Participants"
                text={`${tour.maxGroupSize} people`}
                icon={
                  <HiOutlineUser className="w-8 h-8 md:w-10 md:h-10 text-[#55c57a]" />
                }
              />
              <OverviewBox
                label="Rating"
                text={`${tour.ratingsAverage} / 5`}
                icon={
                  <HiOutlineStar className="w-8 h-8 md:w-10 md:h-10 text-[#55c57a]" />
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 sm:my-4 md:my-0">
        <h2 className="heading-secondary-description !leading-relaxed">
          About {tour.name} tour
        </h2>

        {paragraphs.map((paragraph, index) => (
          <p className="text-3xl leading-14 tracking-wider" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default TourDescription;
