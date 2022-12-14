import { createSlice } from '@reduxjs/toolkit';
import { checkPin, deleteImageProfile } from '../actionAsync/profile';
import { getAllUser, getProfileOtherUser } from '../actionAsync/user';

const initialState = {
  results: {},
  resultsOtherUser: {},
  successMsg: null,
  errorMsg: null,
  successMsgPin: null,
  errorMsgPin: null
};

const profile = createSlice({
  name:'profiles',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllUser.pending, (state)=>{
      state.successMsg = null;
      state.errorMsg = null;
      state.successMsgPin = null;
      state.errorMsgPin = null;
    }),
    build.addCase(getAllUser.fulfilled, (state, action)=>{
      state.results = action.payload;
      state.successMsg = action.payload?.msg;
      state.errorMsg = action.payload?.errorMsg;
    }),
    build.addCase(getProfileOtherUser.pending, (state)=>{
      state.successMsg = null;
      state.errorMsg = null;
      state.successMsgPin = null;
      state.errorMsgPin = null;
    }),
    build.addCase(getProfileOtherUser.fulfilled, (state, action)=> {
      state.resultsOtherUser = action.payload;
      state.successMsg = action.payload.msg;
      state.errorMsg = action.payload.errorMsg;
    }),
    build.addCase(checkPin.pending, (state)=> {
      state.successMsgPin = null;
      state.errorMsgPin = null;
    }),
    build.addCase(checkPin.fulfilled, (state, action)=>{
      if(action.payload.status === 200){
        state.successMsgPin = action.payload.successMsg;
      } else {
        state.errorMsgPin = action.payload.errorMsg;
      }
    }),
    build.addCase(deleteImageProfile.pending, (state)=> {
      state.successMsg = null;
      state.errorMsg = null;
    }),
    build.addCase(deleteImageProfile.fulfilled, (state, action)=>{
      state.successMsg = action.payload.msg;
      state.errorMsg = action.payload.errorMsg;
    });
  }
});

export {getAllUser, getProfileOtherUser, checkPin, deleteImageProfile};
export default profile.reducer;