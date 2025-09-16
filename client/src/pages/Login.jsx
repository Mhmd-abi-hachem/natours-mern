import React, { useState } from "react";
import toast from "react-hot-toast";

import Spinner from "../shared/ui/Spinner";
import LoginForm from "../features/authentication/LoginForm";
import { useLoginUser } from "../features/authentication/useLoginUser";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { loginUser, isLoading } = useLoginUser();

  function handleOnChange(e) {
    setLoginData((logData) => ({
      ...logData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const { email, password } = loginData;
    if (!email) return toast.error("email is required");
    if (!password) return toast.error("password is required");

    loginUser({ email, password });
  }

  return (
    <main className="max-w-[120rem] px-6 sm:px-8 md:px-10 mx-auto">
      <section className="w-full  min-h-screen flex items-center justify-center">
        {isLoading ? (
          <div className="min-h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className=" w-full max-w-[65rem] py-10 sm:py-16 md:py-24 px-6 sm:px-12 md:px-20 lg:px-28 rounded-xl shadow-md bg-[#fff]">
            <h2 className="heading-secondary  whitespace-nowrap">
              Log into your account
            </h2>

            <LoginForm
              handleOnChange={handleOnChange}
              handleFormSubmit={handleFormSubmit}
              loginData={loginData}
              isLoading={isLoading}
            />
          </div>
        )}
      </section>
    </main>
  );
}

export default Login;
