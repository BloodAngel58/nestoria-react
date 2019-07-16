import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../redux/reducers'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer, composeEnhancers(
        applyMiddleware(thunkMiddleware, logger),
    ));