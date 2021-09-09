import { CHANGE_MODAL_CONTENT, CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL, CHANGE_BG} from '../../contants/vote';
import { HIDE_LOADING, SHOW_LOADING } from '../../contants/loading';
import {  getType, getDataVote, createDataVote, updateDataVote, deleteDataVote } from 'redux/actions';

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

        case CHANGE_BG:
            const { background } = action.payload;
            return {
                ...state,
                background
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

        case getType(createDataVote.createVoteSuccess):
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        case getType(updateDataVote.updateVoteSuccess):
            console(action.payload)
            return {
                ...state,
                data: state.data.map(vote => vote.id === action.payload.id ? action.payload:vote)

            }
        
        case getType(deleteDataVote.deleteVoteSuccess):
            return {
                ...state,
                data: state.data.map(vote => vote.id === action.payload.id ? action.payload:vote)
            }

        default:
            return state;
    }
};

export default reducer;