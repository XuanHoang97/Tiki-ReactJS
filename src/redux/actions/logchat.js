import { ADD_CHAT, ADD_CHAT_FAILED, ADD_CHAT_SUCCESS, DELETE_CHAT, DELETE_CHAT_FAILED, DELETE_CHAT_SUCCESS, FETCH_CHAT, FETCH_CHAT_FAILED, FETCH_CHAT_SUCCESS, FILTER_CHAT, FILTER_CHAT_SUCCESS, SET_CHAT_EDITTING, UPDATE_CHAT, UPDATE_CHAT_FAILED, UPDATE_CHAT_SUCCESS } from '../../contants/logchat';

export const fetchListChat = (params = {}) => {
    return {
        type: FETCH_CHAT,
        payload: {
            params
        }
    };
};


export const fetchListChatSuccess = (data) => {
    return {
        type: FETCH_CHAT_SUCCESS,
        payload: {
            data
        }
    };
};

export const fetchListChatFailed = (error) => {
    return {
        type: FETCH_CHAT_FAILED,
        payload: {
            error
        }
    };
};

//Add Chat
export const addChat = (info, cmt) => {
    return {
        type: ADD_CHAT,
        payload: {
            info,
            cmt
        }
    };
};


export const addChatSuccess = (data) => {
    return {
        type: ADD_CHAT_SUCCESS,
        payload: {
            data
        }
    };
};

export const addChatFailed = (error) => {
    return {
        type: ADD_CHAT_FAILED,
        payload: {
            error
        }
    };
};

//edit 
export const setChatEditting = (Chat) => {
    return {
        type: SET_CHAT_EDITTING,
        payload: {
            Chat
        }
    };
};

//update
export const updateChat = (title, description, status = 0) => {
    return {
        type: UPDATE_CHAT,
        payload: {
            title,
            description,
            status
        }
    };
};


export const updateChatSuccess = (data) => {
    return {
        type: UPDATE_CHAT_SUCCESS,
        payload: {
            data
        }
    };
};

export const updateChatFailed = (error) => {
    return {
        type: UPDATE_CHAT_FAILED,
        payload: {
            error
        }
    };
};

export const deleteChat = (id) => {
    return {
        type: DELETE_CHAT,
        payload: {
            id,
        }
    };
};


export const deleteChatSuccess = (data) => {
    return {
        type: DELETE_CHAT_SUCCESS,
        payload: {
            data
        }
    };
};

export const deleteChatFailed = (error) => {
    return {
        type: DELETE_CHAT_FAILED,
        payload: {
            error
        }
    };
};