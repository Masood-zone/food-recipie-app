import { useAuthStore } from "@/store/use-auth.store";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user } = useAuthStore();
  console.log(user);

  if (user?.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }
  //   if (user?.role === "ADMIN") {
  //     return <Navigate to="/dashboard" replace />;
  //   }

  return <Outlet />;
};
