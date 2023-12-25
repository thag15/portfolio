import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    success: null,
    err: null,
  },
};

export const auth = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    // sign in
    sign_in: (state, actions) => {
      state.data.success = actions.payload;
      state.data.err = null;
    },
    sign_in_err: (state, actions) => {
      state.data.success = null;
      state.data.err = actions.payload;
    },
    sign_in_social: (state, actions) => {
      state.data.success = actions.payload;
    },

    logout: (state) => {
      state.data.success = null;
    },

    removeErrApi: (state) => {
      state.data.err = null;
    },
    update_profile: (state, actions) => {
      state.data.success = actions.payload;
      state.data.err = null;
    },
  },
});

export const {
  sign_in,
  logout,
  removeErrApi,
  update_profile,
  sign_in_err,
  sign_in_social,
} = auth.actions;

export default auth.reducer;
