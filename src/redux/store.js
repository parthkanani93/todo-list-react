import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootreducer from './root-reducer';

const middlewares = [logger];
export const store = createStore(rootreducer ,applyMiddleware(...middlewares));
// console.log(store.getState())
