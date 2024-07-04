import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

function findProductIndexById(array: Array<any>, id: string) {
  const searchResult = array.findIndex(element => element.id === id);

  if (searchResult < 0) {
    console.error(`No matches for id: ${id}`);
    return -1;
  }

  return searchResult;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeProductFromCartById: (state, action) => {
      const targetProductIndex = findProductIndexById(
        state.items,
        action.payload,
      );

      if (targetProductIndex < 0) {
        console.error(
          `Unable to delete item, no matches found for id: ${action.payload}`,
        );

        return state;
      }

      state.items.splice(targetProductIndex, 1);

      return state;
    },
  },
});

export const selectCartItems = (state: any) => state.cart.items;

export const { addProductToCart, removeProductFromCartById } =
  cartSlice.actions;

export default cartSlice.reducer;
