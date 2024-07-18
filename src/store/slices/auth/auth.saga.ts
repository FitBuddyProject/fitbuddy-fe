import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { authActions } from "./auth.slice";


// TODO: 다른 페이지로 빼주기
const headerConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const testUrl = process.env.REACT_APP_STAR_WARS_API;

function* authSaga() {
    yield takeLatest(authActions.loginRequest.type, login);

}


/*
* DESC: login
* */
function* login({ payload }: PayloadAction<any>) {
    let config: AxiosRequestConfig = { ...headerConfig };
    try {
        const response: AxiosResponse<any> = yield call(
            axios.get,
            `${testUrl}/people/1`,
            config
        );

        const { status, data } = response;
        if (status === 200) {
            yield put(authActions.loginRequestSuccess(data));
        }

    } catch (e) {
        console.log("error occured:: ", e);
        yield put(authActions.loginRequestFailed());
    }
}

export default authSaga;
