import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import { http } from "../../helpers/http";

export const login = createAsyncThunk('auth/login', async (request)=>{
    const result = {};
    try {
        const send = qs.stringify(request);
        const {data} = await http().post('/auth/login', send, {
            headers: {
                'content-type' : 'application/x-www-form-urlencoded'
            }
        });
        result.data = data.data;
        result.successMsg = data.msg;
        result.status = data.status;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

export const register = createAsyncThunk('auth/register', async (request)=>{
    const result = {};
    try {
        const send = qs.stringify(request);
        const {data} = await http().post('/auth/register', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        result.status = error.response.data.status;
        return result;
        
    }
});

export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (request)=>{
    const result = {};
    const dataReq = {email: request.email, linkDirect: 'http://localhost:3000/reset-password'};
    try {
        const send = qs.stringify(dataReq)
        const {data} = await http().post('/auth/forgot-password', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        result.status = error.response.data.status;
        return result;
    }
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async (request) => {
    const result = {};
    try {
        const dataReq = {keysChangePassword: request.keyChangePass, newPassword: request.newPass, confirmPassword: request.confirmPass};
        const send = qs.stringify(dataReq);
        const {data} = await http().patch('/auth/reset-password', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

export const updatePin = createAsyncThunk('user/updatePin', async (request) => {
    const result = {};
    try {
        console.log(request)
        const send = qs.stringify({pin: request.pin});
        const {data} = await http().patch('/user/pin/'+request.id, send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.msg;
        return result;
    }
});

export const userLogout = createAsyncThunk('user/logout', async()=>{
    const result = {};
    try {
        const {data} = await http().post('/auth/logout');
        result.successMsg = data.msg;
        result.status = data.status;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

export const verivyEmail = createAsyncThunk('user/verivy', async(request)=>{
    const result = {};
    try {
        const {data} = await http().get('/auth/verivy/'+request.verivyKey);
        result.successMsg = data.msg;
        result.status = data.status;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});