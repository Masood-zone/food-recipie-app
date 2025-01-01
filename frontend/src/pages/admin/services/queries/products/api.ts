import { api } from "@/services/api";

export const fetchAllProducts = async () => {
  try {
    const response = await api.get("/recipe/list");
    return response.data?.products;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};
