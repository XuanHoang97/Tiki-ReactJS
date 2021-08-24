import * as cart from "contants/cart";

const initialstate = {
    productDetail: undefined,
    count: 1,
    productsCart: []
}

const productReducer = (state = initialstate, action) => {
    switch (action.type) {
        case cart.ADD_MOBILE:
            return {
                ...state,
                productDetail: action.payload
            }
        case cart.COUNT_PRODUCT:
            return {
                ...state,
                count: action.payload
            }
        case cart.DOWN_COUNT_PRODUCT:
            return {
                ...state,
                count: state.count - 1
            }
        case cart.UP_COUNT_PRODUCT:

            return {
                ...state,
                count: state.count + 1
            }
        case cart.ADD_TO_CART:
            const { productsCart } = state
            productsCart.push(action.payload)
            return {
                ...state,
                productsCart: [...state.productsCart]
            }
        case cart.DELETE_ITEM_CART:
            const index = state.productsCart.findIndex(item => item.id === action.payload)
            console.log(index)
            state.productsCart.splice(index, 1)
            console.log(state.productsCart)
            return {
                ...state,
                productsCart: [...state.productsCart]
            }
        default:
            return state
    }
}

export default productReducer