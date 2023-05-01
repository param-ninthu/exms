import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: [],
  },
  reducers: {
    logUser: (state, action) => {
      state.value.push(action.payload);
    },
    logOutUser: (state, action) => {
      state.value = state.value.filter(
        (user) => user.email !== action.payload.email
      );
    },
  },
});

export default loginSlice.reducer;
export const { logUser, logOutUser } = loginSlice.actions;
