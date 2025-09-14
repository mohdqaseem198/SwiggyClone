import { createSlice } from "@reduxjs/toolkit";
import react from "react";

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        items : [],
    },
    reducers : {
        add : ((state, action) => {
            state.items.push(action.payload);
        }),

        clear : ((state) => {
            state.items = [];
        }),

        remove : ((state, action) => {
            state.items = state.items.filter((single) => single?.card?.info?.id !== action.payload );
        }),
    }
});

export const {add, clear, remove} = CartSlice.actions;
export default CartSlice.reducer;