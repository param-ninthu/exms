import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/Users";
import expenseReducer from "../features/Expense";
import loginReducer from "../features/Login";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expenseReducer,
    login: loginReducer,
  },
});
