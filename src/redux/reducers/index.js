import { combineReducers } from "redux";
import posts from './posts';
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
