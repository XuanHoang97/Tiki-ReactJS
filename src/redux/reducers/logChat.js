import { toastError, toastSuccess } from 'components/helper/toastHelper';
import { ADD_CHAT, ADD_CHAT_FAILED, ADD_CHAT_SUCCESS, DELETE_CHAT, DELETE_CHAT_FAILED, DELETE_CHAT_SUCCESS, FETCH_CHAT, FETCH_CHAT_FAILED, FETCH_CHAT_SUCCESS, FILTER_CHAT_SUCCESS, SET_CHAT_EDITTING, UPDATE_CHAT, UPDATE_CHAT_FAILED, UPDATE_CHAT_SUCCESS } from '../../contants/logchat';

const initialstate = {
    listChat: [],
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
                const { error } = action.payload;
                // toastError(error);
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

            // case SET_CHAT_EDITTING:
            //     {
            //         const { task } = action.payload;
            //         return {
            //             ...state,
            //             taskEditting: task
            //         };
            //     }
            // case UPDATE_CHAT:
            //     {
            //         return {
            //             ...state,
            //         };
            //     }
            // case UPDATE_CHAT_SUCCESS:
            //     {
            //         const { data } = action.payload;
            //         const { listtash } = state;
            //         const index = listtash.findIndex(item => item.id === data.id);
            //         if (index !== -1) {
            //             const newList = [
            //                 ...listtash.slice(0, index),
            //                 data,
            //                 ...listtash.slice(index + 1)
            //             ];
            //             toastSuccess('Cập nhật công việc thành công');
            //             return {
            //                 ...state,
            //                 listtash: newList
            //             };
            //         }
            //         return {
            //             ...state,
            //         };
            //     }
            // case UPDATE_CHAT_FAILED:
            //     {
            //         const { error } = action.payload;
            //         toastError(error);
            //         return {
            //             ...state,
            //         };
            //     }
            // case DELETE_CHAT:
            //     {
            //         return {
            //             ...state,
            //         };
            //     }
            // case DELETE_CHAT_SUCCESS:
            //     {
            //         const { data: taskId } = action.payload;
            //         toastSuccess('Xóa công việc thành công');
            //         return {
            //             ...state,
            //             listtash: state.listtash.filter(item => item.id !== taskId)
            //         };
            //     }
            // case DELETE_CHAT_FAILED:
            //     {
            //         const { error } = action.payload;
            //         toastError(error);
            //         return {
            //             ...state,
            //         };
            //     }
        default:
            return state;
    }
};
export default reducer;