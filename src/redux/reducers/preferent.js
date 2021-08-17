import { getDataPreferent, getType } from "../actions"
import { INIT_STATE } from "../contains"

export default function catagoryReducers(state = INIT_STATE.preferent, action) {
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