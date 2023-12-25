import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    success: null,
  },
};

export const product = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    createProductAction: (state, actions) => {
      state.data.success = [actions.payload, ...state.data.success];
    },
    getProductActions: (state, actions) => {
      state.data.success = actions.payload;
    },
  },
});

export const { createProductAction, getProductActions } = product.actions;

export default product.reducer;
