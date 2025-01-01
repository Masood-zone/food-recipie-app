/**
 * @description Queries for Admins(Users) service
 * @module AdminUsersQueries
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAdmin, fetchAdminById, fetchAllAdmins } from "./api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to fetch all admins
 * @returns {UseQueryResult} The query result object
 */

/**
 * @Query Hook to fetch all admins
 */
export const useFetchAllAdminsQuery = () => {
  return useQuery({
    queryKey: ["admins"],
    queryFn: fetchAllAdmins,
  });
};

/**
 * @Query Hook to fetch an admin by id
 */
export const useFetchAdminByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["admins", id],
    queryFn: () => fetchAdminById(id),
  });
};

/**
 * @Mutation Hook to create an admin
 */
export const useCreateAdmin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: CreateAdmin) => {
      try {
        const response = await createAdmin(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Admin created successfully. ", {
        description: "An Admin has been added to the platform",
        duration: 5000,
      });
      navigate("/admin/users");
    },
    onError: (error: Errors) => {
      toast.error(error.response.data.message);
    },
  });
};

/**
 * @Mutation Hook to update an admin
 */
export const useUpdateAdmin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UpdateAdmin) => {
      try {
        const response = await createAdmin(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Admin updated successfully. ", {
        description: "The Admin has been updated",
        duration: 5000,
      });
      navigate("/admin/users");
    },
    onError: (error: Errors) => {
      toast.error(error.response.data.message);
    },
  });
};
