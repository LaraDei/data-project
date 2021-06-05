import { createSlice } from "@reduxjs/toolkit";

export const barGraphSlice = createSlice({
    name: "barGraph",
    initialState: {
      title: [],
      xAxis: "",
      yAxis: "",
      status: null,
    },
    reducers: {
        setYAxis: (state, action) => {
            state.yAxis = action.payload;
        },
        setXAxis: (state, action) => {
            state.xAxis = action.payload;
        },
        setTitle: (state, action) => {
            state.xAxis = action.payload;
        },
    },
    extraReducers: {
    },
  });
  
  export const {
    setYAxis,
    setXAxis,
    setTitle
 } = barGraphSlice.actions;

  export default barGraphSlice.reducer;