import  {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import transaction from './transaction';
import user from './user';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import profile from './profile';

const authPersistConfig = {
  key: 'auth',
  storage
};

const transactionPersistConfig = {
  key: 'transaction',
  storage
};

const persistedReducer = persistReducer(authPersistConfig, auth);

const persistedReducerTransaction = persistReducer(transactionPersistConfig, transaction);

const reducer = combineReducers({
  auth: persistedReducer,
  // auth,
  user,
  transaction: persistedReducerTransaction,
  profile
});
export default reducer;