import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  title: string;
  price: number;
}

const validateProduct = (product: Product) => {
  const { id, title, price } = product;

  if (id !== "" && title && price > 0) {
    return true;
  } else {
    return false;
  }
};

const productSlice = createSlice({
  name: "product",
  initialState: [
    {
      id: "0",
      title: "Red Hoodie",
      price: 79.99,
    },
    {
      id: "1",
      title: "Black T-shirt",
      price: 19.99,
    },
    {
      id: "2",
      title: "Sneakers",
      price: 299.98,
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      if (validateProduct(action.payload)) {
        state.push(action.payload);
      } else {
        console.error(
          `Invalid product object passed to dispatch ${action.payload}`,
        );
      }
    },
  },
});

export default productSlice.reducer;

export const selectProductById = (state: any, id: string) =>
  state.product.find((e: Product) => e.id === id);

export const { addProduct } = productSlice.actions;
