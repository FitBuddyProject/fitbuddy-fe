import { fetchBuddies } from "api/buddy";
import { call, put } from "redux-saga/effects";

function* getBuddies() {
    try {
        const response = yield call(fetchBuddies);
        yield put({ type: "BUDDY_FETCH_SUCCESS", payload: response.data });
    } catch (error: any) {
        yield { type: "BUDDY_FETCH_FAILED", payload: error.message };
    }
}
