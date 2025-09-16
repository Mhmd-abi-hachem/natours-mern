import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signupApi } from "./api";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isLoading, mutate: signupUser } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["isLoggedIn"]);
      navigate("/");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, signupUser };
}
