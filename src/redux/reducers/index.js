import { combineReducers } from "redux";
import mobiles from './mobile';
import loading from './ui';
import catagory from './catagory';
import preferent from './preferent';
import slide from './slide';
import catagoryMenu from './catagoryMenu';
import cart from './cart';

export default combineReducers({
    mobiles,
    loading,
    catagory,
    preferent,
    slide,
    catagoryMenu,
    cart
})