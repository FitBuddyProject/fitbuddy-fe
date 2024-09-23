/**
 * @description buddy 행동 관련 saga
 */

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actionAPI from "api/action";
import { actionActions } from "./action.slice";

function* getHistories(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse<any> = yield call(actionAPI.getHistories);
    yield put(actionActions.getHistoriesSuccess(response.data));
  } catch (error: any) {
    yield put(actionActions.getHistoriesFailed(error.message));
  }
}

function* getCalendar(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse<any> = yield call(actionAPI.getCalendar);
    yield put(actionActions.getCalendarSuccess(response.data));
  } catch (error: any) {
    yield put(actionActions.getCalendarFailed(error.message));
  }
}

function* startAction(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse<any> = yield call(actionAPI.startAction, action.payload);
    yield put(actionActions.startActionSuccess(response.data));
  } catch (error: any) {
    yield put(actionActions.startActionFailed(error.message));
  }
}

function* actionSaga() {
  yield takeLatest(actionActions.getHistories.type, getHistories);
  yield takeLatest(actionActions.getCalendar.type, getCalendar);
  yield takeLatest(actionActions.startAction.type, startAction);
}

export default actionSaga;
