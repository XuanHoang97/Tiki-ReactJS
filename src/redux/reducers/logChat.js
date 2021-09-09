import { toastError, toastSuccess } from 'components/helper/toastHelper';
import { ADD_CHAT, ADD_CHAT_FAILED, ADD_CHAT_SUCCESS, DELETE_CHAT, DELETE_CHAT_FAILED, DELETE_CHAT_SUCCESS, FETCH_CHAT, FETCH_CHAT_FAILED, FETCH_CHAT_SUCCESS, SET_CHAT_EDITTING, UPDATE_CHAT, UPDATE_CHAT_FAILED, UPDATE_CHAT_SUCCESS } from '../../contants/logchat';

const initialstate = {
    listChat: [],
    chatEditting: null,
};

const reducer = (state = initialstate, action) => {

    switch (action.type) {
        case FETCH_CHAT:
            {
                return {
                    ...state,
                    listChat: []
                };
            }

        case FETCH_CHAT_SUCCESS:
            {
                const { data } = action.payload;

                return {
                    ...state,
                    listChat: data
                };
            }

        case FETCH_CHAT_FAILED:
            {
                // const { error } = action.payload;
                return {
                    ...state,
                    listChat: []
                };
            }

        case ADD_CHAT:
            {
                return {
                    ...state,
                };
            }

        case ADD_CHAT_SUCCESS:
            {
                const { data } = action.payload;
                toastSuccess('Thêm đánh giá thành công');
                return {
                    ...state,
                    listChat: [data].concat(state.listChat)
                };
            }

        case ADD_CHAT_FAILED:
            {
                const { error } = action.payload;
                toastError(error);
                return {
                    ...state,
                };
            }
        
        case SET_CHAT_EDITTING:
            {
                const { chat } = action.payload;
                return {
                    ...state,
                    chatEditting: chat,
                };
            }
        
        case UPDATE_CHAT: {
            return {
                ...state,
            };
        }

        case UPDATE_CHAT_SUCCESS: {
            const {data}= action.payload;
            const {listChat} = state;
            const index = listChat.findIndex(item => item.id === data.id);
            console.log(listChat)
            if( index !== -1){
                const newList = [
                    ...listChat.slice(0, index),
                    data,
                    ...listChat.slice(index+1)
                ];
                toastSuccess('Sửa đánh giá sản phẩm thành công');
                console.log(newList)
                return {
                    ...state,
                    listChat: newList
                };
            }
            return {
                ...state,
            };
        }

        case UPDATE_CHAT_FAILED: {
            const { error } =action.payload;
            toastError(error);
            return {
                ...state,
            };
        }

        case DELETE_CHAT: {
            return {
                ...state,
            };
        }
        case DELETE_CHAT_SUCCESS: {
            const {data:chatId}= action.payload;
            toastSuccess('Xóa đánh giá thành công');
            return {
                ...state,
                listChat: state.listChat.filter(item => item.id !== chatId)
            };
        }
        case DELETE_CHAT_FAILED: {
            const { error } =action.payload;
            toastError(error);
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
export default reducer;