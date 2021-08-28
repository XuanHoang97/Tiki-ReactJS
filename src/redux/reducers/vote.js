import { CHANGE_MODAL_CONTENT, CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL, CHANGE_BG_CREATE, CHANGE_BG_EDIT, CHANGE_BG_DELETE } from '../../contants/vote';
import { HIDE_LOADING, SHOW_LOADING } from '../../contants/ui';
import {  getType, getDataVote, createDataVote, updateDataVote } from 'redux/actions';

const initialstate = {
    showModal: false,
    title: '',
    background: '',
    component: null
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true,
            };

        case HIDE_MODAL:
            return {
                ...state,
                showModal: false,
                title: '',
                background:'',
                component: null
            };

        case CHANGE_BG_CREATE:
            const { background } = action.payload;
            return {
                ...state,
                background
            };

        // case CHANGE_BG_EDIT:
        //     const { background } = action.payload;
        //     return {
        //         ...state,
        //         background
        //     };

        // case CHANGE_BG_DELETE:
        //     const { background } = action.payload;
        //     return {
        //         ...state,
        //         background
        //     };

        case CHANGE_MODAL_TITLE:
            const { title } = action.payload;
            return {
                ...state,
                title
            };

        case CHANGE_MODAL_CONTENT:
            const { component } = action.payload;
            return {
                ...state,
                component
            };

        case getType(getDataVote.getVoteRequest):
            return {
                ...state,
            }
        case getType(getDataVote.getVoteSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataVote.getVoteFailure):
            return {
                ...state,
            }

        case getType(createDataVote.createVoteSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        case getType(updateDataVote.updateVoteSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        default:
            return state;
    }
};

export default reducer;