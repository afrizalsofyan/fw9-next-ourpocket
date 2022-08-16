import { createSlice } from "@reduxjs/toolkit"
import { checkPin, deleteImageProfile } from "../actionAsync/profile";
import { getAllUser, getProfileOtherUser } from "../actionAsync/user"

const initialState = {
    results: {},
    resultsOtherUser: {},
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
            state.results = action.payload;
            state.successMsg = action.payload?.msg;
            state.errorMsg = action.payload?.errorMsg;
        }),
        build.addCase(getProfileOtherUser.pending, (state)=>{
            state.successMsg = null;
            state.errorMsg = null;
        }),
        build.addCase(getProfileOtherUser.fulfilled, (state, action)=> {
            state.resultsOtherUser = action.payload;
            state.successMsg = action.payload.msg;
            state.errorMsg = action.payload.errorMsg;
        }),
        build.addCase(checkPin.pending, (state)=> {
            state.successMsg = null;
            state.errorMsg = null;
        }),
        build.addCase(checkPin.fulfilled, (state, action)=>{
            state.successMsg = action.payload.msg;
            state.errorMsg = action.payload.errorMsg;
        }),
        build.addCase(deleteImageProfile.pending, (state)=> {
            state.successMsg = null;
            state.errorMsg = null;
        }),
        build.addCase(deleteImageProfile.fulfilled, (state, action)=>{
            state.successMsg = action.payload.msg;
            state.errorMsg = action.payload.errorMsg;
        })
    }
});

export {getAllUser, getProfileOtherUser, checkPin, deleteImageProfile};
export default profile.reducer;