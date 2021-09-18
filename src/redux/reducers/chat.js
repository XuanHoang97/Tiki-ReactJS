import { toastSuccess } from "components/helper/toastHelper";

const { getType } = require("redux/actions");
const { getChat, createChat, updatesChat, deletesChat } = require("redux/actions/chat");

const initialstate = {
    data: []
}

const chatReducer = (state = initialstate, action) => {
    switch (action.type) {
        case getType(getChat.getChatSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(createChat.createChatSuccess):
            return {
                ...state,
                data: [action.payload, ...state.data]
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
                toastSuccess('Sửa đánh giá sản phẩm thành công');
                return {
                    ...state,
                    data: newChat
                }
            }
            return {
                ...state
            }
        case getType(deletesChat.deletesChatSuccess):
            toastSuccess('Xóa đánh giá thành công');
            return {
                ...state,
                data: state.data.filter(chat => chat._id !== action.payload._id)
            }
        default:
            return state
    }
}

export default chatReducer