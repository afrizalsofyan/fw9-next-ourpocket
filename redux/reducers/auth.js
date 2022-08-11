import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { login } from '../actionAsync/auth';

const initialState  = {
    token: Cookie.get('token') || null,
    errorMsg: null,
    successMsg: null,
    successCreatePin: null
}

const auth = createSlice({
    name: 'authentication',
    initialState ,
    reducers: {
        logout: (state) => {
            Cookie.remove('token');
            return initialState;
        }
    },
    extraReducers: (build) => {
        build.addCase(login.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(login.fulfilled, (state, action)=> {
            const token = action.payload?.token;
            if(token){
                state.token = token;
                Cookie.set('token', token);
            } else {
                state.errorMsg = action.payload?.errorMsg;
                state.successMsg = action.payload.successMsg;
            }
        }),
        build.addCase(login.rejected, (state, action)=> {
            state.errorMsg = action.payload?.errorMsg;
            state.successMsg = null;
        })
    }
})

export {login};
export const {logout} = auth.actions;
export default auth.reducer;