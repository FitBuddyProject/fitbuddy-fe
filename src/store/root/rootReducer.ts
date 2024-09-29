import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/auth.slice";
import headerSlice from "../slices/header";
import modalSlice from "../slices/modal";
import activitySlice from "../slices/activity";
import buddySlice from "store/slices/buddy/buddy.slice";

const rootReducer = combineReducers({
  auth: authSlice,
  buddy: buddySlice,
  header: headerSlice,
  modal: modalSlice,
  activity: activitySlice,
});

export default rootReducer;
