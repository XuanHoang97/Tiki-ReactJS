import { call, put } from "@redux-saga/core/effects";
import { postExisted, postLogin, postRegister } from "APIs";
import { checkExisted, getName, hideModalAccount, loginUser, registerUser } from "redux/actions/account";
import { hideLoading, showLoading } from "redux/actions/loading";

export function* existedAccount(action) {
    try {
        yield put(showLoading())
        const exist = yield call(postExisted, action.payload)
        yield put(checkExisted.checkExistedSuccess(exist.data))
    } catch (err) {
        console.log(err)
        yield put(checkExisted.checkExistedFailure(err))
    }
    yield put(hideLoading())
}

export function* registerAccount(action) {
    try {
        yield put(showLoading())
        const phone = yield call(postRegister, action.payload)
        yield put(registerUser.registerUserSuccess(phone.data))
    } catch (err) {
        console.log(err)
        yield put(registerUser.registerUserFailure(err))
    }
    yield put(hideLoading())
}

export function* loginAccount(action) {
    try {
        yield put(showLoading())
        const user = yield call(postLogin, action.payload)
        yield put(loginUser.loginUserSuccess(user.data))
        yield localStorage.setItem('accessToken', JSON.stringify(user.data.accessToken))
        yield localStorage.setItem('refreshToken', JSON.stringify(user.data.refreshToken))
        yield put(getName(user.data.username))
        yield put(hideModalAccount())
    } catch (error) {
        console.log(error)
        yield put(loginUser.loginUserFailure(error))
    }
    yield put(hideLoading())
}