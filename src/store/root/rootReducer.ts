import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/auth.slice";
import headerSlice from "../slices/header";

const rootReducer = combineReducers({
  auth: authSlice,
  header: headerSlice,
});

export default rootReducer;
