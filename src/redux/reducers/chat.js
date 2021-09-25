import { ADD_PARAMS } from "contants/logchat";

const { getType } = require("redux/actions");
const { getChat, createChat, updatesChat, deletesChat } = require("redux/actions/chat");

const initialstate = {
    data: [],
    params: ''
}

const chatReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_PARAMS:
            return {
                ...state,
                params: action.payload
            }
        case getType(getChat.getChatSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(createChat.createChatSuccess):
            let product = [...state.data]
            if (action.payload.productId === state?.params) {
                product = [action.payload, ...state.data]
            }
            return {
                ...state,
                data: [...product]
            }
        case getType(updatesChat.updatesChatSuccess):
            const { data } = state;
            const index = data.findIndex(item => item._id === action.payload._id)
            if (index !== -1) {
                const newChat = [
                    ...data.slice(0, index),
                    action.payload,
                    ...data.slice(index + 1)
                ]
                return {
                    ...state,
                    data: newChat
                }
            }
            return {
                ...state
            }
        case getType(deletesChat.deletesChatSuccess):
            return {
                ...state,
                data: state.data.filter(chat => chat._id !== action.payload._id)
            }
        default:
            return state
    }
}

export default chatReducer