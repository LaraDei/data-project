import { createSlice } from "@reduxjs/toolkit";

export const csvSlice = createSlice({
    name: "csv",
    initialState: {
      csv: [],
      status: null,
    },
    reducers: {
        getCsv: (state, action) => {
            state.csv = action.payload;
        }
    },
    extraReducers: {
    },
  });
  
  export const {
    getCsv,
 } = csvSlice.actions;

  export default csvSlice.reducer;
