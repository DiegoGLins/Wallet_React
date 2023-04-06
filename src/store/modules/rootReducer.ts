import { combineReducers } from '@reduxjs/toolkit';

import transactions from './transactionsSlice';

export default combineReducers({
  transactions,
});
