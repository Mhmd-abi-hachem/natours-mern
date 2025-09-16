import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getTour } from "./api";

function useTour(tourId) {
  const {
    data: tour,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tour"],
    queryFn: () => getTour(tourId),
  });

  return { tour, isLoading, isError, error };
}

export default useTour;
