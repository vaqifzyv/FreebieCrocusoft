import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { middleWares, reducer } from "./reducersAndMiddleWares";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

export const persistor = persistStore(store);
