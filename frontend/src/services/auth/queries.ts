import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUserApi, registerApi } from "./auth";
import { useAuthStore } from "@/store/use-auth.store";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: RegisterUser) => {
      try {
        const response = await registerApi(
          data.username,
          data.email,
          data.password,
          data.role
        );
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Account created successfully. ", {
        description: "Please login to continue",
        duration: 5000,
      });
      navigate("/auth/login");
    },
    onError: (error: Errors) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  return useMutation({
    mutationFn: async (data: LoginUser) => {
      try {
        const response = await loginUserApi(data.email, data.password);
        setUser(response?.user);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Login successful. ", {
        description: "Welcome back",
        duration: 5000,
      });
      navigate("/");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
