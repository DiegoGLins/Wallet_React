import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SaldoState {
  value: number;
}

const initialState: SaldoState = { value: 0 };

const saldoSlice = createSlice({
  name: 'saldo',
  initialState,
  reducers: {
    debito: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
    credito: (state, action: PayloadAction<number>) => {
      state.value = state.value += action.payload;
    }
  }
});

export const { debito, credito } = saldoSlice.actions;
export default saldoSlice.reducer;