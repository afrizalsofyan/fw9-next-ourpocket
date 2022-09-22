import { createSlice } from '@reduxjs/toolkit';
import { exportTransaction, historyTransaction, topupBalance, transferTransaction } from '../actionAsync/transaction';

const initialState = {
  results: {},
  successMsg: null,
  errorMsg: null,
  status: null,
  isLoading: null,
  idRecipient: {},
  dataTransfer: {},
  idTransaction: null,
  resultsExport: {}
};

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addIdRecipient: (state, action) => {
      state.idRecipient = action.payload;
    },
    addTransfer: (state, action) => {
      state.dataTransfer = action.payload;
    }
  },
  extraReducers: (build) => {
    build.addCase(historyTransaction.pending, (state)=>{
      state.successMsg=null;
      state.errorMsg=null;
      state.isLoading = 'pending';
    });
    build.addCase(historyTransaction.fulfilled, (state, action)=>{
      state.results = action.payload;
      state.successMsg=action.payload.msg;
      state.errorMsg=action.payload.errorMsg;
      state.isLoading = 'success';
    }),
    build.addCase(topupBalance.pending, (state)=>{
      state.successMsg = null;
      state.errorMsg = null;
      state.isLoading = 'pending';
    }),
    build.addCase(topupBalance.fulfilled, (state, action)=>{
      state.successMsg = action.payload;
      state.errorMsg = action.payload.errorMsg;
      state.isLoading = 'success';
      state.results = action.payload.data;
    }),
    build.addCase(transferTransaction.pending, (state)=>{
      state.successMsg = null;
      state.errorMsg = null;
      state.isLoading = 'pending';
    }),
    build.addCase(transferTransaction.fulfilled, (state, action)=>{
      state.successMsg = action.payload;
      state.errorMsg = action.payload.errorMsg;
      state.isLoading = 'success';
      state.results = action.payload.data;
      state.idTransaction = action.payload.data.id;
    }),
    build.addCase(exportTransaction.pending, (state)=>{
      state.successMsg = null;
      state.errorMsg = null;
      state.isLoading = 'pending';
    }),
    build.addCase(exportTransaction.fulfilled, (state, action)=>{
      state.successMsg = action.payload;
      state.errorMsg = action.payload.errorMsg;
      state.isLoading = 'success';
      state.resultsExport = action.payload.data;
    });
  }
});
export const {addIdRecipient, addTransfer} = transaction.actions;
export {historyTransaction, topupBalance, transferTransaction, exportTransaction};
export default transaction.reducer;
