import { ACTION_TYPES } from '../constants';

const initialState = {
    error: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PRODUCT_FAIL:
        case ACTION_TYPES.GET_PRODUCT_FAIL:    
            return {
                ...state,
                error: action.error
            };
        case ACTION_TYPES.ADD_PRODUCT_SUCCESS:
        case ACTION_TYPES.GET_PRODUCT_SUCCESS:    
            return {
                ...state,
                error: null
            };
        default:
            return state
    }
}

export default errorReducer;