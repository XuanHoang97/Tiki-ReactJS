import { INIT_STATE } from "contants/contains"
import { getDataCatagoryMenu, getType } from "../actions"

export default function catagoryMenuReducers(state = INIT_STATE.catagoryMenu, action) {
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