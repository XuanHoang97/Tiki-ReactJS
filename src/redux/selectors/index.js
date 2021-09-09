// pages 

export const suggestState$ = (state) => state.suggest

export const newState$ = (state) => state.news.data

export const catagoryState$ = (state) => state.catagory.data

export const preferentState$ = (state) => state.preferent.data

export const slideState$ = (state) => state.slide.data

// search special 
export const searchSpecialState$ = (state) => state.searchSpecial.data

// laptop
export const laptopState$ = (state) => state.laptop.data
export const laptopDetailState$ = (state) => state.cart.laptopDetail

// cart mobile
export const mobilesState$ = (state) => state.mobiles.data

export const catagoryMenuState$ = (state) => state.catagoryMenu.data

export const cartProductMenuState$ = (state) => state.cart.productDetail

export const cartCountMenuState$ = (state) => state.cart.count

export const productsCartMenuState$ = (state) => state.cart.productsCart

// vote and comment 
export const voteState$ = (state) => state.logChat.listChat