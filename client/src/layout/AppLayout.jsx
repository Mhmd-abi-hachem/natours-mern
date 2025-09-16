import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../shared/ui/Navbar";
import "../styles/index.css";
import Footer from "../shared/ui/Footer";
import Spinner from "../shared/ui/Spinner";
import { useAuthStatus } from "../features/authentication/useAuthStatus";

function AppLayout() {
  const { isAuthLoading } = useAuthStatus();
  const location = useLocation();
  const isTourPage = location.pathname.startsWith("/tour");

  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <main
        className={`${
          !isTourPage ? "max-w-[130rem] py-42 md:py-60 px-10" : ""
        } mx-auto`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
