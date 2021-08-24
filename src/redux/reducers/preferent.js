import { INIT_STATE } from "contants/contains"
import { getDataPreferent, getType } from "../actions"

export default function preferentReducers(state = INIT_STATE.preferent, action) {
    switch (action.type) {
        case getType(getDataPreferent.getPreferentRequest):
            return {
                ...state,
            }
        case getType(getDataPreferent.getPreferentSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataPreferent.getPreferentFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}