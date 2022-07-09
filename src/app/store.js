import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './../features/components/categories/categoriesSlice'

const store = configureStore({
    reducer:{
        links:categoriesReducer,
    }
})

export default store