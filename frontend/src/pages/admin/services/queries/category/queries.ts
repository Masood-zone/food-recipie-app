/**
 * @description Queries for Categories service
 * @module  CategoriesQueries
 */
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategory,
  fetchAllCategories,
  fetchCategoryById,
  updateCategory,
} from "./api";

/**
 * Custom hook to fetch all categories
 * @returns {UseQueryResult} The query result object
 */

/**
 * @Query Hook to fetch all categories
 */
export const useFetchAllCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategories,
  });
};

/**
 * @Query Hook to fetch a category by id
 */
export const useFetchCategoryByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["categories", id],
    queryFn: () => fetchCategoryById(id),
  });
};

/**
 * @Mutation Hook to create a category
 */
export const useCreateCategory = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: CreateCategory) => {
      try {
        const response = await createCategory(data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Category created successfully. ", {
        description: "A Category has been added to the platform",
        duration: 5000,
      });
      navigate("/admin/categories");
    },
    onError: (error: Error) => {
      toast.error("Error creating category", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};

/**
 * @Mutation Hook to update a category
 */
export const useUpdateCategory = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: CreateCategory) => {
      try {
        const response = await updateCategory(data.id, data);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: () => {
      toast.success("Category updated successfully. ", {
        description: "A Category has been updated on the platform",
        duration: 5000,
      });
      navigate("/admin/categories");
    },
    onError: (error: Error) => {
      toast.error("Error updating category", {
        description: error.message,
        duration: 5000,
      });
    },
  });
};
