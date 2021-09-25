import * as api from "../../APIs";
import { createChat, deletesChat, getChat, updatesChat } from "redux/actions/chat";
import { call, put } from "@redux-saga/core/effects";
import { hideModal } from "redux/actions/vote";
import io from 'socket.io-client'
import { eventChannel } from "@redux-saga/core";

export const socket = io('http://localhost:5000/');

export function connectSocket() {
    return new Promise(resolve => {
        socket.on('connect', () => {
            resolve(socket);
            socket.emit('join', 'Hello server from client')
        });

    });
}
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
        yield call(api.postChat, action.payload);

        yield put(hideModal())
    } catch (error) {
        yield put(createChat.createChatFailure(error));
    }
}

export function* updateChatSaga(action) {
    try {
        yield call(api.updatesChat, action.payload, action.payload._id);
        // yield put(updatesChat.updatesChatSuccess(get.data))

        yield put(hideModal())
    } catch (error) {
        yield put(updatesChat.updatesChatFailure(error));
    }
}

export function* deleteChatSaga(action) {
    try {
        const { username, _id } = action.payload
        yield call(api.deleteChat, { username }, _id);
        // yield put(deletesChat.deletesChatSuccess(get.data))
        yield put(hideModal())
    } catch (error) {
        yield put(deletesChat.deletesChatFailure(error));
    }
}

export function subscribe(socket) {
    return eventChannel(emit => {

        socket.on("updatemessage", data => {
            emit(updatesChat.updatesChatSuccess(data))
        })
        socket.on("deletemessage", data => {
            emit(deletesChat.deletesChatSuccess(data))
        })
        return () => { };

    })
}