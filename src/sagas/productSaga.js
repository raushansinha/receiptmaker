import { takeEvery, takeLatest, take, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../store/constants';

import { addProduct } from '../store/actions';

function* addProductToDB(product) {
    console.log('Add product to database: ' + JSON.stringify(product));
}

function* handleProductAdd(action) {
    yield call(addProductToDB, action.product);
    yield put(addProduct(action.product));
}

function* handleProductGet(action) {
    yield call(getProductFromServer);
    yield put(addProduct(action.product));
}

export const productSaga =  [
    takeEvery(ACTION_TYPES.ADD_PRODUCT_ASYNC, handleProductAdd),
    takeEvery(ACTION_TYPES.GET_PRODUCT_ASYNC, handleProductGet)
];




// function* watchProductGet(){
//     yield takeEvery(ACTION_TYPES.GET_PRODUCT_ASYNC, handleProductGet);
// }





//const getProducts = state => state.products;

// function* getProductsFromStore() {
//     const products = yield select(getProducts);
// }