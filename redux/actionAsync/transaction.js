import { createAsyncThunk } from "@reduxjs/toolkit"
import { http } from "../../helpers/http";

export const historyTransaction = createAsyncThunk('transaction/history', async () => {
    const result = {};
    try {
        const {data} = await http().get('/transaction/history?page=1&limit=2&filter=MONTH')
        return data;
    } catch (error) {
        result.errorMsg = error.response.data.msg;
        return result;
    }
});