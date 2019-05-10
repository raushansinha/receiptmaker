import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import uiReducer from './uiReducer';
import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
    isLoading: uiReducer,
    products: productsReducer,
    images: imagesReducer,
    error: errorReducer,
});

export default rootReducer;