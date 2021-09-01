import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getDataMobile = createActions({
    getDataMobileRequest: undefined,
    getDataMobileSuccess: (payload) => payload,
    getDataMobileFailure: (err) => err
})

export const getDataLaptop = createActions({
    getDataLaptopRequest: undefined,
    getDataLaptopSuccess: (payload) => payload,
    getDataLaptopFailure: (err) => err
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

export const getDataSearchSpecial = createActions({
    getSearchSpecialRequest: undefined,
    getSearchSpecialSuccess: (payload, id) => payload,
    getSearchSpecialFailure: (err) => err
})


export const getDataCatagoryMenu = createActions({
    getCatagoryMenuRequest: undefined,
    getCatagoryMenuSuccess: (payload) => payload,
    getCatagoryMenuFailure: (err) => err
})

// Vote and comment product 
export const getDataVote = createActions({
    getVoteRequest: undefined,
    getVoteSuccess: (payload) => payload,
    getVoteFailure: (err) => err
})

export const createDataVote = createActions({
    createVoteRequest: (payload) => payload,
    createVoteSuccess: (payload) => payload,
    createVoteFailure: (err) => err
})

export const updateDataVote = createActions({
    updateVoteRequest: (payload) => payload,
    updateVoteSuccess: (payload) => payload,
    updateVoteFailure: (err) => err
})

export const deleteDataVote = createActions({
    deleteVoteRequest: (payload) => payload,
    deleteVoteSuccess: (payload) => payload,
    deleteVoteFailure: (err) => err
})