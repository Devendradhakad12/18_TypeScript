import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  count: number;
}

const initialstate: StateType = { count: 0 };

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const incrementByValue = createAction<number>("incrementByValue");

export const rootReducer = createReducer(initialstate, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addCase(decrement, (state) => {
      state.count -= 1;
    })
    .addCase(incrementByValue, (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    });
});
