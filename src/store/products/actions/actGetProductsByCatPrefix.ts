import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "categories/actGetProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data?.message || error.message);
      } else {
        return rejectWithValue("An unexpected error...");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
