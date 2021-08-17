import axios from 'axios'

const URL = `https://y6896.sse.codesandbox.io`

export const getDataMobile = () => axios.get(`${URL}/product_mobile/`)

export const getDataCatagorySpe = () => axios.get(`${URL}/category_special/`)

export const getDataPreferent = () => axios.get(`${URL}/preferent/`)

export const getDataSlide = () => axios.get(`${URL}/slide/`)

export const getDataCatagoryMenu = () => axios.get(`${URL}/category_menu/`)

