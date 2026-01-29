import { createSlice } from "@reduxjs/toolkit";

// 🔹 Initial State
const initialState = {
  value: 0,
};

// 🔥 Slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // immer handles immutability
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 🔹 Action creators auto-generated
export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;

// 🔹 Reducer export
export default counterSlice.reducer;
