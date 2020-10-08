import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../_reducers';

let middleware = [thunkMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
