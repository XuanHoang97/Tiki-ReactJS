import { getDataCatagoryMenu, getType } from "../actions"
import { INIT_STATE } from "../contains"

export default function catagoryReducers(state = INIT_STATE.catagoryMenu, action) {
    switch (action.type) {
        case getType(getDataCatagoryMenu.getCatagoryMenuRequest):
            return {
                ...state,
            }
        case getType(getDataCatagoryMenu.getCatagoryMenuSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataCatagoryMenu.getCatagoryMenuFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}