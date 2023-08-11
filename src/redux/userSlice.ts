import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      console.log(action);

      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export const userSelectors = { user: (state: any) => state.user.user };

export default userSlice.reducer;
