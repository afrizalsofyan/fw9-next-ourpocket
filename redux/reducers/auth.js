import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { login } from '../actionAsync/auth';

const initialState  = {
    token: Cookie.get('token') || null,
    errorMsg: null,
    successMsg: null,
    successCreatePin: null,
    results: {}
}

const auth = createSlice({
    name: 'authentication',
    initialState ,
    reducers: {
        logout: (state) => {
            Cookie.remove('token');
            Cookie.remove('id');
            return initialState;
        }
    },
    extraReducers: (build) => {
        build.addCase(login.pending, (state) => {
            state.errorMsg = null;
            state.successMsg = null;
        }),
        build.addCase(login.fulfilled, (state, action)=> {
            state.results = action.payload?.data;
            const token = action.payload?.data.token;
            const id = action.payload?.data.id;
            if(token){
                state.token = token;
                Cookie.set('token', token);
                Cookie.set('id', id)
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