/**
 * @description Queries for Orders service
 * @module  OrdersQueries
 */
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  updateOrder,
  getUserOrders,
  saveOrder,
  updateOrderStatus,
  getOrderById,
  getAllOrders,
} from "./api";

/**
 * Custom hook to fetch all orders
 * @returns {UseQueryResult} The query result object
 */

/**
 * @Query Hook to fetch all orders
 */
export const useFetchAllOrdersQuery = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
};

/**
 * @Query Hook to fetch a order by id
 */
export const useFetchOrderByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => getOrderById(id),
  });
};

/**
 * @Query Hook to fetch user orders
 */
export const useFetchUserOrdersQuery = (id: number) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => getUserOrders(id),
  });
};

/**
 * @Mutation Hook to create a order
 */
export const useCreateOrder = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: Order) => {
      try {
        const response = await saveOrder(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Order created successfully. ", {
        description: "A Order has been added to the platform",
        duration: 5000,
      });
      navigate("/admin/order");
    },
    onError: (error: Error) => {
      toast.error("Error creating order", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};

/**
 * @Mutation Hook to update a order
 */
export const useUpdateOrder = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: Order) => {
      try {
        const response = await updateOrder(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Order updated successfully. ", {
        description: "A Order has been updated",
        duration: 5000,
      });
      navigate("/admin/order");
    },
    onError: (error: Error) => {
      toast.error("Error updating order", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};

/**
 * @Mutation Hook to update a order status
 */
export const useUpdateOrderStatus = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: Order) => {
      try {
        const response = await updateOrderStatus(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Order status updated successfully. ", {
        description: "A Order status has been updated",
        duration: 5000,
      });
      navigate("/admin/order");
    },
    onError: (error: Error) => {
      toast.error("Error updating order status", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};
