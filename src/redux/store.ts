import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH.toString(),
          REHYDRATE.toString(),
          PAUSE.toString(),
          PERSIST.toString(),
          PURGE.toString(),
          REGISTER.toString(),
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
