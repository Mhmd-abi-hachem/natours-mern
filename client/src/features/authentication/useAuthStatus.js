import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

import { authStatusApi } from "./api";

export function useAuthStatus() {
  const { data: authStatus, isLoading: isAuthLoading } = useQuery({
    queryKey: ["isLoggedIn"],

    queryFn: authStatusApi,

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    authStatus,
    isAuthLoading,
  };
}
