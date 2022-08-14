import { createAsyncThunk } from "@reduxjs/toolkit"
import qs from "qs";
import { http } from "../../helpers/http";


export const historyTransaction = createAsyncThunk('transaction/history', async (params) => {
    const result = {};
    try {
        const {data} = await http().get(`/transaction/history?page=${params.page}&limit=${params.limit}&filter=${params.filter}`)
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

// export const historyAllTransaction = createAsyncThunk('transaction/history', async () => {
//     const result = {};
//     try {
//         const {data} = await http().get('/transaction/history?page=1&limit=2&filter=MONTH')
//         return data;
//     } catch (error) {
//         result.errorMsg = error.response.data.msg;
//         return result;
//     }
// });

//topup
export const topupBalance = createAsyncThunk('transcation/topup', async (request)=>{
    const result = {};
    try {
        const dataReq = {amount: request.amount};
        const send = qs.stringify(dataReq);
        const {data} = await http().post('/transaction/top-up', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

export const midtransNotification = createAsyncThunk('topup/midtransNotif', async(request)=>{
    const result = {};
    try {
        const send = qs.stringify(request.data);
        const {data} = await http().post('/transaction/midtrans-notification', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

//transfer
export const transferTransaction = createAsyncThunk('transaction/transfer', async(request)=>{
    const result = {};
    try {
        const dataReq = {receiverId: request.recipient, amount: request.amount, notes: request.notes};
        const send = qs.stringify(dataReq);
        const {data} = await http().post('/transaction/transfer', send);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

//dashboard
export const dashboardIncomeExpense = createAsyncThunk('dashboard/incomeExpense', async(id)=>{
    const result = {};
    try {
        const {data} = await http().get('/dashboard/'+id)
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});

//export
export const exportTransaction = createAsyncThunk('transaction/export', async(id)=>{
    const result = {};
    try {
        const {data} = await http().get('/export/transaction/'+id);
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});