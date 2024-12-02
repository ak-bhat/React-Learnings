import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{                       // This reducer is combination of all small small reducers of different slices
        cart: cartReducer,
    }
});

export default appStore;