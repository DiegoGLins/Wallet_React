import { combineReducers } from '@reduxjs/toolkit';
import saldoSlice from './saldoSlice';
import transactions from './transactionsSlice';

export default combineReducers({
  transactions, saldoSlice
});
