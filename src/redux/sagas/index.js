import { takeLatest, call, put, delay } from "redux-saga/effects";
import * as api from "../../APIs";
import * as actions from "../actions";
import { hideLoading, showLoading } from "../actions/ui";

function* getDataMobileSaga() {
  try {
    yield put(showLoading());
    const mobile = yield call(api.getDataMobile);
    yield put(actions.getDataMobile.getDataMobileSuccess(mobile.data));
  } catch (error) {
    yield put(actions.getDataMobile.getDataMobileFailure(error));
  }
  yield delay(1500);
  yield put(hideLoading());
}

function* getDataCatagory() {
  try {
    yield put(showLoading());
    const catagory = yield call(api.getDataCatagorySpe);
    yield put(actions.getDataCatagory.getCatagorySuccess(catagory.data));
  } catch (error) {
    yield put(actions.getDataCatagory.getCatagoryFailure(error));
  }
  yield delay(1500);
  yield put(hideLoading());
}

function* getDataPreferent() {
  try {
    yield put(showLoading());
    const preferent = yield call(api.getDataPreferent);
    yield put(actions.getDataPreferent.getPreferentSuccess(preferent.data));
  } catch (error) {
    yield put(actions.getDataPreferent.getPreferentFailure(error));
  }
  yield delay(1500);
  yield put(hideLoading());
}

function* getDataCatagoryMenu() {
  try {
    yield put(showLoading());
    const catagoryMenu = yield call(api.getDataCatagoryMenu);
    yield put(
      actions.getDataCatagoryMenu.getCatagoryMenuSuccess(catagoryMenu.data)
    );
  } catch (error) {
    yield put(actions.getDataCatagoryMenu.getCatagoryMenuFailure(error));
  }
  yield delay(1500);
  yield put(hideLoading());
}

function* getDataSlide() {
  try {
    yield put(showLoading());
    const slide = yield call(api.getDataSlide);
    yield put(actions.getDataSlide.getSlideSuccess(slide.data));
  } catch (error) {
    yield put(actions.getDataSlide.getSlideFailure(error));
  }
  yield delay(1500);
  yield put(hideLoading());
}

function* mySaga() {
  yield takeLatest(
    actions.getDataMobile.getDataMobileRequest,
    getDataMobileSaga
  );
  yield takeLatest(actions.getDataCatagory.getCatagoryRequest, getDataCatagory);
  yield takeLatest(
    actions.getDataPreferent.getPreferentRequest,
    getDataPreferent
  );
  yield takeLatest(actions.getDataSlide.getSlideRequest, getDataSlide);
  yield takeLatest(
    actions.getDataCatagoryMenu.getCatagoryMenuRequest,
    getDataCatagoryMenu
  );
}
export default mySaga;
