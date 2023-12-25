import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  role: {
    data: null,
  },
  category: {
    data: null,
  },
};

export const roleAndCategory = createSlice({
  name: "ROLEANDCATEGORY",
  initialState,
  reducers: {
    // role
    createRoleAction: (state, actions) => {
      state.role.data = [actions.payload, ...state.role.data];
    },
    getAllRoleAction: (state, actions) => {
      state.role.data = actions.payload;
    },
    deleteRoleAction: (state, actions) => {
      state.role.data = state.role.data.filter(
        (i) => i._id !== actions.payload._id
      );
    },
    // category
    createCategoryAction: (state, actions) => {
      state.category.data = [actions.payload, ...state.category.data];
    },
    getAllCategoryAction: (state, actions) => {
      state.category.data = actions.payload;
    },
    deleteCategoryAction: (state, actions) => {
      state.category.data = state.category.data.filter(
        (i) => i._id !== actions.payload._id
      );
    },
  },
});

export const {
  getAllRoleAction,
  createRoleAction,
  deleteRoleAction,
  createCategoryAction,
  getAllCategoryAction,
  deleteCategoryAction,
} = roleAndCategory.actions;

export default roleAndCategory.reducer;
