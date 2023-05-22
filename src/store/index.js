import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import favoritesSlice from "./favoritesSlice";

export default configureStore({
  reducer: {
    getProducts: productsSlice,
    cartItems: cartSlice,
    favItems: favoritesSlice,
  },
});
