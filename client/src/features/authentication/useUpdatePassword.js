import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePasswordApi } from "./api";

export function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updateUserPassword, isPending: isUpdatingPassword } =
    useMutation({
      mutationFn: updatePasswordApi,
      onSuccess: () => {
        queryClient.invalidateQueries(["isLoggedIn"]);

        toast.success("Password updated successfully");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { updateUserPassword, isUpdatingPassword };
}
