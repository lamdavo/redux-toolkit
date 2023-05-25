import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initalState = {
    cartItems: cartItems,
    cartTotal: 0,
    amount: 4,
    total: 0,
    isLoading: true,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initalState,
});

export default cartSlice.reducer;