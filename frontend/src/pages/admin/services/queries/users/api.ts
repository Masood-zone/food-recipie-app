import { api } from "@/services/api";

// Fetch all admins
export const fetchAllAdmins = async () => {
  try {
    const response = await api.get("/client/list?users=admin");
    return response.data?.clients;
  } catch (error) {
    console.error(error);
  }
};

// Fetch an admin by id
export const fetchAdminById = async (id: string) => {
  try {
    const response = await api.get(`/client/${id}`);
    return response.data?.client;
  } catch (error) {
    console.error(error);
  }
};

// Create an admin
export const createAdmin = async (data: CreateAdmin) => {
  try {
    const response = await api.post("/client/signup", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Update an admin
export const updateAdmin = async (id: string, data: UpdateAdmin) => {
  try {
    const response = await api.patch(`/client/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
