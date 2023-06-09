import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';
import transactions from './modules/transactionsSlice';
import saldoSlice from './modules/saldoSlice';

const persistConfig = {
  key: 'list-transactions',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer, transactions, saldoSlice }
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
