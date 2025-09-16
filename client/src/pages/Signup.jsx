import React, { useState } from "react";
import toast from "react-hot-toast";

import Spinner from "../shared/ui/Spinner";
import SignupForm from "../features/authentication/SignupForm";
import { useSignup } from "../features/authentication/useSignup";

function Signup() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoading, signupUser } = useSignup();

  function handleOnChange(e) {
    setSignupData((signData) => ({
      ...signData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword } = signupData;

    if (!name || !email || !password || !confirmPassword) {
      // toast.error("All fields are required");
      if (!name) return toast.error("Name is required");
      if (!email) return toast.error("Email is required");
      if (!password) return toast.error("Password is required");
      if (!confirmPassword) return toast.error("Please confirm your password");
    }

    signupUser({ name, email, password, confirmPassword });
  }

  return (
    <main className="max-w-[120rem] px-4 sm:px-8 md:px-10   mx-auto">
      <section className="w-full  min-h-screen flex items-center justify-center">
        {isLoading ? (
          <div className="min-h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className=" w-full max-w-[65rem] py-10 sm:py-16 md:py-24 px-6 sm:px-12 md:px-20 lg:px-28 rounded-xl  shadow-md bg-[#fff]">
            <h2 className="heading-secondary">Create your account!</h2>

            <SignupForm
              isLoading={isLoading}
              signupData={signupData}
              handleOnChange={handleOnChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        )}
      </section>
    </main>
  );
}

export default Signup;
