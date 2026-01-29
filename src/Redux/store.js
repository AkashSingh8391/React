import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/counterSlice";

// 🔥 Global Redux Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 👉 configureStore automatically adds:
// - Redux DevTools
// - Thunk middleware
