import * as cart from "contants/cart"

//them product vao chi tiet san pham
export const addProduct = (payload) => {
    return ({
        type: cart.ADD_MOBILE,
        payload
    })
}

export const addLaptop = (payload) => {
    return ({
        type: cart.ADD_LAPTOP,
        payload
    })
}

export const addNewCodeOrder = (codeOrder) => {
    return ({
        type: 'ADD_CODE_ORDER',
        payload: codeOrder
    })
}

//so luong san pham
export const countProduct = (payload) => {
    return ({
        type: cart.COUNT_PRODUCT,
        payload
    })
}

export const upCount = () => {
    return ({
        type: cart.UP_COUNT_PRODUCT
    })
}

export const downCount = () => {
    return ({
        type: cart.DOWN_COUNT_PRODUCT
    })
}

//them vao gio hang
export const addToCart = (payload) => {
    return ({
        type: cart.ADD_TO_CART,
        payload
    })
}

//Xoa item gio hang
export const deleteItemCart = (id) => {
    return ({
        type: cart.DELETE_ITEM_CART,
        payload: id
    })
}