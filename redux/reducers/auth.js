import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { forgetPassword, login, register, resetPassword, updatePin } from '../actionAsync/auth';

const initialState  = {
    token: Cookie.get('token') || null,
    errorMsg: null,
    successMsg: null,
    successCreatePin: null,
    results: {},
    id: null,
}

const auth = createSlice({
    name: 'authentication',
    initialState ,
    reducers: {
        logout: (state, action) => {
            Cookie.remove('token');
            // Cookie.remove('id');
            localStorage.removeItem('persist:transaction')
            localStorage.removeItem('persist:auth')
            localStorage.removeItem('ally-supports-cache')
            action.payload();
            return initialState;
        }
    },
    extraReducers: (build) => {
        build.addCase(login.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(login.fulfilled, (state, action)=> {
            
            const results = action.payload;
            if(!results?.errorMsg){
                state.results = action.payload?.data;
                const token = action.payload?.data.token;
                state.id=action.payload.data.id;
                // const id = action.payload?.data.id;
                if(token){
                    state.token = token;
                    Cookie.set('token', token);
                    
                    // Cookie.set('id', id)
                } else {
                    state.errorMsg = action.payload?.errorMsg;
                    state.successMsg = action.payload.successMsg;
                }
            } else {
                state.results = action.payload;
            }
        }),
        build.addCase(login.rejected, (state, action)=> {
            state.errorMsg = action.payload?.errorMsg;
            state.successMsg = null;
        }),
        build.addCase(register.pending, (state, action)=>{
            state.errorMsg=null;
            state.successMsg = null;
            state.status=null;
        }),
        build.addCase(register.fulfilled, (state, action)=>{
            const status = action.payload?.status;
            if(status === 400){
                state.errorMsg=action.payload?.errorMsg;
            } else {
                state.errorMsg=null;
                state.results = action.payload.results;
                state.successMsg = action.payload?.msg;
            }
        }),
        build.addCase(register.rejected, (state, action)=>{
            state.errorMsg=action.payload?.msg;
            state.successMsg=null;
        }),
        build.addCase(forgetPassword.pending, (state)=>{
            state.errorMsg=null;
            state.successMsg=null;
        }),
        build.addCase(forgetPassword.fulfilled, (state, action)=>{
            state.results = action.payload;
        }),
        build.addCase(forgetPassword.rejected, (state)=>{
            state.errorMsg = action.payload?.errorMsg
            state.results = action.payload;
            state.successMsg = null;
        }),
        build.addCase(resetPassword.pending, (state)=> {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(resetPassword.fulfilled, (state, action)=> {
            state.results = action.payload;
            state.successMsg = action.payload.msg;
            state.errorMsg = action.payload.errorMsg;
        }),
        build.addCase(updatePin.pending,(state)=> {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(updatePin.fulfilled, (state, action)=>{
            state.errorMsg = action.payload.errorMsg;
            state.successMsg = action.payload.msg;
            state.results = action.payload.data;
        })
    }
})

export {login, register, forgetPassword, resetPassword, updatePin};
export const {logout} = auth.actions;
export default auth.reducer;