import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/Users";
import expenseReducer from "../features/Expense";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expenseReducer,
  },
});
