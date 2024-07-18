import { all, fork } from 'redux-saga/effects';
import authSaga from "../slices/auth/auth.saga";


export default function* rootSaga() {
    yield all([
        fork(authSaga),
    ]);
}
