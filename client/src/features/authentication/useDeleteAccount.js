import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { deleteUserApi } from "./api";

export function useDeleteAccount(setShowAlertModal) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteAccount } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: (data) => {
      setShowAlertModal(false);
      navigate("/", { replace: true });

      // Delay query invalidation to avoid immediate redirect here
      setTimeout(() => {
        queryClient.invalidateQueries(["isLoggedIn"]);
      }, 50);

      toast.success(data?.message || "Account deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message || "Failed to delete your account");
    },
  });
  return {
    deleteAccount,
  };
}
