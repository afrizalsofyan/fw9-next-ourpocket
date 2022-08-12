import  {combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import transaction from './transaction';
import user from './user'

const reducer = combineReducers({
    auth,
    user,
    transaction,
})
export default reducer;