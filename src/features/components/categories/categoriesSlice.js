import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { categoriesData } from "./categoriesData";


export const categoriesAdapter = createEntityAdapter({
        selectId: (item) =>item.id,
        sortComparer: (prevItem,nexItem) => prevItem.id.localCompare(nexItem.id)
})



const initialState = {
      status: 'idle',
      error: null,
      links:categoriesData,
     
}


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers:{}
})


export const categoriesSelector = categoriesAdapter.getSelectors((state)=>state.links.links)
export default categoriesSlice.reducer;