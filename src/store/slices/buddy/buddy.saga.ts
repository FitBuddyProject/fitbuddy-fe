/**
 * @description buddy 관련 saga
 */

import { AxiosResponse } from "axios";
import { buddyActions } from "./buddy.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as buddyAPI from "api/buddy";

function* getBuddiesSaga(action: PayloadAction<any>) {
  try {
    const response: AxiosResponse<any> = yield call(buddyAPI.getBuddies, { uuid: "" });
    yield put(buddyActions.getBuddiesSuccess(response.data));
  } catch (error: any) {
    yield put(buddyActions.getBuddiesError(error.message));
  }
}

// Watcher saga: 특정 액션을 감시하고
function* buddySaga() {
  yield takeLatest(buddyActions.getBuddies.type, getBuddiesSaga);
}

export default buddySaga;
