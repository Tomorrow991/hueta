import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const food = action.payload;
      const existing = state.items.find((item) => item.id === food.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...food, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        if (existing.qty > 1) {
          existing.qty -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Селекторы
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty * item.price, 0);
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0);

export default cartSlice.reducer;