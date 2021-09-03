import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import * as api from "../../APIs";
import * as actions from "../actions";
import { hideLoading, showLoading } from "../actions/loading";
import { FETCH_CHAT, ADD_CHAT, UPDATE_CHAT, DELETE_CHAT } from "../../contants/logchat";
import { addChat, fetchListChatSuccess, fetchListChatFailed, addChatFailed, addChatSuccess, updateChat, updateChatSuccess, updateChatFailed, deleteChat, deleteChatSuccess, deleteChatFailed } from "redux/actions/logchat";
import { hideModal } from "redux/actions/vote";

function* getDataMobileSaga() {
    try {
        // yield put(showLoading());
        const mobile = yield call(api.getDataMobile);
        yield put(actions.getDataMobile.getDataMobileSuccess(mobile.data));
    } catch (error) {
        yield put(actions.getDataMobile.getDataMobileFailure(error));
    }
    // yield delay(500);
    // yield put(hideLoading());
}

function* getDataLaptopSaga() {
    try {
        const laptop = yield call(api.getDataLaptop);
        yield put(actions.getDataLaptop.getDataLaptopSuccess(laptop.data));
    } catch (error) {
        yield put(actions.getDataLaptop.getDataLaptopFailure(error));
    }
}

function* getDataCatagory() {
    try {
        const catagory = yield call(api.getDataCatagorySpe);
        yield put(actions.getDataCatagory.getCatagorySuccess(catagory.data));
    } catch (error) {
        yield put(actions.getDataCatagory.getCatagoryFailure(error));
    }
}

function* getDataPreferent() {
    try {
        const preferent = yield call(api.getDataPreferent);
        yield put(actions.getDataPreferent.getPreferentSuccess(preferent.data));
    } catch (error) {
        yield put(actions.getDataPreferent.getPreferentFailure(error));
    }
}

function* getDataCatagoryMenu() {
    try {
        const catagoryMenu = yield call(api.getDataCatagoryMenu);
        yield put(
            actions.getDataCatagoryMenu.getCatagoryMenuSuccess(catagoryMenu.data)
        );
    } catch (error) {
        yield put(actions.getDataCatagoryMenu.getCatagoryMenuFailure(error));
    }
}

function* getDataSlide() {
    try {
        const slide = yield call(api.getDataSlide);
        yield put(actions.getDataSlide.getSlideSuccess(slide.data));
    } catch (error) {
        yield put(actions.getDataSlide.getSlideFailure(error));
    }
}

function* getDataSearchSpecial() {
    try {
        const searchSpecial = yield call(api.getDataSearchSpecial);
        yield put(actions.getDataSearchSpecial.getSearchSpecialSuccess(searchSpecial.data));
    } catch (error) {
        yield put(actions.getDataSearchSpecial.getSearchSpecialFailure(error));
    }
}


function* getDataNew() {
    try {
        const news = yield call(api.getDataNew);
        yield put(actions.getDataNew.getNewSuccess(news.data));
    } catch (error) {
        yield put(actions.getDataNew.getNewFailure(error));
    }
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
        const resp = yield call(api.deleteChat, id);
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
    yield takeLatest(actions.getDataCatagory.getCatagoryRequest, getDataCatagory);
    yield takeLatest(actions.getDataPreferent.getPreferentRequest, getDataPreferent);
    yield takeLatest(actions.getDataSlide.getSlideRequest, getDataSlide);
    yield takeLatest(actions.getDataNew.getNewRequest, getDataNew);
    yield takeLatest(actions.getDataSearchSpecial.getSearchSpecialRequest, getDataSearchSpecial);
    yield takeLatest(actions.getDataCatagoryMenu.getCatagoryMenuRequest, getDataCatagoryMenu);

    // vote and comment product 
    yield takeLatest(FETCH_CHAT, getDataVote);
    yield takeLatest(ADD_CHAT, addChatSaga);
    yield takeLatest(UPDATE_CHAT, updateChatSaga);
    yield takeLatest(DELETE_CHAT, deleteChatSaga);

}
export default mySaga;