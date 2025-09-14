import { createSlice } from "@reduxjs/toolkit";
import react from "react";

const SearchSuggSlice = createSlice({
    name : 'SearchSugg',
    initialState : {
        suggItems : {},
    },
    reducers : {
        alreadySearched : ((state, action) => {
            const {id , list} = action.payload;
            state.suggItems[id] = list;
        }),



    }
});

export default SearchSuggSlice.reducer;
export const {alreadySearched} = SearchSuggSlice.actions;