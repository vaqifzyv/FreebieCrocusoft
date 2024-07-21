import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    wishList: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.basket.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromBasket: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.basket.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.basket = state.basket.filter((item) => item.id !== id);
        }
      }
    },

    addToWishList: (state, action) => {
      const { id } = action.payload;
      const index = state.wishList.findIndex((item) => item.id === id);
      if (index === -1) {
        state.wishList.push(action.payload);
      } else {
        state.wishList.splice(index, 1);
      }
    },

    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  addToWishList,
  removeFromWishList,
} = basketSlice.actions;

export default basketSlice.reducer;
