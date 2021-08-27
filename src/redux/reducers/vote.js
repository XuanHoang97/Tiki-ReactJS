import { CHANGE_MODAL_CONTENT, CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL } from '../../contants/vote';
import { HIDE_LOADING, SHOW_LOADING } from '../../contants/ui';
import { getDataVote, getType } from 'redux/actions';

const initialstate = {
    showModal: false,
    title: '',
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
                component: null
            };
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

        default:
            return state;
    }
};

export default reducer;