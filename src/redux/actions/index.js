import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getDataMobile = createActions({
    getDataMobileRequest: undefined,
    getDataMobileSuccess: (payload) => payload,
    getDataMobileFailure: (err) => err
})

export const getDataCatagory = createActions({
    getCatagoryRequest: undefined,
    getCatagorySuccess: (payload) => payload,
    getCatagoryFailure: (err) => err
})

export const getDataPreferent = createActions({
    getPreferentRequest: undefined,
    getPreferentSuccess: (payload) => payload,
    getPreferentFailure: (err) => err
})

export const getDataSlide = createActions({
    getSlideRequest: undefined,
    getSlideSuccess: (payload) => payload,
    getSlideFailure: (err) => err
})

export const getDataVote = createActions({
    getVoteRequest: undefined,
    getVoteSuccess: (payload) => payload,
    getVoteFailure: (err) => err
})

export const getDataCatagoryMenu = createActions({
    getCatagoryMenuRequest: undefined,
    getCatagoryMenuSuccess: (payload) => payload,
    getCatagoryMenuFailure: (err) => err
})