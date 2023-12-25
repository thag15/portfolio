import { combineReducers } from "@reduxjs/toolkit";

import auth from "./Actions/actionsAuth";
import user from "./Actions/actionsUser";
import roleAndCategory from "./Actions/actionsRole&Category";
import product from "./Actions/actionProduct";
export const rootReducer = combineReducers({
  AUTH: auth,
  USER: user,
  ROLEANDCATEGORY: roleAndCategory,
  PRODUCT: product,
});
