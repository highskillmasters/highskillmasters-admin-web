import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import auth from './reducers/auth'

const rootReducer = combineReducers({ auth })

const store = createStore(rootReducer, composeWithDevTools())

export default store
