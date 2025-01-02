import { api } from "../api";

// Save order
export const saveOrder = async (order: Order) => {
  const response = await api.post("/order/create", order);
  return response.data;
};

// Get all orders
export const getAllOrders = async () => {
  const response = await api.get("/order/list");
  return response.data;
};

// Get user orders
export const getUserOrders = async (id: number) => {
  const response = await api.get(`/order/user/${id}`);
  return response.data;
};

// Get order by id
export const getOrderById = async (id: number) => {
  const response = await api.get(`/order/${id}`);
  return response.data;
};

// Update order status - Bulk
export const updateOrderStatus = async (data: Order) => {
  const response = await api.patch(`/order/status/bulk`, data);
  return response.data;
};

// Update order
export const updateOrder = async (order: Order) => {
  const response = await api.patch(`/order/${order.id}`, order);
  return response.data;
};
