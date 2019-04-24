// import { applyMiddleware, compose, createStore } from "redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
