import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "income",
  initialState: {
    value: [],
  },
  reducers: {
    addIncome: (state, action) => {
      state.value.push(action.payload);
    },
    updateIncome: (state, action) => {
      const index = state.value.findIndex(
        (income) => income.id === action.payload.id
      );
      state.value[index] = action.payload;
    },
  },
});

export default incomeSlice.reducer;
export const { addIncome, updateIncome } = incomeSlice.actions;
