import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import uiReducer from './uiReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: uiReducer,
    products: productsReducer,
    error: errorReducer
});

export default rootReducer;