import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

import { logoutApi } from "./api";
import toast from "react-hot-toast";

function useLogoutUser() {
  const queryClient = useQueryClient();

  const { mutate: logoutUser } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["isLoggedIn"]);
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { logoutUser };
}

export default useLogoutUser;
