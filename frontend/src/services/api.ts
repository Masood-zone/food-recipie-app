import axios from "axios";
const user = localStorage.getItem("user");
const token = user ? JSON.parse(user).token : "";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/web",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
