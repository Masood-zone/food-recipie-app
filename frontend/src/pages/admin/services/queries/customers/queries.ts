/**
 * @description Queries for Customers service
 * @module  CustomersQueries
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCustomer,
  fetchCustomerById,
  fetchAllCustomers,
  updateCustomer,
} from "./api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to fetch all customers
 * @returns {UseQueryResult} The query result object
 */

/**
 * @Query Hook to fetch all customers
 */
export const useFetchAllCustomersQuery = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: fetchAllCustomers,
  });
};

/**
 * @Query Hook to fetch a customer by id
 */
export const useFetchCustomerByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomerById(id),
  });
};

/**
 * @Mutation Hook to create a customer
 */
export const useCreateCustomer = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: RegisterUser) => {
      try {
        const response = await createCustomer(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Customer created successfully. ", {
        description: "A Customer has been added to the platform",
        duration: 5000,
      });
      navigate("/admin/customers");
    },
    onError: (error) => {
      toast.error("Customer creation failed. ", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};

/**
 * @Mutation Hook to update a customer
 */
export const useUpdateCustomer = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UpdateUser) => {
      try {
        const response = await updateCustomer(data.id, data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Customer updated successfully. ", {
        description: "A Customer has been updated",
        duration: 5000,
      });
      navigate("/admin/customers");
    },
    onError: (error) => {
      toast.error("Customer update failed. ", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};
