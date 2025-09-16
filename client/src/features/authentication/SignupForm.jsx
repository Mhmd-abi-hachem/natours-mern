import React from "react";
import Button from "../../shared/ui/Button";
import { Link } from "react-router-dom";

function SignupForm({
  handleOnChange,
  handleFormSubmit,
  signupData,
  isLoading,
}) {
  return (
    <form className="flex flex-col gap-6 sm:gap-8" onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-2 sm:gap-4">
        <label className="block text-[1.75rem] font-bold" htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          name="name"
          className="form__input"
          placeholder="Mohamad Hachem"
          required
          minLength={6}
          value={signupData.name}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        <label className="block text-[1.75rem] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          className="form__input"
          type="email"
          placeholder="mohamad@gmail.com"
          required
          value={signupData.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        <label className="block text-[1.75rem] font-bold" htmlFor="password">
          Password
        </label>

        <input
          id="password"
          name="password"
          className="form__input"
          type="password"
          placeholder="••••••••"
          required
          minLength={8}
          value={signupData.password}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        <label className="block text-[1.75rem] font-bold" htmlFor="password">
          Confirm Password
        </label>

        <input
          id="password"
          name="confirmPassword"
          className="form__input"
          type="password"
          placeholder="••••••••"
          required
          minLength={8}
          value={signupData.confirmPassword}
          onChange={handleOnChange}
        />
      </div>

      {/* Cta */}

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
        <Button variation="primary" disabled={isLoading}>
          Signup
        </Button>
        <p className="inline-block ml-4 mt-2 md:mt-0 text-[1.65rem] md:text-3xl">
          Already have an account?
          <Link
            to="/login"
            className="text-[#4993f4] hover:underline  ml-2 text-[1.65rem]"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
