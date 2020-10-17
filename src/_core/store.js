import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../_reducers';
import logger from 'redux-logger';

let middleware = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware, logger),
);
