import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateAccountApi } from "./api";

export function useUpdateUserData() {
  const queryClient = useQueryClient();

  const { mutate: updateUserData, isPending: isUpdatingData } = useMutation({
    mutationFn: updateAccountApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["isLoggedIn"]);
      toast.success("Successfully updated");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUserData, isUpdatingData };
}
