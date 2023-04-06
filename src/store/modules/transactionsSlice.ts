import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import TransactionType from '../../types/TransactionType';
import { RootState } from '../index';

const adapter = createEntityAdapter<TransactionType>({
  selectId: item => item.id
});

export const { selectAll, selectById, selectTotal } = adapter.getSelectors((state: RootState) => state.transactions);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: adapter.getInitialState(),
  reducers: {
    addTransaction: adapter.addOne,
    updateTransaction: adapter.updateOne,
    removeTransaction: adapter.removeOne
  }
});

export const { addTransaction, removeTransaction, updateTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
