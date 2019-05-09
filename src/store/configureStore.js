import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from '../sagas';

let composeEnhancers = compose;

//This code connects debugger to REDUX in DEV
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  
  //store.dispatch({type:'HELLO'});
  //store.dispatch({type:'LOGIN'});
  //store.dispatch({type:'LOGOUT'});

  return store;
  //  return {
  //       ...createStore(
  //         rootReducer,
  //         composeEnhancers(applyMiddleware(sagaMiddleware))
  //       ),
  //       runSaga: sagaMiddleware.run(rootSaga)
  //     };
}

export default configureStore;



