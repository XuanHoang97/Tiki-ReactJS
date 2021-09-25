import axios from 'axios'

export const URL = `https://api-tiki-clone.herokuapp.com/api/v2`
// const URL = `http://localhost:5000/api/v2`
// const URL3 = `https://y6896.sse.codesandbox.io` //All

export const getDataMobile = () => axios.get(`${URL}/product_mobile/`)

export const getDataLaptop = () => axios.get(`${URL}/product_laptop/`)

export const getDataProductSuggest = () => axios.get(`${URL}/product_suggestion/`)

export const getDataCatagorySpe = () => axios.get(`${URL}/category_special/`)

export const getDataPreferent = () => axios.get(`${URL}/preferent/`)

export const getDataSlide = () => axios.get(`${URL}/slide/`)

export const getDataNew = () => axios.get(`${URL}/new_event/`)

export const getDataSearchSpecial = () => axios.get(`${URL}/search_special/`)

export const getDataCatagoryMenu = () => axios.get(`${URL}/category_menu/`)

//account
export const postExisted = (data) => {
    return axios.post(`${URL}/auth/exist`, data)
}

export const postRegister = (data) => {
    return axios.post(`${URL}/auth/register`, data)
}

export const postLogin = (data) => {
    return axios.post(`${URL}/auth/login`, data)
}

//chat
export const getChats = (idProduct) => {
    return axios.get(`${URL}/chat/${idProduct}`)
}

export const postChat = (data) => {
    return axios.post(`${URL}/chat`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken')) || ''}`
        }
    })
}

export const updatesChat = (data, chatId) => {
    return axios.put(`${URL}/chat/${chatId}`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken')) || ''}`
        }
    })
}

export const deleteChat = (data, chatId) => {
    return axios.delete(`${URL}/chat/${chatId}`, {
        data,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken')) || ''}`
        }
    })
}

