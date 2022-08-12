import { createSlice } from "@reduxjs/toolkit"
import { historyTransaction } from "../actionAsync/transaction"

const initialState = {
    results: {}
}

const transaction = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(historyTransaction.fulfilled, (state, action)=>{
            state.results = action.payload
        })
    }
})

export {historyTransaction};
export default transaction.reducer;
