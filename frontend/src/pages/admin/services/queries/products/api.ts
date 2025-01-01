import { api } from "@/services/api";

export const fetchAllProducts = async () => {
  try {
    const response = await api.get("/recipe/list");
    return response.data?.recipes;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/recipe/${id}`);
    return response.data?.product;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const createProduct = async (data: CreateProduct) => {
  try {
    const response = await api.post("/recipe/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (data: UpdateProduct) => {
  try {
    const response = await api.patch(`/recipe/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${data.id}:`, error);
    throw error;
  }
};
