import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { loginApi } from "./api";

export function useLoginUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginUser, isPending: isLoading } = useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { loginUser, isLoading };
}
