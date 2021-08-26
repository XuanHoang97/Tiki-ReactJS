import axios from 'axios'

const URL = `https://61270106c2e8920017bc0ab9.mockapi.io/api` // category_special, slide, banner, category_special
const URL2 = `https://61275b59c2e8920017bc0c43.mockapi.io/api` //preferent, product_mobile, feature_special, new_event

export const getDataMobile = () => axios.get(`${URL2}/product_mobile/`)

export const getDataCatagorySpe = () => axios.get(`${URL}/category_special/`)

export const getDataPreferent = () => axios.get(`${URL2}/preferent/`)

export const getDataSlide = () => axios.get(`${URL}/slide/`)

export const getDataCatagoryMenu = () => axios.get(`${URL}/category_menu/`)

