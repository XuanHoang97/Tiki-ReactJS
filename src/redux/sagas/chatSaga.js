import * as api from "../../APIs";
import { createChat, deletesChat, getChat, updatesChat } from "redux/actions/chat";
import { call, put, select } from "@redux-saga/core/effects";
import { hideModal } from "redux/actions/vote";

export function* getChatSaga(action) {
    try {
        const get = yield call(api.getChats, action.payload);
        yield put(getChat.getChatSuccess(get.data));
    } catch (error) {
        yield put(getChat.getChatFailure(error));
    }
}

export function* createChatSaga(action) {
    try {
        const get = yield call(api.postChat, action.payload);
        yield put(createChat.createChatSuccess(get.data));
        yield put(hideModal())
    } catch (error) {
        yield put(createChat.createChatFailure(error));
    }
}

export function* updateChatSaga(action) {
    try {
        const chatEditing = yield select((state) => state.logChat.chatEditting);
        const get = yield call(api.updatesChat, action.payload, chatEditing._id);
        yield put(updatesChat.updatesChatSuccess(get.data));
        yield put(hideModal())
    } catch (error) {
        yield put(updatesChat.updatesChatFailure(error));
    }
}

export function* deleteChatSaga(action) {
    try {
        const { _id } = action.payload
        const get = yield call(api.deleteChat, _id);
        yield put(deletesChat.deletesChatSuccess(get.data));
        yield put(hideModal())
    } catch (error) {
        yield put(deletesChat.deletesChatFailure(error));
    }
}