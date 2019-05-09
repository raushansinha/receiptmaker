import { ACTION_TYPES } from '../constants';

const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_PRODUCT_SUCCESS: 
            console.log("State: " + JSON.stringify(state));
            console.log("Action: "+ JSON.stringify(action));
            return {
                ...state,
                products:[...state.products, action.product] 
            }
        case ACTION_TYPES.GET_PRODUCT_SUCCESS :
        return [
            ...state,
            action.products
        ]
        default:
            return state;
    }
}

export default productsReducer;