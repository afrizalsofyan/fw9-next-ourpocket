import { createAsyncThunk } from "@reduxjs/toolkit"
import { http } from "../../helpers/http"
import qs from "qs";

export const getProfile = createAsyncThunk('user/profile', async(id)=>{
    const result = {}
    try {
        const {data} = await http().get(`/user/profile/${id}`);
        return data;
    } catch (error) {
        result.message = error.response.data?.message;
        return result;  
    }
});

export const changePassword = createAsyncThunk('user/changePassword', async (request)=>{
    const result = {};
    try {
        const dataReq = {oldPassword: request.currentPassword, newPassword: request.newPassword, confirmPassword: request.repeatPassword};
        const send = qs.stringify(dataReq);
        const {data} = await http().patch('/user/password/'+request.id, send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

export const updatePhoneNumber = createAsyncThunk('user/updatePhone', async (request)=> {
    const result = {};
    try {
        const dataReq = {noTelp: request.phoneNumber};
        const send = qs.stringify(dataReq);
        const {data} = http().patch('/user/profile/'+request.id, send);
        result.successMsg = data.msg;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }   
});

export const updateNameUser = createAsyncThunk('user/updateName', async (request) => {
    const result = {};
    try {
        const dataReq = {firstName: request.firstName, lastName: request.lastName}
        const send = qs.stringify(dataReq);
        const {data} = http().patch('/user/profile/'+request.id, send);
        result.successMsg = data.msg;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

export const updatePhotoProfile = createAsyncThunk('user/updatePhoto', async (request)=>{
    const result = {};
    try {
        const fileImage = new FormData();
        fileImage.append('image', request.picture)
        const {data} = await http().patch('/user/image/'+request.id, fileImage, {headers: {
            'content-type' : 'multipart/form-data'
          }});
        result.successMsg = data.msg;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});