import { configureStore } from '@reduxjs/toolkit';
import csvReducer from "./features/csvSlice"
import barGraphReducer from "./features/barGraphSlice"

export const store = configureStore({
  reducer: {
    csv: csvReducer,
    barGraph: barGraphReducer
  },
});
