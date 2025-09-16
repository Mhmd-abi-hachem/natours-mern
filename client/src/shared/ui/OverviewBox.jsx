import React from "react";

function OverviewBox({ label, text, icon }) {
  return (
    <div className="text-2xl flex items-center gap-6">
      {icon}

      <span className="font-bold uppercase text-2xl md:text-[1.7rem]">
        {label}
      </span>
      <span className="capitalize text-2xl md:text-[1.65rem]">{text}</span>
    </div>
  );
}

export default OverviewBox;
