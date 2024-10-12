import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from "@reduxjs/toolkit";
import { authActions } from "./auth.slice";
import api from "../../../api/api";

const headerConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const prefix = '/v1/user'

function* authSaga() {
    yield takeLatest(authActions.loginRequest.type, loginRequest);

}

/*
* DESC: loginRequest
* */
function* loginRequest({ payload }: PayloadAction<any>) {
    let config: AxiosRequestConfig = { ...headerConfig };

    try {
        const response: AxiosResponse<any> = yield call(
            axios.patch,
            `${prefix}/sign/in`,
            {phone: payload.phone},
            config
        );
        const { status,data, headers} = response;
        console.log("response:: ", response)
        if (status === 200) {
            console.log('success')
            yield put(authActions.loginRequestSuccess(data));
            yield put(authActions.loginRequestSuccessSetHeaders(headers));
        }
        return data;

    } catch (e) {
        console.log("error occured:: ", e);
        yield put(authActions.loginRequestFailed());
    }
}

export default authSaga;
