import { createSlice } from "@reduxjs/toolkit";

interface IUserSlice {
  user: {};
  token: string;
}

const initialState: IUserSlice = {
  user: {},
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      console.log("action", action);

      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export const userSelectors = { user: (state: any) => state.user.user };

export default userSlice.reducer;
