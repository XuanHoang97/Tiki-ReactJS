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