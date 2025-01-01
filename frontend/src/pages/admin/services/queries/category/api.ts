import { api } from "@/services/api";

export const fetchAllCategories = async () => {
  try {
    const response = await api.get("/category/list");
    return response.data?.categories;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};

export const fetchCategoryById = async (id: string) => {
  try {
    const response = await api.get(`/category/${id}`);
    return response.data?.category;
  } catch (error) {
    console.error(`Error fetching category with id ${id}:`, error);
    throw error;
  }
};

export const createCategory = async (data: CreateCategory) => {
  try {
    const response = await api.post("/category/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const updateCategory = async (id: number, data: UpdateCategory) => {
  try {
    const response = await api.patch(`/category/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating category with id ${id}:`, error);
    throw error;
  }
};
