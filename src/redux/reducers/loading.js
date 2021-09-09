import { SHOW_LOADING, HIDE_LOADING } from "../../contants/loading";

const initialstate = {
  showLoading: false,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
      
    case HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
