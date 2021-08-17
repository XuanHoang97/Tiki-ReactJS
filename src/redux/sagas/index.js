import { takeLatest, call, put } from "redux-saga/effects";
import * as api from '../../APIs';
import * as actions from "../actions";

function* getDataMobileSaga() {
    try {
        const mobile = yield call(api.getDataMobile)
        yield put(actions.getDataMobile.getDataMobileSuccess(mobile.data))
    } catch (error) {
        yield put(actions.getDataMobile.getDataMobileFailure(error))
    }
}

function* getDataCatagory() {
    try {
        const catagory = yield call(api.getDataCatagorySpe)
        yield put(actions.getDataCatagory.getCatagorySuccess(catagory.data))
    } catch (error) {
        yield put(actions.getDataCatagory.getCatagoryFailure(error))
    }
}

function* getDataPreferent() {
    try {
        const preferent = yield call(api.getDataPreferent)
        yield put(actions.getDataPreferent.getPreferentSuccess(preferent.data))
    } catch (error) {
        yield put(actions.getDataPreferent.getPreferentFailure(error))
    }
}

function* getDataCatagoryMenu() {
    try {
        const catagoryMenu = yield call(api.getDataCatagoryMenu)
        yield put(actions.getDataCatagoryMenu.getCatagoryMenuSuccess(catagoryMenu.data))
    } catch (error) {
        yield put(actions.getDataCatagoryMenu.getCatagoryMenuFailure(error))
    }
}

function* getDataSlide() {
    try {
        const slide = yield call(api.getDataSlide)
        yield put(actions.getDataSlide.getSlideSuccess(slide.data))
    } catch (error) {
        yield put(actions.getDataSlide.getSlideFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(actions.getDataMobile.getDataMobileRequest, getDataMobileSaga)
    yield takeLatest(actions.getDataCatagory.getCatagoryRequest, getDataCatagory)
    yield takeLatest(actions.getDataPreferent.getPreferentRequest, getDataPreferent)
    yield takeLatest(actions.getDataSlide.getSlideRequest, getDataSlide)
    yield takeLatest(actions.getDataCatagoryMenu.getCatagoryMenuRequest, getDataCatagoryMenu)

}


export default mySaga;