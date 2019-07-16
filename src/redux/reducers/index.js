import { combineReducers } from 'redux'
import { formReducer } from './itemList'

export const rootReducer = combineReducers({ data: formReducer, })