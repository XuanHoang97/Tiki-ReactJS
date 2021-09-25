import { takeLatest, call } from "redux-saga/effects";
import * as api from "../../APIs";
import * as actions from "../actions";
import * as account from "../actions/account";
import { existedAccount, loginAccount, registerAccount } from "./account";
import { createChat, deletesChat, getChat, updatesChat } from "redux/actions/chat";
import { connectSocket, createChatSaga, deleteChatSaga, getChatSaga, updateChatSaga } from "./chatSaga";
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
    yield takeLatest(updatesChat.updatesChatRequest, updateChatSaga);
    yield takeLatest(deletesChat.deletesChatRequest, deleteChatSaga);
    yield call(connectSocket)
}
export default mySaga;