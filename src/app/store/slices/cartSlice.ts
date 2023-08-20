'use client'

import {createSlice} from '@reduxjs/toolkit';
// @ts-ignore
import {ProductInCart} from "@/app/assets/types";

const initialState: { products: Array<ProductInCart> | [] } = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state : any, action : any) => {
 
      let alreadyExists = false;
      // if the product already exists in cart, increment the number if size is same otherwise add it as new product
      state.products.forEach((product  :any) => {
        if (product.productID === action.payload.productID && product.size === action.payload.size) {
          console.log("Already Exists")
          alreadyExists = true
          product.quantity += 1; // Update the quantity by 1
        }
      })
      if (!alreadyExists) {
        state.products = [...state.products, action.payload];
      }
    },
    removeFromCart: (state, action: { payload: { productID: string, size: string }, type: string }) => {

      state.products = state.products.filter(
        (product) =>
          product.productID !== action.payload.productID ||
          product.size !== action.payload.size
      );
    },
    decrementQuantity: (state, action: { payload: { productID: string, size: string }, type: string }) => {
      state.products.forEach((product) => {
        console.log(product.productID, product.size, action.payload.productID)

        if (product.productID === action.payload.productID && product.size === action.payload.size) {
          console.log("Decrementing")
          // @ts-ignore
          product.quantity -= 1; // Update the quantity by 1
          product.price -= product.originalPrice;
        }
      })
    },
    incrementQuantity: (state, action: { payload: { productID: string, size: string }, type: string }) => {
      state.products.forEach((product) => {
        if (product.productID === action.payload.productID && product.size === action.payload.size) {
          console.log("Incrementing")
          // @ts-ignore
          product.quantity += 1; // Update the quantity by 1
          product.price += product.originalPrice;
        }
      })
    },
    emptyCart: (state) => {
      state.products = []
    },
  },
});

export const {addToCart, removeFromCart, decrementQuantity, incrementQuantity, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
