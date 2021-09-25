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

export const getDataProductSuggest = createActions({
    getSuggestRequest: undefined,
    getSuggestSuccess: (payload) => payload,
    getSuggestFailure: (err) => err
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

export const getDataNew = createActions({
    getNewRequest: undefined,
    getNewSuccess: (payload) => payload,
    getNewFailure: (err) => err
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