import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectCartItems = (state: any) => state.cart.items;

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
