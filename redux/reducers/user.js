import { createSlice } from "@reduxjs/toolkit"
import { getProfile } from "../actionAsync/profile"

const initialState = {
    results: {},
    isLoading: null,
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getProfile.pending, (state, action)=>{
            const data = action.payload?.data;
            state.isLoading = 'pending';  
        })
        build.addCase(getProfile.fulfilled, (state, action)=>{
            state.results = action.payload?.data;
            state.isLoading = 'success'
        })
    }
})
export {getProfile};
export default profile.reducer;