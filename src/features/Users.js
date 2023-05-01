import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      state.value = state.value.filter(
        (user) => user.email !== action.payload.email
      );
    },
    updateUser: (state, action) => {
      const index = state.value.findIndex(
        (user) => user.email === action.payload.email
      );
      state.value[index] = action.payload;
    },
    findUser: (state, action) => {
      // const { email, password } = action.payload;
      const user = state.value.some(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (
        user.email === action.payload.email &&
        user.password === action.payload.password
      ) {
        return user;
      } else {
        return false;
      }
    },
  },
});

export default usersSlice.reducer;
export const { addUser, removeUser, updateUser, findUser } = usersSlice.actions;
