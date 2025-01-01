/**
 * @description Queries for Products service
 * @module  ProductsQueries
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} from "./api";

/**
 * @Query Hook to fetch all products
 */
export const useFetchAllProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};

/**
 * @Query Hook to fetch a product by id
 */
export const useFetchProductByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductById(id),
  });
};

/**
 * @Mutation Hook to create a product
 */
export const useCreateProduct = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: FormData | CreateProduct) => {
      try {
        const response = await createProduct(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Product created successfully. ", {
        description: "A Product has been added to the platform",
        duration: 5000,
      });
      navigate("/admin/products");
    },
    onError: (error) => {
      toast.error("Error creating product. ", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};

/**
 * @Mutation Hook to update a product
 */
export const useUpdateProduct = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UpdateProduct) => {
      try {
        const response = await updateProduct(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Product updated successfully. ", {
        description: "A Product has been updated in the platform",
        duration: 5000,
      });
      navigate("/admin/products");
    },
    onError: (error) => {
      toast.error("Error updating product. ", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};
