import { createActions } from "redux-actions";

export const getChat = createActions({
    getChatRequest: (payload) => payload,
    getChatSuccess: (payload) => payload,
    getChatFailure: (err) => err
})

export const createChat = createActions({
    createChatRequest: (payload) => payload,
    createChatSuccess: (payload) => payload,
    createChatFailure: (err) => err
})

export const updatesChat = createActions({
    updatesChatRequest: (payload) => payload,
    updatesChatSuccess: (payload) => payload,
    updatesChatFailure: (err) => err
})

export const deletesChat = createActions({
    deletesChatRequest: (payload) => payload,
    deletesChatSuccess: (payload) => payload,
    deletesChatFailure: (err) => err
})