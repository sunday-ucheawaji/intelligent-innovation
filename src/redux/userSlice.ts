import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.user = { ...state.user, token: action.payload };
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export const userSelectors = { user: (state: any) => state.user.user };

export default userSlice.reducer;
