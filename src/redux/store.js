import {createStore , applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootreducer from './root-reducer';

const middlewares = [logger];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
        // other store enhancers if any
      )

export const store = createStore(rootreducer ,enhancer);
// console.log(store.getState())
