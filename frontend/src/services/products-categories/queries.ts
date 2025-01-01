import { fetchAllCategories } from "@/pages/admin/services/queries/category/api";
import { fetchAllProducts } from "@/pages/admin/services/queries/products/api";
import { useQuery } from "@tanstack/react-query";

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
 * @Query Hook to fetch all categories
 */
export const useFetchAllCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategories,
  });
};
