import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/auth.slice";
import headerSlice from "../slices/header";
import modalSlice from "../slices/modal";
import activitySlice from "../slices/activity";

const rootReducer = combineReducers({
  auth: authSlice,
  header: headerSlice,
  modal: modalSlice,
  activity: activitySlice,
});

export default rootReducer;
