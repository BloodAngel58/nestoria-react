import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../redux/reducers'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))