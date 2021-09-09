import { INIT_STATE } from "contants/contains"
import { getDataLaptop, getType } from "../actions"


export default function latopReducers(state = INIT_STATE.laptop, action) {
    switch (action.type) {
        case getType(getDataLaptop.getDataLaptopRequest):
            return {
                ...state,
            }
        case getType(getDataLaptop.getDataLaptopSuccess):
            return {
                ...state,
                data: action.payload
            }
        case getType(getDataLaptop.getDataLaptopFailure):
            return {
                ...state,
            }

        default:
            return state
    }
}