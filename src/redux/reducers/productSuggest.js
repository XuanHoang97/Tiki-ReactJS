import { INIT_STATE } from "contants/contains"
import { getDataProductSuggest, getType } from "../actions"

export default function prodSuggestReducers(state = INIT_STATE.suggest, action) {
    switch (action.type) {
        case getType(getDataProductSuggest.getSuggestRequest):
            return {
                ...state,
            }

        case getType(getDataProductSuggest.getSuggestSuccess):
            return {
                ...state,
                data: action.payload
            }
            
        case getType(getDataProductSuggest.getSuggestFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}