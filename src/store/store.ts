import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categorySlice";

export const store = configureStore({
  reducer: { categories: categoriesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
