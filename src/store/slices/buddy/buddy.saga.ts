/**
 * @description buddy 관련 saga
 */

import { AxiosResponse } from "axios";
import { buddyActions } from "./buddy.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import * as buddyAPI from "api/buddy";

// API 호출을 담당하는 worker saga
// 액션이 지니고 있는 값을 조회 싶다면 action을 파라미터로 받아와서 사용 가능
function* getBuddiesSaga(action: PayloadAction<any>) {
  try {
    // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 된다.
    // 액션 생성 함수에서 넘겨줬기 때문에 사용가능
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
