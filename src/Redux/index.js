import { configureStore } from "@reduxjs/toolkit";
import postSlice from './slices'

export const store = configureStore({
    reducer: postSlice
})

