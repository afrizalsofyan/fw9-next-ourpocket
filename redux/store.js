import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {persistStore} from 'redux-persist';

export const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
