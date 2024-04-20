import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

import { foodApi } from "../hook";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import userReducer from "../slice/userSlice";
import recipeSliceReducer from "../slice/recipieSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
    user: persistReducer(
      {
        key: "user",
        version: 1,
        storage,
      },
      userReducer
    ),
    recipie: recipeSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(foodApi.middleware),
});

setupListeners(store.dispatch);

export const reduxPersistor = persistStore(store);
