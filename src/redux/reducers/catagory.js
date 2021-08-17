import { getDataCatagory, getType } from "../actions"
import { INIT_STATE } from "../contains"

export default function catagoryReducers(state = INIT_STATE.catagory, action) {
    switch (action.type) {
        case getType(getDataCatagory.getCatagoryRequest):
            return {
                ...state,
            }
        case getType(getDataCatagory.getCatagorySuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataCatagory.getCatagoryFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}