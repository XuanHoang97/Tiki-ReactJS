import { INIT_STATE } from "contants/contains"
import { getDataSearchSpecial, getType } from "../actions"

export default function searchSpecialReducers(state = INIT_STATE.searchSpecial, action) {
    switch (action.type) {
        case getType(getDataSearchSpecial.getSearchSpecialRequest):
            return {
                ...state,
            }
        case getType(getDataSearchSpecial.getSearchSpecialSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataSearchSpecial.getSearchSpecialFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}