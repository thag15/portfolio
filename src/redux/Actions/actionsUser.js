import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    success: null,
    err: null,
  },
};

export const user = createSlice({
  name: "USER",
  initialState,
  reducers: {
    getAllUserAction: (state, actions) => {
      state.data.success = actions.payload;
    },
    getProfile: (state, actions) => {
      state.data.success = actions.payload;
      state.data.err = null;
    },
    // createUserAction
    createUserAction: (state, actions) => {
      state.data.success = [actions.payload, ...state.data.success];
    },
    // deleteUserAction
    deleteUserAction: (state, actions) => {
      state.data.success = state.data.success.filter(
        (item) => item._id !== actions.payload._id
      );
    },
    updateUserAction: (state, actions) => {
      const findId = state.data.success.findIndex(
        (i) => i._id === actions.payload._id
      );
      state.data.success[findId] = { ...actions.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProfile,
  createUserAction,
  getAllUserAction,
  deleteUserAction,
  updateUserAction,
} = user.actions;

export default user.reducer;
