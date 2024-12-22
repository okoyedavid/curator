import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard/user");
    },

    onError: (err) => {
      console.error("ERROR", err);
      toast.error("provided email or password is incorrect ");
    },
  });

  return { login, isLoading };
}

export { useLogin };
