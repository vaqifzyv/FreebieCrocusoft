import { prApi } from "../redux/index";
import basketReducer from "./features/Basket";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};

const rootReducer = combineReducers({
  [prApi.reducerPath]: prApi.reducer,
  basket: basketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const middleWares = [prApi.middleware];

export const reducer = persistedReducer;
