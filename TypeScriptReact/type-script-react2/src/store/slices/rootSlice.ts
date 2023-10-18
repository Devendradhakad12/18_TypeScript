import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  count: number;
}
const initialState: StateType = { count: 0 };

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByValue(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement,incrementByValue } = rootSlice.actions;

export default rootSlice.reducer;
