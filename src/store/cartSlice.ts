import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

interface CartState {
  items: Product[];
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
    removeItemFromCartById: (state, action) => {
      const removedItemIndex = state.items.findIndex(
        product => product.id === action.payload.id,
      );

      if (removedItemIndex >= 0) {
        state.items.splice(removedItemIndex, 1);
      } else {
        console.error("Deleting item unsuccessful. No item found.");
      }

      return state;
    },
  },
});

export const selectCartItems = (state: any) => state.cart.items;

export const { addProductToCart, removeItemFromCartById } = cartSlice.actions;

export default cartSlice.reducer;
