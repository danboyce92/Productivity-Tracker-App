import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  o: boolean;
  e: boolean;
  s: boolean;
  curr: string;
}

const initialState: InitialState = {
  o: true,
  e: false,
  s: false,
  curr: 'o',
}

const TabColorSlice = createSlice({
  name: 'tabColor',
  initialState,
  reducers: {
    changeToO(state) {
      state.o = !state.o;
    },
    changeToE(state) {
      state.e = !state.e;
    },
    changeToS(state) {
      state.s = !state.s;
    },
    changeCurr(state, action: PayloadAction<string>) {
      state.curr = action.payload;
    }
  },
});

export const { changeToO, changeToE, changeToS } = TabColorSlice.actions;
export const tabColorReducer = TabColorSlice.reducer;