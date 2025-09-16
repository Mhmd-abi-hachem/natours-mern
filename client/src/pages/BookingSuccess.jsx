import React from "react";
import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi2";
import Button from "../shared/ui/Button";

function BookingSuccess() {
  return (
    <main className="max-w-[120rem] min-h-screen mx-auto flex items-center justify-center">
      <div>
        <div className="flex flex-col gap-8 md:gap-12  md:mt-24">
          <HiCheckCircle className="w-30 h-30 text-[#55c57a] self-center" />
          <h1 className="text-6xl md:text-7xl text-center text-[#555] px-4">
            Payment Successful!
          </h1>
          <p className="text-center text-3xl md:text-4xl px-8 leading-11">
            Thank you for your booking. We&apos;ll see you soon!
          </p>
          <Link to="/" className="flex justify-center">
            <Button size="large">Return Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BookingSuccess;
