import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import MockDataSlice from "./MockDataSlice";
import SearchSuggSlice from "./SearchSuggSlice";

const AppStore = configureStore({
    reducer : {
        CartRedux : CartSlice,
        MockDataRedux : MockDataSlice,
        SearchSuggRedux : SearchSuggSlice,
    }
});

export default AppStore ;