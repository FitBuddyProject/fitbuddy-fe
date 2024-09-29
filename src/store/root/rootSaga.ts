import { all, fork } from "redux-saga/effects";
import authSaga from "../slices/auth/auth.saga";
import buddySaga from "store/slices/buddy/buddy.saga";
import actionSaga from "store/slices/action/action.saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(buddySaga), fork(actionSaga)]);
}
