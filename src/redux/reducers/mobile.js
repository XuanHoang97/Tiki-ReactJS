import { INIT_STATE } from "contants/contains"
import { getDataMobile, getType } from "../actions"


export default function mobileReducers(state = INIT_STATE.mobiles, action) {
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