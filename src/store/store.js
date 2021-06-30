import { tikiData } from '../APIs/firebaseConnect';
import axios from "axios";
var redux = require('redux');

const tikiInitialState = {
    viewMore: false,
}
const allReducer = (state = tikiInitialState, action) => {
    switch (action.type) {
        case "SHOW_MORE":
            console.log('load tahnh cong');
            return {...state, viewMore:!state.viewMore}


        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function() {
    console.log(JSON.stringify(store.getState()));
})
export default store;