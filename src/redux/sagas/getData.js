import { call, put } from "redux-saga/effects";

export function* getDataSaga(api, success, failure) {
    try {
        const get = yield call(api);
        yield put(success(get.data));
    } catch (error) {
        yield put(failure(error));
    }
}