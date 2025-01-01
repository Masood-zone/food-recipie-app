import { api } from "@/services/api";

// Fetch all customers
export const fetchAllCustomers = async () => {
  try {
    const response = await api.get("/client/list?users=users");
    return response.data?.clients;
  } catch (error) {
    console.error(error);
  }
};

// Fetch a customer by id
export const fetchCustomerById = async (id: string) => {
  try {
    const response = await api.get(`/client/${id}`);
    return response.data?.client;
  } catch (error) {
    console.error(error);
  }
};

// Create a customer
export const createCustomer = async (data: RegisterUser) => {
  try {
    const response = await api.post("/client/signup", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Update a customer
export const updateCustomer = async (id: string, data: UpdateUser) => {
  try {
    const response = await api.patch(`/client/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
