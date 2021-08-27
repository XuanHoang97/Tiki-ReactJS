import { takeLatest, takeEvery, call, put, delay } from "redux-saga/effects";
import * as api from "../../APIs";
import * as actions from "../actions";
import { hideLoading, showLoading } from "../actions/ui";
import { ADD_CHAT, DELETE_CHAT, FETCH_CHAT, UPDATE_CHAT, } from "../../contants/logchat";
import { addChat, addChatFailed, addChatSuccess } from "redux/actions/logchat";
import { hideModal } from "redux/actions/vote";

function* getDataMobileSaga() {
    try {
        yield put(showLoading());
        const mobile = yield call(api.getDataMobile);
        yield put(actions.getDataMobile.getDataMobileSuccess(mobile.data));
    } catch (error) {
        yield put(actions.getDataMobile.getDataMobileFailure(error));
    }
    yield delay(1500);
    yield put(hideLoading());
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

function* getDataVote() {
    try {
        const vote = yield call(api.getDataVote);
        yield put(actions.getDataVote.getVoteSuccess(vote.data));
    } catch (error) {
        yield put(actions.getDataVote.getVoteFailure(error));
    }
}

function* addChatSaga({ payload }) {
    const { info, cmt } = payload;
    yield put(showLoading());
    const resp = yield call(addChat, {
        info,
        cmt,
    });

    const { data } = resp;
    try {
        yield put(addChatSuccess(data));
        yield put(hideModal());
    } catch (err) {
        yield put(addChatFailed(data));
    }

    delay(2000);
    yield put(hideLoading());
}



function* mySaga() {
    yield takeLatest(actions.getDataMobile.getDataMobileRequest, getDataMobileSaga);
    yield takeLatest(actions.getDataCatagory.getCatagoryRequest, getDataCatagory);
    yield takeLatest(actions.getDataPreferent.getPreferentRequest, getDataPreferent);
    yield takeLatest(actions.getDataSlide.getSlideRequest, getDataSlide);

    yield takeLatest(actions.getDataVote.getVoteRequest, getDataVote);
    yield takeEvery(ADD_CHAT, addChatSaga);


    yield takeLatest(actions.getDataCatagoryMenu.getCatagoryMenuRequest, getDataCatagoryMenu);
}
export default mySaga;