import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import logger from 'redux-logger';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const store = configureStore({
  reducer: {
    names: nameSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});