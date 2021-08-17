import { getDataMobile, getType } from "../actions"
import { INIT_STATE } from "../contains"

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getDataMobile.getDataMobileRequest):
            return {
                ...state,
            }
        case getType(getDataMobile.getDataMobileSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataMobile.getDataMobileFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}