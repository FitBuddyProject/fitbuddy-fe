/**
 * @description buddy 행동 관련 saga
 */

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actionAPI from "api/action";
import { actionActions } from "./action.slice";

function* actionSaga() {
  // yield takeLatest(actionActions.getHistories.type, getHistories);
}

export default actionSaga;
