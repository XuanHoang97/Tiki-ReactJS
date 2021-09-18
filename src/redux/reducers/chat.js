const { getType } = require("redux/actions");
const { getChat, createChat } = require("redux/actions/chat");

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
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}

export default chatReducer