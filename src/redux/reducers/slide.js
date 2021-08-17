import { getDataSlide, getType } from "../actions"
import { INIT_STATE } from "../contains"

export default function catagoryReducers(state = INIT_STATE.slide, action) {
    switch (action.type) {
        case getType(getDataSlide.getSlideRequest):
            return {
                ...state,
            }
        case getType(getDataSlide.getSlideSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataSlide.getSlideFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}