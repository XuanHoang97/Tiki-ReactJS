import { INIT_STATE } from "contants/contains"
import { getDataNew, getType } from "../actions"

export default function newReducers(state = INIT_STATE.new, action) {
    switch (action.type) {
        case getType(getDataNew.getNewRequest):
            return {
                ...state,
            }
        case getType(getDataNew.getNewSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataNew.getNewFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}