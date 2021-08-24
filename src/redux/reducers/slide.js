import { INIT_STATE } from "contants/contains"
import { getDataSlide, getType } from "../actions"

export default function slideReducers(state = INIT_STATE.slide, action) {
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