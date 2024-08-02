import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/auth.slice";
import headerSlice from "../slices/header";
import modalSlice from "../slices/modal";

const rootReducer = combineReducers({
    auth: authSlice,
    header: headerSlice,
    modal: modalSlice,
});

export default rootReducer;
