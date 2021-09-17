import * as api from "../../APIs";
import { createChat, getChat } from "redux/actions/chat";
import { call, put } from "@redux-saga/core/effects";
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
        console.log(get)
        yield put(createChat.createChatSuccess(get.data));
        yield put(hideModal())
    } catch (error) {
        yield put(createChat.createChatFailure(error));
    }
}