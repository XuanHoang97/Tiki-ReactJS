import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import mobiles from './mobile';
import loading from './ui';
import vote from './vote';
import logChat from './logChat';
import catagory from './catagory';
import preferent from './preferent';
import slide from './slide';
import catagoryMenu from './catagoryMenu';
import cart from './cart';

export default combineReducers({
    mobiles,
    loading,
    vote,
    logChat,
    catagory,
    preferent,
    slide,
    catagoryMenu,
    cart,

    form: formReducer
})