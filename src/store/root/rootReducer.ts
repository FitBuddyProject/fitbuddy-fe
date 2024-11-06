import { combineReducers } from "@reduxjs/toolkit";

import headerSlice from "store/slices/header";
import modalSlice from "store/slices/modal";

import authSlice from "store/slices/auth/auth.slice";
import buddySlice from "store/slices/buddy/buddy.slice";
import actionSlice from "store/slices/action/action.slice";
import levelSlice from "store/slices/level";

const rootReducer = combineReducers({
  header: headerSlice,
  modal: modalSlice,
  auth: authSlice,
  buddy: buddySlice,
  action: actionSlice,
  level: levelSlice,
});

export default rootReducer;
