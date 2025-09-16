import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

import { useAuthStatus } from "../../features/authentication/useAuthStatus";
import useLogoutUser from "../../features/authentication/useLogoutUser";

function Navbar() {
  const { authStatus, isAuthLoading } = useAuthStatus();
  const { logoutUser } = useLogoutUser();

  if (isAuthLoading) return;

  return (
    <header className="bg-[rgba(45,52,57,0.9)] backdrop-blur-md border-b border-white/10  px-6 sm:px-12 md:px-20 h-22 sm:h-28   z-1000 fixed top-0 left-0 w-full flex justify-between items-center max-w-screen">
      <div>
        <Link to="/">
          <img
            src="/logo-green.png"
            alt="Natours app logo"
            className="h-[2.5rem] sm:h-[3rem] md:h-[3.5rem]"
          />
        </Link>
      </div>
      <nav className="flex w-full justify-end items-center flex-[0_1_40%]">
        <div className="flex items-center flex-[0_1_40%] justify-end">
          {authStatus.isLoggedIn ? (
            <>
              <div className="uppercase text-xl sm:text-2xl md:text-3xl flex items-center gap-4 sm:gap-8  text-[#f7f7f7] transition-transform duration-300 cursor-pointer">
                <Link
                  to={`/my-account/${authStatus.user.id}`}
                  className="flex justify-center items-center hover:-translate-y-1 whitespace-nowrap"
                >
                  <span>{authStatus.user.name}</span>
                </Link>
                <button
                  className="uppercase text-xl sm:text-2xl md:text-3xl hover:-translate-y-1 cursor-pointer"
                  onClick={logoutUser}
                >
                  <span className="flex gap-2">
                    <HiArrowLeftStartOnRectangle className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                    LOGOUT
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className=" text-[#f7f7f7] uppercase text-[1.4rem] sm:text-2xl md:text-3xl  flex  gap-5 sm:gap-8  items-center transition-all duration-200 cursor-pointer ">
                <Link
                  to="/login"
                  className="  hover:-translate-y-0.5 inline-block"
                >
                  LOGIN
                </Link>
                <Link
                  to="/signup"
                  className="py-2 sm:py-3 px-5 sm:px-10 rounded-full border-2 border-[#f7f7f7] inline-block hover:bg-[#f7f7f7] hover:-translate-y-1 hover:text-[#232323] text-xl md:text-2xl lg:text-3xl whitespace-nowrap"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
