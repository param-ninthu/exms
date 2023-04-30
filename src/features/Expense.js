import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    value: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.value.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.value = state.value.filter(
        (expense) => expense.id !== action.payload.id
      );
    },
    updateExpense: (state, action) => {
      const index = state.value.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.value[index] = action.payload;
    },
    archiveExpense: (state, action) => {
      const index = state.value.findIndex(
        (expense) => expense.id === action.payload.id
      );
      state.value[index].archived = true;
    },
  },
});

export default expensesSlice.reducer;
export const { addExpense, removeExpense, updateExpense, archiveExpense } =
  expensesSlice.actions;
