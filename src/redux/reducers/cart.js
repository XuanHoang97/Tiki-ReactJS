import * as cart from "contants/cart";
let dataLocalStorage = JSON.parse(localStorage.getItem('dataCart')) || []
const initialstate = {
    productDetail: undefined,
    count: 1,
    productsCart: dataLocalStorage
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
            const { id, count } = action.payload
            let { productsCart } = state;
            const index1 = productsCart.findIndex(item => item.id === id);
            let newArr
            if (index1 !== -1) {

                productsCart.map(item => {
                    if (item.id === id) {
                        console.log({
                            ...item,
                            count: count + item.count
                        })
                        newArr = [...productsCart.slice(0, index1), {
                            ...item,
                            count: count + item.count
                        }, ...productsCart.slice(index1 + 1)]
                        return 0;
                    } else {
                        return 0;
                    }
                })
                productsCart = [...newArr]
            } else {
                productsCart.push(action.payload)
            }

            return {
                ...state,
                productsCart: [...productsCart]
            }
        case cart.DELETE_ITEM_CART:
            const index = state.productsCart.findIndex(item => item.id === action.payload)
            console.log(index)
            state.productsCart.splice(index, 1)
            localStorage.setItem('dataCart', JSON.stringify(state.productsCart))
            return {
                ...state,
                productsCart: [...state.productsCart]
            }
        default:
            return state
    }
}

export default productReducer