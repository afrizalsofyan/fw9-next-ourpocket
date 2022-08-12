import { createAsyncThunk } from "@reduxjs/toolkit"
import { http } from "../../helpers/http"

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