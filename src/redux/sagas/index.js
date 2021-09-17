import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import * as api from "../../APIs";
import * as actions from "../actions";
import * as account from "../actions/account";
import { hideLoading, showLoading } from "../actions/loading";
import { FETCH_CHAT, ADD_CHAT, UPDATE_CHAT, DELETE_CHAT } from "../../contants/logchat";
import { fetchListChatSuccess, fetchListChatFailed, addChatFailed, addChatSuccess, updateChatSuccess, updateChatFailed, deleteChatSuccess, deleteChatFailed } from "redux/actions/logchat";
import { hideModal } from "redux/actions/vote";
import { existedAccount, loginAccount, registerAccount } from "./account";
import { createChat, getChat } from "redux/actions/chat";
import { createChatSaga, getChatSaga } from "./chatSaga";
import { getDataSaga } from "./getData";

function getDataMobileSaga() {
    return getDataSaga(api.getDataMobile, actions.getDataMobile.getDataMobileSuccess,
        actions.getDataMobile.getDataMobileFailure)
}

function getDataLaptopSaga() {
    return getDataSaga(api.getDataLaptop, actions.getDataLaptop.getDataLaptopSuccess,
        actions.getDataLaptop.getDataLaptopFailure)
}

function getSuggestProductSaga() {
    return getDataSaga(api.getDataProductSuggest, actions.getDataProductSuggest.getSuggestSuccess,
        actions.getDataProductSuggest.getSuggestFailure)
}

function getDataCatagory() {
    return getDataSaga(api.getDataCatagorySpe, actions.getDataCatagory.getCatagorySuccess,
        actions.getDataCatagory.getCatagoryFailure)
}

function getDataPreferent() {
    return getDataSaga(api.getDataPreferent, actions.getDataPreferent.getPreferentSuccess,
        actions.getDataPreferent.getPreferentFailure)
}

function getDataCatagoryMenu() {
    return getDataSaga(api.getDataCatagoryMenu, actions.getDataCatagoryMenu.getCatagoryMenuSuccess,
        actions.getDataCatagoryMenu.getCatagoryMenuFailure)
}

function getDataSlide() {
    return getDataSaga(api.getDataSlide, actions.getDataSlide.getSlideSuccess,
        actions.getDataSlide.getSlideFailure)
}

function getDataSearchSpecial() {
    return getDataSaga(api.getDataSearchSpecial, actions.getDataSearchSpecial.getSearchSpecialSuccess,
        actions.getDataSearchSpecial.getSearchSpecialFailure)
}

function getDataNew() {
    return getDataSaga(api.getDataNew, actions.getDataNew.getNewSuccess,
        actions.getDataNew.getNewFailure)
}

// vote and comment product 
function* getDataVote() {
    try {
        const vote = yield call(api.getDataVote);
        yield put(fetchListChatSuccess(vote.data));
    } catch (error) {
        yield put(fetchListChatFailed(error));
    }
}

function* addChatSaga(action) {
    try {
        yield put(showLoading());
        const resp = yield call(api.addChat, action.payload);
        yield put(addChatSuccess(resp.data));
        yield put(hideModal());
    } catch (err) {
        yield put(addChatFailed(err));
    }
    delay(1000);
    yield put(hideLoading());
}

function* updateChatSaga({ payload }) {
    try {
        yield put(showLoading())
        const chatEditing = yield select((state) => state.logChat.chatEditting);
        const resp = yield call(
            api.updateChat, payload, chatEditing.id
        );
        const { data } = resp;
        yield put(updateChatSuccess(data));
        yield put(hideModal());

    } catch (err) {
        yield put(updateChatFailed(err));
    }
    delay(1000);
    yield put(hideLoading());

}

function* deleteChatSaga({ payload }) {
    try {
        yield put(showLoading());
        const { id } = payload;
        yield put(deleteChatSuccess(id));
        yield put(hideModal());
    } catch (err) {
        yield put(deleteChatFailed(err));
    }
    delay(1000);
    yield put(hideLoading());
}


function* mySaga() {
    yield takeLatest(actions.getDataMobile.getDataMobileRequest, getDataMobileSaga);
    yield takeLatest(actions.getDataLaptop.getDataLaptopRequest, getDataLaptopSaga);
    yield takeLatest(actions.getDataProductSuggest.getSuggestRequest, getSuggestProductSaga);
    yield takeLatest(actions.getDataCatagory.getCatagoryRequest, getDataCatagory);
    yield takeLatest(actions.getDataPreferent.getPreferentRequest, getDataPreferent);
    yield takeLatest(actions.getDataSlide.getSlideRequest, getDataSlide);
    yield takeLatest(actions.getDataNew.getNewRequest, getDataNew);
    yield takeLatest(actions.getDataSearchSpecial.getSearchSpecialRequest, getDataSearchSpecial);
    yield takeLatest(actions.getDataCatagoryMenu.getCatagoryMenuRequest, getDataCatagoryMenu);
    //account
    yield takeLatest(account.registerUser.registerUserRequest, registerAccount);
    yield takeLatest(account.loginUser.loginUserRequest, loginAccount);
    yield takeLatest(account.checkExisted.checkExistedRequest, existedAccount);

    //chat
    yield takeLatest(getChat.getChatRequest, getChatSaga);
    yield takeLatest(createChat.createChatRequest, createChatSaga);

    // vote and comment product 
    yield takeLatest(FETCH_CHAT, getDataVote);
    yield takeLatest(ADD_CHAT, addChatSaga);
    yield takeLatest(UPDATE_CHAT, updateChatSaga);
    yield takeLatest(DELETE_CHAT, deleteChatSaga);
}
export default mySaga;