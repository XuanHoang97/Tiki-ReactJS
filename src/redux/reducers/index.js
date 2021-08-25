import { combineReducers } from "redux";
import mobiles from './mobile';
import ui from './ui';
import catagory from './catagory';
import preferent from './preferent';
import slide from './slide';
import catagoryMenu from './catagoryMenu';
import cart from './cart';

export default combineReducers({
    mobiles,
    ui,
    catagory,
    preferent,
    slide,
    catagoryMenu,
    cart
})