import * as account from "contants/account";
import { createActions } from "redux-actions";

export const checkExisted = createActions({
    checkExistedRequest: (payload) => payload,
    checkExistedSuccess: (payload) => payload,
    checkExistedFailure: (err) => err
})

export const registerUser = createActions({
    registerUserRequest: (payload) => payload,
    registerUserSuccess: (payload) => payload,
    registerUserFailure: (err) => err
})

export const loginUser = createActions({
    loginUserRequest: (payload) => payload,
    loginUserSuccess: (payload) => payload,
    loginUserFailure: (err) => err
})

export const getName = (payload) => {
    return ({
        type: account.GET_USER_NAME,
        payload
    })
}

export const showModalAccount = () => {
    return ({
        type: account.SHOW_MODAL_ACCOUNT
    })
}

export const hideModalAccount = () => {
    return ({
        type: account.HIDE_MODAL_ACCOUNT
    })
}