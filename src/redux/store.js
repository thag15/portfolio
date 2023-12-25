import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import thunk from "redux-thunk";
const persistConfig = {
  key: "store",
  storage,
  blacklist: ["USER", "ROLEANDCATEGORY", "PRODUCT"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
