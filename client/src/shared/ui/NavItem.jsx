import React from "react";

import { NavLink } from "react-router-dom";

function NavItem({ to, text, icon, onClick }) {
  return (
    <li className="border-l-4 border-transparent duration-300">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-6 text-[#f7f7f7] text-3xl uppercase py-4 px-16
       transition-transform duration-300  ${
         isActive
           ? "translate-x-1 border-l-6 border-[#f7f7f7]"
           : " hover:translate-x-2"
       } `
        }
        onClick={onClick}
      >
        {icon}
        {text}
      </NavLink>
    </li>
  );
}

export default NavItem;
