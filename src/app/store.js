import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/Users";
import expenseReducer from "../features/Expense";
import loginReducer from "../features/Login";
import incomeReducer from "../features/Income";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expenseReducer,
    login: loginReducer,
    income: incomeReducer,
  },
});
