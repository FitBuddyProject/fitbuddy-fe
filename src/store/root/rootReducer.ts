import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/auth.slice";
import headerSlice from "../slices/header";
import modalSlice from "../slices/modal";
import historySlice from "store/slices/history/history.slice";

const rootReducer = combineReducers({
  auth: authSlice,
  header: headerSlice,
  modal: modalSlice,
  history: historySlice
});

export default rootReducer;
