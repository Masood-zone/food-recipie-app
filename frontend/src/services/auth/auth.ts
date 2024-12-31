import { api } from "../api";

export const registerApi = async (
  username: string,
  email: string,
  password: string,
  role: string
) => {
  try {
    const response = await api.post("/client/signup", {
      username,
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw error as Error;
  }
};

export const loginUserApi = async (email: string, password: string) => {
  try {
    const response = await api.post("/client/login", { email, password });
    return response.data;
  } catch (error) {
    throw error as Error;
  }
};
