import { takeLatest, takeEvery, call, put, delay, select } from "redux-saga/effects";
import * as api from "../../APIs";
import * as actions from "../actions";
import { hideLoading, showLoading } from "../actions/ui";
import { FETCH_CHAT, ADD_CHAT,  UPDATE_CHAT, DELETE_CHAT } from "../../contants/logchat";
import { addChat, addChatFailed, addChatSuccess, updateChat, updateChatSuccess, updateChatFailed } from "redux/actions/logchat";
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

function* addChatSaga(action) {
    try {
        const resp = yield call(api.addChat, action.payload);
        yield put(actions.createDataVote.createVoteSuccess(resp.data));
        yield put(hideModal());
    } catch (err) {
        yield put(actions.createDataVote.createVoteFailure(err));
    }
}

function* updateChatSaga({ action }) {
    try{
        const chatEditing = yield select((state) => state.logChat.chatEditting);
        const resp = yield call( api.updateChat, action.payload, chatEditing.id );
        yield put(actions.updateDataVote.updateVoteSuccess(resp.data));
        yield put(hideModal());
    }
    catch (err){
        yield put(action.updateDataVote.updateVoteFailed(err));
    }
}

function* mySaga() {
    yield takeLatest(actions.getDataMobile.getDataMobileRequest, getDataMobileSaga);
    yield takeLatest(actions.getDataCatagory.getCatagoryRequest, getDataCatagory);
    yield takeLatest(actions.getDataPreferent.getPreferentRequest, getDataPreferent);
    yield takeLatest(actions.getDataSlide.getSlideRequest, getDataSlide);
    yield takeLatest(actions.getDataCatagoryMenu.getCatagoryMenuRequest, getDataCatagoryMenu);

    yield takeLatest(actions.getDataVote.getVoteRequest, getDataVote);
    yield takeLatest(actions.createDataVote.createVoteRequest, addChatSaga);
    yield takeLatest(actions.updateDataVote.updateVoteRequest, updateChatSaga);


}
export default mySaga;