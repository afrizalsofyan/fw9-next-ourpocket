import { createSlice } from "@reduxjs/toolkit"
import { changePassword, getProfile, updateNameUser, updatePhoneNumber, updatePhotoProfile } from "../actionAsync/profile"
import { updatePin } from "../actionAsync/auth"

const initialState = {
    results: {},
    isLoading: null,
    errorMsg: null,
    successMsg: null,
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getProfile.pending, (state, action)=>{
            state.successMsg=null;
            state.errorMsg=null;
            state.isLoading = 'pending';  
        })
        build.addCase(getProfile.fulfilled, (state, action)=>{
            state.results = action.payload?.data;
            state.isLoading = 'success';
        }),
        build.addCase(changePassword.pending, (state)=> {
            state.successMsg=null;
            state.errorMsg=null;
            state.isLoading = 'pending';
        }),
        build.addCase(changePassword.fulfilled, (state, action)=>{
            state.successMsg=action.payload.msg;
            state.errorMsg=action.payload.errorMsg;
            state.isLoading = 'success';
        }),
        build.addCase(updatePin.pending,(state)=> {
            state.errorMsg = null;
            state.successMsg = null;
            state.isLoading = 'pending';
        }),
        build.addCase(updatePin.fulfilled, (state, action)=>{
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.msg;
            state.isLoading = 'success';
        }),
        build.addCase(updatePhoneNumber.pending, (state)=>{
            state.errorMsg=null;
            state.successMsg=null;
            state.isLoading = 'pending';
        }),
        build.addCase(updatePhoneNumber.fulfilled, (state, action)=>{
            state.successMsg = action.payload.successMsg;
            state.errorMsg = action.payload.errorMsg;
            state.isLoading = 'success';
        }),
        build.addCase(updateNameUser.pending, (state)=>{
            state.errorMsg = null;
            state.successMsg = null;
            state.isLoading = 'pending';
        }),
        build.addCase(updateNameUser.fulfilled, (state, action)=>{
            state.successMsg = action.payload.successMsg;
            state.errorMsg = action.payload.errorMsg;
            state.isLoading = 'success';
        })
        build.addCase(updatePhotoProfile.pending, (state)=> {
            state.errorMsg = null;
            state.successMsg = null;
            state.isLoading = 'pending';
        }),
        build.addCase(updatePhotoProfile.fulfilled, (state, action)=>{
            state.successMsg = action.payload.successMsg;
            state.errorMsg = action.payload.errorMsg;
            state.isLoading = 'success';
        })
    }
})
export {getProfile, changePassword, updatePin, updatePhoneNumber, updateNameUser, updatePhotoProfile};
export default profile.reducer;