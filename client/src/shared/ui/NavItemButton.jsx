import React from "react";

function NavItemButton({ icon, text, onClick }) {
  return (
    <li>
      <button
        className={`
          w-full flex items-center gap-6 justify-start
          py-4 px-16 text-3xl uppercase text-[#f7f7f7]
          border-0 cursor-pointer
          transform transition-transform duration-300
          hover:translate-x-2 
          whitespace-nowrap
        `}
        onClick={onClick}
      >
        {icon}
        {text}
      </button>
    </li>
  );
}

export default NavItemButton;
