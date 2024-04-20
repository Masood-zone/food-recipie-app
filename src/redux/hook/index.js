import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MAIN_URL = "https://tomato-x0w7.onrender.com/api/v1/web";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: MAIN_URL,
    prepareHeaders: (headers, { getState }) => {
      const user = getState()?.user?.user;
      const token = user?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category/list",
    }),
    getFoods: builder.query({
      query: () => "/recipe/list",
    }),
    getUsers: builder.query({
      query: () => "/client/list",
    }),
    createFood: builder.mutation({
      query: (data) => ({
        url: "/recipe/add",
        method: "POST",
        body: data,
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category/add",
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/client/register`,
        method: "POST",
        body: data,
      }),
    }),
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `/recipe/${id}`,
        method: "DELETE",
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/client/delete/${id}`,
        method: "DELETE",
      }),
    }),
    updateCategory: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/category/${id}`,
          method: "PATCH",
          body: rest,
        };
      },
    }),
    updateUser: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/client/update/${id}`,
          method: "PUT",
          body: rest,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/client/login`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response,
      transformErrorResponse: (response, meta, arg) => response.data.error,
    }),
  }),
});
