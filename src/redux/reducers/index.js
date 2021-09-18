import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form'; 
import mobiles from './mobile';
import laptop from './laptop';
import prodSuggest from './productSuggest';
import loading from './loading';
import vote from './vote';
import news from './new';
import logChat from './logChat';
import catagory from './catagory';
import preferent from './preferent';
import slide from './slide';
import searchSpecial from './searchSpecial';
import catagoryMenu from './catagoryMenu';
import cart from './cart';
import account from './account';
import chat from './chat';

export default combineReducers({
    mobiles,
    laptop,
    prodSuggest,
    loading,
    vote,
    news,
    logChat,
    catagory,
    preferent,
    slide,
    searchSpecial,
    catagoryMenu,
    cart,
    account,
    chat,
    // form: formReducer
})