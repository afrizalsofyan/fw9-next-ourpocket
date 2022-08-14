import { createSlice } from "@reduxjs/toolkit"
import { getAllUser } from "../actionAsync/user"

const initialState = {
    results: {},
    successMsg: null,
    errorMsg: null
}

const profile = createSlice({
    name:'profiles',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAllUser.pending, (state)=>{
            state.successMsg = null;
            state.errorMsg = null;
        }),
        build.addCase(getAllUser.fulfilled, (state, action)=>{
            state.successMsg = action.payload?.msg;
            state.errorMsg = action.payload?.errorMsg;
            state.results = action.payload;
        })
    }
});

export {getAllUser};
export default profile.reducer;