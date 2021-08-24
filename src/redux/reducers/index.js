import { combineReducers } from "redux";
import posts from './mobile';
import catagory from './catagory';
import preferent from './preferent';
import slide from './slide';
import catagoryMenu from './catagoryMenu';

export default combineReducers({
    posts,
    catagory,
    preferent,
    slide,
    catagoryMenu
})
