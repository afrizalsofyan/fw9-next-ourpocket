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
        result.token = data.data.token;
        result.successMsg = data.data.msg;
        return result;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});