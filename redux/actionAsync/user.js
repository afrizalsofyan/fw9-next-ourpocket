import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../helpers/http';

export const getAllUser = createAsyncThunk('user/allUser', async (params)=> {
  const result = {};
  try {
    const {data} = await http().get(`/user?page=${params.page}&limit=${params.limit}&search=${params.keywords}&sort=${params.sort}`);
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.msg;
    return result;
  }
});

export const getProfileOtherUser = createAsyncThunk('othersUser/profile', async(id)=>{
  const result = {};
  try {
    const {data} = await http().get(`/user/profile/${id}`);
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;  
  }
});