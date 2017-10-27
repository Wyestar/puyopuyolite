import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// all stores will be combined in reducers/index where rootReducer is exported
import rootReducer from './reducers';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
