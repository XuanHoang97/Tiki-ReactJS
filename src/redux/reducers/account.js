import * as account from "contants/account";
import { getType } from "redux/actions";
import { checkExisted, loginUser, registerUser } from "redux/actions/account";

const initialstate = {
    existed: null,
    data: null,
    dataLogin: null,
    username: '',
    showModal: false
}

const accountReducer = (state = initialstate, action) => {
    switch (action.type) {

        case getType(registerUser.registerUserSuccess):

            return {
                ...state,
                data: action.payload
            }
        case getType(loginUser.loginUserSuccess):
            return {
                ...state,
                dataLogin: action.payload
            }
        case getType(checkExisted.checkExistedSuccess):
            return {
                ...state,
                existed: action.payload
            }
        case account.GET_USER_NAME:
            return {
                ...state,
                username: action.payload
            }
        case account.SHOW_MODAL_ACCOUNT:
            return {
                ...state,
                showModal: true
            }
        case account.HIDE_MODAL_ACCOUNT:
            return {
                ...state,
                showModal: false
            }
        default:
            return state
    }
}

export default accountReducer