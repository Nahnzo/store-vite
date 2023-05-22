import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      const newItem = { ...action.payload, isFavorite: true };
      const existingItemIndex = state.favorites.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex === -1) {
        state.favorites.push(newItem);
      } else {
        state.favorites[existingItemIndex] = newItem;
      }
    },
    removeFromFavorites(state, action) {
      const itemId = action.payload;
      state.favorites = state.favorites.filter((item) => item.id !== itemId);
    },
  },
});

export const { addFavorite, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
