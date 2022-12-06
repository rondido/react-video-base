import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { response } from "msw";

//비동기 작동
export const fetchIncrement = createAsyncThunk(
  "count/fetchIncrement",
  async (value) => {
    const response = await axios.put("/count/increment", { value });
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
