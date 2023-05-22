import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const results = await response.json();
  return results;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    filteredArray(state, action) {
      const prices = action.payload;
      if (prices.length === 2) {
        state.products = state.products.filter(
          (item) => item.price < prices[0] && item.price > prices[1]
        );
      }
    },
    filterByCategories(state, action) {
      state.products = state.products.filter(
        (item) => item.category === action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export const { filteredArray, filterByCategories } = productsSlice.actions;
export default productsSlice.reducer;
