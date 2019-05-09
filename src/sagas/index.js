import { takeEvery, takeLatest, take, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../store/constants';

import { addProduct } from '../store/actions';

//worker saga
function* workerSaga() {
    console.log('hello from worker saga');
    yield put({type: ACTION_TYPES.ADD_PRODUCT_ASYNC})
}

// function* byebyeSaga() {
//     console.log("Bye Bye...");
// }

//watcher saga
// function* rootSaga(){
//     console.log('Hello from saga');
//     yield takeEvery('HELLO', workerSaga);
//     //yield takeLatest('LOGIN', workerSaga);
//     yield take('LOGIN');
//     yield call(workerSaga);
//     // yield take('ADD_TO_CART');
//     // yield take('BUY');
//     yield take('LOGOUT');
//     yield call(byebyeSaga);
// }

function* addProductToDB(product) {
    console.log('Add product to database: ' + JSON.stringify(product));
}

function* handleProductAdd(action) {
    yield call(addProductToDB, action.product);
    yield put(addProduct(action.product));
}

function* rootSaga(){
    const action = yield takeEvery(ACTION_TYPES.ADD_PRODUCT_ASYNC, handleProductAdd);
}

//watcher saga -> listens to actions -> calls worked saga

export default rootSaga;