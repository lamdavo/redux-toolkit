import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initalState = {
  cartItems: cartItems,
  cartTotal: 0,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
        const id  = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    calculateTotal: (state) => {
        let amount = 0 
        let total = 0
        state.cartItems.forEach((item) => {
            amount += item.amount;
            total += item.price * item.amount;
        });
        state.amount = amount;
        state.total = total;
    }
  },
});

export const  {clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
