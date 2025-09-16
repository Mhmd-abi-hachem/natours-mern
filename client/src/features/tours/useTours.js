import { useQuery } from "@tanstack/react-query";
import { getAllTours } from "./api";

export function useTours() {
  const {
    isLoading,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getAllTours,
  });

  return { isLoading, tours, isError, error };
}
