import React from "react";

import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen mx-auto flex items-center justify-center p-6">
      <div className="text-center flex flex-col gap-8 md:gap-10 ">
        <h2 className="text-5xl md:text-7xl leading-18 text-[#55c57a]">
          Something went wrong 🧐
        </h2>
        <p className="text-3xl md:text-3xl p-2">{error.message}</p>
        <Button size="large" variation="primary" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
