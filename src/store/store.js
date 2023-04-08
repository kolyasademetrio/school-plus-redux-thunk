import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './../reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, promise, logger)));

export default store;