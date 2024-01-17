import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";

export const store = configureStore({
    reducer:{
        cart:CartSlices,
    }
});