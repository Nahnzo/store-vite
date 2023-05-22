import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: action.payload.image,
          description: action.payload.description,
          date: dayjs().format("HH:mm:ss DD/MM/YYYY "),
        });
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalPrice += action.payload.price;
      }
      state.totalQuantity++;
    },
    deleteItem(state, action) {
      const itemId = action.payload.id;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemId
          );
          state.totalPrice -= existingItem.totalPrice;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
          state.totalPrice -= action.payload.price;
        }
        state.totalQuantity--;
      }
    },
    removeAll(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, deleteItem, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
