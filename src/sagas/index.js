import { all } from 'redux-saga/effects';

import { productSaga } from './productSaga';
import { imageSaga } from './imagesSaga';

export default function* rootSaga(){
    yield all ([
        ...productSaga,
        ...imageSaga
    ]);
}

//worker saga
// function* workerSaga() {
//     console.log('hello from worker saga');
//     yield put({type: ACTION_TYPES.ADD_PRODUCT_ASYNC})
// }

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



//watcher saga -> listens to actions -> calls worked saga

//select to take a slice from store

// 