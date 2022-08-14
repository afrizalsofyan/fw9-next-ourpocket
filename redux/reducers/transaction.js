import { createSlice } from "@reduxjs/toolkit"
import { historyTransaction, topupBalance } from "../actionAsync/transaction"

const initialState = {
    results: {},
    successMsg: null,
    errorMsg: null,
    status: null,
    isLoading: null
}

const transaction = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(historyTransaction.pending, (state)=>{
            state.successMsg=null;
            state.errorMsg=null;
            state.isLoading = 'pending';
        })
        build.addCase(historyTransaction.fulfilled, (state, action)=>{
            state.results = action.payload;
            state.successMsg=action.payload.msg;
            state.errorMsg=action.payload.errorMsg;
            state.isLoading = 'success';
        }),
        build.addCase(topupBalance.pending, (state)=>{
            state.successMsg = null;
            state.errorMsg = null;
            state.isLoading = 'peding';
        }),
        build.addCase(topupBalance.fulfilled, (state, action)=>{
            state.successMsg = action.payload;
            state.errorMsg = action.payload.errorMsg;
            state.isLoading = 'success';
            state.results = action.payload.data;
        })
    }
})

export {historyTransaction, topupBalance};
export default transaction.reducer;
